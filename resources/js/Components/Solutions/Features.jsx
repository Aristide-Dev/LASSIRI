import { motion } from 'framer-motion';
import { Truck, CreditCard, Clock, Shield, Globe, ChartBar, Wallet } from 'lucide-react';

const features = [
  {
    name: 'Transactions Financières',
    description: 'Transférez et recevez de l\'argent en toute sécurité.',
    icon: Wallet,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    link: route('solutions.transactions.finances'),
  },
  {
    name: 'Transport & Réservation',
    description: 'Réservez un taxi, moto-taxi, tricycle en quelques clics.',
    icon: Truck,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    link: route('solutions.transport.reservation'),
  },
  {
    name: 'Solutions de Paiements',
    description: 'Payez vos factures et faites vos achats facilement.',
    icon: CreditCard,
    color: 'text-violet-500',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
    link: route('solutions.paiements'),
  },
  {
    name: 'Commandes & Livraison',
    description: 'Commandez vos repas et produits préférés et recevez-les à domicile.',
    icon: Clock,
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    link: route('solutions.commande.livraison'),
  },
  {
    name: 'Colis & Courriers',
    description: 'Envoyez et recevez des colis en toute confiance.',
    icon: Shield,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    link: route('solutions.colis.courriers'),
  },
  {
    name: 'Autres Services Premium',
    description: 'Accédez à des services exclusifs adaptés à vos besoins.',
    icon: Globe,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    link: '#',
  },
  // {
  //   name: 'Analyses détaillées',
  //   description: 'Suivez vos performances avec des tableaux de bord intuitifs.',
  //   icon: ChartBar,
  //   color: 'text-cyan-500',
  //   bgColor: 'bg-cyan-50',
  //   borderColor: 'border-cyan-200',
  //   link: '#',
  // },
];

export default function Features() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-medium mb-8"
          >
            Fonctionnalités
          </motion.div>
          
          <motion.h2
            className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Des outils puissants pour votre{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              réussite
            </span>
          </motion.h2>
          
          <motion.p
            className="mt-4 text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Des solutions innovantes pour chaque aspect de votre activité.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)"
                }}
                className={`h-full relative group rounded-2xl border ${feature.borderColor} bg-white p-8 transition-all duration-300 hover:border-transparent`}
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl ${feature.bgColor} ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.name}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {feature.description}
                  </p>
                  {feature.link && feature.link !== '#' && (
                    <a
                      href={feature.link}
                      className={`inline-flex items-center text-sm font-medium ${feature.color} hover:opacity-80 transition-opacity`}
                     >
                      En savoir plus
                      <svg
                        className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  )}
                </div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}