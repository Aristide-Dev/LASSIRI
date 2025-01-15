import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import Hero, {HeroVideo} from '@/Components/Welcome/Hero';
import Features from '@/Components/Welcome/Features';
import Services from '@/Components/Welcome/Services';
import Stats from '@/Components/Welcome/Stats';
import Testimonials from '@/Components/Welcome/Testimonials';
import News from '@/Components/Welcome/News';
import Partners from '@/Components/Welcome/Partners';
import CallToAction from '@/Components/Welcome/CallToAction';
import HowItWorks from '@/Components/Welcome/HowItWorks';

export default function Welcome() {
  return (
    <AppLayout>
      <Head>
        <title>Bienvenue</title>
        <meta name="description" content="Plateforme de services de transport, livraison et paiement" />
      </Head>

      <main>
        {/* <HeroVideo /> */}
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CallToAction />
        {/* <Services /> */}
        {/* <Stats /> */}
        {/* <News /> */}
        {/* <Partners /> */}
      </main>
    </AppLayout>
  );
}