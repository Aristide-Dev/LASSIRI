// menuItems.js
import { 
  Home,
  Newspaper,
  Building2,
  FileText,
  Link,
  Mail,
  MessageSquare,
  Image,
  Users,
  Briefcase,
  PieChart,
  Boxes,
  Coins,
  Binary,
  FileBarChart
} from 'lucide-react';

export const menuItems = [
  {
    label: 'Accueil',
    href: 'welcome', // route('welcome')
    icon: Home,
  },
  {
    label: 'Nos Solutions',
    icon: Briefcase,
    actif: 'solutions.*', // route('apropos.index')
    children: [
      { label: 'Paiements', href: 'solutions.paiements', icon: FileText },
      { label: 'Transport & Réservation', href: 'solutions.transport.reservation', icon: Users },
      { label: 'Commande & Livraison', href: 'solutions.commande.livraison', icon: Briefcase },
      { label: 'Transactions Financière', href: 'solutions.transactions.finances', icon: MessageSquare },
    ]
  },
  {
    label: 'Comment ça marche ?',
    icon: Building2,
    actif: 'partenariat.*',
    children: [
      { label: 'Chauffeur', href: 'partenariat.chauffeur', icon: Building2 },
      { label: 'Livreur', href: 'partenariat.livreur', icon: PieChart },
      { label: 'Marchand & Paiements', href: 'partenariat.marchand.paiement', icon: Boxes },
      { label: 'Marchand & Livraison', href: 'partenariat.marchand.livraison', icon: Coins },
    ]
  },
  {
    label: 'À propos',
    icon: Link,
    href: 'a.propos',
  },
  {
    label: 'Contact',
    icon: Mail,
    href: null,
    type: 'action',
    actionKey: 'openContact',
  },
];
  