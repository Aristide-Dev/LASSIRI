import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section 
      className="bg-primary" 
      aria-label="Section incitant à l'action : créer un compte ou en savoir plus"
    >
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="lg:flex lg:items-center lg:justify-between"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.h2
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8 }}
          >
            <span className="block">Prêt à commencer ?</span>
            <span className="block text-white/90">Rejoignez-nous dès aujourd&apos;hui.</span>
          </motion.h2>
          
          <motion.div
            className="mt-8 flex lg:mt-0 lg:flex-shrink-0"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex rounded-md shadow">
              <Link
                href={route('register')}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 transition-colors duration-200"
              >
                Créer un compte
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href={route('solutions.index')}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-800 hover:bg-primary-900 transition-colors duration-200"
              >
                En savoir plus
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
