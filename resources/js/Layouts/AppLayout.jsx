import React, { useEffect, useState } from 'react';
import { Inertia } from '@inertiajs/inertia'; // Pour écouter les events Inertia
import { usePage } from '@inertiajs/react';
import { ArrowUp, X, Bell, Menu } from 'lucide-react';

import Header from '@/Components/Layout/Header';
import Footer from '@/Components/Layout/Footer';
import BackToTop from '@/Components/BackToTop';
import ContactOffcanvas from '@/Components/Layout/ModalOffcanvas/ContactOffcanvas';
import DownloadModal from '@/Components/Layout/ModalOffcanvas/DownloadModal';
import LoaderOverlay from '@/Components/LoaderOverlay'; // Votre loader (overlay)

export default function AppLayout({ children }) {
  const { flash } = usePage().props;

  // État "transitioning" : indique qu'Inertia fait un changement de page
  const [transitioning, setTransitioning] = useState(false);

  // État pour la gestion de l’UI locale (flash, backToTop, etc.)
  const [state, setState] = useState({
    showFlash: !!flash.message,
    showBackToTop: false,
    isMobileMenuOpen: false,
    notifications: [],
    isScrolled: false,
  });

  // États pour vos modals/offcanvas
  const [isContactOpen, setContactOpen] = useState(false);
  const [isDownloadOpen, setDownloadOpen] = useState(false);

  const updateState = (updates) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  // Gérer l’apparition du bouton "Back to Top" selon le scroll
  useEffect(() => {
    const handleScroll = () => {
      updateState({
        showBackToTop: window.scrollY > 400,
        isScrolled: window.scrollY > 0,
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gérer le flash message (disparaît après 5s)
  useEffect(() => {
    if (flash.message) {
      updateState({ showFlash: true });
      const timer = setTimeout(() => updateState({ showFlash: false }), 5000);
      return () => clearTimeout(timer);
    }
  }, [flash.message]);

  // Écouter les événements d’Inertia pour la navigation
  useEffect(() => {
    const onStart = () => setTransitioning(true);
    const onFinish = () => setTransitioning(false);
  
    Inertia.on('start', onStart);
    Inertia.on('finish', onFinish);
  
    return () => {
      Inertia.off('start', onStart);
      Inertia.off('finish', onFinish);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Overlay de chargement si on est en pleine transition Inertia */}
      {transitioning && <LoaderOverlay />}

      {/* Header */}
      <Header 
        setContactOpen={setContactOpen}
        setDownloadOpen={setDownloadOpen}
      />

      {/* Flash Messages */}
      {state.showFlash && flash.message && (
        <div className="fixed top-0 left-0 right-0 z-50 animate-slideDown">
          <div
            className={`max-w-md mx-auto m-4 p-4 rounded-lg shadow-lg ${
              flash.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            } text-white`}
          >
            <div className="flex items-center justify-between">
              <p>{flash.message}</p>
              <button
                onClick={() => updateState({ showFlash: false })}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow mt-24 pt-2  md:mt-28 md:pt-0">{children}</main>

      {/* Offcanvas / Modals */}
      <ContactOffcanvas
        isOpen={isContactOpen}
        onClose={() => setContactOpen(false)}
      />
      <DownloadModal
        isOpen={isDownloadOpen}
        onClose={() => setDownloadOpen(false)}
      />

      {/* Bouton "Back to Top" si state.showBackToTop === true */}
      <BackToTop />

      {/* Footer */}
      <Footer 
        setContactOpen={setContactOpen}
        setDownloadOpen={setDownloadOpen}
      />
    </div>
  );
}
