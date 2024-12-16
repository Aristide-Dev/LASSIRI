import { Link, usePage } from '@inertiajs/react';
import { Menu, Download, X, PlayCircle, Apple, Smartphone } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence} from 'framer-motion';

export default function Header({ onMobileMenuToggle }) {
  const { url } = usePage();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [os, setOs] = useState('');
  const timeoutRef = useRef(null);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/android/i.test(userAgent)) {
      setOs('android');
    } else if (/ipad|iphone|ipod/.test(userAgent)) {
      setOs('ios');
    } else if (/harmony/.test(userAgent)) {
      setOs('harmony');
    }
  }, []);

  const isActiveRoute = (routeName) => route().current(routeName);

  const getLinkClasses = (active) =>
    `relative text-base font-medium transition-colors duration-200 hover:text-primary group ${
      active ? 'text-primary' : 'text-gray-700'
    }`;

  const getDropdownLinkClasses = (active) =>
    `block w-full px-4 py-2 text-sm transition-colors duration-200 ${
      active
        ? 'bg-primary/10 text-primary font-medium'
        : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
    }`;

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const handleFocus = (menu) => {
    setOpenDropdown(menu);
  };

  const handleBlur = () => {
    setOpenDropdown(null);
  };

  const downloadLinks = {
    android: {
      url: 'https://play.google.com/store/apps/details?id=com.lassiri.app',
      colors: 'from-[#00C853] to-[#69F0AE]',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg'
    },
    ios: {
      url: 'https://apps.apple.com/app/lassiri/id123456789',
      colors: 'from-[#000000] to-[#434343]',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg'
    },
    harmony: {
      url: '#',
      colors: 'from-[#C10D31] to-[#FF1744]',
      icon: '/images/huawei-appgallery-badge.svg'
    }
  };

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

  return (
    <header className="fixed w-full top-0 z-20 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top Navigation">
        <div className="w-full py-6 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" aria-label="Retour à l'accueil" className="flex flex-row gap-0">
              <img
                className="h-10 w-auto"
                src="/images/logo/brandingGn.png"
                alt="Logo Lassiri"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Bouton Télécharger */}
          <div className="flex ml-10 space-x-4">
            <button
              onClick={() => setModalOpen(true)}
              className="btn-primary inline-flex items-center px-4 py-2 rounded-lg font-medium text-white bg-primary hover:bg-primary-600"
              aria-label="Télécharger l'application"
            >
              <Download className="h-5 w-5 mr-2" />
              Télécharger App
            </button>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" aria-label="Retour à l'accueil" className="flex flex-row gap-0">
              <img
                className="h-10 w-auto"
                src="/images/logo/logo-lassiri.png"
                alt="Logo Lassiri"
                loading="lazy"
              />
            </Link>

            {/* Navigation principale */}
            <div className="hidden ml-10 space-x-8 md:flex">
              <Link href={route('welcome')} className={getLinkClasses(isActiveRoute('welcome'))}>
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
                  Nos Services
                </Link>
                <div
                  className={`absolute left-0 mt-2 w-48 bg-gray-50 shadow-lg rounded-md py-2 z-50 ${openDropdown === 'solutions' ? 'block' : 'hidden'
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

              <Link
                href={route('comment.ca.marche')}
                className={getLinkClasses(isActiveRoute('comment.ca.marche'))}
              >
                Comment ça marche ?
              </Link>

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
                  Entreprises
                </Link>
                <div
                  className={`absolute left-0 mt-2 w-48 bg-gray-50 shadow-lg rounded-md py-2 z-50 ${openDropdown === 'partenariat' ? 'block' : 'hidden'
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

              <Link
                href={route('a.propos')}
                className={getLinkClasses(isActiveRoute('a.propos'))}
              >
                À propos de nous
              </Link>

              <Link
                href={route('centre.aide')}
                className={getLinkClasses(isActiveRoute('centre.aide'))}
              >
                Centre d'aide
              </Link>
            </div>
          </div>

          {/* Menu mobile */}
          <motion.button
            className="lg:hidden p-2"
            onClick={onMobileMenuToggle}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>
      </nav>

      {/* Modal de téléchargement */}
      {/* Modal de téléchargement */}
<AnimatePresence>
  {isModalOpen && (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center min-h-screen h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 relative mt-16"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
      >
        {/* Bouton fermeture */}
        <motion.button
          onClick={() => setModalOpen(false)}
          className="absolute -top-4 -right-4 p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-5 h-5 text-red-500" />
        </motion.button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Téléchargez Lassiri</h2>
          <p className="mt-2 text-gray-600">Choisissez votre plateforme préférée</p>
        </div>

        <div className="space-y-4">
          {/* Google Play */}
          <motion.a
            href={downloadLinks.android.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full p-4 rounded-xl bg-gradient-to-r from-[#00C853] to-[#69F0AE] hover:shadow-lg transition-all ${
              os === 'android' ? 'ring-4 ring-[#00C853]/20' : ''
            }`}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <PlayCircle className="h-8 w-8 text-white mr-3" />
                <div className="text-left">
                  <p className="text-xs text-white/90">TÉLÉCHARGER SUR</p>
                  <p className="text-lg font-semibold text-white">Google Play</p>
                </div>
              </div>
              {os === 'android' && (
                <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm">
                  Recommandé
                </span>
              )}
            </div>
          </motion.a>

          {/* App Store */}
          <motion.a
            href={downloadLinks.ios.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full p-4 rounded-xl bg-gradient-to-r from-[#000000] to-[#434343] hover:shadow-lg transition-all ${
              os === 'ios' ? 'ring-4 ring-black/20' : ''
            }`}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Apple className="h-8 w-8 text-white mr-3" />
                <div className="text-left">
                  <p className="text-xs text-white/90">TÉLÉCHARGER SUR L'</p>
                  <p className="text-lg font-semibold text-white">App Store</p>
                </div>
              </div>
              {os === 'ios' && (
                <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm">
                  Recommandé
                </span>
              )}
            </div>
          </motion.a>

          {/* AppGallery */}
          <motion.a
            href={downloadLinks.harmony.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full p-4 rounded-xl bg-gradient-to-r from-[#C10D31] to-[#FF1744] hover:shadow-lg transition-all ${
              os === 'harmony' ? 'ring-4 ring-[#C10D31]/20' : ''
            }`}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Smartphone className="h-8 w-8 text-white mr-3" />
                <div className="text-left">
                  <p className="text-xs text-white/90">TÉLÉCHARGER SUR</p>
                  <p className="text-lg font-semibold text-white">AppGallery</p>
                </div>
              </div>
              {os === 'harmony' && (
                <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm">
                  Recommandé
                </span>
              )}
            </div>
          </motion.a>
        </div>

        {/* Badge OS détecté */}
        {os !== 'unknown' && (
          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-700">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Système {os === 'android' ? 'Android' : os === 'ios' ? 'iOS' : 'Harmony OS'} détecté
            </span>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </header>
  );
}
