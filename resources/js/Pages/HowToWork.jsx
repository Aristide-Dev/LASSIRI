import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { Download, UserPlus, Truck, Phone, Shield, Clock, ArrowRight, Smartphone, PlayCircle, Apple } from 'lucide-react';

export default function HowToWork() {
  const [os, setOs] = useState('');

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('android') !== -1) {
      setOs('android');
    } else if (userAgent.indexOf('iphone') !== -1 || userAgent.indexOf('ipad') !== -1) {
      setOs('ios');
    } else if (userAgent.indexOf('harmony') !== -1) {
      setOs('harmony');
    } else {
      setOs('unknown');
    }
  }, []);

  const steps = [
    {
      icon: Download,
      title: "Téléchargez l'application",
      description: "Disponible sur iOS, Android et Harmony OS. Installation rapide et gratuite.",
    },
    {
      icon: UserPlus,
      title: "Créez votre compte",
      description: "Inscription en moins de 2 minutes avec vérification sécurisée.",
    },
    {
      icon: Truck,
      title: "Utilisez nos services",
      description: "Transport, livraison et paiement en quelques clics.",
    },
  ];

  const features = [
    {
      icon: Phone,
      title: "Interface intuitive",
      description: "Navigation simple et ergonomique pour une expérience utilisateur optimale.",
    },
    {
      icon: Shield,
      title: "Sécurité maximale",
      description: "Vos données et transactions sont protégées par un cryptage de pointe.",
    },
    {
      icon: Clock,
      title: "Disponible 24/7",
      description: "Accédez à nos services à tout moment, où que vous soyez.",
    },
  ];

  return (
    <AppLayout>
      <Head>
        <title>Comment ça marche | Lassiri</title>
        <meta name="description" content="Découvrez comment Lassiri simplifie votre quotidien en trois étapes simples." />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-gray-50 to-white pt-24 pb-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="block">Simplifiez votre quotidien</span>
                <span className="block text-primary">en quelques clics</span>
              </motion.h1>

              <motion.p
                className="mt-6 max-w-2xl mx-auto text-xl text-gray-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Une solution tout-en-un pour gérer vos transports, livraisons et paiements
                de manière simple et efficace.
              </motion.p>

              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <a
                  href="#download"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Commencer maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Comment ça marche ?
              </h2>
              <p className="mt-4 text-xl text-gray-500">
                Trois étapes simples pour commencer
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="relative flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="absolute -top-4 h-8 w-8 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                    {index + 1}
                  </div>
                  <step.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-center">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-extrabold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Téléchargez l'application
              </motion.h2>
              <motion.p
                className="mt-4 text-xl text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Disponible gratuitement sur toutes les plateformes
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Google Play Button */}
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.lassiri.app"
                target="_blank"
                rel="noopener noreferrer"
                className={`
          flex items-center px-8 py-4 rounded-lg
          ${os === 'android'
                    ? 'bg-gradient-to-r from-[#34A853] via-[#4285F4] to-[#EA4335] ring-4 ring-[#34A853]/30'
                    : 'bg-gradient-to-r from-[#34A853]/80 via-[#4285F4]/80 to-[#EA4335]/80 hover:from-[#34A853] hover:via-[#4285F4] hover:to-[#EA4335]'
                  }
          transition-all duration-300 transform hover:scale-105 hover:shadow-xl
        `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayCircle className="h-8 w-8 mr-3 text-white" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-white/90">TÉLÉCHARGER SUR</span>
                  <span className="text-lg font-semibold text-white">Google Play</span>
                </div>
              </motion.a>

              {/* App Store Button */}
              <motion.a
                href="https://apps.apple.com/app/lassiri/id123456789"
                target="_blank"
                rel="noopener noreferrer"
                className={`
          flex items-center px-8 py-4 rounded-lg
          ${os === 'ios'
                    ? 'bg-gradient-to-r from-[#A6B1B7] via-[#767C84] to-[#000000] ring-4 ring-[#A6B1B7]/30'
                    : 'bg-gradient-to-r from-[#A6B1B7]/80 via-[#767C84]/80 to-[#000000]/80 hover:from-[#A6B1B7] hover:via-[#767C84] hover:to-[#000000]'
                  }
          transition-all duration-300 transform hover:scale-105 hover:shadow-xl
        `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Apple className="h-8 w-8 mr-3 text-white" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-white/90">TÉLÉCHARGER SUR L'</span>
                  <span className="text-lg font-semibold text-white">App Store</span>
                </div>
              </motion.a>

              {/* AppGallery Button */}
              <motion.a
                href="https://appgallery.huawei.com/app/lassiri"
                target="_blank"
                rel="noopener noreferrer"
                className={`
          flex items-center px-8 py-4 rounded-lg
          ${os === 'harmony'
                    ? 'bg-gradient-to-r from-[#C10D31] via-[#E31837] to-[#FF1744] ring-4 ring-[#C10D31]/30'
                    : 'bg-gradient-to-r from-[#C10D31]/80 via-[#E31837]/80 to-[#FF1744]/80 hover:from-[#C10D31] hover:via-[#E31837] hover:to-[#FF1744]'
                  }
          transition-all duration-300 transform hover:scale-105 hover:shadow-xl
        `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Smartphone className="h-8 w-8 mr-3 text-white" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-white/90">TÉLÉCHARGER SUR</span>
                  <span className="text-lg font-semibold text-white">AppGallery</span>
                </div>
              </motion.a>
            </motion.div>

            {/* OS Detection Badge */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {os !== 'unknown' && (
                <span className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                  Nous avons détecté que vous utilisez {
                    os === 'android' ? 'Android' :
                      os === 'ios' ? 'iOS' :
                        'Harmony OS'
                  }
                </span>
              )}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Pourquoi choisir Lassiri ?
              </h2>
              <p className="mt-4 text-xl text-gray-500">
                Des fonctionnalités conçues pour votre confort
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-center">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
}