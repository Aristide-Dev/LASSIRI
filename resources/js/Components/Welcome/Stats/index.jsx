import SectionHeader from '@/Components/ui/SectionHeader';
import StatCard from './StatCard';

const stats = [
  {
    value: '15K+',
    label: 'Clients Actifs',
    description: 'Entreprises qui nous font confiance'
  },
  {
    value: '99.9%',
    label: 'Disponibilité',
    description: 'De notre plateforme'
  },
  {
    value: '24/7',
    label: 'Support Client',
    description: 'À votre service'
  },
  {
    value: '500K+',
    label: 'Livraisons',
    description: 'Effectuées chaque mois'
  }
];

export default function Stats() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Nos chiffres"
          title="La confiance en chiffres"
          description="Des résultats qui parlent d'eux-mêmes"
        />
        
        <dl className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </dl>
      </div>
    </div>
  );
}