
import React from "react";

interface ExperienceItem {
  title: string;
  company?: string;
  institution?: string;
  period: string;
  description: string;
}

interface ResumeSectionProps {
  title: string;
  items: ExperienceItem[];
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ title, items }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-medium mb-6 pb-2 border-b border-border">{title}</h2>
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
              <h3 className="text-lg font-medium">
                {item.title}
                {item.company && <span className="text-primary/80"> @ {item.company}</span>}
                {item.institution && <span className="text-primary/80"> @ {item.institution}</span>}
              </h3>
              <span className="text-sm text-muted-foreground">{item.period}</span>
            </div>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResumeSection;
