import { Metadata } from 'next';
import MudlarkersPageClient from './MudlarkersPageClient';

export const metadata: Metadata = {
  title: 'Mudlarkers Club | COLWMA',
  description:
    'The Mudlark Award for Exceptional Performance in the Back Office recognises the unsung heroes of wealth management.',
};

export default function MudlarkersClubPage() {
  return <MudlarkersPageClient />;
}
