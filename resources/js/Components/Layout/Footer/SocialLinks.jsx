import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { getFacebookLink, getInstagramLink, getTwitterLink, getLinkedinLink, getWhatsappLink } from '@/Utils/Site';

const socialLinks = [
  { 
    name: 'Facebook', 
    href: getFacebookLink(), 
    icon: Facebook,
    color: 'hover:text-[#1877F2]' 
  },
  { 
    name: 'Instagram', 
    href: getInstagramLink(), 
    icon: Instagram,
    color: 'hover:text-[#E4405F]' 
  },
  { 
    name: 'Twitter', 
    href: getTwitterLink(), 
    icon: Twitter,
    color: 'hover:text-[#1DA1F2]' 
  },
  { 
    name: 'Linkedin', 
    href: getLinkedinLink(), 
    icon: Linkedin,
    color: 'hover:text-[#0A66C2]' 
  },
  { 
    name: 'WhatsApp', 
    href: getWhatsappLink(), 
    icon: MessageCircle,
    color: 'hover:text-[#25D366]' 
  },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-6">
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.href}
          className={`text-white ${social.color}`}
          whileHover={{ scale: 1.1, y: -2 }}
          transition={{ type: 'spring', stiffness: 300 }}
          aria-label={`Visitez notre page ${social.name}`}
        >
          <social.icon className="h-6 w-6" />
        </motion.a>
      ))}
    </div>
  );
}