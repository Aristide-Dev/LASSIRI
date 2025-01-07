import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { menuItems } from '../Layout/MenuItems';
import { usePage } from '@inertiajs/react';

export const MobileNav = ({
  isOpen,
  onClose,
  setContactOpen,
  setDownloadOpen,
}) => {
  const [openSubmenus, setOpenSubmenus] = useState({});
  const { url } = usePage();

  const isActiveRoute = (routeName) => route().current(routeName);

  const toggleSubmenu = (label) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  if (!isOpen) return null;

  return (
    <nav className="md:hidden bg-white border-t border-gray-200">
      <div className="px-4 py-2">
        {menuItems.map((item) => {
          const isActive =
            item.href && item.href !== '#' && isActiveRoute(item.href);
          // Parent actif si item.actif match la route, ou un child match
          const isDropdownActive =
            (item.actif && isActiveRoute(item.actif)) ||
            (item.children?.some((child) => child.href && isActiveRoute(child.href)));

          // ---- Pas de sous-menu ----
          if (!item.children) {
            if (item.type === 'action') {
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    onClose && onClose();
                    if (item.actionKey === 'openContact') {
                      setContactOpen?.(true);
                    }
                    if (item.actionKey === 'openDownload') {
                      setDownloadOpen?.(true);
                    }
                  }}
                  className={`w-full flex items-center px-2 py-3 rounded-md transition-colors text-md font-medium 
                    ${
                      isActive
                        ? 'bg-primary-800 text-white'
                        : 'text-primary-800 hover:bg-primary-700 hover:text-white'
                    }
                  `}
                >
                  {item.icon && <item.icon className="w-5 h-5 mr-3 text-inherit" />}
                  <span>{item.label}</span>
                </button>
              );
            }

            // Lien normal
            return (
              <a
                key={item.label}
                href={
                  item.href && item.href !== '#'
                    ? route(item.href)
                    : '#'
                }
                onClick={onClose}
                className={`flex items-center px-2 py-3 rounded-md transition-colors text-md font-medium 
                  ${
                    isActive
                      ? 'bg-primary-800 text-white'
                      : 'text-primary-800 hover:bg-primary-700 hover:text-white'
                  }
                `}
              >
                {item.icon && <item.icon className="w-5 h-5 mr-3 text-inherit" />}
                <span>{item.label}</span>
              </a>
            );
          }

          // ---- Avec sous-menu => accordéon ----
          return (
            <div key={item.label} className="border-b border-gray-100 last:border-0">
              <button
                onClick={() => toggleSubmenu(item.label)}
                className={`w-full flex items-center justify-between px-2 py-3 transition-colors text-md font-medium rounded-md
                  ${
                    isDropdownActive
                      ? 'bg-primary-800 text-white'
                      : 'text-primary-800 hover:bg-primary-700 hover:text-white'
                  }
                `}
              >
                <div className="flex items-center">
                  {item.icon && <item.icon className="w-5 h-5 mr-3 text-inherit" />}
                  <span>{item.label}</span>
                </div>
                {openSubmenus[item.label] ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>

              {openSubmenus[item.label] && (
                <div className="pl-6 pt-1 pb-3 bg-gray-200">
                  {item.children.map((child) => {
                    const isChildActive = child.href && isActiveRoute(child.href);

                    if (child.type === 'action') {
                      return (
                        <button
                          key={child.label}
                          onClick={() => {
                            onClose && onClose();
                            if (child.actionKey === 'openContact') {
                              setContactOpen?.(true);
                            }
                            if (child.actionKey === 'openDownload') {
                              setDownloadOpen?.(true);
                            }
                          }}
                          className="flex items-center my-1 py-2 px-2 text-sm transition-colors rounded-md text-primary-700 hover:bg-primary-100"
                        >
                          {child.icon && <child.icon className="w-4 h-4 mr-2 text-inherit" />}
                          <span>{child.label}</span>
                        </button>
                      );
                    }

                    // Sous-item => lien
                    return (
                      <a
                        key={child.label}
                        href={
                          child.href && child.href !== '#'
                            ? route(child.href)
                            : '#'
                        }
                        onClick={onClose}
                        className={`
                          flex items-center my-1 py-2 px-2 text-sm transition-colors rounded-md
                          ${
                            isChildActive
                              ? 'bg-primary-300 text-black font-bold'
                              : 'text-primary-700 hover:bg-primary-100'
                          }
                        `}
                      >
                        {child.icon && <child.icon className="w-4 h-4 mr-2 text-inherit" />}
                        <div>
                          <span className="font-medium">{child.label}</span>
                          {child.description && (
                            <p className={`text-xs ${
                              isChildActive
                                ? 'text-gray-500'
                                : 'text-gray-700'
                            }`}>
                              {child.description}
                            </p>
                          )}
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};
