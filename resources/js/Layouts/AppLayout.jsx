import { useState } from 'react';
import Header from '@/Components/Layout/Header';
import Footer from '@/Components/Layout/Footer';
import MobileMenu from '@/Components/Layout/MobileMenu';
import BackToTop from '@/Components/BackToTop';

import ContactOffcanvas from '@/Components/Layout/ModalOffcanvas/ContactOffcanvas';
import DownloadModal from '@/Components/Layout/ModalOffcanvas/DownloadModal';
// import { Head } from '@inertiajs/react'; // À utiliser si vous souhaitez ajouter des meta tags

export default function AppLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);
  // const [isLivraisonOpen, setLivraisonOpen] = useState(false);
  const [isDownloadOpen, setDownloadOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Si vous souhaitez ajouter un titre ou des meta tags */}
      {/* <Head>
        <title>Mon Application</title>
        <meta name="description" content="Description de la page" />
      </Head> */}
      
      <Header
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        setContactOpen={setContactOpen}
        // setOffcanvasLivraisonOpen={setLivraisonOpen}
        setDownloadOpen={setDownloadOpen}
      />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        setContactOpen={setContactOpen}
        // setOffcanvasLivraisonOpen={setLivraisonOpen}
        setDownloadOpen={setDownloadOpen}
      />

      <main className="flex-grow mt-32 pt-10 z-10">
        {children}
      </main>


      <ContactOffcanvas isOpen={isContactOpen} onClose={() => setContactOpen(false)} />
      {/* <LivraisonOffcanvas isOpen={isLivraisonOpen} onClose={() => setLivraisonOpen(false)} /> */}
      <DownloadModal isOpen={isDownloadOpen} onClose={() => setDownloadOpen(false)} />

      <BackToTop />
      <Footer />
    </div>
  );
}
