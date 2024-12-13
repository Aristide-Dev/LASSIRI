export default function NewsCard({ title, date, excerpt, image, category, link }) {
    return (
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src={image} alt={title} />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-primary">
              {category}
            </p>
            <a href={link} className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">{title}</p>
              <p className="mt-3 text-base text-gray-500">{excerpt}</p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="text-sm text-gray-500">
              <time dateTime={date}>{new Date(date).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}</time>
            </div>
          </div>
        </div>
      </div>
    );
  }