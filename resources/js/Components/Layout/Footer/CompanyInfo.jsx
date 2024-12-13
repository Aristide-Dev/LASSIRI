import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

export default function CompanyInfo() {
  return (
    <motion.div
      className="space-y-8"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
    >
      <img
        className="h-10"
        src="/images/logo/logo-lassiri.png"
        alt="Logo Lassiri"
        loading="lazy"
      />
      <p className="text-gray-500 text-base max-w-md">
        Solutions innovantes pour votre business : transport, livraison, et paiement.
        Simplifiez vos opérations avec notre plateforme tout-en-un.
      </p>
      <SocialLinks />
    </motion.div>
  );
}