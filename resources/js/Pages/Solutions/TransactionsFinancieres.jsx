// resources/js/Pages/Solutions/TransactionsFinancieres.jsx
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { CreditCard, Shield, TrendingUp, ChartBar, Clock, Smartphone, Wallet, DollarSign } from 'lucide-react';
import AppLayout from '@/Layouts/AppLayout';

export default function TransactionsFinancieres() {
  const features = [
    {
      icon: CreditCard,
      title: "Paiements instantanés",
      description: "Effectuez vos transactions en temps réel, 24h/24 et 7j/7"
    },
    {
      icon: Shield,
      title: "Sécurité renforcée",
      description: "Protection maximale de vos transactions avec cryptage de bout en bout"
    },
    {
      icon: TrendingUp,
      title: "Suivi en temps réel",
      description: "Visualisez vos transactions et leur statut en direct"
    },
    {
      icon: Wallet,
      title: "Gestion multi-comptes",
      description: "Gérez plusieurs comptes depuis une seule interface"
    }
  ];

  const stats = [
    { value: "2M+", label: "Transactions", description: "traitées par mois" },
    { value: "99.9%", label: "Disponibilité", description: "de notre plateforme" },
    { value: "<1s", label: "Temps de réponse", description: "pour chaque transaction" }
  ];

  return (
    <AppLayout>
      <Head>
        <title>Transactions Financières | Lassiri</title>
        <meta name="description" content="Gérez vos transactions financières en toute sécurité avec Lassiri" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-gray-800 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                Transactions Financières
                <span className="block text-primary-100">simples et sécurisées</span>
              </h1>
              <p className="mt-6 text-xl text-primary-100 max-w-3xl mx-auto">
                Une solution complète pour gérer vos transactions financières en toute sécurité,
                avec des outils puissants de suivi et d'analyse.
              </p>
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <a
                  href="#demo"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-primary bg-white hover:bg-gray-100 transition-colors duration-200"
                >
                  Demander une démo
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Fonctionnalités principales
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Des outils puissants pour gérer vos transactions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xl font-semibold text-gray-900 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-gray-600">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Tableau de bord intuitif
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Visualisez et analysez vos transactions en temps réel grâce à notre
                  tableau de bord intuitif et personnalisable.
                </p>
                <ul className="space-y-4">
                  {[
                    "Suivi en temps réel des transactions",
                    "Rapports détaillés et exportables",
                    "Graphiques interactifs",
                    "Alertes personnalisables"
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      className="flex items-center text-gray-600"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <DollarSign className="h-5 w-5 text-primary mr-2" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="relative rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Dashboard Preview"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Prêt à commencer ?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Rejoignez les milliers d'entreprises qui font confiance à Lassiri
                pour leurs transactions financières.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-primary transition-all duration-300"
              >
                Contactez-nous
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
}
