import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Requirements({ requirements }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900">Conditions requises</h2>
          <p className="mt-4 text-xl text-gray-600">
            Les critères pour devenir partenaire
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {requirements.map((req, index) => (
            <motion.div
              key={req.title}
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex-shrink-0">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{req.title}</h3>
                <p className="mt-2 text-gray-600">{req.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}