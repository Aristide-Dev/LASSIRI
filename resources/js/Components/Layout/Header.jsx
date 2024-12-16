import { Link, usePage } from '@inertiajs/react';
import { Menu } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Header({ onMobileMenuToggle }) {
  const { url } = usePage();
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);

  // Vérifie si une route est active
  const isActiveRoute = (routeName) => route().current(routeName);

  // Classes de base pour les liens du menu principal
  const getLinkClasses = (active) =>
    `text-base ${active ? 'text-white font-bold' : 'text-green-200 font-medium'} hover:text-white transition-colors`;

  // Classes pour les liens du dropdown
  const getDropdownLinkClasses = (active) =>
    `block px-4 py-2 ${
      active
        ? 'bg-primary text-gray-100 font-bold'
        : 'text-primary-700 hover:bg-primary hover:text-gray-100'
    } transition-colors`;

  // Sous-menus
  const solutionsLinks = [
    { name: 'Paiements', routeName: 'solutions.paiements' },
    { name: 'Transport & Réservation', routeName: 'solutions.transport.reservation' },
    { name: 'Commande & Livraison', routeName: 'solutions.commande.livraison' },
  ];

  const partenariatLinks = [
    { name: 'Chauffeur', routeName: 'partenariat.chauffeur' },
    { name: 'Livreur', routeName: 'partenariat.livreur' },
    { name: 'Marchand', routeName: 'partenariat.marchand.paiement' },
  ];

  // Fonction pour ouvrir le dropdown
  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenDropdown(menuName);
  };

  // Fonction pour fermer le dropdown avec un délai
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      timeoutRef.current = null;
    }, 200); // Délai de 200ms
  };

  // Nettoyage du timeout lorsqu'un composant est démonté
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="bg-primary border-b border-border">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Top Navigation"
      >
        <div className="w-full py-6 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" aria-label="Retour à l'accueil" className='flex flex-row gap-0'>
              <img
                className="h-10 w-auto"
                src="/images/logo/brandingGn.png"
                alt="Logo Lassiri"
                loading="lazy"
              />
              <img
                className="h-10 w-auto"
                src="/images/logo/logo-lassiri.png"
                alt="Logo Lassiri"
                loading="lazy"
              />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:flex">
              {/* Lien Accueil */}
              <Link
                href={route('welcome')}
                className={getLinkClasses(isActiveRoute('welcome'))}
              >
                Accueil
              </Link>

              {/* Menu Solutions */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('solutions')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={route('solutions.index')}
                  className={getLinkClasses(isActiveRoute('solutions.*'))}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === 'solutions'}
                >
                  Solutions
                </Link>
                <div
                  className={`absolute left-0 mt-2 w-48 bg-gray-50 shadow-lg rounded-md py-2 z-50 ${
                    openDropdown === 'solutions' ? 'block' : 'hidden'
                  }`}
                  role="menu"
                  aria-label="Menu Solutions"
                  onMouseEnter={() => handleMouseEnter('solutions')}
                  onMouseLeave={handleMouseLeave}
                >
                  {solutionsLinks.map((link) => (
                    <Link
                      key={link.routeName}
                      href={route(link.routeName)}
                      className={getDropdownLinkClasses(isActiveRoute(link.routeName))}
                      role="menuitem"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Menu Partenariat */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('partenariat')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={route('partenariat.index')}
                  className={getLinkClasses(isActiveRoute('partenariat.*'))}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === 'partenariat'}
                >
                  Partenariat
                </Link>
                <div
                  className={`absolute left-0 mt-2 w-48 bg-gray-50 shadow-lg rounded-md py-2 z-50 ${
                    openDropdown === 'partenariat' ? 'block' : 'hidden'
                  }`}
                  role="menu"
                  aria-label="Menu Partenariat"
                  onMouseEnter={() => handleMouseEnter('partenariat')}
                  onMouseLeave={handleMouseLeave}
                >
                  {partenariatLinks.map((link) => (
                    <Link
                      key={link.routeName}
                      href={route(link.routeName)}
                      className={getDropdownLinkClasses(isActiveRoute(link.routeName))}
                      role="menuitem"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Centre d'aide */}
              <Link
                href={route('centre.aide')}
                className={getLinkClasses(isActiveRoute('centre.aide'))}
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
              aria-haspopup="true"
              aria-expanded="false"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
