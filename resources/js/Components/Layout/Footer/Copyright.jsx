import { motion } from 'framer-motion';

export default function Copyright() {
  return (
    <motion.div
      className="mt-12 border-t border-gray-200 pt-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <p className="text-base text-gray-300 text-center">
        &copy; {new Date().getFullYear()} <span className="font-bold text-primary-50">LASSIRI</span>. Tous droits réservés.
      </p>
      <p className="text-sm text-gray-300 text-center mt-2">
        Développé avec ❤️ pour améliorer votre quotidien
      </p>
    </motion.div>
  );
}