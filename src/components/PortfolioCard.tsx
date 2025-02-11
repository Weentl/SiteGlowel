import React, { useState } from 'react';

interface PortfolioCardProps {
  title: string;
  description: string;
  features: string[];
  url: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  features,
  url,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <iframe
              src="https://maderassanpedro.com/"
              title="Maderas San Pedro Preview"
              className={`w-[133%] h-[133%] border-none scale-[0.75] origin-top-left transition-transform duration-500 ${
                isHovered ? 'scale-[0.8]' : 'scale-[0.75]'
              }`}
              style={{
                pointerEvents: isHovered ? 'auto' : 'none',
                transform: `scale(${isHovered ? 0.8 : 0.75}) translateX(0%)`,
              }}
            />
          </div>
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
              transition-opacity duration-300 ${
                isHovered ? 'opacity-0' : 'opacity-100'
              }`}
          />
        </div>
        <div className="p-6 bg-white">
          <h3 className="text-2xl font-semibold mb-3 text-blue-600">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">
              Características:
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-600 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <span className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium">
            Ver proyecto
            <svg
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </a>
    </div>
  );
};

export default PortfolioCard;
