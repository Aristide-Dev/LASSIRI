import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import Hero from '@/Components/Solutions/Hero';
import Pricing from '@/Components/Solutions/Pricing';
import Testimonials from '@/Components/Solutions/Testimonials';
import Features from '@/Components/Solutions/Features';
import Solutions from '@/Components/Solutions/Solutions';
// import Pricing from '@/Components/Solutions/Pricing';
// import Testimonials from '@/Components/Solutions/Testimonials';
import FAQ from '@/Components/Solutions/FAQ';
import CallToAction from '@/Components/Solutions/CallToAction';
import { motion } from 'framer-motion';

// Variantes Framer Motion réutilisables pour les sections
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8 }
  },
};

export default function SolutionsPage() {
  return (
    <AppLayout>
      {/* SEO Optimisation */}
      <Head>
        <title>Nos Solutions</title>
        <meta
          name="description"
          content="Découvrez nos solutions innovantes en matière de transport, de livraison et de paiement, conçues pour optimiser et développer votre entreprise."
        />
        <meta
          name="keywords"
          content="transport, livraison, paiement, business, solutions, lassiri, Guinée, Conakry"
        />
        <meta property="og:title" content="Nos Solutions | Lassiri" />
        <meta
          property="og:description"
          content="Explorez des solutions innovantes qui simplifient vos opérations et améliorent vos services en Guinée."
        />
        <meta
          property="og:image"
          content="/images/solutions/og-image.png"
        />
        <meta property="og:url" content={route('solutions.index')} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="overflow-hidden">
        {/* Hero Section */}
        <motion.section
          as="header"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          // Aucun délai ici pour que le Hero apparaisse rapidement
        >
          <Hero />
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          transition={{ delay: 0.2 }}
          aria-labelledby="features-title"
        >
          <div className="mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 id="features-title" className="sr-only">
              Fonctionnalités principales
            </h2>
            <Features />
          </div>
        </motion.section>

        {/* Solutions Section */}
        {/* {false && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          transition={{ delay: 0.4 }}
          aria-labelledby="solutions-title"
        >
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 id="solutions-title" className="sr-only">
              Nos Solutions Détaillées
            </h2>
            <Solutions />
          </div>
        </motion.section>
        )} */}

        {/* Pricing Section (optionnel) */}
        {/* {false && (
          <motion.section
            className="bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            transition={{ delay: 0.6 }}
            aria-labelledby="pricing-title"
          >
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <h2 id="pricing-title" className="text-3xl font-extrabold text-gray-900">
                Nos Tarifs
              </h2>
              <Pricing />
            </div>
          </motion.section>
        )} */}

        {/* Testimonials Section (optionnel) */}
        {true && (
          <motion.section
            className="bg-gray-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            transition={{ delay: 0.8 }}
            aria-labelledby="testimonials-title"
          >
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <h2 id="testimonials-title" className="text-3xl font-extrabold text-gray-900">
                Témoignages de nos Clients
              </h2>
              <Testimonials />
            </div>
          </motion.section>
        )}

        {/* FAQ Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          transition={{ delay: 1 }}
          aria-labelledby="faq-title"
        >
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 id="faq-title" className="text-3xl font-extrabold text-gray-900">
              Foire aux questions
            </h2>
            <FAQ />
          </div>
        </motion.section>

        {/* Call To Action */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          transition={{ delay: 1.2 }}
          aria-labelledby="cta-title"
        >
          <div className="mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 id="cta-title" className="sr-only">Appel à l’action</h2>
            <CallToAction />
          </div>
        </motion.section>
      </main>
    </AppLayout>
  );
}
