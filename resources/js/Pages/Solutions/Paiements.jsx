import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import Hero from '@/Components/Solutions/Paiements/Hero';
import Features from '@/Components/Solutions/Paiements/Features';
import SecuritySection from './Paiements/SecuritySection';
import Integration from './Paiements/Integration';
import Pricing from '@/Components/Solutions/Paiements/Pricing';
import FAQ from '@/Components/Solutions/Paiements/FAQ';
import CallToAction from '@/Components/Solutions/CallToAction';

export default function SolutionsPaiements() {
  return (
    <AppLayout>
      <Head>
        <title>Solutions de Paiement | Lassiri</title>
        <meta 
          name="description" 
          content="Solutions de paiement sécurisées et flexibles pour votre entreprise. Acceptez tous types de paiements en toute simplicité." 
        />
      </Head>

      <main>
        <Hero />
        <Features />
        <SecuritySection />
        <Integration />
        <Pricing />
        <FAQ />
        <CallToAction />
      </main>
    </AppLayout>
  );
}