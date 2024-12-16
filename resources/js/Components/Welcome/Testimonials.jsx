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
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Témoignages</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Ce que nos clients disent
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Découvrez les expériences de nos clients satisfaits à Conakry.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 p-6">
                <blockquote className="mt-6 text-gray-500">
                  <p className="text-lg font-medium">"{testimonial.content}"</p>
                </blockquote>
              </div>
              <div className="p-6 bg-gray-50">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={testimonial.image}
                      alt={testimonial.author}
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                    <div className="text-sm text-gray-500">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
