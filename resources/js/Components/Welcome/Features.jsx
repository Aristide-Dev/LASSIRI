import { motion } from 'framer-motion';
import { Truck, CreditCard, Clock, Shield, Globe, ChartBar } from 'lucide-react';

const _features = [
  {
    name: 'Transport optimisé',
    description: 'Gérez efficacement vos flottes et optimisez vos itinéraires en temps réel.',
    icon: Truck,
    color: 'text-blue-500',
    link: '#transport',
  },
  {
    name: 'Paiements sécurisés',
    description: 'Transactions sécurisées et multiples options de paiement pour vos clients.',
    icon: CreditCard,
    color: 'text-green-500',
    link: '#paiements',
  },
  {
    name: 'Service 24/7',
    description: 'Support client disponible en continu pour répondre à vos besoins.',
    icon: Clock,
    color: 'text-purple-500',
    link: '#support',
  },
  {
    name: 'Protection garantie',
    description: 'Sécurité maximale pour vos données et transactions.',
    icon: Shield,
    color: 'text-red-500',
    link: '#securite',
  },
  {
    name: 'Couverture globale',
    description: 'Service disponible dans toutes les grandes villes.',
    icon: Globe,
    color: 'text-indigo-500',
    link: '#global',
  },
  {
    name: 'Analyses détaillées',
    description: 'Suivez vos performances avec des tableaux de bord intuitifs.',
    icon: ChartBar,
    color: 'text-yellow-500',
    link: '#analytics',
  },
];

const features = [
  {
    name: 'Transport sécurisé',
    description: 'Des chauffeurs professionnels et des véhicules adaptés à vos besoins.',
    icon: Truck,
  },
  {
    name: 'Paiement sécurisé',
    description: 'Transactions sécurisées et multiples options de paiement.',
    icon: CreditCard,
  },
  {
    name: 'Service 24/7',
    description: 'Support client disponible à tout moment pour vous assister.',
    icon: Clock,
  },
  {
    name: 'Protection garantie',
    description: 'Vos biens et transactions sont protégés et assurés.',
    icon: Shield,
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de la section */}
        <div className="text-center">
          <motion.h2
            className="text-base text-primary font-semibold tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Fonctionnalités
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Découvrez nos outils puissants
          </motion.p>
          <motion.p
            className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Des solutions innovantes pour chaque aspect de votre activité.
          </motion.p>
        </div>

        {/* Grille des fonctionnalités */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, x: 10 }}
            >
              {/* Icône */}
              <div
                className={`inline-flex items-center p-3 rounded-lg ${feature.color} bg-opacity-10 transition-colors duration-200`}
              >
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              <a
                href={feature.link}
                className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary-600 transition-all"
                aria-label={`En savoir plus sur ${feature.name}`}
              >
                En savoir plus →
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Avantages
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Une meilleure façon de gérer vos services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Découvrez pourquoi des milliers d'entreprises nous font confiance pour leurs besoins quotidiens.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <motion.dl
            className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="relative p-6 border border-gray-200 rounded-lg shadow-sm transition-transform duration-300 hover:shadow-lg hover:scale-105"
                aria-labelledby={feature.name.replace(/\s+/g, '-').toLowerCase()}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p
                    id={feature.name.replace(/\s+/g, '-').toLowerCase()}
                    className="mt-4 text-lg font-medium text-gray-900"
                  >
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </div>
  );
}
