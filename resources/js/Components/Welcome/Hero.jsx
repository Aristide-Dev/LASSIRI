import { motion } from 'framer-motion';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

const slides = [
  {
    image: '/images/slides/portrait-senior-man-with-camera-device-world-photography-day-celebration.jpg',
    title: 'Services de Paiement',
    description: 'Payez vos factures, faites vos achats ou envoyez de l’argent en toute sécurité avec Lassiri.',
    buttons: [
      { label: 'Découvrir', href: '#paiements', style: 'primary' },
    ],
  },
  {
    image: '/images/slides/381742556_721a942c-825c-41b6-a612-170beb4a6ab2.jpg',
    title: 'Transport & Réservation',
    description: 'Réservez un taxi, moto ou tricycle en quelques clics, n’importe où en Guinée.',
    buttons: [
      { label: 'Réserver', href: '#transport', style: 'primary' },
      { label: 'En savoir plus', href: '#', style: 'secondary' },
    ],
  },
  {
    image: '/images/slides/portrait-beautiful-smiling-woman-city.jpg',
    title: 'Commande & Livraison',
    description: 'Commandez vos repas préférés et recevez-les rapidement à domicile ou au bureau.',
    buttons: [
      { label: 'Commander', href: '#livraison', style: 'primary' },
    ],
  },
  {
    image: '/images/slides/couple-enjoying-food-restaurant.jpg',
    title: 'Groupe d’amis qui payent ensemble',
    description: 'Partagez la note au restaurant ou faites des virements groupés en un seul geste.',
    buttons: [
      { label: 'Voir les fonctionnalités', href: '#amis', style: 'primary' },
    ],
  },
  {
    image: '/images/slides/people-traveling-back-crammed-vehicle-down-road-india.jpg',
    title: 'Business local ou marchand',
    description: 'Développez votre entreprise grâce à des solutions de paiement et de livraison adaptées.',
    buttons: [
      { label: 'Devenir marchand', href: '#marchand', style: 'primary' },
      { label: 'Contact', href: '#contact', style: 'secondary' },
    ],
  },
  {
    image: '/images/slides/shallow-focus-woman-with-facemask-holding-pos-machine-market.jpg',
    title: 'Digitalisation & Traçabilité',
    description: 'Améliorez la gouvernance et le suivi des transactions grâce à des outils modernes.',
    buttons: [
      { label: 'Explorer', href: '#digital', style: 'primary' },
    ],
  },
  {
    image: '/images/slides/idea-exchange-station.jpg',
    title: 'Support 24/7 et communauté',
    description: 'Rejoignez la communauté Lassiri. Profitez d’un support réactif et de nombreux avantages.',
    buttons: [
      { label: 'Rejoindre', href: '#', style: 'primary' },
    ],
  },
];

export default function HeroLassiri() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Configuration du slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    beforeChange: (_, next) => setActiveSlide(next),
    // Personnalisation des flèches
    nextArrow: <ChevronRight className="slick-arrow slick-next text-white" />,
    prevArrow: <ChevronLeft className="slick-arrow slick-prev text-white" />,
    // Personnalisation des "dots"
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          i === activeSlide ? 'bg-primary-600 scale-125' : 'bg-white/50'
        }`}
      />
    ),
    appendDots: (dots) => (
      <ul style={{ bottom: '2rem' }} className="slick-dots">
        {dots}
      </ul>
    ),
  };

  return (
    <section className="relative overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[50vh] min-h-[500px]">
            {/* Image de fond */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transform scale-105 animate-ken-burns"
              />
              {/* Overlay en dégradé */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
            </div>

            {/* Contenu textuel */}
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-2xl animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl mb-10 leading-relaxed text-gray-200">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {slide.buttons.map((button, idx) => (
                    <a
                      key={idx}
                      href={button.href}
                      className={`group px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center transform hover:scale-105 ${
                        button.style === 'primary'
                          ? 'bg-primary text-white hover:bg-primary-800'
                          : 'bg-white text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      {button.label}
                      <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Styles personnalisés */}
      <style jsx>{`
        /* Animation ken burns */
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-ken-burns {
          animation: ken-burns 20s ease-out infinite alternate;
        }

        /* Apparition en fondu vers le haut */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        /* Slick Carousel arrow */
        .slick-arrow {
          z-index: 10;
          width: 3rem;
          height: 3rem;
          background: #ffffff88;
          border-radius: 50%;
          display: flex !important;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .slick-arrow:hover {
          background: #ffffffcc;
          transform: scale(1.1);
        }
        .slick-prev { left: 1rem; }
        .slick-next { right: 1rem; }

        /* Dots pagination */
        .slick-dots li {
          margin: 0 4px;
        }
        .slick-dots li button:before {
          content: none;
        }
      `}</style>
    </section>
  );
}
