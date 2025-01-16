import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "L'intégration de cette plateforme a simplifié nos réservations de taxis-motos à Conakry. Un service client toujours disponible !",
    author: "Aminata Diallo",
    role: "Directrice des Opérations",
    company: "Sily Transport Conakry",
    image: "https://img.freepik.com/free-photo/close-up-beautiful-african-woman-portrait_23-2148960573.jpg?uid=P109492898&ga=GA1.1.471702674.1723729231&semt=ais_hybrid", // Chemin local
  },
  {
    content: "Une solution complète qui nous a permis de mieux gérer les livraisons de produits locaux dans le quartier de Kaloum.",
    author: "Mamadou Camara",
    role: "CEO",
    company: "Madina Express",
    image: "https://img.freepik.com/free-photo/close-up-executive-with-white-shirt-blue-suit_1139-135.jpg?uid=P109492898&ga=GA1.1.471702674.1723729231&semt=ais_hybrid", // Chemin local
  },
  {
    content: "Grâce à cette plateforme, nos clients reçoivent leurs commandes rapidement et en toute confiance, partout dans la capitale.",
    author: "Fatoumata Bah",
    role: "Responsable Logistique",
    company: "Conakry Livraison Rapide",
    image: "https://img.freepik.com/free-photo/casual-woman-white-jacket-chic-smart_1303-3272.jpg?uid=P109492898&ga=GA1.1.471702674.1723729231&semt=ais_hybrid", // Chemin local
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Témoignages
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ce que nos clients disent
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Découvrez les expériences de nos clients satisfaits
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="p-8">
                {/* <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div> */}
                <blockquote className="text-lg text-gray-500 mb-8">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="ml-4">
                    <div className="text-base font-medium text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}