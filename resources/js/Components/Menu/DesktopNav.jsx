import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { menuItems } from '../Layout/MenuItems';
import { usePage } from '@inertiajs/react';

export const DesktopNav = ({ setContactOpen, setDownloadOpen }) => {
  const { url } = usePage();

  // État pour afficher ou masquer le mega-menu
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  // Vérifie si la route courante correspond à la route
  const isActiveRoute = (routeName) => route().current(routeName);

  // Sous-items (child)
  const renderSubMenuItem = (child) => {
    const isChildActive = child.href && isActiveRoute(child.href);

    if (child.type === 'action') {
      return (
        <button
          key={child.label}
          onClick={() => {
            if (child.actionKey === 'openContact') {
              setContactOpen?.(true);
            }
            if (child.actionKey === 'openDownload') {
              setDownloadOpen?.(true);
            }
          }}
          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
        >
          {child.label}
        </button>
      );
    }

    return (
      <a
        key={child.label}
        href={child.href ? route(child.href) : '#'}
        className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
          isChildActive ? 'font-semibold text-primary-700' : 'text-gray-800'
        }`}
      >
        {child.label}
      </a>
    );
  };

  // Items (parent)
  const renderMenuItem = (item) => {
    const isActive = item.href && isActiveRoute(item.href);
    const isDropdownActive =
      (item.actif && isActiveRoute(item.actif)) ||
      item.children?.some((child) => child.href && isActiveRoute(child.href));

    return (
      <div key={item.label} className="px-4 py-2">
        {!item.children ? (
          item.type === 'action' ? (
            <button
              onClick={() => {
                if (item.actionKey === 'openContact') setContactOpen?.(true);
                if (item.actionKey === 'openDownload') setDownloadOpen?.(true);
              }}
              className="text-sm hover:underline"
            >
              {item.label}
            </button>
          ) : (
            <a
              href={item.href ? route(item.href) : '#'}
              className={`text-sm hover:underline ${
                isActive || isDropdownActive ? 'font-semibold text-primary-700' : 'text-gray-800'
              }`}
            >
              {item.label}
            </a>
          )
        ) : (
          // Parent ayant des children
          <div>
            <div className={`text-sm hover:underline ${isDropdownActive ? 'font-semibold text-primary-700' : 'text-gray-800'}`}>
              {item.label}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="hidden md:flex items-center justify-between w-full bg-transparent px-4 py-3 relative">
      {/* Bouton "Menu" à droite */}
      <div className="flex items-center space-x-4">
        <button
          className="text-gray-800 text-sm font-medium hover:underline"
          onClick={() => setShowMegaMenu(!showMegaMenu)}
        >
          Menu
        </button>
      </div>

      {/* Mega-menu (quand showMegaMenu === true) */}
      {showMegaMenu && (
        <div
          className="
            absolute top-full left-0 w-full
            bg-white
            mt-0
            shadow-lg
            grid grid-cols-3
            py-4
          "
        >
          {/* Colonne 1 (MenuItems) */}
          <div className="border-r border-gray-200">
            {menuItems.map((item) => renderMenuItem(item))}
          </div>

          {/* Colonne 2 & 3 (ex. Sous-items, images, etc.) */}
          <div className="col-span-2 px-4">
            <h3 className="font-bold text-gray-700 mb-2">Services & Avantages</h3>
            <p className="text-sm text-gray-600">
              Ici vous pouvez ajouter des blocs explicatifs, des images, etc.
              par exemple “Airport Guides”, “Rides”, “GrabFood”, ...
            </p>
            {/* Ou faire un .map pour autre contenu */}
          </div>
        </div>
      )}
    </nav>
  );
};
