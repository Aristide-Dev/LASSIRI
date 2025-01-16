import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Comment démarrer avec votre plateforme ?",
    answer: "Créez simplement votre compte en quelques minutes, choisissez votre forfait et commencez à utiliser nos services. Notre équipe d'onboarding vous accompagnera dans la mise en place."
  },
  {
    question: "Quels sont les délais d'intégration ?",
    answer: "L'intégration basique peut être réalisée en quelques heures. Pour des besoins plus spécifiques, notre équipe technique vous accompagne pour une intégration sur mesure."
  },
  {
    question: "Proposez-vous une API ?",
    answer: "Oui, nous proposons une API RESTful complète et documentée permettant d'intégrer facilement nos services à votre système existant."
  },
  {
    question: "Quels sont les modes de paiement acceptés ?",
    answer: "Nous acceptons les principales cartes bancaires, les virements SEPA, et proposons également des solutions de paiement mobile."
  },
  {
    question: "Comment fonctionne le support client ?",
    answer: "Notre équipe support est disponible 24/7 par chat, email et téléphone. Les clients Premium bénéficient d'un support prioritaire."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-24">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            FAQ
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Questions fréquentes
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Tout ce que vous devez savoir pour démarrer
          </p>
        </motion.div>

        <div className="mt-20 max-w-8xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              className="border-b border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                className="w-full py-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-900">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <motion.p
                    className="mt-4 text-base text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
