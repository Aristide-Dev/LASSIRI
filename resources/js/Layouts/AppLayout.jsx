import { useState } from 'react';
import { Link } from '@inertiajs/react';
import Header from '@/Components/Layout/Header';
import Footer from '@/Components/Layout/Footer';
import MobileMenu from '@/Components/Layout/MobileMenu';
import BackToTop from '@/Components/BackToTop';

export default function AppLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-forground">
      <Header onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      {children}

      {/* Bouton Back to Top */}
      <BackToTop />
      <Footer />
    </div>
  );
}