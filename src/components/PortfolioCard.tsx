
import React from "react";

interface PortfolioCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  url: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ 
  title, 
  description, 
  technologies, 
  imageUrl, 
  url 
}) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block group"
    >
      <article className="overflow-hidden rounded-md border border-border/40 card-hover">
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>
          <img 
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 bg-card">
          <h3 className="text-xl font-medium mb-2 group-hover:text-primary/80 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 text-sm">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </a>
  );
};

export default PortfolioCard;
