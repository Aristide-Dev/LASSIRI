import {
  Home,
  Briefcase,
  ClipboardList,
  Package,
  DollarSign,
  Users,
  Search,
  Truck,
  Building2,
  PhoneCall,
  Info,
  Download,
  Bike,
  Car,
  BadgeHelp,
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
        label: 'Découvrir',
        href: 'solutions.index',
        icon: Search,
        description: 'Découvrez nos differentes solutions',
      },
      {
        label: 'Transactions Financière',
        href: 'solutions.transactions.finances',
        icon: ClipboardList,
        description: 'Analysez et suivez l’historique de vos échanges financiers.',
      },
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
        label: 'Colis & Courriers',
        href: 'solutions.colis.courriers',
        icon: ClipboardList,
        description: 'Analysez et suivez l’historique de vos échanges financiers.',
      },
    ],
  },
  {
    label: 'Partenariats',
    icon: Building2,
    actif: 'partenariat.*',
    children: [
      {
        label: 'Découvrir',
        href: 'partenariat.index',
        icon: Search,
        description: 'Découvrez nos differentes formes de partenariat.',
      },
      {
        label: 'Chauffeur',
        href: 'partenariat.chauffeur',
        icon: Car,
        description: 'Partenariat pour conducteurs / livreurs indépendants.',
      },
      {
        label: 'Livreur',
        href: 'partenariat.livreur',
        icon: Bike,
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
    label: "Centre d’Aide",
    icon: BadgeHelp,
    href: 'centre.aide', // => route('a.propos')
  },
  {
    label: 'À propos',
    icon: Info,
    href: null,
    type: 'action',
    actionKey: 'openAbout',
  },
  
  // {
  //   label: 'À propos',
  //   icon: Info,
  //   href: 'a.propos', // => route('a.propos')
  // },
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
