// resources/js/Pages/Partenariat/MarchandPaiement.jsx
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { CreditCard, Shield, TrendingUp, Clock, ChartBar, Smartphone } from 'lucide-react';
import AppLayout from '@/Layouts/AppLayout';

export default function MarchandPaiement() {
  const avantages = [
    {
      icon: CreditCard,
      title: "Paiements simplifiés",
      description: "Acceptez tous types de paiements : cartes bancaires, mobile money, et plus encore"
    },
    {
      icon: Shield,
      title: "Sécurité maximale",
      description: "Transactions sécurisées et conformes aux normes internationales"
    },
    {
      icon: TrendingUp,
      title: "Croissance accélérée",
      description: "Augmentez vos ventes grâce à des solutions de paiement innovantes"
    },
    {
      icon: Clock,
      title: "Paiements instantanés",
      description: "Recevez vos paiements en temps réel sur votre compte"
    }
  ];

  const statistiques = [
    {
      valeur: "98%",
      label: "Taux de réussite",
      description: "des transactions"
    },
    {
      valeur: "+45%",
      label: "Augmentation",
      description: "du chiffre d'affaires"
    },
    {
      valeur: "24/7",
      label: "Support",
      description: "disponible"
    }
  ];

  return (
    <AppLayout>
      <Head>
        <title>Solutions de Paiement pour Marchands | Lassiri</title>
        <meta 
          name="description" 
          content="Acceptez tous types de paiements avec Lassiri. Solution complète et sécurisée pour les commerces." 
        />
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
                Solution de paiement
                <span className="block text-primary-100">pour votre commerce</span>
              </h1>
              <p className="mt-6 text-xl text-primary-100 max-w-3xl mx-auto">
                Acceptez tous types de paiements et développez votre activité avec
                notre solution complète et sécurisée.
              </p>
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <a
                  href="#inscription"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-primary bg-white hover:bg-gray-100 transition-colors duration-200"
                >
                  Devenir partenaire
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Avantages Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Pourquoi choisir Lassiri ?
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Des avantages exclusifs pour développer votre activité
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {avantages.map((avantage, index) => (
                <motion.div
                  key={avantage.title}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <avantage.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {avantage.title}
                  </h3>
                  <p className="text-gray-600">{avantage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistiques Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {statistiques.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.valeur}
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

        {/* Fonctionnalités Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Des outils puissants pour votre business
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Tout ce dont vous avez besoin pour gérer vos paiements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white rounded-xl p-8 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <ChartBar className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Tableau de bord intuitif
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary rounded-full mr-3" />
                    Suivi des transactions en temps réel
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary rounded-full mr-3" />
                    Rapports détaillés et analyses
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary rounded-full mr-3" />
                    Gestion des remboursements
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-8 shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Smartphone className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Application mobile
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary rounded-full mr-3" />
                    Gestion des paiements où que vous soyez
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary rounded-full mr-3" />
                    Notifications en temps réel
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary rounded-full mr-3" />
                    Scanner pour payer
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
}
