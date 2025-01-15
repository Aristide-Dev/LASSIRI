import { motion } from 'framer-motion';
import { Download, UserPlus, Rocket } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Download,
      title: "Téléchargez l'application",
      description: "Disponible gratuitement sur App Store, App Gallery et Google Play",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1974",
    },
    {
      icon: UserPlus,
      title: "Créez votre compte",
      description: "Inscription simple et rapide en quelques clics",
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=1974",
    },
    {
      icon: Rocket,
      title: "Commencez à utiliser Lassiri",
      description: "Accédez à toutes nos solutions innovantes",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-gray-300 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Commencez à utiliser Lassiri en trois étapes simples
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="group">
                  {/* Image Container */}
                  <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-primary-600/10 group-hover:bg-primary-600/20 transition-colors duration-300" />
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white p-3 rounded-lg shadow-lg">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-32 left-full w-full h-0.5 bg-gray-200 -z-10">
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-0.5 bg-primary-600"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}