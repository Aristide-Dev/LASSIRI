import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Copyright() {
  return (
    <motion.div
      className="mt-12 border-t border-gray-900 bg-black py-8 w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <p className="text-base text-gray-300 text-center">
        &copy; {new Date().getFullYear()} <span className="font-bold text-primary-50">LASSIRI</span>. Tous droits réservés.
      </p>
      {/* <p className="text-sm text-gray-300 text-center mt-2 flex flex-row justify-center items-center gap-1">
        Développé avec <Mail/> pour améliorer votre quotidien
      </p> */}
    </motion.div>
  );
}