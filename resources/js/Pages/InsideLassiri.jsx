import React, { useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';

function InsideLassiri() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Sections plus détaillées et enrichies
  const services = [
    {
      id: 1,
      title: "Paiement Mobile Innovant",
      description: "Une solution de paiement 360° adaptée aux réalités locales, sécurisée et instantanée.",
      icon: "💳",
      details: [
        "Compatibilité avec tous les opérateurs mobiles",
        "Frais de transaction minimaux",
        "Sécurité de bout en bout",
        "Fonctionnement hors-ligne possible"
      ]
    },
    {
      id: 2,
      title: "Livraison Express & Traçable",
      description: "Un réseau logistique intelligent qui optimise chaque livraison.",
      icon: "🚚",
      details: [
        "Géolocalisation en temps réel",
        "Options de livraison flexibles",
        "Réseau de livreurs locaux formés",
        "Tarification transparente"
      ]
    },
    {
      id: 3,
      title: "Académie Digitale Lassiri",
      description: "Programmes de formation pour autonomiser les entrepreneurs digitaux.",
      icon: "📱",
      details: [
        "Formations gratuites en ligne",
        "Modules adaptés aux débutants",
        "Certification professionnelle",
        "Mentorat personnalisé"
      ]
    },
    {
      id: 4,
      title: "Support Client Premium",
      description: "Une équipe dédiée disponible 24h/7 pour vous accompagner.",
      icon: "🤝",
      details: [
        "Support multicanal (téléphone, chat, email)",
        "Équipe multilingue",
        "Temps de réponse garanti",
        "Résolution proactive des problèmes"
      ]
    }
  ];

  const articles = [
    {
      id: 1,
      title: "Transformation Digitale en Afrique",
      excerpt: "Comment Lassiri réinvente l'économie locale grâce à l'innovation technologique.",
      date: "15 Avril 2024",
      imageUrl: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
      fullContent: "Notre vision va au-delà d'une simple plateforme technologique. Nous croyons que la transformation digitale en Afrique passe par des solutions concrètes, adaptées et inclusives."
    },
    {
      id: 2,
      title: "Entrepreneuriat Féminin",
      excerpt: "Mettre en lumière les entrepreneures qui révolutionnent leur écosystème local.",
      date: "10 Avril 2024",
      imageUrl: "https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg",
      fullContent: "Lassiri s'engage à soutenir et promouvoir l'entrepreneuriat féminin à travers des programmes de formation, de financement et de mise en réseau."
    },
    {
      id: 3,
      title: "Impact Social et Économique",
      excerpt: "Des success stories qui démontrent notre engagement envers les communautés locales.",
      date: "5 Avril 2024",
      imageUrl: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
      fullContent: "Chaque transaction, chaque livraison, chaque formation est une opportunité de créer de la valeur et de l'emploi dans nos écosystèmes locaux."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Awa Diallo",
      role: "Commerçante à Conakry",
      testimony: "Lassiri a transformé ma petite boutique. Je peux désormais gérer mes stocks, mes paiements et mes livraisons avec une simplicité incroyable.",
      imageUrl: "https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg"
    },
    {
      id: 2,
      name: "Mamadou Sow",
      role: "Livreur indépendant",
      testimony: "Grâce à Lassiri, j'ai trouvé un emploi flexible qui me permet de subvenir aux besoins de ma famille tout en ayant un horaire adapté.",
      imageUrl: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg"
    },
    {
      id: 3,
      name: "Fatou Camara",
      role: "Restauratrice",
      testimony: "La plateforme m'a ouvert de nouveaux marchés. Je livre maintenant dans toute la ville et j'ai triplé mon chiffre d'affaires.",
      imageUrl: "https://images.pexels.com/photos/7551651/pexels-photo-7551651.jpeg"
    }
  ];

  return (
    <AppLayout>
      {/* Hero Section Enrichie */}
      <section className="relative min-h-[70vh] bg-gradient-to-r from-lassiri-dark to-primary-800 text-white flex items-center justify-center mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Lassiri : L'Innovation au Service des Communautés Africaines
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
            Nous transformons les défis technologiques en opportunités économiques, en plaçant l'humain et l'inclusion au cœur de notre mission.
          </p>
          <div className="animate-fade-in-up animation-delay-400">
            <button className="bg-lassiri-green text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors mr-4">
              Découvrir Notre Mission
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
              Nos Impacts
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Services Détaillée */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-lassiri-dark">
            Nos Solutions Innovantes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="text-5xl mb-4 text-lassiri-green group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-lassiri-dark">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-lassiri-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section Témoignages Dynamiques */}
        <section className="bg-gray-50 py-16 rounded-lg mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-lassiri-dark">
            Histoires de Transformation
          </h2>
          <div className="max-w-4xl mx-auto px-4 relative">
            <div className="flex items-center justify-center mb-8">
              <img 
                src={testimonials[activeTestimonial].imageUrl} 
                alt={testimonials[activeTestimonial].name}
                className="w-24 h-24 rounded-full object-cover border-4 border-lassiri-green"
              />
            </div>
            <p className="text-center text-xl italic text-gray-700 mb-4">
              "{testimonials[activeTestimonial].testimony}"
            </p>
            <div className="text-center">
              <p className="font-semibold text-lassiri-dark">
                {testimonials[activeTestimonial].name}
              </p>
              <p className="text-gray-500">
                {testimonials[activeTestimonial].role}
              </p>
            </div>
            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full mx-2 ${
                    index === activeTestimonial 
                    ? 'bg-lassiri-green' 
                    : 'bg-gray-300'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </section>

        {/* Section Articles */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-lassiri-dark">
            Dernières Perspectives
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div 
                key={article.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl"
              >
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-gray-500 mb-2 block">{article.date}</span>
                  <h3 className="text-xl font-semibold mb-3 text-lassiri-dark">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <button className="text-lassiri-green hover:underline">
                    Lire plus →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Statistiques Impact */}
        <section className="bg-lassiri-light py-16 rounded-lg mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-lassiri-dark">
            Notre Impact en Chiffres
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15K+", label: "Utilisateurs Actifs" },
              { value: "750+", label: "Partenaires Commerciaux" },
              { value: "85", label: "Villes Couvertes" },
              { value: "24/7", label: "Support Client" }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl font-bold text-lassiri-green mb-3">
                  {stat.value}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section Appel à l'Action */}
        <section className="text-center bg-gradient-to-r from-lassiri-dark to-primary-800 text-white py-16 rounded-lg">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à Transformer Votre Quotidien ?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Rejoignez la communauté Lassiri et découvrez comment nous pouvons ensemble 
            créer des opportunités, simplifier votre vie et propulser votre business.
          </p>
          <div>
            <button className="bg-lassiri-green text-white px-10 py-4 rounded-full text-lg hover:bg-green-600 transition-colors mr-4">
              Commencer Maintenant
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full text-lg hover:bg-white hover:text-black transition-colors">
              Contactez-nous
            </button>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}

export default InsideLassiri;