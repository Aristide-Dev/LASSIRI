import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Users, Target, Shield, Award, Check, Globe, Rocket, Heart } from 'lucide-react';
import AppLayout from '@/Layouts/AppLayout';

export default function AboutUs() {
  return (
    <AppLayout>
      <Head>
        <title>À propos de Lassiri | Votre partenaire de confiance</title>
        <meta name="description" content="Découvrez l'histoire, la mission et les valeurs de Lassiri - Leader des solutions de transport, livraison et paiement en Guinée." />
      </Head>

      <main>
        {/* Hero Section - Enhanced */}
        <section className="relative bg-gradient-to-b from-primary-700 to-primary-900 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-900 to-primary-700 opacity-50 blur-3xl" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl text-white mb-6">
                Notre Histoire
              </h1>
              <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Née de la vision de transformer le paysage technologique en Guinée, 
                Lassiri est plus qu'une entreprise - c'est un mouvement qui redéfinit 
                les possibilités du numérique dans notre pays.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Story Section - New */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Origine</h2>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg leading-relaxed">
                    Fondée en 2018 par un groupe d'entrepreneurs guinéens visionnaires, 
                    Lassiri est née de la conviction que la technologie peut transformer 
                    radicalement notre façon de vivre et de travailler.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Initialement concentrée sur les solutions de paiement mobile, 
                    nous avons rapidement évolué pour devenir une plateforme 
                    multiservices couvrant le transport, la logistique et les 
                    services financiers numériques.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/api/placeholder/600/400?text=Lassiri+Histoire"
                  alt="Fondateurs de Lassiri"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section - Enhanced */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/api/placeholder/600/400?text=Mission+Vision"
                  alt="Notre vision"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Notre Mission & Vision
                </h2>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start space-x-4 mb-4">
                    <Target className="h-10 w-10 text-primary-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Mission</h3>
                      <p className="text-lg">
                        Autonomiser les communautés guinéennes à travers des solutions 
                        technologiques innovantes, en rendant les services essentiels 
                        plus accessibles, efficaces et abordables.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Rocket className="h-10 w-10 text-primary-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Vision</h3>
                      <p className="text-lg">
                        Devenir le principal catalyseur de la transformation digitale 
                        en Guinée, en créant un écosystème numérique intégré qui 
                        propulse le développement économique et social.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Valeurs Section - Enhanced */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900">Nos Valeurs Fondamentales</h2>
              <p className="mt-4 text-xl text-gray-600">
                Les principes qui guident chacune de nos actions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[ 
                {
                  icon: Users,
                  title: "Proximité",
                  description: "Nous plaçons nos utilisateurs au cœur de chaque décision",
                  color: "text-blue-600"
                },
                {
                  icon: Globe,
                  title: "Innovation",
                  description: "Nous transformons les défis en opportunités technologiques",
                  color: "text-green-600"
                },
                {
                  icon: Shield,
                  title: "Intégrité",
                  description: "La transparence et l'éthique sont nos principes directeurs",
                  color: "text-purple-600"
                },
                {
                  icon: Heart,
                  title: "Impact Social",
                  description: "Notre succès se mesure à l'amélioration de la vie des Guinéens",
                  color: "text-red-600"
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`${value.color} mb-4 transition-transform group-hover:scale-110`}>
                    <value.icon className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section - New */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900">Nos Réalisations</h2>
              <p className="mt-4 text-xl text-gray-600">
                Les moments qui ont défini notre parcours
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "100 000+ Utilisateurs",
                  description: "Nous avons connecté plus de 100 000 Guinéens à nos services",
                  icon: Users
                },
                {
                  title: "15 Villes Couvertes",
                  description: "Notre réseau s'étend dans 15 villes à travers la Guinée",
                  icon: Globe
                },
                {
                  title: "Prix Innovation",
                  description: "Lauréat du prix national de l'innovation technologique",
                  icon: Award
                }
              ].map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  className="bg-white rounded-xl p-6 shadow-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex justify-center mb-4">
                    <achievement.icon className="h-12 w-12 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action - Enhanced */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Rocket className="h-12 w-12 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Commencez votre voyage numérique
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Rejoignez la communauté Lassiri et transformez votre quotidien grâce 
                à des solutions technologiques intelligentes et accessibles.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#download"
                  className="inline-flex items-center px-8 py-3 bg-white text-primary-700 text-lg font-medium rounded-lg hover:bg-gray-100 transition-all duration-300"
                >
                  <Check className="mr-2 h-5 w-5" /> Télécharger l'application
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white text-lg font-medium rounded-lg hover:bg-white hover:text-primary-700 transition-all duration-300"
                >
                  Nous contacter
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
}