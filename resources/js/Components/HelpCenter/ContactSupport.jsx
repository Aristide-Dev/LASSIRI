import { Phone, Mail, MessageSquare } from 'lucide-react';

const contactMethods = [
  {
    name: 'Téléphone',
    description: 'Appelez-nous pour une assistance immédiate',
    icon: Phone,
    contact: '+33 1 23 45 67 89',
    action: 'Appeler maintenant',
    href: 'tel:+33123456789',
  },
  {
    name: 'Email',
    description: 'Envoyez-nous un email pour des questions détaillées',
    icon: Mail,
    contact: 'support@example.com',
    action: 'Envoyer un email',
    href: 'mailto:support@example.com',
  },
  {
    name: 'Chat en direct',
    description: 'Discutez en temps réel avec notre équipe',
    icon: MessageSquare,
    contact: 'Disponible 24/7',
    action: 'Démarrer le chat',
    href: '#chat',
  },
];

export default function ContactSupport() {
  return (
    <div className="bg-gray-50 py-16 my-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Besoin d'aide supplémentaire ?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Notre équipe de support est là pour vous aider
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {contactMethods.map((method) => (
            <div
              key={method.name}
              className="relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <method.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {method.name}
                  </h3>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">{method.description}</p>
                <p className="mt-2 text-sm font-medium text-gray-900">
                  {method.contact}
                </p>
              </div>
              <div className="mt-6">
                <a
                  href={method.href}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  {method.action}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}