// resources/js/Pages/Partenariat/Chauffeur.jsx
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Clock, CreditCard, Shield, Users } from 'lucide-react';
import AppLayout from '@/Layouts/AppLayout';

export default function ChauffeurPartenaire() {
  const avantages = [
    {
      icon: CreditCard,
      title: "Revenus attractifs",
      description: "Gagnez plus avec nos commissions avantageuses et nos bonus de performance"
    },
    {
      icon: Clock,
      title: "Flexibilité totale",
      description: "Choisissez vos horaires et zones de travail en toute liberté"
    },
    {
      icon: Shield,
      title: "Protection assurée",
      description: "Bénéficiez d'une assurance complète pendant vos courses"
    },
    {
      icon: Users,
      title: "Communauté active",
      description: "Rejoignez une communauté de chauffeurs professionnels"
    }
  ];

  const processus = [
    {
      title: "Inscription",
      description: "Remplissez le formulaire en ligne avec vos informations"
    },
    {
      title: "Vérification",
      description: "Nous vérifions vos documents et antécédents"
    },
    {
      title: "Formation",
      description: "Suivez notre formation gratuite pour les chauffeurs"
    },
    {
      title: "Activation",
      description: "Commencez à recevoir des courses et gagnez de l'argent"
    }
  ];

  return (
    <AppLayout>
      <Head>
        <title>Devenir Chauffeur Partenaire | Lassiri</title>
        <meta 
          name="description" 
          content="Rejoignez Lassiri en tant que chauffeur partenaire et développez votre activité." 
        />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary to-gray-800 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                Devenez Chauffeur Partenaire
                <span className="block text-primary-400">Gagnez plus, en toute liberté</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                Rejoignez la plateforme de transport la plus dynamique de Guinée et 
                développez votre activité en toute autonomie.
              </p>
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <a
                  href="#inscription"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-gray-900 bg-white hover:bg-gray-100 transition-colors duration-200"
                >
                  Devenir chauffeur
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
                Des avantages exclusifs pour nos chauffeurs partenaires
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

        {/* Processus d'inscription */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Comment devenir chauffeur ?
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Un processus simple et rapide en 4 étapes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processus.map((etape, index) => (
                <motion.div
                  key={etape.title}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {etape.title}
                  </h3>
                  <p className="text-gray-600">{etape.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
}
