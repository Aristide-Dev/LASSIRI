import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { 
  Package, Clock, MapPin, Shield, 
  Truck, Bike, Box, ChevronRight, Phone 
} from 'lucide-react';
import AppLayout from '@/Layouts/AppLayout';

export default function CommandeLivraison() {
  const deliveryTypes = [
    { 
      icon: Truck,
      name: 'Livraison Standard',
      description: 'Livraison en 24-48h',
      features: ['Prix économique', 'Suivi en temps réel', 'Assurance incluse']
    },
    {
      icon: Bike,
      name: 'Livraison Express',
      description: 'Livraison en 2-4h',
      features: ['Rapidité garantie', 'Priorité maximale', 'Service premium']
    },
    {
      icon: Box,
      name: 'Points Relais',
      description: 'Retirez quand vous voulez',
      features: ['Flexibilité totale', 'Réseau étendu', 'Stockage sécurisé']
    }
  ];

  const features = [
    {
      icon: MapPin,
      title: 'Suivi en temps réel',
      description: 'Suivez vos livraisons en direct sur la carte'
    },
    {
      icon: Clock,
      title: 'Livraison programmée',
      description: 'Choisissez votre créneau de livraison'
    },
    {
      icon: Shield,
      title: 'Livraison sécurisée',
      description: 'Vos colis sont assurés et protégés'
    },
    {
      icon: Package,
      title: 'Multi-colis',
      description: 'Gérez plusieurs livraisons simultanément'
    }
  ];

  return (
    <AppLayout>
      <Head>
        <title>Commande et Livraison | Lassiri</title>
        <meta name="description" content="Solutions de livraison rapides et fiables pour tous vos besoins" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary to-gray-800 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                Livraison à la demande
                <span className="block text-primary-400">Simple et Rapide</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                Des solutions de livraison adaptées à vos besoins. Rapide, fiable et sécurisé.
              </p>
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <a
                  href="#commander"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-black bg-white hover:bg-gray-100 transition-colors duration-300"
                >
                  Commander maintenant
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Types de livraison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900">Nos Services de Livraison</h2>
              <p className="mt-4 text-xl text-gray-600">
                Choisissez le mode de livraison qui vous convient
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {deliveryTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <type.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {type.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature) => (
                      <li key={feature} className="text-gray-600 flex items-center justify-center">
                        <ChevronRight className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Fonctionnalités Avancées
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Des outils puissants pour une expérience optimale
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <feature.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Prêt à expédier vos colis ?
                </h2>
                <p className="mt-3 text-lg text-white/90">
                  Téléchargez notre application et commencez à livrer en toute simplicité.
                </p>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 gap-4">
                <motion.a
                  href="#telecharger"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-primary bg-white hover:bg-gray-50 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Télécharger l'application
                </motion.a>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Nous contacter
                </motion.a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
}
