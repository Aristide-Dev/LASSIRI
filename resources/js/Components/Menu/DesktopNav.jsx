import React from 'react';
import { ChevronDown } from 'lucide-react';
import { menuItems } from '../Layout/MenuItems';
import { usePage } from '@inertiajs/react';

export const DesktopNav = ({ setContactOpen, setDownloadOpen }) => {
  const { url } = usePage();

  const isActiveRoute = (routeName) => route().current(routeName);

  return (
    <nav className="hidden md:flex items-center space-x-1 px-2 py-1">
      {menuItems.map((item) => {
        const isActive = item.href && item.href !== '#' && isActiveRoute(item.href);
        const isDropdownActive = item.actif && item.actif !== '#' && isActiveRoute(item.actif);

        return (
          <div key={item.label} className="relative group">
            {/* -- Lien ou bouton principal -- */}
            {!item.children ? (
              <>
                {item.type === 'action' ? (
                  // Par exemple ouvrir le offcanvas contact
                  <button
                    key={item.label}
                    onClick={() => {
                      if (item.actionKey === 'openContact') {
                        setContactOpen(true);
                      }
                    }}
                    className="flex items-center px-2 py-1 rounded-md transition-colors text-md font-medium text-primary-100 hover:bg-primary-700"
                  >
                    {item.label}
                  </button>
                ) : (

                  <a
                    href={item.href && item.href !== '#' ? route(item.href) : '#'}
                    className={`flex items-center px-2 py-1 rounded-md transition-colors text-md font-medium
                ${isActive ? 'bg-primary-800 text-white' : 'text-primary-100 hover:bg-primary-700'}
              `}
                  >
                    {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                    <span>{item.label}</span>
                  </a>
                )}
              </>
            ) : (
              <>

                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className={`flex items-center px-2 py-1 rounded-md transition-colors text-md font-medium
                    ${isDropdownActive ? 'bg-primary-800 text-white' : 'text-primary-100 hover:bg-primary-700'}
                  `}
                >
                  {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                  <span>{item.label}</span>
                  <ChevronDown className="w-3 h-3 ml-1" />
                </button>



                {/* -- Mega Menu Container -- */}
                <div
                  className={`
                    absolute left-0 top-full bg-white border border-primary-200 rounded-md shadow-lg py-4
                    hidden group-hover:grid grid-cols-2 gap-4 min-w-[480px] z-50
                    opacity-0 transform scale-95
                    transition-all duration-200 ease-out
                    group-hover:opacity-100 group-hover:scale-100
                  `}
                >
                  {item.children.map((child) => {
                    const isChildActive =
                      child.href && child.href !== '#' && isActiveRoute(child.href);

                    return (
                      <div key={child.label} className="px-4 py-2 hover:bg-primary-200 rounded-md transition-colors">
                        <a
                          href={child.href && child.href !== '#' ? route(child.href) : '#'}
                          className={`
                            block group/item
                            ${isChildActive ? 'text-primary-700' : 'text-primary-600 hover:text-primary-800'}
                            font-medium
                          `}
                        >
                          <div className="flex items-center mb-1">
                            {child.icon && (
                              <child.icon
                                className={`w-5 h-5 mr-2
                                  ${isChildActive ? 'text-primary-600' : 'text-primary-400 group-hover/item:text-primary-600'}
                                `}
                              />
                            )}
                            <span>{child.label}</span>
                          </div>
                          <p className="text-sm text-gray-600 ml-7 leading-snug">
                            {child.description || `Accédez à ${child.label} pour gérer vos données.`}
                          </p>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        );
      })}
    </nav>
  );
};
