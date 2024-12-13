import { Book, Truck, CreditCard, Phone, Users, Shield } from 'lucide-react';

const categories = [
  {
    name: 'Guide d\'utilisation',
    description: 'Apprenez à utiliser notre plateforme',
    icon: Book,
    href: '#guides',
  },
  {
    name: 'Transport',
    description: 'Questions sur nos services de transport',
    icon: Truck,
    href: '#transport',
  },
  {
    name: 'Paiement',
    description: 'Informations sur les paiements',
    icon: CreditCard,
    href: '#paiement',
  },
  {
    name: 'Support technique',
    description: 'Assistance technique',
    icon: Phone,
    href: '#support',
  },
  {
    name: 'Partenariat',
    description: 'Devenir partenaire',
    icon: Users,
    href: '#partenariat',
  },
  {
    name: 'Sécurité',
    description: 'Sécurité et confidentialité',
    icon: Shield,
    href: '#securite',
  },
];

export default function Categories() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <a
            key={category.name}
            href={category.href}
            className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div>
              <span className="rounded-lg inline-flex p-3 bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-200">
                <category.icon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">
                {category.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {category.description}
              </p>
            </div>
            <span
              className="absolute top-6 right-6 text-gray-300 group-hover:text-gray-400 transition-colors duration-200"
              aria-hidden="true"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}