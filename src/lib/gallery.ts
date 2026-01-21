import fs from 'fs';
import path from 'path';

const GALLERY_BASE_PATH = path.join(process.cwd(), 'public', 'images', 'gallery');

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

function isImageFile(filename: string): boolean {
  const ext = path.extname(filename).toLowerCase();
  return IMAGE_EXTENSIONS.includes(ext);
}

function getImagesFromDirectory(dirPath: string, baseUrl: string): string[] {
  const images: string[] = [];

  if (!fs.existsSync(dirPath)) {
    return images;
  }

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      // Recursively get images from subdirectories
      const subImages = getImagesFromDirectory(
        fullPath,
        `${baseUrl}/${entry.name}`
      );
      images.push(...subImages);
    } else if (entry.isFile() && isImageFile(entry.name)) {
      // Skip files that start with a dot or are very small (likely thumbnails)
      if (!entry.name.startsWith('.')) {
        images.push(`${baseUrl}/${encodeURIComponent(entry.name)}`);
      }
    }
  }

  return images;
}

export function getGalleryImages(year: string): string[] {
  // Map year to folder name (handle special cases like 2023-img)
  let folderName = year;

  // Check if the year folder exists, otherwise try alternatives
  const yearPath = path.join(GALLERY_BASE_PATH, year);
  const altPath = path.join(GALLERY_BASE_PATH, `${year}-img`);

  let targetPath = yearPath;
  let targetUrl = `/colwma/images/gallery/${year}`;

  if (!fs.existsSync(yearPath) && fs.existsSync(altPath)) {
    targetPath = altPath;
    targetUrl = `/colwma/images/gallery/${year}-img`;
  }

  // Special handling for 2023 which uses 2023-img folder
  if (year === '2023') {
    const img2023Path = path.join(GALLERY_BASE_PATH, '2023-img');
    if (fs.existsSync(img2023Path)) {
      targetPath = img2023Path;
      targetUrl = '/colwma/images/gallery/2023-img';
    }
  }

  const images = getImagesFromDirectory(targetPath, targetUrl);

  // Sort images by filename for consistent ordering
  return images.sort((a, b) => a.localeCompare(b));
}

export function getYearsWithGalleries(): string[] {
  if (!fs.existsSync(GALLERY_BASE_PATH)) {
    return [];
  }

  const entries = fs.readdirSync(GALLERY_BASE_PATH, { withFileTypes: true });
  const years: string[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      // Extract year from folder name (e.g., "2023-img" -> "2023")
      const yearMatch = entry.name.match(/^(\d{4})/);
      if (yearMatch) {
        const year = yearMatch[1];
        if (!years.includes(year)) {
          years.push(year);
        }
      }
    }
  }

  return years.sort((a, b) => parseInt(b) - parseInt(a)); // Sort descending
}
