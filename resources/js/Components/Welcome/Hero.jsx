import { motion } from 'framer-motion';
import HeroBackground from './Hero/HeroBackground';
import HeroContent from './Hero/HeroContent';

export default function Hero() {
  return (
    <section 
      className="relative min-h-[85vh] flex items-center justify-center bg-primary-300 overflow-hidden shadow" 
      aria-label="Section de présentation"
    >
      {/* Arrière-plan animé avec les particules */}
      <HeroBackground />

      {/* Dégradé au-dessus du background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/90"
        aria-hidden="true"
      />

      {/* Contenu principal du Hero (texte, CTA, image) */}
      <HeroContent />

      {/* Dégradé au bas pour un fondu visuel */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
