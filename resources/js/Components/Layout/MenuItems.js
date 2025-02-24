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
  CreditCard,
  ShoppingCart,
  FileText,
  Building,
  Newspaper,
  GraduationCap,
  LineChart,
  MapPin,
  BookOpen,
  HelpCircle,
  Shield
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
        icon: CreditCard,
        description: 'Analysez et suivez l\'historique de vos échanges financiers.',
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
        icon: ShoppingCart,
        description: 'Recevez vos commandes rapidement et en toute sécurité.',
      },
      {
        label: 'Colis & Courriers',
        href: 'solutions.colis.courriers',
        icon: Package,
        description: 'Analysez et suivez l\'historique de vos échanges financiers.',
      },
    ],
  },
  {
    label: 'Partenariats',
    icon: Users,
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
        icon: Building,
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
    // On veut activer ce menu si route().current('solutions.*')
    actif: 'about.*',
    children: [
      {
        label: 'À propos de nous',
        href: 'about.index',
        icon: Building2,
        description: 'Qui nous sommes et ce que nous faisons',
      },
      {
        label: 'Inside LASSIRI',
        href: 'inside.lassiri',
        icon: Newspaper,
        description: 'Nouvelles et histoires de notre blog officiel',
      },
      {
        label: 'Carrières',
        href: 'about.carriere',
        icon: GraduationCap,
        description: 'Rejoignez-nous pour notre mission de faire avancer l\'économie locale.',
      },
      {
        label: 'Relations avec les investisseurs',
        href: 'about.investisseurs',
        icon: LineChart,
        description: 'Information de nos investisseurs',
      },
      {
        label: 'Agences',
        href: 'about.agences',
        icon: MapPin,
        description: 'Decouvrez nos agences dans le grand conakry',
      },
    ],
  },
  {
    label: "Centre d'Aide",
    icon: BadgeHelp,
    actif: 'centre.*',
    children: [
      {
        label: 'Accueil',
        href: 'centre.aide',
        icon: Home,
        description: 'Page principale du centre d\'aide',
      },
      {
        label: 'Tutoriel',
        href: 'centre.tutoriel',
        icon: BookOpen,
        description: 'Guide pas à pas pour utiliser nos services',
      },
      {
        label: 'FAQ',
        href: 'centre.faq',
        icon: HelpCircle,
        description: 'Réponses aux questions fréquemment posées',
      },
      {
        label: 'Politique de confidentialité',
        href: 'centre.privacy',
        icon: Shield,
        description: 'Notre politique de protection des données',
      },
      {
        label: 'Conditions générales',
        href: 'centre.terms',
        icon: FileText,
        description: 'Conditions d\'utilisation de nos services',
      },
    ],
  },
  // {
  //   label: 'À propos',
  //   icon: Info,
  //   href: null,
  //   type: 'action',
  //   actionKey: 'openAbout',
  // },
  
  // {
  //   label: 'À propos',
  //   icon: Info,
  //   href: 'a.propos', // => route('a.propos')
  // },
  {
    label: 'Telechargement',
    icon: Download,
    // Ce n'est pas un lien, c'est une action => ouvre un offcanvas
    href: null,
    type: 'action',
    actionKey: 'openDownload',
  },
  {
    label: 'Contact',
    icon: PhoneCall,
    // Ce n'est pas un lien, c'est une action => ouvre un offcanvas
    href: null,
    type: 'action',
    actionKey: 'openContact',
  },
];
