import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Users, Target, Shield, Award } from 'lucide-react';
import AppLayout from '@/Layouts/AppLayout';

export default function AboutUs() {
  return (
    <AppLayout>
      <Head>
        <title>À propos de Lassiri | Votre partenaire de confiance</title>
        <meta name="description" content="Découvrez l'histoire, la mission et les valeurs de Lassiri - Leader des solutions de transport, livraison et paiement en Guinée." />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary to-gray-800 text-white py-24">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl text-white">
                Notre Histoire
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                Depuis notre création, nous nous efforçons de révolutionner le quotidien 
                des Guinéens grâce à des solutions technologiques innovantes et accessibles.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Chez Lassiri, notre mission est de connecter les communautés et de faciliter 
                  les échanges à travers des solutions technologiques innovantes. Nous nous 
                  engageons à rendre le transport, la livraison et les paiements plus 
                  accessibles et efficaces pour tous.
                </p>
              </motion.div>
              <motion.div
                className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/images/hero/AboutHero.jpg"
                  alt="Notre équipe en action"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Valeurs Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900">Nos Valeurs</h2>
              <p className="mt-4 text-xl text-gray-600">
                Les principes qui guident nos actions au quotidien
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[ 
                {
                  icon: Users,
                  title: "Proximité",
                  description: "Nous restons proches de nos utilisateurs et à l'écoute de leurs besoins"
                },
                {
                  icon: Target,
                  title: "Innovation",
                  description: "Nous innovons constamment pour améliorer nos services"
                },
                {
                  icon: Shield,
                  title: "Confiance",
                  description: "La confiance est au cœur de notre relation avec nos utilisateurs"
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description: "Nous visons l'excellence dans chacune de nos actions"
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <value.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#00B14F] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Prêt à nous rejoindre ?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Téléchargez notre application et découvrez une nouvelle façon de gérer 
                vos déplacements et paiements.
              </p>
              <a
                href="#download"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-primary transition-all duration-300"
              >
                Télécharger l'application
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
}
