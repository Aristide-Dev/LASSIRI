import SectionHeader from '@/Components/ui/SectionHeader';
import PartnerLogo from './PartnerLogo';

const partners = [
  {
    name: "Orange Guinée",
    logo: "/images/partenaires/Orange_logo.png"
  },
  {
    name: "Mtn Guinée",
    logo: "/images/partenaires/Mtn_logo.png"
  },
  {
    name: "Ecobank Guinée",
    logo: "/images/partenaires/Ecobank_logo.png"
  },
  {
    name: "VistaBank Guinée",
    logo: "/images/partenaires/VistaBank_logo.png"
  },
  {
    name: "Global Ship",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Smart Logistics",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

export default function Partners() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Partenaires"
          title="Ils nous font confiance"
          description="Collaborez avec les meilleurs acteurs du secteur"
        />

        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div 
              key={partner.name} 
              className="flex items-center justify-center p-4 transition duration-300 hover:bg-white hover:shadow-md rounded-md"
            >
              <img
                src={partner.logo}
                alt={`Logo de ${partner.name}`}
                className="h-16 w-auto grayscale hover:grayscale-0 transition duration-200 ease-in-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
