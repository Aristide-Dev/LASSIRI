// menuItems.js

export const solutionsLinks = [
    { name: 'Paiements', routeName: 'solutions.paiements', type: 'link' },
    { name: 'Transport & Réservation', routeName: 'solutions.transport.reservation', type: 'link' },
    { name: 'Commande & Livraison', routeName: 'solutions.commande.livraison', type: 'link' },
    { name: 'Transactions Financière', routeName: 'solutions.transactions.finances', type: 'link' },
  ];
  
  // Exemple : un bouton pour déclencher un modal (par exemple pour payer)
  export const partenariatLinks = [
    { name: 'Chauffeur', routeName: 'partenariat.chauffeur', type: 'link' },
    { name: 'Livreur', routeName: 'partenariat.livreur', type: 'link' },
    { name: 'Marchand & Paiements', routeName: 'partenariat.marchand.paiement', type: 'link' },
    // { name: 'Marchand & Livraison', routeName: 'partenariat.marchand.livraison', type: 'link' },
    // Supposons que celui-ci ouvre un offcanvas au lieu d'un lien
    { name: 'Marchand & Livraison', routeName: null, type: 'action', actionKey: 'openOffcanvasLivraison' },
  ];
  
  export const mainMenuItems = [
    { label: 'Accueil', routeName: 'welcome', type: 'link' },
    {
      label: 'Nos Services',
      routeName: 'solutions.index',
      submenu: solutionsLinks,
      key: 'solutions',
      type: 'link',
    },
    { label: 'Comment ça marche ?', routeName: 'comment.ca.marche', type: 'link' },
    {
      label: 'Partenariat',
      routeName: 'partenariat.index',
      submenu: partenariatLinks,
      key: 'partenariat',
      type: 'link',
    },
    { label: 'À propos de nous', routeName: 'a.propos', type: 'link' },
    // Un bouton pour ouvrir l'offcanvas Contact
    { label: 'Contact', routeName: null, type: 'action', actionKey: 'openContact' },
    { label: 'Centre d\'aide', routeName: 'centre.aide', type: 'link' },
  ];
  