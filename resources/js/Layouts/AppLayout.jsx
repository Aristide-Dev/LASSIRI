import { useState } from 'react';
import Header from '@/Components/Layout/Header';
import Footer from '@/Components/Layout/Footer';
import MobileMenu from '@/Components/Layout/MobileMenu';
import BackToTop from '@/Components/BackToTop';
// import { Head } from '@inertiajs/react'; // À utiliser si vous souhaitez ajouter des meta tags

export default function AppLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-foreground flex flex-col">
      {/* Si vous souhaitez ajouter un titre ou des meta tags */}
      {/* <Head>
        <title>Mon Application</title>
        <meta name="description" content="Description de la page" />
      </Head> */}
      
      <Header onMobileMenuToggle={toggleMobileMenu} />
      
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />

      <main className="flex-grow">
        {children}
      </main>

      <BackToTop />
      <Footer />
    </div>
  );
}
