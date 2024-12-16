// resources/js/Pages/Partenariat/Livreur.jsx
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Clock, CreditCard, Shield, Smartphone } from 'lucide-react';
import AppLayout from '@/Layouts/AppLayout';

export default function LivreurPartenaire() {
  const avantages = [
    {
      icon: CreditCard,
      title: "Revenus attractifs",
      description: "Gagnez plus avec nos commissions compétitives et nos bonus de performance"
    },
    {
      icon: Clock,
      title: "Flexibilité horaire",
      description: "Travaillez selon vos disponibilités, quand vous le souhaitez"
    },
    {
      icon: Smartphone,
      title: "Application intuitive",
      description: "Une application simple pour gérer vos livraisons efficacement"
    },
    {
      icon: Shield,
      title: "Protection assurée",
      description: "Assurance complète pendant vos livraisons"
    }
  ];

  const statistiques = [
    {
      valeur: "500+",
      label: "Livreurs actifs",
      description: "Une communauté grandissante"
    },
    {
      valeur: "10K+",
      label: "Livraisons par jour",
      description: "En moyenne sur notre plateforme"
    },
    {
      valeur: "98%",
      label: "Satisfaction client",
      description: "Note moyenne de nos livreurs"
    }
  ];

  return (
    <AppLayout>
      <Head>
        <title>Devenir Livreur Partenaire | Lassiri</title>
        <meta 
          name="description" 
          content="Rejoignez Lassiri en tant que livreur partenaire. Gagnez plus et travaillez en toute flexibilité." 
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
                Devenez Livreur Partenaire
                <span className="block text-primary-100">Gagnez plus, en toute liberté</span>
              </h1>
              <p className="mt-6 text-xl text-primary-100 max-w-3xl mx-auto">
                Rejoignez la plateforme de livraison la plus dynamique de Guinée.
                Profitez de revenus attractifs et d'une flexibilité totale.
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
                  Commencer maintenant
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
                Pourquoi nous rejoindre ?
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Des avantages exclusifs pour nos livreurs partenaires
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
