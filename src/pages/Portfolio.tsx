
import React from "react";
import Layout from "../components/Layout";
import PortfolioCard from "../components/PortfolioCard";

// Sample portfolio data
const projects = [
  {
    title: "Design System",
    description: "A comprehensive component library and design system for building consistent and accessible user interfaces.",
    technologies: ["React", "TypeScript", "Storybook"],
    imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    url: "#"
  },
  {
    title: "Photography Portfolio",
    description: "An elegant portfolio website showcasing landscape and architectural photography.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    imageUrl: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    url: "#"
  },
  {
    title: "E-commerce Website",
    description: "A modern e-commerce platform with a focus on performance and user experience.",
    technologies: ["React", "Node.js", "MongoDB"],
    imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    url: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity application that helps users organize and prioritize their tasks.",
    technologies: ["Vue.js", "Firebase", "SCSS"],
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    url: "#"
  },
  {
    title: "Travel Blog Platform",
    description: "A custom-built blogging platform for travel enthusiasts to share their experiences.",
    technologies: ["WordPress", "PHP", "MySQL"],
    imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    url: "#"
  },
  {
    title: "Weather Dashboard",
    description: "An interactive weather application with data visualization and forecast predictions.",
    technologies: ["React", "D3.js", "API Integration"],
    imageUrl: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    url: "#"
  }
];

const Portfolio = () => {
  return (
    <Layout>
      <section className="animate-fade-in">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
          <p className="text-xl text-muted-foreground">
            A selection of my design and development work. Each project represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <PortfolioCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                url={project.url}
              />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
