import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
  <>
    {/* Hero Section Améliorée */}
    <div className="relative bg-gradient-to-r from-primary-500 to-primary-800 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/man-wearing-smart-glasses-touching-virtual-screen-futuristic-technology-digital-remix_53876-124731.jpg?t=st=1736523324~exp=1736526924~hmac=1d17b5236296c27bd5fe90b21d3c5e8a89c7ae9deef8b4b6692a3052d25d6afa&w=740')] bg-cover bg-center opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="relative container mx-auto px-4">
            <div className="w-full mx-auto text-center">
            <motion.div
              className="text-center"
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
              <span className="block text-primary-200">votre croissance</span>
            </motion.h1>

            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                {/* Texte descriptif */}
                <motion.p
                  className="mt-6 mx-20 text-xl text-white/90 lg:mx-0 text-justify"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  Optimisez vos opérations avec notre suite complète d'outils dédiés au transport,
                  à la livraison et aux paiements. Une solution tout-en-un pour votre business.
                </motion.p>
              </p>
            </div>

            

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
                aria-label="S'inscrire maintenant"
              >
                S'inscrire maintenant
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
            </div>
        </div>
    </div>
    </>
  );
}
