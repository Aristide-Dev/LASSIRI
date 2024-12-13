import { motion } from 'framer-motion';
import { Shield, Lock, AlertCircle } from 'lucide-react';

const securityFeatures = [
  {
    name: 'Conformité PCI DSS',
    description: 'Notre plateforme est certifiée PCI DSS niveau 1, garantissant les plus hauts standards de sécurité pour le traitement des paiements par carte.',
    icon: Shield,
  },
  {
    name: 'Authentification 3D Secure',
    description: 'Protection renforcée contre la fraude grâce à l\'authentification forte des porteurs de carte.',
    icon: Lock,
  },
  {
    name: 'Détection des fraudes',
    description: 'Système intelligent de détection des transactions suspectes en temps réel.',
    icon: AlertCircle,
  },
];

export default function SecuritySection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="lg:text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Sécurité
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            La sécurité au cœur de nos priorités
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Protection maximale pour vos transactions et vos données
          </p>
        </motion.div>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {securityFeatures.map((feature, index) => (
              <motion.div 
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}