import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { TopBar } from '@/Components/TopBar';
import { Logo } from './Logo';
import { DesktopNav } from '@/Components/Menu/DesktopNav';
import { MobileNav } from '@/Components/Menu/MobileNav';

const Header = ({ setContactOpen, setDownloadOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full z-50 bg-gradient-to-br from-primary to-gray-800 shadow-md">
      <TopBar setContactOpen={setContactOpen} setDownloadOpen={setDownloadOpen} />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start py-4">
          <Logo />
          <DesktopNav
            setContactOpen={setContactOpen}
            setDownloadOpen={setDownloadOpen}
          />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 bg-primary-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <MobileNav isOpen={isMenuOpen} />
    </header>
  );
};

export default Header;