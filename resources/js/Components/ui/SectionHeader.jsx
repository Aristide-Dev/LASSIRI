export default function SectionHeader({ eyebrow, title, description, className = '', align = 'center' }) {
    return (
      <div className={`${className} ${align === 'center' ? 'text-center' : ''}`}>
        {eyebrow && (
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            {eyebrow}
          </h2>
        )}
        {title && (
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
        )}
        {description && (
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p>
        )}
      </div>
    );
  }