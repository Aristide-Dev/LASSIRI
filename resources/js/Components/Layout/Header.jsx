import { Link } from '@inertiajs/react';
import { Menu } from 'lucide-react';

export default function Header({ onMobileMenuToggle }) {
  return (
    <header className="bg-primary border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Logo</span>
              <img
                className="h-10 w-auto"
                src="/images/logo/logo-lassiri.png"
                alt="Logo"
              />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link
                href={route('solutions.index')}
                className="text-base font-medium text-gray-200 hover:text-white transition-colors"
              >
                Solutions
              </Link>
              <Link
                href={route('partenariat.index')}
                className="text-base font-medium text-gray-200 hover:text-white transition-colors"
              >
                Partenariat
              </Link>
              <Link
                href={route('centre.aide')}
                className="text-base font-medium text-gray-200 hover:text-white transition-colors"
              >
                Centre d'aide
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Link
              href="#"
              className="btn-accent"
            >
              Telecharger App
            </Link>
            {/* <Link
              href={route('register')}
              className="btn-primary"
            >
              Inscription
            </Link> */}
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-foreground hover:text-white transition-colors"
              onClick={onMobileMenuToggle}
            >
              <span className="sr-only">Ouvrir le menu</span>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}