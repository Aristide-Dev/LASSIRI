import {
  Home,
  Briefcase,
  ClipboardList,
  Package,
  DollarSign,
  Users,
  Truck,
  Building2,
  PhoneCall,
  Info,
  Download,
} from 'lucide-react';

export const menuItems = [
  {
    label: 'Accueil',
    href: 'welcome', // => route('welcome')
    icon: Home,
  },
  {
    label: 'Nos Solutions',
    icon: Briefcase,
    // On veut activer ce menu si route().current('solutions.*')
    actif: 'solutions.*',
    children: [
      {
        label: 'Paiements',
        href: 'solutions.paiements',
        icon: DollarSign,
        description: 'Gérez et suivez toutes vos transactions et factures.',
      },
      {
        label: 'Transport & Réservation',
        href: 'solutions.transport.reservation',
        icon: Truck,
        description: 'Optimisez vos déplacements et vos trajets en un clic.',
      },
      {
        label: 'Commande & Livraison',
        href: 'solutions.commande.livraison',
        icon: Package,
        description: 'Recevez vos commandes rapidement et en toute sécurité.',
      },
      {
        label: 'Transactions Financière',
        href: 'solutions.transactions.finances',
        icon: ClipboardList,
        description: 'Analysez et suivez l’historique de vos échanges financiers.',
      },
    ],
  },
  {
    label: 'Comment ça marche ?',
    icon: Building2,
    actif: 'partenariat.*',
    children: [
      {
        label: 'Chauffeur',
        href: 'partenariat.chauffeur',
        icon: Users,
        description: 'Partenariat pour conducteurs / livreurs indépendants.',
      },
      {
        label: 'Marchand & Paiements',
        href: 'partenariat.marchand.paiement',
        icon: DollarSign,
        description: 'Proposez un service de paiement sécurisé à vos clients.',
      },
      {
        label: 'Marchand & Livraison',
        href: 'partenariat.marchand.livraison',
        icon: Package,
        description: 'Simplifiez la logistique et la livraison pour votre activité.',
      },
    ],
  },
  {
    label: 'À propos',
    icon: Info,
    href: 'a.propos', // => route('a.propos')
  },
  {
    label: 'Telechargement',
    icon: Download,
    // Ce n’est pas un lien, c’est une action => ouvre un offcanvas
    href: null,
    type: 'action',
    actionKey: 'openDownload',
  },
  {
    label: 'Contact',
    icon: PhoneCall,
    // Ce n’est pas un lien, c’est une action => ouvre un offcanvas
    href: null,
    type: 'action',
    actionKey: 'openContact',
  },
];
