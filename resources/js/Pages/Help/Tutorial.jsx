import React, { useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import {
  ChevronRight,
  Smartphone,
  CreditCard,
  Store,
  Send,
  Shield,
  FileText,
  Gift,
  User,
  Wallet,
  Globe,
  Lock,
  ShieldCheck,
  AlertTriangle,
  Bell,
  Banknote,
  QrCode,
  Settings,
  Share2,
  PieChart,
  Clock,
  Heart,
  Tag,
  Calendar,
  BarChart2,
  Film,
  Zap,
  BookOpen,
  Map,
  Camera,
  DollarSign,
  PhoneCall,
  Printer,
  Award,
  Truck,
  ShoppingCart,
  Briefcase,
  HelpCircle
} from 'lucide-react';

export default function Tutorial() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  // États pour le layout
  const layoutProps = {
    contactOpen: false,
    setContactOpen: (value) => {
      // Vous pouvez ajouter une logique supplémentaire ici si nécessaire
      setLayoutStates(prev => ({ ...prev, contactOpen: value }));
    },
    downloadOpen: false,
    setDownloadOpen: (value) => {
      setLayoutStates(prev => ({ ...prev, downloadOpen: value }));
    },
    aboutOpen: false,
    setAboutOpen: (value) => {
      setLayoutStates(prev => ({ ...prev, aboutOpen: value }));
    }
  };

  // État global pour le layout
  const [layoutStates, setLayoutStates] = useState({
    contactOpen: false,
    downloadOpen: false,
    aboutOpen: false
  });

  // Fonction pour gérer le clic sur "Contacter le support"
  const handleContactSupport = () => {
    setLayoutStates(prev => ({
      ...prev,
      contactOpen: true,
      downloadOpen: false,
      aboutOpen: false
    }));
  };

  const categories = [
    { id: 'all', name: 'Tous les tutoriels' },
    { id: 'basics', name: 'Fonctions de base' },
    { id: 'payments', name: 'Paiements' },
    { id: 'account', name: 'Gestion de compte' },
    { id: 'business', name: 'Solutions business' },
    { id: 'advanced', name: 'Fonctionnalités avancées' }
  ];

  const tutorials = [
    {
      id: 1,
      title: "Créer votre compte",
      icon: <Smartphone className="w-12 h-12 text-primary-600" />,
      steps: [
        "Téléchargez l'application Lassiri sur votre smartphone",
        "Cliquez sur 'Créer un compte'",
        "Renseignez vos informations personnelles",
        "Validez votre numéro de téléphone",
        "Configurez votre code PIN"
      ],
      image: "/images/tutorials/create-account.jpg"
    },
    {
      id: 2,
      title: "Effectuer un paiement",
      icon: <CreditCard className="w-12 h-12 text-primary-600" />,
      steps: [
        "Ouvrez l'application Lassiri",
        "Sélectionnez 'Payer'",
        "Scannez le QR code du commerçant ou entrez son numéro",
        "Saisissez le montant",
        "Confirmez avec votre code PIN"
      ],
      image: "/images/tutorials/payment.jpg"
    },
    {
      id: 3,
      title: "Gérer votre boutique",
      icon: <Store className="w-12 h-12 text-primary-600" />,
      steps: [
        "Accédez à l'espace marchand",
        "Configurez vos informations commerciales",
        "Générez votre QR code",
        "Suivez vos transactions en temps réel",
        "Consultez vos rapports de vente"
      ],
      image: "/images/tutorials/merchant.jpg"
    },
    {
      id: 4,
      title: "Envoyer de l'argent",
      icon: <Send className="w-12 h-12 text-primary-600" />,
      steps: [
        "Choisissez 'Transfert' dans le menu",
        "Sélectionnez le destinataire",
        "Entrez le montant à envoyer",
        "Vérifiez les détails",
        "Validez avec votre code PIN"
      ],
      image: "/images/tutorials/transfer.jpg"
    },
    {
      id: 5,
      title: "Recharger votre compte",
      icon: <CreditCard className="w-12 h-12 text-primary-600" />,
      steps: [
        "Accédez à la section 'Recharger'",
        "Choisissez votre méthode de rechargement",
        "Entrez le montant souhaité",
        "Suivez les instructions de paiement",
        "Confirmez la transaction"
      ],
      image: "/images/tutorials/topup.jpg"
    },
    {
      id: 6,
      title: "Payer vos factures",
      icon: <FileText className="w-12 h-12 text-primary-600" />,
      steps: [
        "Sélectionnez 'Paiement de factures'",
        "Choisissez le fournisseur",
        "Entrez votre numéro de référence",
        "Vérifiez le montant",
        "Validez le paiement"
      ],
      image: "/images/tutorials/bills.jpg"
    },
    {
      id: 7,
      title: "Programme de fidélité",
      icon: <Gift className="w-12 h-12 text-primary-600" />,
      steps: [
        "Accédez à votre espace fidélité",
        "Consultez vos points disponibles",
        "Découvrez les récompenses",
        "Échangez vos points",
        "Profitez de vos avantages"
      ],
      image: "/images/tutorials/loyalty.jpg"
    },
    {
      id: 8,
      title: "Gérer votre profil",
      icon: <User className="w-12 h-12 text-primary-600" />,
      steps: [
        "Accédez aux paramètres",
        "Mettez à jour vos informations",
        "Personnalisez vos préférences",
        "Gérez vos notifications",
        "Configurez la sécurité"
      ],
      image: "/images/tutorials/profile.jpg"
    },
    {
      id: 9,
      title: "Épargner avec Lassiri",
      icon: <Wallet className="w-12 h-12 text-primary-600" />,
      steps: [
        "Ouvrez un compte épargne",
        "Définissez vos objectifs",
        "Programmez des versements",
        "Suivez votre progression",
        "Retirez vos économies"
      ],
      image: "/images/tutorials/savings.jpg"
    },
    {
      id: 10,
      title: "Paiements internationaux",
      icon: <Globe className="w-12 h-12 text-primary-600" />,
      steps: [
        "Choisissez 'Transfert international'",
        "Sélectionnez le pays destinataire",
        "Entrez les coordonnées du bénéficiaire",
        "Vérifiez le taux de change",
        "Confirmez le transfert"
      ],
      image: "/images/tutorials/international.jpg"
    }, {
      id: 15,
      category: 'advanced',
      title: "Partage de Paiement",
      icon: <Share2 className="w-12 h-12 text-primary-600" />,
      steps: [
        "Créez un groupe de partage",
        "Ajoutez les participants",
        "Entrez le montant total",
        "Répartissez les parts",
        "Envoyez les demandes de paiement"
      ]
    },
    {
      id: 16,
      category: 'business',
      title: "Analyse des Ventes",
      icon: <PieChart className="w-12 h-12 text-primary-600" />,
      steps: [
        "Accédez au tableau de bord commercial",
        "Sélectionnez la période d'analyse",
        "Visualisez les graphiques de performance",
        "Exportez les rapports détaillés",
        "Identifiez les tendances clés"
      ]
    },
    {
      id: 17,
      category: 'account',
      title: "Historique des Transactions",
      icon: <Clock className="w-12 h-12 text-primary-600" />,
      steps: [
        "Ouvrez la section historique",
        "Filtrez par type de transaction",
        "Recherchez des transactions spécifiques",
        "Téléchargez vos relevés",
        "Gérez vos reçus électroniques"
      ]
    },
    {
      id: 18,
      category: 'basics',
      title: "Programme Parrainage",
      icon: <Heart className="w-12 h-12 text-primary-600" />,
      steps: [
        "Accédez au programme parrainage",
        "Partagez votre code unique",
        "Suivez vos parrainages",
        "Collectez vos récompenses",
        "Maximisez vos gains"
      ]
    },
    {
      id: 19,
      category: 'payments',
      title: "Paiements Récurrents",
      icon: <Calendar className="w-12 h-12 text-primary-600" />,
      steps: [
        "Configurez un paiement automatique",
        "Définissez la fréquence",
        "Fixez la durée",
        "Validez les conditions",
        "Suivez vos échéances"
      ]
    },
    {
      id: 20,
      category: 'advanced',
      title: "Statistiques Personnelles",
      icon: <BarChart2 className="w-12 h-12 text-primary-600" />,
      steps: [
        "Consultez vos statistiques",
        "Analysez vos habitudes",
        "Comparez les périodes",
        "Identifiez les tendances",
        "Optimisez vos dépenses"
      ]
    },
    {
      id: 21,
      category: 'basics',
      title: "Cashback et Récompenses",
      icon: <Tag className="w-12 h-12 text-primary-600" />,
      steps: [
        "Découvrez les offres cashback",
        "Activez les promotions",
        "Effectuez des achats éligibles",
        "Suivez vos gains",
        "Encaissez vos récompenses"
      ]
    },
    {
      id: 22,
      category: 'advanced',
      title: "Paiement par Selfie",
      icon: <Camera className="w-12 h-12 text-primary-600" />,
      steps: [
        "Configurez la reconnaissance faciale",
        "Enregistrez votre visage",
        "Choisissez le mode de paiement",
        "Validez avec votre selfie",
        "Confirmez la transaction"
      ]
    },
    {
      id: 23,
      category: 'business',
      title: "Gestion des Employés",
      icon: <Briefcase className="w-12 h-12 text-primary-600" />,
      steps: [
        "Ajoutez des employés",
        "Définissez les rôles",
        "Attribuez les autorisations",
        "Suivez les activités",
        "Gérez les accès"
      ]
    },
    {
      id: 24,
      category: 'payments',
      title: "Paiement Sans Contact",
      icon: <Zap className="w-12 h-12 text-primary-600" />,
      steps: [
        "Activez le NFC",
        "Configurez le paiement sans contact",
        "Définissez les limites",
        "Utilisez votre téléphone",
        "Gérez la sécurité"
      ]
    },
    {
      id: 25,
      category: 'business',
      title: "Gestion des Stocks",
      icon: <ShoppingCart className="w-12 h-12 text-primary-600" />,
      steps: [
        "Ajoutez vos produits",
        "Gérez les quantités",
        "Configurez les alertes",
        "Suivez les mouvements",
        "Générez des rapports"
      ]
    },
    {
      id: 26,
      category: 'advanced',
      title: "Support Multilingue",
      icon: <Globe className="w-12 h-12 text-primary-600" />,
      steps: [
        "Changez la langue",
        "Personnalisez les préférences",
        "Accédez aux ressources traduites",
        "Utilisez le support local",
        "Gérez les devises"
      ]
    }
  ];

  const securityTips = [
    {
      id: 1,
      title: "Protégez votre compte",
      icon: <Shield className="w-6 h-6 text-primary-600" />,
      tips: [
        "Ne partagez jamais votre code PIN",
        "Activez l'authentification à deux facteurs",
        "Vérifiez régulièrement vos transactions"
      ]
    },
    {
      id: 2,
      title: "Transactions sécurisées",
      icon: <Lock className="w-6 h-6 text-primary-600" />,
      tips: [
        "Vérifiez toujours l'identité du destinataire",
        "Ne faites des transactions que dans des lieux sûrs",
        "Gardez une trace de vos transactions"
      ]
    },
    {
      id: 3,
      title: "Protection des données",
      icon: <ShieldCheck className="w-6 h-6 text-primary-600" />,
      tips: [
        "Utilisez un mot de passe fort",
        "Mettez à jour régulièrement l'application",
        "Ne connectez pas votre compte sur des appareils publics"
      ]
    },
    {
      id: 4,
      title: "Prévention des fraudes",
      icon: <AlertTriangle className="w-6 h-6 text-primary-600" />,
      tips: [
        "Méfiez-vous des offres trop alléchantes",
        "Ne répondez jamais aux demandes de code PIN",
        "Signalez toute activité suspecte"
      ]
    }
  ];

  const additionalTutorials = [
    {
      id: 11,
      title: "Notifications et Alertes",
      icon: <Bell className="w-12 h-12 text-primary-600" />,
      steps: [
        "Configurez vos préférences de notification",
        "Activez les alertes de transaction",
        "Personnalisez les seuils d'alerte",
        "Gérez les notifications push",
        "Configurez les alertes par email"
      ],
      image: "/images/tutorials/notifications.jpg"
    },
    {
      id: 12,
      title: "Gestion du Budget",
      icon: <Banknote className="w-12 h-12 text-primary-600" />,
      steps: [
        "Accédez à la section budget",
        "Définissez vos catégories de dépenses",
        "Fixez des limites mensuelles",
        "Suivez vos dépenses en temps réel",
        "Analysez vos habitudes financières"
      ],
      image: "/images/tutorials/budget.jpg"
    },
    {
      id: 13,
      title: "Paiement par QR Code",
      icon: <QrCode className="w-12 h-12 text-primary-600" />,
      steps: [
        "Ouvrez le scanner QR code",
        "Alignez le code dans le cadre",
        "Vérifiez les informations du marchand",
        "Entrez le montant",
        "Validez le paiement"
      ],
      image: "/images/tutorials/qr-payment.jpg"
    },
    {
      id: 14,
      title: "Paramètres Avancés",
      icon: <Settings className="w-12 h-12 text-primary-600" />,
      steps: [
        "Accédez aux paramètres avancés",
        "Configurez les limites de transaction",
        "Gérez les appareils connectés",
        "Activez les fonctionnalités beta",
        "Personnalisez l'interface"
      ],
      image: "/images/tutorials/advanced-settings.jpg"
    }
  ];

  const allTutorials = [...tutorials, ...additionalTutorials];

  const filteredTutorials = activeCategory === 'all'
    ? allTutorials
    : allTutorials.filter(tutorial => tutorial.category === activeCategory);

  return (
    <AppLayout
      contactOpen={layoutStates.contactOpen}
      setContactOpen={(value) => setLayoutStates(prev => ({ ...prev, contactOpen: value }))}
      downloadOpen={layoutStates.downloadOpen}
      setDownloadOpen={(value) => setLayoutStates(prev => ({ ...prev, downloadOpen: value }))}
      aboutOpen={layoutStates.aboutOpen}
      setAboutOpen={(value) => setLayoutStates(prev => ({ ...prev, aboutOpen: value }))}
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
              Tutoriels Lassiri
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez toutes les fonctionnalités de Lassiri et devenez un expert en paiements mobiles
            </p>
          </div>

          {/* Filtres par catégorie */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                    ${activeCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Grille de tutoriels */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {tutorial.icon}
                    <h2 className="text-xl font-semibold ml-4">{tutorial.title}</h2>
                  </div>

                  <div className="space-y-3">
                    {tutorial.steps.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </div>
                        <p className="ml-3 text-gray-600 text-sm">{step}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    className="mt-6 w-full bg-primary-50 text-primary-600 py-2 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors"
                    onClick={() => setActiveStep(tutorial.id)}
                  >
                    Voir le tutoriel détaillé
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>


          {/* Section Conseils de Sécurité */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Conseils de Sécurité</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {securityTips.map((tip) => (
                <div key={tip.id} className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center mb-4">
                    {tip.icon}
                    <h3 className="text-lg font-semibold ml-3">{tip.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {tip.tips.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section de support améliorée */}
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
            <div className="text-center max-w-2xl mx-auto">
              <HelpCircle className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Besoin d'aide supplémentaire ?
              </h2>
              <p className="text-gray-600 mb-8">
                Notre équipe de support est disponible 24/7 pour vous accompagner dans votre utilisation de Lassiri
              </p>
              <div className="flex justify-center gap-4">
                <button 
                  onClick={handleContactSupport}
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center"
                >
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Contacter le support
                </button>
                <a 
                  href={route('centre.faq')} 
                  className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Consulter la FAQ
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AppLayout>
  );
}