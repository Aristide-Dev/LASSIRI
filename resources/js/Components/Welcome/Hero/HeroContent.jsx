import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
      {/* Disposition en colonne sur mobile, en ligne sur grand écran */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between">
        
        {/* Texte et CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl tracking-tight font-extrabold text-foreground sm:text-5xl md:text-6xl lg:max-w-3xl">
            <span className="block">Solutions innovantes pour</span>
            <span className="block text-primary mt-2">votre business</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto lg:mx-0"
          >
            Simplifiez vos opérations avec notre plateforme tout-en-un de transport, livraison et paiement. 
            Une solution complète pour optimiser votre activité.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link
              href={route('solutions.index')}
              className="group inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
            >
              Découvrir nos solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href={route('partenariat.index')}
              className="group inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-base font-medium rounded-lg text-primary bg-transparent hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
            >
              Devenir partenaire
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex justify-center lg:justify-start space-x-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center">
              <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Solution sécurisée
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Support 24/7
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Déploiement rapide
            </div>
          </motion.div>
        </motion.div>

        {/* Image illustrative (adaptation en fonction de vos besoins) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 lg:mt-0 lg:ml-10 flex-shrink-0"
        >
          <img
            src="https://img.freepik.com/free-photo/close-up-portrait-attractive-young-woman-isolated_273609-35660.jpg?t=st=1734094478~exp=1734098078~hmac=a58b4fc29074ea3b52f6cbc1592e0a7599f84a0274b098badfed62323d06bb4c&w=1380" 
            alt="Illustration de l'application sur un smartphone" 
            className="w-full max-w-md rounded-lg shadow-lg h-full"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
}
