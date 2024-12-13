const testimonials = [
    {
      content: "L'intégration de cette plateforme a révolutionné notre gestion des livraisons. Service client exceptionnel !",
      author: "Marie Dubois",
      role: "Directrice des Opérations",
      company: "Express Market",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      content: "Une solution complète qui nous a permis d'optimiser nos services de transport et de paiement.",
      author: "Thomas Martin",
      role: "CEO",
      company: "Transport Plus",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      content: "La fiabilité et la rapidité du service ont considérablement amélioré la satisfaction de nos clients.",
      author: "Sophie Bernard",
      role: "Responsable Logistique",
      company: "Rapid Delivery",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
              Découvrez les expériences de nos clients satisfaits.
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
                      <img className="h-10 w-10 rounded-full" src={testimonial.image} alt="" />
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