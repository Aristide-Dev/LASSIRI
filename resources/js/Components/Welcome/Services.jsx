import { motion } from 'framer-motion';

const services = [
  {
    title: 'Transport',
    tagline: 'Voyagez en toute sérénité',
    description: 'Service de transport professionnel et fiable pour tous vos déplacements. Choisissez parmi taxis, motos, tricycles ou voitures avec chauffeur, et profitez d’une expérience fluide, rapide et sécurisée.',
    image: 'https://img.freepik.com/premium-photo/business-trip-transportation-travel-gesture-people-concept-young-smiling-african-american-woman-texing-smartphone-taxi-city-street_380164-121474.jpg?uid=P109492898&ga=GA1.1.471702674.1723729231&semt=ais_hybrid',
    alt: 'Une femme souriante utilisant son téléphone dans un taxi',
    link: '/solutions/transport-et-reservation',
    features: [
      'Réservation en quelques clics',
      'Chauffeurs professionnels et vérifiés',
      'Tarification transparente et sécurisée',
    ],
    // popularity: 'Très apprécié',
    ctaLabel: 'Découvrez notre solution de transport',
  },
  {
    title: 'Livraison',
    tagline: 'Vos colis, livrés en un éclair',
    description: 'Livraison rapide, sécurisée et efficace de vos colis et commandes. Que vous soyez un particulier ou un professionnel, nous simplifions l’expédition et la réception de vos envois, partout et en tout temps.',
    image: 'https://img.freepik.com/free-photo/close-up-delivery-person-with-parcel_23-2149095888.jpg?uid=P109492898&ga=GA1.1.471702674.1723729231&semt=ais_hybrid',
    alt: 'Un livreur tenant un colis prêt à être livré',
    link: '/solutions/commande-et-livraison',
    features: [
      'Suivi en temps réel de vos colis',
      'Réseau de livreurs expérimentés',
      'Options de livraison express ou planifiée',
    ],
    // popularity: 'Service fiable et rapide',
    ctaLabel: 'En savoir plus sur la livraison',
  },
  {
    title: 'Paiement',
    tagline: 'La simplicité des paiements au quotidien',
    description: 'Solutions de paiement sécurisées pour faciliter toutes vos transactions. Payez vos factures, transférez de l’argent ou recevez des paiements simplement, en toute sécurité, et sans complications.',
    image: 'https://img.freepik.com/premium-photo/customer-making-cashless-payment-store_482257-97222.jpg?uid=P109492898&ga=GA1.1.471702674.1723729231&semt=ais_hybrid',
    alt: 'Un client effectuant un paiement sans contact en magasin',
    link: '/solutions/paiements',
    features: [
      'Multiples méthodes de paiement acceptées',
      'Sécurité renforcée et confidentialité garantie',
      'Intégration fluide avec d’autres services',
    ],
    // popularity: 'Adopté par des milliers d’utilisateurs',
    ctaLabel: 'Facilitez vos transactions maintenant',
  },
];

const containerVariants = {
  visible: { 
    transition: { 
      staggerChildren: 0.2 
    } 
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Services() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Nos solutions pour votre activité
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Profitez de nos services pour optimiser et développer votre business.
          </p>
        </header>

        <motion.div 
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg transition transform hover:shadow-primary/30 hover:shadow-xl hover:-translate-y-2 bg-white focus-within:ring-2 focus-within:ring-primary relative"
              variants={cardVariants}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Popularity badge */}
              {service.popularity && (
                <span className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {service.popularity}
                </span>
              )}
              
              <div className="flex-shrink-0">
                <img 
                  className="h-48 w-full object-cover" 
                  src={service.image} 
                  alt={service.alt}
                  loading="lazy"
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  {service.tagline && (
                    <p className="text-sm text-primary font-medium italic mt-1">{service.tagline}</p>
                  )}
                  <p className="mt-3 text-base text-gray-600">{service.description}</p>
                  
                  {/* Features list */}
                  {service.features && service.features.length > 0 && (
                    <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc list-inside font-bold">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="mt-6">
                  <a
                    href={service.link}
                    className="inline-flex items-center text-base font-semibold rounded-xl text-primary hover:bg-primary-800 hover:text-primary-200 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
                    aria-label={`En savoir plus sur ${service.title}`}
                  >
                    {service.ctaLabel || 'En savoir plus'} →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
