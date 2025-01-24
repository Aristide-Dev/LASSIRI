import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { TrendingUp, Users, Globe, ChartBar, Download, ExternalLink } from 'lucide-react';

function Investisseurs() {
  const metriques = [
    {
      id: 1,
      chiffre: "150%",
      label: "Croissance annuelle",
      icon: <TrendingUp className="w-8 h-8 text-primary-600" />,
      description: "Une croissance soutenue sur tous nos marchés"
    },
    {
      id: 2,
      chiffre: "500K+",
      label: "Utilisateurs actifs",
      icon: <Users className="w-8 h-8 text-primary-600" />,
      description: "Une base d'utilisateurs en forte expansion"
    },
    {
      id: 3,
      chiffre: "15",
      label: "Pays couverts",
      icon: <Globe className="w-8 h-8 text-primary-600" />,
      description: "Une présence panafricaine grandissante"
    },
    {
      id: 4,
      chiffre: "$25M",
      label: "Volume de transactions",
      icon: <ChartBar className="w-8 h-8 text-primary-600" />,
      description: "Un volume en croissance constante"
    }
  ];

  const documents = [
    {
      id: 1,
      titre: "Rapport Annuel 2023",
      description: "Performance financière et opérationnelle détaillée",
      type: "PDF",
      taille: "2.5 MB"
    },
    {
      id: 2,
      titre: "Présentation Investisseurs",
      description: "Vision stratégique et opportunités de croissance",
      type: "PDF",
      taille: "1.8 MB"
    },
    {
      id: 3,
      titre: "Rapport ESG",
      description: "Notre impact environnemental et social",
      type: "PDF",
      taille: "1.2 MB"
    }
  ];

  return (
    <AppLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Relations Investisseurs
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Découvrez comment Lassiri transforme le paysage du commerce digital en Afrique 
              et crée de la valeur pour ses investisseurs.
            </p>
            <button className="bg-white text-primary-900 px-8 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors">
              Télécharger la présentation investisseurs
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Métriques Clés */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Métriques Clés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metriques.map(metrique => (
              <div key={metrique.id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  {metrique.icon}
                  <span className="text-3xl font-bold ml-3 text-primary-900">
                    {metrique.chiffre}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {metrique.label}
                </h3>
                <p className="text-gray-600">
                  {metrique.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Proposition de Valeur */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Notre Proposition de Valeur</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Leadership sur le Marché</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    Position dominante dans le commerce digital en Afrique
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    Technologies propriétaires innovantes
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    Forte barrière à l'entrée
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Potentiel de Croissance</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    Marché en pleine expansion
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    Opportunités d'expansion géographique
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    Diversification des services
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Documents Financiers */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Documents Financiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {documents.map(doc => (
              <div key={doc.id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <Download className="w-6 h-6 text-primary-600" />
                  <span className="text-sm text-gray-500">{doc.type} • {doc.taille}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{doc.titre}</h3>
                <p className="text-gray-600 mb-4">{doc.description}</p>
                <button className="text-primary-600 hover:text-primary-800 font-medium flex items-center">
                  Télécharger <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Investisseurs */}
        <section className="text-center bg-primary-50 p-12 rounded-xl">
          <h2 className="text-3xl font-bold mb-6">Contact Relations Investisseurs</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre équipe Relations Investisseurs est à votre disposition pour répondre 
            à vos questions et vous fournir plus d'informations sur Lassiri.
          </p>
          <div className="space-x-4">
            <a 
              href="mailto:investors@lassiri.com" 
              className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Contacter l'équipe IR
            </a>
            <a 
              href="#newsletter" 
              className="inline-flex items-center border border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors"
            >
              S'inscrire aux actualités
            </a>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}

export default Investisseurs;