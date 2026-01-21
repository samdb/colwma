import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getYearData, getAvailableYears } from '@/data/years';
import { getGalleryImages } from '@/lib/gallery';
import YearPageClient from './YearPageClient';

interface PageProps {
  params: Promise<{ year: string }>;
}

export async function generateStaticParams() {
  const years = getAvailableYears();
  return years.map((year) => ({
    year: year.toString(),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { year } = await params;
  const yearNum = parseInt(year, 10);
  const yearData = getYearData(yearNum);

  if (!yearData) {
    return {
      title: 'Year Not Found | COLWMA',
    };
  }

  return {
    title: `${yearData.year} Winners | COLWMA`,
    description: `City of London Wealth Management Awards ${yearData.year} winners. ${yearData.description}`,
  };
}

export default async function YearPage({ params }: PageProps) {
  const { year } = await params;
  const yearNum = parseInt(year, 10);
  const yearData = getYearData(yearNum);

  if (!yearData) {
    notFound();
  }

  const galleryImages = getGalleryImages(year);

  return <YearPageClient yearData={yearData} galleryImages={galleryImages} />;
}
