import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import NominationForm from '@/components/NominationForm';
import PastWinners from '@/components/PastWinners';

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <NominationForm />
      <PastWinners />
    </>
  );
}
