import { motion } from 'framer-motion';
import { CreditCard, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Solutions de paiement</span>
            <span className="block text-primary">simples et sécurisées</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Acceptez tous les moyens de paiement, gérez vos transactions et développez votre activité en toute sérénité.
          </p>

          <div className="mt-10 flex justify-center gap-8">
            <motion.div 
              className="flex items-center space-x-2 text-gray-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Shield className="h-6 w-6 text-primary" />
              <span>Paiements sécurisés</span>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-2 text-gray-600"
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <CreditCard className="h-6 w-6 text-primary" />
              <span>Multi-devises</span>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-2 text-gray-600"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Zap className="h-6 w-6 text-primary" />
              <span>Intégration rapide</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}