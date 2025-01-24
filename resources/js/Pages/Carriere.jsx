import React, { useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { FileUp, Users, Target, Award } from 'lucide-react';

function Carriere() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    poste: '',
    experience: '',
    motivation: '',
    cv: null,
  });

  const postes = [
    {
      id: 1,
      titre: "Développeur Full Stack",
      departement: "Tech",
      type: "CDI",
      description: "Rejoignez notre équipe technique pour développer des solutions innovantes.",
      icon: <Users className="w-12 h-12 text-primary-600" />
    },
    {
      id: 2,
      titre: "Business Developer",
      departement: "Commercial",
      type: "CDI",
      description: "Développez notre présence sur le marché et créez des partenariats stratégiques.",
      icon: <Target className="w-12 h-12 text-primary-600" />
    },
    {
      id: 3,
      titre: "Chef de Projet Digital",
      departement: "Produit",
      type: "CDI",
      description: "Pilotez nos projets digitaux et accompagnez leur déploiement.",
      icon: <Award className="w-12 h-12 text-primary-600" />
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
    console.log(formData);
    // TODO: Implement actual form submission
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      cv: e.target.files[0]
    }));
  };

  return (
    <AppLayout>
      {/* Hero Section with Gradient and Animated Background */}
      <div className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold mb-4 animate-fade-in-up">
              Rejoignez l'aventure Lassiri
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-primary-100 animate-fade-in-up animation-delay-200">
              Ensemble, construisons l'avenir du commerce digital en Afrique et contribuons au développement de l'économie locale.
            </p>
            <div className="mt-8 animate-fade-in-up animation-delay-400">
              <a href="#postes" className="bg-white text-primary-900 hover:bg-primary-50 px-8 py-3 rounded-full font-semibold transition-colors">
                Voir les postes disponibles
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Notre mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Notre Mission</h2>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-primary-50">
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Chez Lassiri, nous croyons en la puissance de la technologie pour transformer positivement 
              le quotidien des commerçants et des consommateurs en Afrique. Notre mission est de créer 
              des solutions digitales innovantes et accessibles qui stimulent l'économie locale.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Nous recherchons des talents passionnés qui partagent notre vision et souhaitent 
              contribuer à cette transformation digitale positive.
            </p>
          </div>
        </section>

        {/* Postes disponibles */}
        <section id="postes" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Postes Disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {postes.map(poste => (
              <div 
                key={poste.id} 
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group border border-primary-50 hover:border-primary-100"
              >
                <div className="flex items-center mb-4">
                  {poste.icon}
                  <h3 className="text-xl font-semibold ml-4">{poste.titre}</h3>
                </div>
                <p className="text-gray-500 mb-2">{poste.departement} • {poste.type}</p>
                <p className="text-gray-700 mb-4 h-20">{poste.description}</p>
                <button 
                  className="w-full bg-primary-50 text-primary-600 hover:bg-primary-100 font-medium py-2 rounded-lg transition-colors group-hover:bg-primary-100"
                  onClick={() => {
                    window.scrollTo({
                      top: document.querySelector('form').offsetTop,
                      behavior: 'smooth'
                    });
                    setFormData(prev => ({ ...prev, poste: poste.titre }));
                  }}
                >
                  Postuler →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Formulaire de candidature */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Postuler</h2>
          <form 
            onSubmit={handleSubmit} 
            className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-primary-50"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Input fields with improved styling */}
              {['nom', 'prenom', 'email', 'telephone'].map(field => (
                <div key={field}>
                  <label 
                    className="block text-gray-700 mb-2 font-medium capitalize" 
                    htmlFor={field}
                  >
                    {field.replace(/([A-Z])/g, ' $1').charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : field === 'telephone' ? 'tel' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-primary-100 focus:border-primary-300 focus:ring focus:ring-primary-100 transition-all"
                    required
                  />
                </div>
              ))}
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium" htmlFor="poste">Poste souhaité</label>
              <select
                id="poste"
                name="poste"
                value={formData.poste}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-primary-100 focus:border-primary-300 focus:ring focus:ring-primary-100 transition-all"
                required
              >
                <option value="">Sélectionnez un poste</option>
                {postes.map(poste => (
                  <option key={poste.id} value={poste.titre}>
                    {poste.titre}
                  </option>
                ))}
              </select>
            </div>

            {/* Experience and Motivation textareas */}
            {[
              { 
                name: 'experience', 
                label: 'Expérience professionnelle', 
                rows: 4 
              },
              { 
                name: 'motivation', 
                label: 'Lettre de motivation', 
                rows: 6 
              }
            ].map(field => (
              <div key={field.name} className="mb-6">
                <label 
                  className="block text-gray-700 mb-2 font-medium" 
                  htmlFor={field.name}
                >
                  {field.label}
                </label>
                <textarea
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  rows={field.rows}
                  className="w-full p-3 rounded-lg border border-primary-100 focus:border-primary-300 focus:ring focus:ring-primary-100 transition-all"
                  required
                />
              </div>
            ))}

            <div className="mb-6">
              <label 
                className="text-gray-700 mb-2 font-medium flex items-center" 
                htmlFor="cv"
              >
                <FileUp className="mr-2 text-primary-600" /> 
                CV (PDF)
              </label>
              <input
                type="file"
                id="cv"
                name="cv"
                onChange={handleFileChange}
                accept=".pdf"
                className="w-full p-3 rounded-lg border border-primary-100 file:mr-4 file:rounded-lg file:border-0 file:bg-primary-50 file:text-primary-600 hover:file:bg-primary-100 transition-all"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors group"
            >
              <span className="group-hover:animate-pulse">Envoyer ma candidature</span>
            </button>
          </form>
        </section>
      </div>
    </AppLayout>
  );
}

export default Carriere;