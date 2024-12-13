import { Link, usePage } from '@inertiajs/react';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header({ onMobileMenuToggle }) {
  const { url } = usePage();

  // État pour les menus déroulants
  const [openDropdown, setOpenDropdown] = useState(null);

  // Vérifie si une route est active
  const isActive = (routeName) => url.startsWith(route(routeName));
  console.log('isActive: ', isActive);
  console.log('route: ', route('welcome'));

  // Gère l'ouverture des menus déroulants
  const toggleDropdown = (menuName) => {
    setOpenDropdown((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <header className="bg-primary border-b border-border">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Top Navigation"
      >
        <div className="w-full py-6 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" aria-label="Retour à l'accueil">
              <img
                className="h-10 w-auto"
                src="/images/logo/logo-lassiri.png"
                alt="Logo Lassiri"
                loading="lazy"
              />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:flex">
              

            <Link
                href={route('welcome')}
                className={`text-base font-medium ${
                  isActive('welcome') ? 'text-white' : 'text-gray-500'
                } hover:text-white transition-colors`}
              >
                Accueil
              </Link>

              {/* Solutions Menu */}
              <div
                className="relative group"
                onMouseEnter={() => setOpenDropdown('solutions')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={route('solutions.index')}
                  className={`text-base font-medium ${
                    isActive('solutions.index') ? 'text-white' : 'text-gray-500'
                  } hover:text-white transition-colors`}
                >
                  Solutions
                </Link>
                <div
                  className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50 ${
                    openDropdown === 'solutions' ? 'block' : 'hidden'
                  }`}
                >
                  <Link
                    href={route('solutions.paiements')}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Paiements
                  </Link>
                  <Link
                    href={route('solutions.transport.reservation')}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Transport & Réservation
                  </Link>
                  <Link
                    href={route('solutions.commande.livraison')}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Commande & Livraison
                  </Link>
                </div>
              </div>

              {/* Partenariat Menu */}
              <div
                className="relative group"
                onMouseEnter={() => setOpenDropdown('partenariat')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={route('partenariat.index')}
                  className={`text-base font-medium ${
                    isActive('partenariat.index')
                      ? 'text-white'
                      : 'text-gray-200'
                  } hover:text-white transition-colors`}
                >
                  Partenariat
                </Link>
                <div
                  className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50 ${
                    openDropdown === 'partenariat' ? 'block' : 'hidden'
                  }`}
                >
                  <Link
                    href={route('partenariat.chauffeur')}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Chauffeur
                  </Link>
                  <Link
                    href={route('partenariat.livreur')}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Livreur
                  </Link>
                  <Link
                    href={route('partenariat.marchand.paiement')}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Marchand
                  </Link>
                </div>
              </div>

              <Link
                href={route('centre.aide')}
                className={`text-base font-medium ${
                  isActive('centre.aide') ? 'text-white' : 'text-gray-500'
                } hover:text-white transition-colors`}
              >
                Centre d'aide
              </Link>
            </div>
          </div>

          {/* Call-to-action Buttons */}
          <div className="hidden lg:flex ml-10 space-x-4">
            <Link
              href="#"
              className="btn-accent"
              aria-label="Télécharger l'application"
            >
              Télécharger App
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-200 hover:text-white transition-colors"
              onClick={onMobileMenuToggle}
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
