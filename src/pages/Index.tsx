
import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <section className="space-y-8 animate-fade-in">
        <div className="py-12 md:py-20">
          <span className="text-sm font-medium text-muted-foreground mb-2 block animate-slide-down" style={{ animationDelay: '100ms' }}>
            Hello, I'm
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-down" style={{ animationDelay: '200ms' }}>
            Sanket Pathak
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl animate-slide-down" style={{ animationDelay: '300ms' }}>
            I design and build digital products. Currently focused on creating accessible and human-centered experiences.
          </p>
        </div>
        
        <div className="bg-secondary/50 rounded-lg p-8 border border-border/40 animate-slide-up" style={{ animationDelay: '400ms' }}>
          <h2 className="text-2xl font-medium mb-4">About me</h2>
          <p className="text-muted-foreground mb-4">
            I'm a designer and developer with a passion for creating clean, functional, and accessible user experiences. I believe in the power of minimalism and purposeful design to solve complex problems.
          </p>
          <p className="text-muted-foreground">
            When I'm not designing or coding, you can find me reading books, exploring photography, or hiking in the mountains.
          </p>
        </div>
        
        <div className="pt-8 animate-slide-up" style={{ animationDelay: '500ms' }}>
          <h2 className="text-2xl font-medium mb-6">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
              <h3 className="text-xl font-medium mb-2">Design System</h3>
              <p className="text-muted-foreground mb-4">A comprehensive design system for building consistent and accessible user interfaces.</p>
              <Link to="/portfolio" className="text-primary/80 hover:text-primary font-medium text-sm">View project →</Link>
            </div>
            <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
              <h3 className="text-xl font-medium mb-2">Photography Portfolio</h3>
              <p className="text-muted-foreground mb-4">An elegant portfolio website showcasing landscape and architectural photography.</p>
              <Link to="/portfolio" className="text-primary/80 hover:text-primary font-medium text-sm">View project →</Link>
            </div>
          </div>
        </div>
        
        <div className="pt-8 animate-slide-up" style={{ animationDelay: '600ms' }}>
          <h2 className="text-2xl font-medium mb-6">Latest Writing</h2>
          <div className="grid grid-cols-1 gap-6">
            <Link to="/blog" className="block group">
              <article className="p-6 rounded-md border border-border/40 bg-card card-hover">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">May 15, 2023</span>
                  <span className="text-xs text-muted-foreground">5 min read</span>
                </div>
                <h3 className="text-xl font-medium mb-2 group-hover:text-primary/80 transition-colors duration-200">
                  The Principles of Minimalist Design
                </h3>
                <p className="text-muted-foreground">An exploration of minimalist design principles and how they can be applied to create more effective digital products.</p>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
