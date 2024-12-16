// resources/js/Pages/Partenariat/MarchandLivraison.jsx
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Package, TrendingUp, Clock, Shield, Truck, ChartBar } from 'lucide-react';
import AppLayout from '@/Layouts/AppLayout';

export default function MarchandLivraison() {
  const avantages = [
    {
      icon: Package,
      title: "Livraison express",
      description: "Livrez vos produits en moins de 45 minutes dans toute la ville"
    },
    {
      icon: TrendingUp,
      title: "Augmentez vos ventes",
      description: "Élargissez votre zone de chalandise et touchez plus de clients"
    },
    {
      icon: Clock,
      title: "Gestion en temps réel",
      description: "Suivez vos livraisons en direct depuis votre tableau de bord"
    },
    {
      icon: Shield,
      title: "Sécurité garantie",
      description: "Vos produits sont assurés pendant toute la livraison"
    }
  ];

  const statistiques = [
    {
      valeur: "45min",
      label: "Délai moyen",
      description: "de livraison en ville"
    },
    {
      valeur: "+60%",
      label: "Augmentation",
      description: "des ventes en moyenne"
    },
    {
      valeur: "98%",
      label: "Satisfaction",
      description: "de nos partenaires"
    }
  ];

  return (
    <AppLayout>
      <Head>
        <title>Partenariat Marchand Livraison | Lassiri</title>
        <meta 
          name="description" 
          content="Développez votre activité avec notre service de livraison express. Solution complète pour les commerces et restaurants." 
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
                Développez votre activité
                <span className="block text-primary-100">avec notre service de livraison</span>
              </h1>
              <p className="mt-6 text-xl text-primary-100 max-w-3xl mx-auto">
                Augmentez vos ventes grâce à notre réseau de livreurs professionnels.
                Solution complète pour les commerces et restaurants.
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
                Pourquoi nous choisir ?
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
      </main>
    </AppLayout>
  );
}
