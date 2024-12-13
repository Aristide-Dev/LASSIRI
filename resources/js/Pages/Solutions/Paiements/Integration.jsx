import { motion } from 'framer-motion';
import { Code, Terminal, Smartphone } from 'lucide-react';

const integrationMethods = [
  {
    title: 'API REST',
    description: 'Intégrez nos solutions de paiement via notre API REST complète et documentée.',
    icon: Code,
    features: [
      'Documentation détaillée',
      'Environnement de test',
      'Support technique dédié',
      'Exemples de code',
    ],
  },
  {
    title: 'SDK Mobile',
    description: 'Intégrez facilement les paiements dans vos applications mobiles.',
    icon: Smartphone,
    features: [
      'iOS et Android',
      'Interface personnalisable',
      'Paiements sécurisés',
      'Mise à jour automatique',
    ],
  },
  {
    title: 'Plugins E-commerce',
    description: 'Solutions prêtes à l\'emploi pour les principales plateformes e-commerce.',
    icon: Terminal,
    features: [
      'WooCommerce',
      'Magento',
      'PrestaShop',
      'Shopify',
    ],
  },
];

export default function Integration() {
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
            Intégration
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Intégration simple et rapide
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Plusieurs options d'intégration adaptées à vos besoins
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {integrationMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="p-6">
                <div className="flex items-center">
                  <method.icon className="h-8 w-8 text-primary" />
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">
                    {method.title}
                  </h3>
                </div>
                <p className="mt-4 text-gray-500">
                  {method.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {method.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}