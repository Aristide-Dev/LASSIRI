// LoaderOverlay.jsx
import React from 'react';

export default function LoaderOverlay() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center">
      {/* Un simple spinner ou animation */}
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      {/* 
        Ou vous pouvez utiliser un spinner Tailwind ou n’importe quel autre.
        Par exemple, un composant spinner Lucide, un composant Lottie, etc.
      */}
    </div>
  );
}
