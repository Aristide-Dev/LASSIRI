export default function PartnerLogo({ name, logo, grayscale = true }) {
    return (
      <div className="flex justify-center items-center col-span-1 p-8">
        <img
          className={`max-h-12 transition-all duration-200 ${grayscale ? 'grayscale hover:grayscale-0' : ''}`}
          src={logo}
          alt={`Logo du partenaire ${name}`}
          loading="lazy"
        />
      </div>
    );
  }
  