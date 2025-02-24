import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Comment créer un compte Lassiri ?",
      answer: "Pour créer un compte Lassiri, téléchargez notre application mobile ou visitez notre site web. Cliquez sur 'S'inscrire' et suivez les étapes. Vous aurez besoin d'une pièce d'identité valide et d'un numéro de téléphone."
    },
    {
      id: 2,
      question: "Quels sont les frais de transaction ?",
      answer: "Nos frais de transaction sont parmi les plus compétitifs du marché. Les transferts entre comptes Lassiri sont gratuits. Pour les autres services, les frais varient entre 0.5% et 2% selon le type d'opération."
    },
    {
      id: 3,
      question: "Comment contacter le support client ?",
      answer: "Notre support client est disponible 24/7. Vous pouvez nous contacter par téléphone au +224 XXX XXX XXX, par email à support@lassiri.com, ou via le chat dans l'application."
    },
    {
      id: 4,
      question: "Comment devenir partenaire Lassiri ?",
      answer: "Pour devenir partenaire, visitez notre section 'Partenaires' sur le site web ou contactez notre équipe commerciale. Nous étudierons votre demande et vous proposerons la meilleure solution adaptée à votre activité."
    },
    {
      id: 5,
      question: "Quelles sont les mesures de sécurité ?",
      answer: "Nous utilisons les dernières technologies de cryptage et d'authentification pour protéger vos données et transactions. Chaque compte est sécurisé par une authentification à deux facteurs et nos systèmes sont régulièrement audités."
    }
  ];

  return (
    <div className="space-y-6">
      {faqData.map((faq) => (
        <div 
          key={faq.id} 
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
            onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
          >
            <span className="text-lg font-medium text-gray-900">{faq.question}</span>
            <ChevronDown 
              className={`w-5 h-5 text-gray-500 transition-transform ${
                openQuestion === faq.id ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          
          {openQuestion === faq.id && (
            <div className="px-6 py-4 bg-gray-50">
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}