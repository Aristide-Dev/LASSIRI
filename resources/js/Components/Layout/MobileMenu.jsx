import { Link, usePage } from '@inertiajs/react';
import { X, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useCallback, useState } from 'react';

export default function MobileMenu({ isOpen, onClose }) {
  const { url } = usePage(); // pour extraire l'URL ou bien route().current() en direct si Ziggy est dispo
  const closeButtonRef = useRef(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      if (closeButtonRef.current) {
        closeButtonRef.current.focus();
      }
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu((prev) => (prev === menuName ? null : menuName));
  };

  // Fonction utilitaire pour déterminer si une route est active.
  const isActiveRoute = (routeName) => route().current(routeName);

  // Pour les menus parentaux, on peut vérifier un pattern de route (par exemple 'solutions.*')
  const isSolutionsActive = route().current('solutions.*');
  const isPartenariatActive = route().current('partenariat.*');

  // Classes de base pour les liens
  const baseLinkClasses = "block px-3 py-2 rounded-md text-base font-medium transition-colors";
  const baseSubLinkClasses = "block px-3 py-2 rounded-md text-sm font-medium transition-colors";
  
  // Classes pour le lien actif (par exemple fond primaire, texte blanc)
  const activeClasses = "bg-primary text-white hover:text-white";
  const inactiveClasses = "text-foreground hover:text-primary hover:bg-accent";

  return (
    <div
      className="fixed inset-0 z-40 flex lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-menu-heading"
    >
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Menu panel */}
      <div className="relative w-full max-w-xs bg-background h-screen border-r shadow-xl flex flex-col">
        {/* Bouton de fermeture */}
        <div className="absolute top-0 right-0 mt-2 mr-2">
          <button
            ref={closeButtonRef}
            type="button"
            className="flex items-center justify-center h-10 w-10 rounded-full focus:outline-none text-red-500 focus:ring-2 focus:ring-inset focus:ring-red-500 bg-white shadow"
            onClick={onClose}
            aria-label="Fermer le menu"
          >
            <X className="h-6 w-6 text-red-500" />
          </button>
        </div>

        {/* Logo et Titre (invisible) */}
        <div className="flex items-center px-4 py-5">
          <img
            className="h-8 w-auto"
            src="/images/logo/brandingGn.png"
            alt="Lassiri Branding"
          />
          <img
            className="h-8 w-auto ml-2"
            src="/images/logo/logo-lassiri.png"
            alt="Lassiri Logo"
          />
        </div>
        
        <h2 id="mobile-menu-heading" className="sr-only">Menu mobile</h2>

        {/* Conteneur scrollable */}
        <div className="flex-1 overflow-y-auto h-full pb-4">
          <nav className="px-2 space-y-1">
            <Link
              href={route('welcome')}
              className={`${baseLinkClasses} ${isActiveRoute('welcome') ? activeClasses : inactiveClasses}`}
            >
              Accueil
            </Link>

            {/* Solutions Section */}
            <div>
              <button
                type="button"
                onClick={() => toggleSubmenu('solutions')}
                className={`${baseLinkClasses} ${isSolutionsActive ? activeClasses : inactiveClasses} w-full flex items-center justify-between focus:outline-none`}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${openSubmenu === 'solutions' ? 'rotate-180' : ''}`}
                />
              </button>
              {openSubmenu === 'solutions' && (
                <div className="ml-6 mt-1 space-y-1">
                  <Link
                    href={route('solutions.index')}
                    className={`${baseSubLinkClasses} ${isActiveRoute('solutions.index') ? activeClasses : inactiveClasses}`}
                  >
                    Aperçu
                  </Link>
                  <Link
                    href="#"
                    className={`${baseSubLinkClasses} ${route().current('some.financial.route') ? activeClasses : inactiveClasses}`}
                  >
                    Transactions Financières
                  </Link>
                  <Link
                    href={route('solutions.paiements')}
                    className={`${baseSubLinkClasses} ${isActiveRoute('solutions.paiements') ? activeClasses : inactiveClasses}`}
                  >
                    Paiement
                  </Link>
                  <Link
                    href={route('solutions.transport.reservation')}
                    className={`${baseSubLinkClasses} ${isActiveRoute('solutions.transport.reservation') ? activeClasses : inactiveClasses}`}
                  >
                    Transport & Réservation
                  </Link>
                  <Link
                    href={route('solutions.commande.livraison')}
                    className={`${baseSubLinkClasses} ${isActiveRoute('solutions.commande.livraison') ? activeClasses : inactiveClasses}`}
                  >
                    Commande & Livraison
                  </Link>
                  <Link
                    href="#"
                    className={`${baseSubLinkClasses} ${route().current('some.colis.route') ? activeClasses : inactiveClasses}`}
                  >
                    Colis & Courriers
                  </Link>
                </div>
              )}
            </div>

            {/* Partenariat Section */}
            <div>
              <button
                type="button"
                onClick={() => toggleSubmenu('partenariat')}
                className={`${baseLinkClasses} ${isPartenariatActive ? activeClasses : inactiveClasses} w-full flex items-center justify-between focus:outline-none`}
              >
                <span>Partenariat</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${openSubmenu === 'partenariat' ? 'rotate-180' : ''}`}
                />
              </button>
              {openSubmenu === 'partenariat' && (
                <div className="ml-6 mt-1 space-y-1">
                  <Link
                    href={route('partenariat.index')}
                    className={`${baseSubLinkClasses} ${isActiveRoute('partenariat.index') ? activeClasses : inactiveClasses}`}
                  >
                    Aperçu
                  </Link>
                  <Link
                    href={route('partenariat.chauffeur')}
                    className={`${baseSubLinkClasses} ${isActiveRoute('partenariat.chauffeur') ? activeClasses : inactiveClasses}`}
                  >
                    Chauffeur
                  </Link>
                  <Link
                    href={route('partenariat.livreur')}
                    className={`${baseSubLinkClasses} ${isActiveRoute('partenariat.livreur') ? activeClasses : inactiveClasses}`}
                  >
                    Livreur
                  </Link>
                  <Link
                    href={route('partenariat.marchand.paiement')}
                    className={`${baseSubLinkClasses} ${isActiveRoute('partenariat.marchand.paiement') ? activeClasses : inactiveClasses}`}
                  >
                    Marchand - Paiement
                  </Link>
                  <Link
                    href="#"
                    className={`${baseSubLinkClasses} ${route().current('some.marchand.livraison.route') ? activeClasses : inactiveClasses}`}
                  >
                    Marchand - Livraison
                  </Link>
                </div>
              )}
            </div>

            {/* Centre d'aide */}
            <Link
              href={route('centre.aide')}
              className={`${baseLinkClasses} ${isActiveRoute('centre.aide') ? activeClasses : inactiveClasses}`}
            >
              Centre d'aide
            </Link>
          </nav>
        </div>

        {/* CTA Buttons */}
        <div className="flex-shrink-0 border-t border-border p-4 flex justify-end">
          <Link
            href="#"
            className="btn-primary flex-1"
          >
            Télécharger App
          </Link>
        </div>
      </div>
    </div>
  );
}
