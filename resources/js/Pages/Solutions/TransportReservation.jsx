import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { 
  MapPin, Clock, Shield, CreditCard, Star, 
  Car, Truck, Bus, Users, ChevronRight, Phone
} from 'lucide-react';
import AppLayout from '@/Layouts/AppLayout';

export default function TransportReservation() {
  const vehicleTypes = [
    { icon: Car, name: 'Voiture', description: 'Idéal pour 1-4 personnes' },
    { icon: Truck, name: 'Utilitaire', description: 'Pour vos déménagements' },
    { icon: Bus, name: 'Minibus', description: 'Parfait pour les groupes' }
  ];

  const features = [
    { icon: MapPin, title: 'Suivi en temps réel', description: 'Suivez votre chauffeur en direct' },
    { icon: Clock, title: 'Disponible 24/7', description: 'Service continu jour et nuit' },
    { icon: Shield, title: 'Sécurité maximale', description: 'Chauffeurs vérifiés et assurés' },
    { icon: CreditCard, title: 'Paiement flexible', description: 'Plusieurs modes de paiement' }
  ];

  const testimonials = [
    {
      content: "Service exceptionnel ! Mon chauffeur était ponctuel et professionnel.",
      author: "Marie D.",
      role: "Cliente régulière"
    },
    {
      content: "L'application est très intuitive et le service client réactif.",
      author: "Thomas M.",
      role: "Utilisateur satisfait"
    }
  ];

  return (
    <AppLayout>
      <Head>
        <title>Transport et Réservation | Lassiri</title>
        <meta name="description" content="Réservez votre transport en quelques clics avec Lassiri" />
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
                Transport et Réservation
                <span className="block text-primary-400">Simple et Rapide</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                Réservez votre transport en quelques clics. Des chauffeurs professionnels
                à votre service pour tous vos déplacements.
              </p>
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <a
                  href="#reserver"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-black bg-white hover:bg-gray-100 transition-colors duration-300"
                >
                  Réserver maintenant
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Types de véhicules */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900">Nos Véhicules</h2>
              <p className="mt-4 text-xl text-gray-600">
                Une flotte adaptée à tous vos besoins
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {vehicleTypes.map((vehicle, index) => (
                <motion.div
                  key={vehicle.name}
                  className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <vehicle.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {vehicle.name}
                  </h3>
                  <p className="text-gray-600">{vehicle.description}</p>
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
                Pourquoi nous choisir ?
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Des services pensés pour votre confort et votre sécurité
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

        {/* Témoignages */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Ce que disent nos clients
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.content}</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
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
                  Prêt à réserver votre trajet ?
                </h2>
                <p className="mt-3 text-lg text-white/90">
                  Téléchargez notre application et commencez à voyager en toute sérénité.
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
