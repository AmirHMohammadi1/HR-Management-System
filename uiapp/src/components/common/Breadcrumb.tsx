interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
            {item.href ? (
              <a
                href={item.href}
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-sm text-gray-500">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};