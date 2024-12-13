import { Truck, CreditCard, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

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
