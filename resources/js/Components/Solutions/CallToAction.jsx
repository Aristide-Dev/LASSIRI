import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
      </div>

      <div className="relative w-full mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="lg:flex lg:items-center lg:justify-between"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <div className="max-w-xl">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 mb-4"
            >
              <Sparkles className="h-6 w-6 text-yellow-300" />
              {/* <span className="text-yellow-300 font-semibold">Offre Limitée</span> */}
            </motion.div>

            <motion.h2
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-8"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8 }}
            >
              <span className="block">Prêt à optimiser</span>
              <span className="block bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                votre business ?
              </span>
            </motion.h2>
            
            <motion.p
              className="mt-3 text-lg text-primary-100 sm:text-xl"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Rejoignez des milliers d'entreprises qui font confiance à Lassiri pour leur transformation digitale.
            </motion.p>
          </div>
          
          <motion.div
            className="mt-10 lg:mt-0 lg:ml-8 flex flex-col sm:flex-row gap-4"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              Démarrer maintenant
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors duration-200"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Nous contacter
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}