import { Link } from '@inertiajs/react';
import { X } from 'lucide-react';

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex z-40 lg:hidden border">
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-xs bg-background h-screen border-r shadow-xl">
        <div className="absolute top-0 right-0 -mr-12 pt-2">
          <button
            type="button"
            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none text-red-500 focus:ring-2 focus:ring-inset focus:ring-red-500"
            onClick={onClose}
          >
            <span className="sr-only">Fermer le menu</span>
            <X className="h-6 w-6 text-red-500" />
          </button>
        </div>
        <div className="flex-1 pt-5 pb-4 overflow-y-auto h-auto">
          <div className="flex-shrink-0 flex items-center px-4">
            <img
              className="h-8 w-auto"
                src="/images/logo/logo-lassiri.png"
              alt="Logo"
            />
          </div>
          <nav className="mt-5 px-2 space-y-1">
            <Link
              href={route('solutions.index')}
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent transition-colors"
            >
              Solutions
            </Link>
            <Link
              href={route('partenariat.index')}
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent transition-colors"
            >
              Partenariat
            </Link>
            <Link
              href={route('centre.aide')}
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent transition-colors"
            >
              Centre d'aide
            </Link>
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-border p-4">
          {/* <Link
            href={route('login')}
            className="btn-accent flex-1"
          >
            Connexion
          </Link> */}
          <Link
            href="#"
            className="btn-primary flex-1 ml-3"
          >
              Telecharger App
          </Link>
        </div>
      </div>
    </div>
  );
}