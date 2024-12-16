
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero({ title, subtitle, image, cta }) {
  return (
    <section className="relative bg-gradient-to-b from-primary to-gray-800 text-white py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
          {cta && (
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="#inscription"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-black bg-white hover:bg-gray-100 transition-colors duration-300"
              >
                {cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}