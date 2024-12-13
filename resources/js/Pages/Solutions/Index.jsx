import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import Hero from '@/Components/Solutions/Hero';
import Features from '@/Components/Solutions/Features';
import Solutions from '@/Components/Solutions/Solutions';
import Pricing from '@/Components/Solutions/Pricing';
import Testimonials from '@/Components/Solutions/Testimonials';
import FAQ from '@/Components/Solutions/FAQ';
import CallToAction from '@/Components/Solutions/CallToAction';
import { motion } from 'framer-motion';

export default function SolutionsPage() {
  return (
    <AppLayout>
      {/* SEO Optimisation */}
      <Head>
        <title>Nos Solutions | Lassiri</title>
        <meta
          name="description"
          content="Découvrez nos solutions innovantes de transport, livraison et paiement pour optimiser votre business."
        />
        <meta
          name="keywords"
          content="transport, livraison, paiement, business, solutions, lassiri"
        />
        <meta property="og:title" content="Nos Solutions | Lassiri" />
        <meta
          property="og:description"
          content="Explorez des solutions innovantes pour simplifier vos opérations et améliorer vos services."
        />
        <meta
          property="og:image"
          content="/images/solutions/og-image.png"
        />
        <meta property="og:url" content={route('solutions.index')} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="bg-gray-50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Features />
        </motion.section>

        {/* Solutions Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Solutions />
        </motion.section>

        {/* Pricing Section */}
        {/* <motion.section
          className="bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Pricing />
        </motion.section> */}

        {/* Testimonials Section */}
        {/* <motion.section
          className="bg-gray-50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Testimonials />
        </motion.section> */}

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <FAQ />
        </motion.section>

        {/* Call To Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <CallToAction />
        </motion.section>
      </main>
    </AppLayout>
  );
}
