import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Truck, Package, CreditCard, TrendingUp, Users, Shield, ChartBar, Clock, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import AppLayout from '@/Layouts/AppLayout';

export default function PartenariatIndex() {
  const partnerTypes = [
    {
      title: "Chauffeur Partenaire",
      description: "Rejoignez notre réseau de chauffeurs professionnels",
      icon: Truck,
      color: "text-primary-600",
      bgColor: "bg-primary-50",
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
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
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
      color: "text-violet-600",
      bgColor: "bg-violet-50",
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
    { value: "5000+", label: "Partenaires actifs", color: "text-primary-600" },
    { value: "98%", label: "Taux de satisfaction", color: "text-emerald-600" },
    { value: "24/7", label: "Support dédié", color: "text-violet-600" },
    { value: "15+", label: "Villes couvertes", color: "text-amber-600" }
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Croissance garantie",
      description: "Augmentez vos revenus grâce à notre large base d'utilisateurs",
      color: "text-primary-600",
      bgColor: "bg-primary-50"
    },
    {
      icon: Users,
      title: "Communauté active",
      description: "Rejoignez une communauté dynamique de partenaires",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Shield,
      title: "Protection assurée",
      description: "Bénéficiez d'une couverture complète pendant vos activités",
      color: "text-violet-600",
      bgColor: "bg-violet-50"
    },
    {
      icon: ChartBar,
      title: "Outils de gestion",
      description: "Accédez à des outils performants pour gérer votre activité",
      color: "text-amber-600",
      bgColor: "bg-amber-50"
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
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 text-white py-24">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center space-x-2 mb-8"
              >
                <Sparkles className="h-6 w-6 text-yellow-300" />
                <span className="text-yellow-300 font-medium">Opportunité Unique</span>
              </motion.div>

              <motion.h1 
                className="text-4xl font-extrabold sm:text-5xl md:text-6xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Devenez Partenaire
                <span className="block text-primary-200 mt-2">et développez votre activité</span>
              </motion.h1>
              
              <motion.p 
                className="mt-6 text-xl text-primary-100 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Rejoignez la plateforme leader en Guinée et bénéficiez d'opportunités uniques
                pour développer votre activité.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative -mt-12 mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
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
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Types de Partenariat
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Choisissez le partenariat qui correspond le mieux à votre profil
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {partnerTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="h-full bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                    <div className="p-8">
                      <div className={`inline-flex p-3 rounded-xl ${type.bgColor} ${type.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <type.icon className="h-8 w-8" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                      <p className="text-gray-600 mb-6">{type.description}</p>
                      
                      <ul className="space-y-3 mb-8">
                        {type.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center text-gray-600">
                            <Clock className={`h-5 w-5 ${type.color} mr-2 flex-shrink-0`} />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={type.link}
                        className={`inline-flex items-center px-6 py-3 rounded-lg text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}
                      >
                        En savoir plus
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`inline-flex p-4 rounded-xl ${feature.bgColor} ${feature.color} mb-6 transform transition-transform duration-300 hover:scale-110`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 py-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Prêt à nous rejoindre ?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Commencez dès aujourd'hui et profitez de nos offres de lancement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-3 bg-white text-primary-600 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Devenir partenaire
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors duration-200"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Nous contacter
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
}