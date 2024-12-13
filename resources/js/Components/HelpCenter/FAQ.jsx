import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Comment créer un compte ?",
    answer: "Pour créer un compte, cliquez sur le bouton 'Inscription' en haut à droite de la page. Remplissez le formulaire avec vos informations personnelles et suivez les instructions."
  },
  {
    question: "Comment réserver un transport ?",
    answer: "Connectez-vous à votre compte, accédez à la section 'Transport', sélectionnez votre destination et vos préférences, puis confirmez votre réservation."
  },
  {
    question: "Quels sont les moyens de paiement acceptés ?",
    answer: "Nous acceptons les cartes bancaires (Visa, Mastercard), les virements bancaires, et les paiements mobiles via notre plateforme sécurisée."
  },
  {
    question: "Comment devenir partenaire ?",
    answer: "Visitez notre section 'Partenariat', choisissez le type de partenariat qui vous intéresse et suivez le processus d'inscription. Notre équipe vous contactera rapidement."
  },
  {
    question: "Que faire en cas de problème ?",
    answer: "Contactez notre support client disponible 24/7 via le chat en ligne, par email ou par téléphone. Nous vous répondrons dans les plus brefs délais."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Questions fréquentes
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Trouvez rapidement des réponses à vos questions
        </p>
      </div>
      <dl className="space-y-6 divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className={`pt-6 ${index === 0 ? '' : 'border-t border-gray-200'}`}
          >
            <dt className="text-lg">
              <button
                className="text-left w-full flex justify-between items-start text-gray-400"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <span className="ml-6 h-7 flex items-center">
                  <ChevronDown
                    className={`h-6 w-6 transform ${
                      openIndex === index ? '-rotate-180' : 'rotate-0'
                    } transition-transform duration-200`}
                  />
                </span>
              </button>
            </dt>
            <dd
              className={`mt-2 pr-12 transition-all duration-200 ${
                openIndex === index ? 'block opacity-100' : 'hidden opacity-0'
              }`}
            >
              <p className="text-base text-gray-500">{faq.answer}</p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}