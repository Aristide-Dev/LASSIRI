import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { FAQ as FAQComponent } from '@/Components/HelpCenter/FAQ';

function FAQ() {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Foire aux questions</h1>
        {/* Ajoutez votre contenu ici */}
        <FAQComponent />
      </div>
    </AppLayout>
  );
}

export default FAQ; 