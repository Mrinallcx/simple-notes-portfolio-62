
import React from "react";
import Layout from "../components/Layout";
import PortfolioCard from "../components/PortfolioCard";

// Sample portfolio data aligned with Harish Shivaraman's expertise
const projects = [
  {
    title: "Real-time Object Detection for Mobile",
    description: "Developed an optimized object detection system for mobile devices, achieving state-of-the-art performance with minimal power consumption.",
    technologies: ["PyTorch", "TensorFlow Lite", "C++", "CUDA"],
    imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    url: "#"
  },
  {
    title: "Advanced Camera Enhancement AI",
    description: "Research and implementation of deep learning models for camera enhancement, including low-light photography and HDR processing.",
    technologies: ["Python", "PyTorch", "CUDA", "Image Processing"],
    imageUrl: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    url: "#"
  },
  {
    title: "Computational Photography Pipeline",
    description: "Designed and implemented an end-to-end computational photography pipeline for next-generation smartphone cameras.",
    technologies: ["C++", "CUDA", "Computer Vision", "Image Signal Processing"],
    imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    url: "#"
  },
  {
    title: "AI-based Video Enhancement",
    description: "Research on deep learning approaches for video quality enhancement, including super-resolution and frame interpolation.",
    technologies: ["PyTorch", "TensorFlow", "Video Processing", "Deep Learning"],
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    url: "#"
  },
  {
    title: "On-device ML Optimization Framework",
    description: "Developed a framework for optimizing neural networks for mobile execution, focusing on memory efficiency and inference speed.",
    technologies: ["TensorFlow", "PyTorch", "Model Optimization", "Embedded Systems"],
    imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    url: "#"
  },
  {
    title: "Computer Vision Research Publications",
    description: "Collection of research papers and patents in computer vision and AI for multimedia applications.",
    technologies: ["Research", "Technical Writing", "Patents", "Computer Vision"],
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
            A selection of my research projects and technical innovations in AI, computer vision, and media processing.
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
