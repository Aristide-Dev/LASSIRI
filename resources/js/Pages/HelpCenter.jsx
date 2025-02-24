import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import SearchBar from '@/Components/HelpCenter/SearchBar';
import Categories from '@/Components/HelpCenter/Categories';
import FAQ from '@/Components/HelpCenter/FAQ';
import ContactSupport from '@/Components/HelpCenter/ContactSupport';

function HelpCenter() {
  return (
    <AppLayout>
      <Head>
        <title>Centre d'aide | Notre Plateforme</title>
        <meta name="description" content="Centre d'aide et support pour nos utilisateurs" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Comment pouvons-nous vous aider ?
        </h1>
        <SearchBar />
        <Categories />
        <FAQ />
        <ContactSupport />
      </main>
    </AppLayout>
  );
}

export default HelpCenter;