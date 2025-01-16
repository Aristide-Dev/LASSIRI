import { motion } from 'framer-motion';
import CompanyInfo from './Footer/CompanyInfo';
import FooterSection from './Footer/FooterSection';
import Copyright from './Footer/Copyright';
import { Link } from '@inertiajs/react';

import {
  GooglePlayButton,
  AppStoreButton,
  AppGalleryButton,
  ButtonsContainer,
} from "react-mobile-app-button";

const footerSections = [
  {
    title: 'Solutions',
    links: [
      { label: 'Transactions', href: route('solutions.transactions.finances') },
      { label: 'Paiements', href: route('solutions.paiements') },
      { label: 'Transport', href: route('solutions.transport.reservation') },
      { label: 'Livraison', href: route('solutions.commande.livraison') },
      { label: 'Colis & Courriers', href: route('solutions.colis.courriers') },
    ],
  },
  {
    title: 'Partenariat',
    links: [
      { label: 'Chauffeur', href: route('partenariat.chauffeur') },
      { label: 'Livreur', href: route('partenariat.livreur') },
      { label: 'Marchand & Paiements', href: route('partenariat.marchand.paiement') },
      { label: 'Marchand & Livraison', href: route('partenariat.marchand.livraison') },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Centre d\'aide', href: route('centre.aide') },
      // { label: 'À propos', href: route('a.propos') },

      { label: 'À propos', href: null, type: 'action', actionKey: 'openAbout' },
      { label: 'Contact', href: null, type: 'action', actionKey: 'openContact' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Confidentialité', href: '#' },
      { label: 'CGU', href: '#' },
    ],
  },
];


const APKUrl = "https://play.google.com/store/apps/details?id=host.exp.exponent";
const IOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";

export default function Footer({ setContactOpen, setDownloadOpen, setAboutOpen }) {
  return (
    <footer className="bg-black border-t border-gray-200 shadow-lg" aria-label="Pied de page">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <motion.div
          className="xl:grid xl:grid-cols-3 xl:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >
          <div className="xl:col-span-1">
            <CompanyInfo />
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerSections.slice(0, 2).map((section) => (
                <FooterSection key={section.title} {...section} />
              ))}
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerSections.slice(2).map((section) => (
                <FooterSection key={section.title} {...section} setContactOpen={setContactOpen} setAboutOpen={setAboutOpen} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-5 justify-center items-center">
        <GooglePlayButton
          url={APKUrl}
          theme={"light"}
          width={200}
          className={"custom-style GooglePlayButton bg-white border-none"}
        />
        <AppStoreButton
          url={IOSUrl}
          theme={"light"}
          width={200}
          className={"custom-style AppStoreButton bg-white border-none"}
        />
        <AppGalleryButton
          url={IOSUrl}
          theme={"light"}
          width={200}
          className={"custom-style AppGalleryButton bg-white border-none"}
        />
      </div>



      <Copyright />
    </footer>
  );
}