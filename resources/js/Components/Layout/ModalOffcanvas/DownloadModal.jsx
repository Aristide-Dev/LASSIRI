// DownloadModal.jsx
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, PlayCircle, Apple, Smartphone } from 'lucide-react';

import {
  GooglePlayButton,
  AppStoreButton,
  AppGalleryButton,
  ButtonsContainer,
} from "react-mobile-app-button";


export default function DownloadModal({ isOpen, onClose }) {

  const APKUrl = "https://play.google.com/store/apps/details?id=host.exp.exponent";
  const IOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";

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
    
    useEffect(() => {
      const userAgent = navigator.userAgent.toLowerCase();
      if (/android/i.test(userAgent)) {
        setOs('android');
      } else if (/ipad|iphone|ipod/.test(userAgent)) {
        setOs('ios');
      } else if (/harmony/.test(userAgent)) {
        setOs('harmony');
      } else if (/windows/.test(userAgent)) {
        setOs('windows');
      } else if (/mac/.test(userAgent)) {
        setOs('mac');
      } else if (/linux/.test(userAgent)) {
        setOs('linux');
      } else if (/debian/.test(userAgent)) {
        setOs('debian');
      }
    }, []);
    
    const [os, setOs] = useState('');


  return (
    <AnimatePresence>
      {isOpen && (
        
        <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center min-h-screen h-full"
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
            onClick={onClose}
            className="absolute -top-4 -right-4 p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-5 h-5 text-red-500" />
          </motion.button>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Téléchargez L'app Mobile</h2>
            <h5 className="text-2xl font-medium text-primary lowercase">Rejoignez la révolution digitale avec LASSIRI !</h5>
            <p className="mt-2 text-gray-600">Choisissez votre plateforme préférée</p>
          </div>

          {/* Boutons de téléchargement */}
          <div className="space-y-4 flex flex-col gap-1 justify-center items-center">
            
                  <GooglePlayButton
                    url={APKUrl}
                    theme={"light"}
                    width={300}
                    className={"custom-style GooglePlayButton hover:bg-gray-300 border-none"}
                  />
                  <AppStoreButton
                    url={IOSUrl}
                    theme={"light"}
                    width={300}
                    className={"custom-style AppStoreButton hover:bg-gray-300  border-none"}
                  />
                  <AppGalleryButton
                    url={IOSUrl}
                    theme={"light"}
                    width={300}
                    className={"custom-style AppGalleryButton hover:bg-gray-300  border-none"}
                  />
          </div>
        </motion.div>
      </motion.div>
      )}
    </AnimatePresence>
  );
}
