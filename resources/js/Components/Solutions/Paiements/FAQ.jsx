import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Comment commencer à accepter les paiements ?",
    answer: "Créez simplement votre compte, complétez votre dossier d'inscription avec les documents requis, et une fois validé, vous pourrez immédiatement commencer à accepter les paiements."
  },
  {
    question: "Quels sont les frais appliqués ?",
    answer: "Nos frais varient selon votre plan et volume de transactions. Nous appliquons un pourcentage fixe par transaction, sans frais cachés. Consultez notre grille tarifaire pour plus de détails."
  },
  {
    question: "Combien de temps pour recevoir les paiements ?",
    answer: "Les fonds sont généralement disponibles sous 24-48h ouvrées. Les clients Business et Enterprise peuvent bénéficier de délais de règlement personnalisés."
  },
  {
    question: "Quels types de paiement puis-je accepter ?",
    answer: "Vous pouvez accepter les cartes bancaires (Visa, Mastercard, American Express), les virements SEPA, les paiements mobiles (Apple Pay, Google Pay) et de nombreuses méthodes de paiement locales."
  },
  {
    question: "Comment est gérée la sécurité des paiements ?",
    answer: "Notre plateforme est certifiée PCI DSS niveau 1 et utilise les dernières technologies de sécurité, incluant l'authentification 3D Secure et la détection des fraudes en temps réel."
  },
  {
    question: "Proposez-vous une API pour l'intégration ?",
    answer: "Oui, nous proposons une API REST complète et documentée, des SDK pour les principales plateformes, et des plugins pour les CMS e-commerce les plus populaires."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Trouvez rapidement des réponses à vos questions
          </p>
        </motion.div>

        <motion.div 
          className="mt-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
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
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-base text-gray-500"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}