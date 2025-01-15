import React from 'react';
import { ChevronDown } from 'lucide-react';
import { menuItems } from '../Layout/MenuItems';
import { usePage } from '@inertiajs/react';

export const DesktopNav = ({ setContactOpen, setDownloadOpen }) => {
  const { url } = usePage();

  // Vérifie si la route actuelle correspond à routeName
  const isActiveRoute = (routeName) => route().current(routeName);

  /**
   * Rendu d'un sous-item de menu (children).
   * Peut être un lien normal ou un item d'action (type: 'action').
   */
  const renderSubMenuItem = (child) => {
    const isChildActive = child.href && isActiveRoute(child.href);

    // === Sous-item type action ===
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
          className="px-4 py-2 hover:bg-primary-200 rounded-md transition-colors text-left w-full"
        >
          <div className="flex items-center mb-1 text-primary-600 font-medium hover:text-primary-800">
            {child.icon && (
              <child.icon className="w-5 h-5 mr-2 text-primary-400 hover:text-primary-600" />
            )}
            {child.label}
          </div>
          <p className="text-sm text-gray-600 ml-7 leading-snug">
            {child.description || `Accédez à ${child.label}.`}
          </p>
        </button>
      );
    }

    // === Sous-item lien normal ===
    return (
      <div
        key={child.label}
        className={`px-4 py-2 rounded-md transition-colors ${
          isChildActive
            ? 'bg-primary-600 text-white'
            : 'hover:bg-gray-200'
        }`}
      >
        <a
          href={
            child.href && child.href !== '#' ? route(child.href) : '#'
          }
          className={`block font-medium ${
            isChildActive
              ? 'text-white'
              : 'text-primary-600 hover:text-primary-800'
          }`}
        >
          <div className="flex items-center mb-1">
            {child.icon && (
              <child.icon
                className={`w-5 h-5 mr-2 ${
                  isChildActive
                    ? 'text-primary-200'
                    : 'text-black'
                }`}
              />
            )}
            <span>{child.label}</span>
          </div>
          <p
            className={`text-sm ml-7 leading-snug ${
              isChildActive ? 'text-gray-100' : 'text-black'
            }`}
          >
            {child.description || `Accédez à ${child.label}.`}
          </p>
        </a>
      </div>
    );
  };

  /**
   * Rendu d'un item de menu principal (celui dans menuItems).
   */
  const renderMenuItem = (item) => {
    const isActive = item.href && item.href !== '#' && isActiveRoute(item.href);
    // On active le parent si item.actif match la route,
    // ou si un de ses enfants est actif
    const isDropdownActive =
      (item.actif && isActiveRoute(item.actif)) ||
      (item.children?.some((child) => child.href && isActiveRoute(child.href)));

    // Classes de base
    const baseClasses =
      'flex items-center px-2 py-2 rounded-md transition-colors text-md font-medium mx-2';
    // Si le parent ou l'item est actif, on l'affiche différemment
    const activeClasses = (isActive || isDropdownActive)
      ? 'bg-primary text-white'
      : 'text-black hover:bg-primary hover:text-gray-200';

    // === Item sans sous-menu ===
    if (!item.children) {
      if (item.type === 'action') {
        return (
          <button
            onClick={() => {
              if (item.actionKey === 'openContact') {
                setContactOpen?.(true);
              }
              if (item.actionKey === 'openDownload') {
                setDownloadOpen?.(true);
              }
            }}
            className={`${baseClasses} ${activeClasses}`}
          >
            {item.icon && (
              <item.icon className="w-4 h-4 mr-2 text-inherit" />
            )}
            <span>{item.label}</span>
          </button>
        );
      }

      // === Item lien normal ===
      return (
        <a
          href={item.href && item.href !== '#' ? route(item.href) : '#'}
          className={`${baseClasses} ${activeClasses}`}
        >
          {item.icon && <item.icon className="w-4 h-4 mr-2" />}
          <span>{item.label}</span>
        </a>
      );
    }

    // === Item avec sous-menu ===
    return (
      <>
        {/* Bouton parent */}
        <button
          type="button"
          className={`${baseClasses} ${activeClasses}`}
        >
          {item.icon && (
            <item.icon className="w-4 h-4 mr-2 text-inherit" />
          )}
          <span>{item.label}</span>
          <ChevronDown className="w-3 h-3 ml-1" />
        </button>

        {/* Mega-menu container au survol */}
        <div
          className={`
            absolute -left-14 top-full hidden group-hover:grid grid-cols-2 gap-4 min-w-[480px] z-50 
            bg-white border border-primary-200 rounded-md shadow-lg py-4
            opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 
            transition-all duration-200 ease-out
          `}
        >
          {item.children.map((child) => renderSubMenuItem(child))}
        </div>
      </>
    );
  };

  return (
    <nav className="hidden md:flex items-center space-x-1 px-2 py-1">
      {menuItems.map((item) => (
        <div key={item.label} className="relative group">
          {renderMenuItem(item)}
        </div>
      ))}
    </nav>
  );
};
