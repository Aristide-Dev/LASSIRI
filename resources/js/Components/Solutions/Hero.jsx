import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <header
      className="relative bg-primary-50 overflow-hidden py-20 sm:py-32"
      aria-labelledby="hero-heading"
      style={{
        backgroundImage: 'url(/images/backgrounds/hero-bg.jpg)', // Chemin de l'image d'arrière-plan
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay pour améliorer la lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-700/50 via-primary-500/30 to-primary-500/10" />

      {/* Contenu principal */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        {/* Texte à gauche */}
        <motion.div
          className="text-center lg:text-left lg:w-1/2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {/* Titre principal */}
          <motion.h1
            id="hero-heading"
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Des solutions innovantes pour
            <span className="block text-secondary">votre croissance</span>
          </motion.h1>

          {/* Texte descriptif */}
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-xl text-white/90 lg:mx-0"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Optimisez vos opérations avec notre suite complète d'outils dédiés au transport,
            à la livraison et aux paiements. Une solution tout-en-un pour votre business.
          </motion.p>

          {/* Boutons d'action */}
          <motion.div
            className="mt-10 flex justify-center lg:justify-start gap-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
              aria-label="Commencer maintenant"
            >
              Commencer maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-lg text-white bg-transparent hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200"
              aria-label="Voir la démo"
            >
              Voir la démo
            </a>
          </motion.div>
        </motion.div>

        {/* Illustration à droite */}
        <motion.div
          className="relative mt-10 lg:mt-0 lg:w-1/2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://img.freepik.com/free-photo/close-up-portrait-attractive-young-woman-isolated_273609-35660.jpg?t=st=1734094478~exp=1734098078~hmac=a58b4fc29074ea3b52f6cbc1592e0a7599f84a0274b098badfed62323d06bb4c&w=1380" 
            alt="Illustration de solutions Lassiri"
            className="w-full max-w-lg mx-auto lg:mx-0"
            loading="lazy"
          />
        </motion.div>
      </div>
    </header>
  );
}
