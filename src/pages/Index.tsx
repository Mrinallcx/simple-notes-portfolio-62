
import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return <Layout>
      <section className="space-y-8 animate-fade-in">
        <div className="py-12 md:py-20">
          <span className="text-sm font-medium text-muted-foreground mb-2 block animate-slide-down" style={{
          animationDelay: '100ms'
        }}>
            Hello, I'm
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-down" style={{
          animationDelay: '200ms'
        }}>Mrinal Chakraborty</h1>
          <p className="text-xl text-muted-foreground max-w-2xl animate-slide-down" style={{
          animationDelay: '300ms'
        }}>UX Designer &amp; AI Explorer crafting intuitive, dynamic, and human centered digital experiences.</p>
        </div>
        
        <div className="bg-secondary/50 rounded-lg p-8 border border-border/40 animate-slide-up" style={{
        animationDelay: '400ms'
      }}>
          <h2 className="text-2xl font-medium mb-4">About me</h2>
          <p className="text-muted-foreground mb-4">
            I'm a Senior Technical Staff member at Samsung Research America, focused on Media AI research and development. I design and implement cutting-edge AI solutions for camera and video technologies.
          </p>
          <p className="text-muted-foreground">
            With a background in computer vision, deep learning, and signal processing, I'm passionate about pushing the boundaries of AI in consumer electronics and multimedia applications.
          </p>
        </div>
        
        <div className="pt-8 animate-slide-up" style={{
        animationDelay: '500ms'
      }}>
          <h2 className="text-2xl font-medium mb-6">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
              <h3 className="text-xl font-medium mb-2">Camera AI Systems</h3>
              <p className="text-muted-foreground mb-4">Research and development of AI-based camera systems for next-generation mobile devices and advanced image processing.</p>
              <Link to="/portfolio" className="text-primary/80 hover:text-primary font-medium text-sm">View projects →</Link>
            </div>
            <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
              <h3 className="text-xl font-medium mb-2">Computer Vision Research</h3>
              <p className="text-muted-foreground mb-4">Publications and patents in the field of computer vision, focusing on real-time processing for embedded systems.</p>
              <Link to="/portfolio" className="text-primary/80 hover:text-primary font-medium text-sm">View research →</Link>
            </div>
            <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
              <h3 className="text-xl font-medium mb-2">Edge AI Processing</h3>
              <p className="text-muted-foreground mb-4">Optimization techniques for running complex AI models on resource-constrained edge devices with minimal latency.</p>
              <Link to="/portfolio" className="text-primary/80 hover:text-primary font-medium text-sm">View case study →</Link>
            </div>
            <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
              <h3 className="text-xl font-medium mb-2">Media Enhancement</h3>
              <p className="text-muted-foreground mb-4">Advanced algorithms for noise reduction, super-resolution, and color enhancement in digital photography and videography.</p>
              <Link to="/portfolio" className="text-primary/80 hover:text-primary font-medium text-sm">View details →</Link>
            </div>
            <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
              <h3 className="text-xl font-medium mb-2">Neural Networks for Mobile</h3>
              <p className="text-muted-foreground mb-4">Custom architectures designed specifically for mobile devices, balancing performance with power consumption.</p>
              <Link to="/portfolio" className="text-primary/80 hover:text-primary font-medium text-sm">Learn more →</Link>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline" asChild className="gap-2">
              <Link to="/portfolio">
                View all work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="pt-8 animate-slide-up" style={{
        animationDelay: '600ms'
      }}>
          <h2 className="text-2xl font-medium mb-6">Latest Writing</h2>
          <div className="grid grid-cols-1 gap-6">
            <Link to="/blog" className="block group">
              <article className="p-6 rounded-md border border-border/40 bg-card card-hover">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">June 12, 2023</span>
                  <span className="text-xs text-muted-foreground">7 min read</span>
                </div>
                <h3 className="text-xl font-medium mb-2 group-hover:text-primary/80 transition-colors duration-200">
                  Advancements in Mobile AI for Camera Systems
                </h3>
                <p className="text-muted-foreground">Exploring the latest developments in on-device AI for camera systems and how they're revolutionizing mobile photography and video capture.</p>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;
