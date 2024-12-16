// resources/js/Pages/Partenariat/index.jsx
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Truck, Package, CreditCard, TrendingUp, Users, Shield, ChartBar, Clock } from 'lucide-react';
import AppLayout from '@/Layouts/AppLayout';

export default function PartenariatIndex() {
  const partnerTypes = [
    {
      title: "Chauffeur Partenaire",
      description: "Rejoignez notre réseau de chauffeurs professionnels",
      icon: Truck,
      benefits: [
        "Revenus attractifs et garantis",
        "Flexibilité des horaires",
        "Formation continue",
        "Support 24/7"
      ],
      link: route('partenariat.chauffeur')
    },
    {
      title: "Livreur Partenaire",
      description: "Devenez livreur indépendant avec Lassiri",
      icon: Package,
      benefits: [
        "Commissions avantageuses",
        "Choix des zones de livraison",
        "Assurance incluse",
        "Bonus de performance"
      ],
      link: route('partenariat.livreur')
    },
    {
      title: "Marchand Partenaire",
      description: "Développez votre activité avec nos solutions de paiement",
      icon: CreditCard,
      benefits: [
        "Commissions réduites",
        "Paiements sécurisés",
        "Dashboard dédié",
        "Support prioritaire"
      ],
      link: route('partenariat.marchand.paiement')
    }
  ];

  const stats = [
    { value: "5000+", label: "Partenaires actifs" },
    { value: "98%", label: "Taux de satisfaction" },
    { value: "24/7", label: "Support dédié" },
    { value: "15+", label: "Villes couvertes" }
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Croissance garantie",
      description: "Augmentez vos revenus grâce à notre large base d'utilisateurs"
    },
    {
      icon: Users,
      title: "Communauté active",
      description: "Rejoignez une communauté dynamique de partenaires"
    },
    {
      icon: Shield,
      title: "Protection assurée",
      description: "Bénéficiez d'une couverture complète pendant vos activités"
    },
    {
      icon: ChartBar,
      title: "Outils de gestion",
      description: "Accédez à des outils performants pour gérer votre activité"
    }
  ];

  return (
    <AppLayout>
      <Head>
        <title>Devenir Partenaire | Lassiri</title>
        <meta name="description" content="Rejoignez Lassiri en tant que partenaire et développez votre activité" />
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
                Devenez Partenaire
                <span className="block text-primary-100">et développez votre activité</span>
              </h1>
              <p className="mt-6 text-xl text-primary-100 max-w-3xl mx-auto">
                Rejoignez la plateforme leader en Guinée et bénéficiez d'opportunités uniques
                pour développer votre activité.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-2 text-base text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Types Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900">Types de Partenariat</h2>
              <p className="mt-4 text-xl text-gray-600">
                Choisissez le partenariat qui correspond le mieux à votre profil
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {partnerTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-8">
                    <type.icon className="h-12 w-12 text-primary mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                    <p className="text-gray-600 mb-6">{type.description}</p>
                    <ul className="space-y-3 mb-8">
                      {type.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center text-gray-600">
                          <Clock className="h-5 w-5 text-primary mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={type.link}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-600 transition-colors duration-200"
                    >
                      En savoir plus
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
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
                Prêt à nous rejoindre ?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Commencez dès aujourd'hui et profitez de nos offres de lancement.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-primary transition-all duration-300"
              >
                Devenir partenaire
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
}
