import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { TopBar } from '@/Components/TopBar';
import { Logo } from './Logo';
import { DesktopNav } from '@/Components/Menu/DesktopNav';
import { MobileNav } from '@/Components/Menu/MobileNav';

const Header = ({ setContactOpen, setDownloadOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour fermer le menu mobile
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed w-full z-50 bg-white/95 shadow-2xl">
      {/* TopBar peut contenir des informations supplémentaires, ou des CTA */}
      <TopBar
        setContactOpen={setContactOpen}
        setDownloadOpen={setDownloadOpen}
      />

      <div className="max-w-7xl mx-auto bg-transparent">
        <div className="flex items-center justify-between py-2 w-full mx-auto px-3">
          {/* Logo */}
          <Logo />

          {/* Menu desktop : visible en md+ */}
          <DesktopNav
            setContactOpen={setContactOpen}
            setDownloadOpen={setDownloadOpen}
          />

          {/* Bouton pour ouvrir/fermer le menu mobile : visible en sm ou md- */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-primary-400 bg-primary-300 ml-auto"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile : visible seulement si isMenuOpen est true */}
      <MobileNav
        isOpen={isMenuOpen}
        onClose={handleCloseMenu}
        setContactOpen={setContactOpen}
        setDownloadOpen={setDownloadOpen}
      />
    </header>
  );
};

export default Header;
