import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CallToAction({ title, description, buttonText }) {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <motion.h2
              className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>
            <motion.p
              className="mt-3 text-lg text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {description}
            </motion.p>
          </div>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="#inscription"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-primary bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}