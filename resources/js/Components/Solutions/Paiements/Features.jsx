import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Globe, Clock, Shield, ChartBar } from 'lucide-react';

const features = [
  {
    name: 'Tous types de paiements',
    description: 'Acceptez cartes bancaires, virements, paiements mobiles et plus encore.',
    icon: CreditCard,
  },
  {
    name: 'Paiement mobile',
    description: 'Solutions optimisées pour les paiements via smartphone.',
    icon: Smartphone,
  },
  {
    name: 'Multi-devises',
    description: 'Acceptez des paiements dans plus de 130 devises.',
    icon: Globe,
  },
  {
    name: 'Paiement instantané',
    description: 'Transactions traitées en temps réel 24h/24 et 7j/7.',
    icon: Clock,
  },
  {
    name: 'Sécurité renforcée',
    description: 'Protection contre la fraude et conformité aux normes PCI DSS.',
    icon: Shield,
  },
  {
    name: 'Tableau de bord',
    description: 'Suivez et analysez vos transactions en temps réel.',
    icon: ChartBar,
  },
];

export default function Features() {
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
            Fonctionnalités
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Une solution de paiement complète
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Tout ce dont vous avez besoin pour gérer vos paiements efficacement
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">
                  {feature.name}
                </h3>
              </div>
              <p className="mt-4 text-base text-gray-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}