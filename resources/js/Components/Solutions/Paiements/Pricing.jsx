import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '29',
    description: 'Pour les petites entreprises',
    features: [
      'Jusqu\'à 1000 transactions/mois',
      'Paiements par carte bancaire',
      'Support par email',
      'Tableau de bord basique',
      'API limitée',
      '2 comptes utilisateurs',
    ],
    cta: 'Commencer gratuitement',
    featured: false,
  },
  {
    name: 'Business',
    price: '99',
    description: 'Pour les entreprises en croissance',
    features: [
      'Transactions illimitées',
      'Tous types de paiements',
      'Support prioritaire 24/7',
      'Tableau de bord avancé',
      'API complète',
      'Utilisateurs illimités',
      'Détection des fraudes',
    ],
    cta: 'Essai gratuit de 14 jours',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Sur mesure',
    description: 'Pour les grandes entreprises',
    features: [
      'Volume personnalisé',
      'Solutions sur mesure',
      'Account manager dédié',
      'SLA garantis',
      'API personnalisée',
      'Infrastructure dédiée',
      'Formation sur site',
    ],
    cta: 'Contacter l\'équipe commerciale',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Tarification
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Des tarifs adaptés à vos besoins
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Choisissez le plan qui correspond le mieux à votre activité
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl ${
                plan.featured
                  ? 'bg-primary text-white scale-105 shadow-xl'
                  : 'bg-white text-gray-900 border border-gray-200'
              } p-8`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className={`mt-4 text-sm ${plan.featured ? 'text-white/90' : 'text-gray-500'}`}>
                {plan.description}
              </p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                {plan.price !== 'Sur mesure' && (
                  <span className={`text-base font-medium ${plan.featured ? 'text-white/90' : 'text-gray-500'}`}>
                    {' '}
                    €/mois
                  </span>
                )}
              </p>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className={`h-5 w-5 ${plan.featured ? 'text-white' : 'text-primary'}`} />
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                className={`mt-8 w-full py-3 px-6 rounded-lg font-medium ${
                  plan.featured
                    ? 'bg-white text-primary hover:bg-gray-50'
                    : 'bg-primary text-white hover:bg-primary-600'
                } transition-colors duration-200`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}