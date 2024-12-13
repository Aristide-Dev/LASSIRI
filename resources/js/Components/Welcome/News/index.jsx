import SectionHeader from '@/Components/ui/SectionHeader';
import NewsCard from './NewsCard';

const news = [
  {
    title: "Lancement de notre nouvelle application mobile",
    date: "2024-01-15",
    excerpt: "Découvrez notre nouvelle application mobile pour une gestion simplifiée de vos livraisons et paiements.",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Innovation",
    link: "/actualites/nouvelle-app"
  },
  {
    title: "Extension de notre réseau de partenaires",
    date: "2024-01-10",
    excerpt: "Notre réseau s'agrandit avec l'arrivée de nouveaux partenaires de transport dans toute la France.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Partenariat",
    link: "/actualites/nouveau-partenaires"
  },
  {
    title: "Nouveau système de paiement sécurisé",
    date: "2024-01-05",
    excerpt: "Implémentation d'une nouvelle solution de paiement pour une sécurité renforcée de vos transactions.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sécurité",
    link: "/actualites/paiement-securise"
  }
];

export default function News() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Actualités"
          title="Les dernières nouvelles"
          description="Restez informé des dernières actualités et innovations de notre plateforme"
        />
        
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <NewsCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}