import { motion } from 'framer-motion';

const services = [
  {
    title: 'Transport',
    description: 'Service de transport professionnel pour vos déplacements',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/solutions/transport-et-reservation',
  },
  {
    title: 'Livraison',
    description: 'Livraison rapide et fiable de vos colis',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/solutions/commande-et-livraison',
  },
  {
    title: 'Paiement',
    description: 'Solutions de paiement sécurisées pour vos transactions',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/solutions/paiements',
  },
];

export default function Services() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Nos solutions pour votre business
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Des services adaptés à vos besoins pour optimiser votre activité.
          </p>
        </div>

        <motion.div 
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg transition transform hover:shadow-xl hover:-translate-y-1"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0">
                <img 
                  className="h-48 w-full object-cover" 
                  src={service.image} 
                  alt={service.title} 
                  loading="lazy"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="mt-3 text-base text-gray-500">{service.description}</p>
                </div>
                <div className="mt-6">
                  <a
                    href={service.link}
                    className="text-base font-semibold text-primary hover:text-primary-600 transition-colors duration-200"
                  >
                    En savoir plus →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
