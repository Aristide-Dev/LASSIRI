import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { Truck, Package, CreditCard } from 'lucide-react';

const solutions = [
  {
    title: 'Transport et Réservation',
    description: 'Gérez vos transports et réservations en temps réel avec notre système intelligent.',
    icon: Truck,
    features: [
      'Réservation en temps réel',
      'Suivi GPS des véhicules',
      'Optimisation des itinéraires',
      'Gestion de flotte intelligente',
    ],
    href: route('solutions.transport.reservation'),
    color: 'blue',
  },
  {
    title: 'Livraison et Logistique',
    description: 'Optimisez votre chaîne logistique et vos livraisons du premier au dernier kilomètre.',
    icon: Package,
    features: [
      'Livraison express',
      'Suivi en temps réel',
      'Gestion des retours',
      'Optimisation des tournées',
    ],
    href: route('solutions.commande.livraison'),
    color: 'green',
  },
  {
    title: 'Solutions de Paiement',
    description: 'Des solutions de paiement sécurisées et adaptées à tous vos besoins.',
    icon: CreditCard,
    features: [
      'Paiements sécurisés',
      'Multiples méthodes',
      'Transactions instantanées',
      'Tableau de bord détaillé',
    ],
    href: route('solutions.paiements'),
    color: 'purple',
  },
];

export default function Solutions() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Nos Solutions
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choisissez la solution adaptée à vos besoins
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Des solutions sur mesure pour chaque aspect de votre activité
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`p-8 bg-${solution.color}-50`}>
                <solution.icon className={`h-12 w-12 text-${solution.color}-500`} />
                <h3 className="mt-4 text-2xl font-bold text-gray-900">
                  {solution.title}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {solution.description}
                </p>
              </div>
              <div className="px-8 py-6">
                <ul className="space-y-4">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className={`h-5 w-5 text-${solution.color}-500`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={solution.href}
                  className={`mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-${solution.color}-500 hover:bg-${solution.color}-600 transition-colors duration-200`}
                >
                  En savoir plus
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}