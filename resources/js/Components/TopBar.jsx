import React from 'react';
import { Download, Mail } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';


export const TopBar = ({setContactOpen, setDownloadOpen}) => (
  <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 bg-white" aria-label="Top Navigation">
        <div className="w-full py-3 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" aria-label="Retour à l'accueil" className="flex flex-row gap-0">
              <img
                className="h-8 w-auto"
                src="/images/logo/brandingGn.png"
                alt="Logo Lassiri"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Bouton Télécharger & Contact */}
          <div className="flex ml-10 space-x-4">
            <button
              onClick={() => setDownloadOpen(true)}
              className="btn-primary inline-flex items-center px-4 py-2 rounded-lg font-medium text-white bg-primary hover:bg-primary-600"
              aria-label="Télécharger l'application"
            >
              <Download className="h-5 w-5 mr-2" />
              Télécharger App
            </button>

            {/* Bouton pour ouvrir l'offcanvas de contact */}
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center px-4 py-2 rounded-lg font-medium text-primary hover:bg-primary hover:text-white border border-gray-200"
              aria-label="Informations de contact"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
);