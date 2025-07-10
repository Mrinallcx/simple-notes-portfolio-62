
import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Twitter, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/BlogCard";

const Index = () => {
  return <Layout>
      <section className="space-y-8 animate-fade-in">
        <div className="py-12 md:py-20">
          <span className="text-sm font-medium text-muted-foreground mb-2 block animate-slide-down" style={{
          animationDelay: '100ms'
        }}>
            Hello, I'm
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 animate-slide-down" style={{
          animationDelay: '200ms'
        }}>Mrinal Chakraborty</h1>
          <p className="text-xl text-muted-foreground max-w-2xl animate-slide-down" style={{
          animationDelay: '300ms'
        }}>
            UX Design @LCX | Web3.0 | 5 Years of Product Design | AI Enthusiast | Applied AI Engineer
          </p>
          <p className="text-sm text-[#a0a0a0] mt-4 animate-slide-down" style={{ animationDelay: '320ms' }}>
            Call: <a href="tel:+918811837252" className="hover:text-purple-500 transition-colors duration-200">+91 8811837252</a><br />
            Email: <a href="mailto:mrinal@mrinalchakraborty.in" className="hover:text-purple-500 transition-colors duration-200">mrinal@mrinalchakraborty.in</a>
          </p>
          
          <div className="mt-6 inline-block border-l-4 border-yellow-500 rounded-r-md animate-slide-down" style={{
          animationDelay: '350ms',
          backgroundColor: 'rgba(185, 178, 98, 0.3)'
        }}>
            <p className="text-yellow-600 text-xs font-medium px-2 py-1">
              <strong>N.B:</strong> I am not from NID, IIT or any tier 1 college, I can bring only experience and knowledge on the table.
            </p>
          </div>
          
          <div className="mt-4 flex items-center space-x-3 animate-slide-down" style={{
          animationDelay: '400ms'
        }}>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-purple-500 transition-colors duration-200"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-purple-500 transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://t.me/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-purple-500 transition-colors duration-200"
            >
              <Send className="h-5 w-5" />
            </a>
            <a 
              href="/nft-gallery" 
              className="text-muted-foreground hover:text-purple-500 transition-colors duration-200 flex items-center space-x-1"
            >
              <span className="text-sm font-medium">NFT Gallery</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        
        <div className="bg-secondary/50 rounded-lg p-8 border border-border/40 animate-slide-up" style={{
        animationDelay: '400ms'
      }}>
          <h2 className="text-2xl font-serif font-medium mb-4">About me</h2>
          <p className="text-muted-foreground mb-4">
            I’m a UX designer with 5 years of experience, including 3.5+ years focused on product design. Since 2019, I’ve completed 30+ production grade projects, combining design thinking with a “jugadu” mindset to solve real problems.
          </p>
          <p className="text-muted-foreground mb-4">
            I also have hands-on experience with WordPress, Joomla, Magento, Shopify, Webflow, and Framer for development. For design, I use Figma and the Adobe Suite (Photoshop, Illustrator, After Effects, Premiere Pro).
          </p>
          <p className="text-muted-foreground">
            Day to day, I rely on tools like MidJourney, GPT, Bard, Copilot, and a lot of coffee. Still improving my communication and client-handling skills, but always learning and building.
          </p>
        </div>
        
        <div className="pt-8 animate-slide-up" style={{
        animationDelay: '440ms'
      }}>
          <h2 className="text-2xl font-serif font-medium mb-6">Personal Project</h2>
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            <div className="flex md:contents overflow-x-auto md:overflow-visible gap-4 md:gap-0 pb-4 md:pb-0 scrollbar-hide">
              <a href="#" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
                <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-serif font-medium">Focusedtube</h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                  </div>
                  <p className="text-muted-foreground text-sm">Distraction-free YouTube experience with enhanced focus features and productivity tools.</p>
                </div>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
                <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-serif font-medium">Mind Reset</h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                  </div>
                  <p className="text-muted-foreground text-sm">Mental wellness app for mindfulness, meditation, and cognitive reset techniques.</p>
                </div>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
                <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-serif font-medium">Reddit Co-pilot</h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                  </div>
                  <p className="text-muted-foreground text-sm">AI-powered Reddit assistant for content discovery and community engagement.</p>
                </div>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
                <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-serif font-medium">X Co-pilot</h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                  </div>
                  <p className="text-muted-foreground text-sm">Twitter/X platform assistant for content creation and social media management.</p>
                </div>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
                <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-serif font-medium">Finance Analytics</h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                  </div>
                  <p className="text-muted-foreground text-sm">Comprehensive financial analysis platform with data visualization and insights.</p>
                </div>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
                <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-serif font-medium">Crypto Search Engine</h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                  </div>
                  <p className="text-muted-foreground text-sm">Specialized search engine for cryptocurrency information and market data.</p>
                </div>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
                <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-serif font-medium">Dex Explorer</h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                  </div>
                  <p className="text-muted-foreground text-sm">Decentralized exchange explorer for tracking trades and market analysis.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 animate-slide-up" style={{
        animationDelay: '450ms'
      }}>
                    <h2 className="text-2xl font-serif font-medium mb-6">Live Projects</h2>
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            <div className="flex md:contents overflow-x-auto md:overflow-visible gap-4 md:gap-0 pb-4 md:pb-0 scrollbar-hide">
              <a href="https://exchange.lcx.com/" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
              <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-serif font-medium">LCX</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                </div>
                <p className="text-muted-foreground text-sm">Cryptocurrency exchange platform with advanced trading features and security.</p>
              </div>
            </a>
            <a href="https://app.tiamonds.com/" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
              <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-serif font-medium">Tiamonds</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                </div>
                <p className="text-muted-foreground text-sm">NFT marketplace and diamond trading platform on blockchain technology.</p>
              </div>
            </a>
            <a href="https://www.jito.wtf/" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
              <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-serif font-medium">Jito Wtf</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                </div>
                <p className="text-muted-foreground text-sm">DeFi platform offering innovative trading and yield farming solutions.</p>
              </div>
            </a>
            <a href="https://particle.network/" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
              <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-serif font-medium">Particle Network</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                </div>
                <p className="text-muted-foreground text-sm">Web3 infrastructure platform for seamless blockchain integration.</p>
              </div>
            </a>
            <a href="https://decent.xyz/" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
              <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-serif font-medium">Decent</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                </div>
                <p className="text-muted-foreground text-sm">Decentralized platform for creators and digital content monetization.</p>
              </div>
            </a>
            <a href="https://manimama.exchange/" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
              <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-serif font-medium">Manimama</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                </div>
                <p className="text-muted-foreground text-sm">Cryptocurrency exchange with user-friendly interface and trading tools.</p>
              </div>
            </a>
            <a href="https://www.spherium.finance/" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
              <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-serif font-medium">Spherium Finance</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                </div>
                <p className="text-muted-foreground text-sm">Cross-chain DeFi platform for lending, borrowing, and yield optimization.</p>
              </div>
            </a>
            <a href="https://www.magpiefi.xyz/" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
              <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-serif font-medium">Magpie Dapp</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                </div>
                <p className="text-muted-foreground text-sm">DeFi application offering innovative financial products and services.</p>
              </div>
            </a>
            <a href="https://masterdex.app/" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
              <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-serif font-medium">Masterdex</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                </div>
                <p className="text-muted-foreground text-sm">Decentralized exchange platform for seamless crypto trading.</p>
              </div>
            </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 animate-slide-up" style={{
        animationDelay: '480ms'
      }}>
          <h2 className="text-2xl font-serif font-medium mb-6">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-md border border-border/40 bg-card">
              <h3 className="text-lg font-serif font-medium mb-4 text-purple-500">Design</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>UX/UI Design</li>
                <li>Information Architecture</li>
                <li>Interaction Design</li>
                <li>Design Systems</li>
                <li>Component Libraries</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="p-6 rounded-md border border-border/40 bg-card">
              <h3 className="text-lg font-serif font-medium mb-4 text-purple-500">Research</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>User Research & Analysis</li>
                <li>Usability Testing</li>
                <li>A/B Testing</li>
                <li>Journey Mapping</li>
                <li>Heuristic Evaluation</li>
                <li>Design Thinking</li>
                <li>Agile UX</li>
              </ul>
            </div>
            <div className="p-6 rounded-md border border-border/40 bg-card">
              <h3 className="text-lg font-serif font-medium mb-4 text-purple-500">Tools</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>n8n, make</li>
                <li>Bolt</li>
                <li>Lovable</li>
                <li>Figma (Advanced)</li>
                <li>Adobe XD</li>
                <li>Sketch</li>
                <li>Zeplin</li>
                <li>Miro</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 animate-slide-up" style={{
        animationDelay: '500ms'
      }}>
          <h2 className="text-2xl font-serif font-medium mb-6">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
              <h3 className="text-xl font-serif font-medium mb-2">Camera AI Systems</h3>
              <p className="text-muted-foreground mb-4">Research and development of AI-based camera systems for next-generation mobile devices and advanced image processing.</p>
              <Link to="/portfolio" className="text-primary/80 hover:text-primary font-medium text-sm">View projects →</Link>
            </div>
            <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
              <h3 className="text-xl font-serif font-medium mb-2">Computer Vision Research</h3>
              <p className="text-muted-foreground mb-4">Publications and patents in the field of computer vision, focusing on real-time processing for embedded systems.</p>
              <Link to="/portfolio" className="text-primary/80 hover:text-primary font-medium text-sm">View research →</Link>
            </div>
            <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
              <h3 className="text-xl font-serif font-medium mb-2">Edge AI Processing</h3>
              <p className="text-muted-foreground mb-4">Optimization techniques for running complex AI models on resource-constrained edge devices with minimal latency.</p>
              <Link to="/portfolio" className="text-primary/80 hover:text-primary font-medium text-sm">View case study →</Link>
            </div>
            <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
              <h3 className="text-xl font-serif font-medium mb-2">Media Enhancement</h3>
              <p className="text-muted-foreground mb-4">Advanced algorithms for noise reduction, super-resolution, and color enhancement in digital photography and videography.</p>
              <Link to="/portfolio" className="text-primary/80 hover:text-primary font-medium text-sm">View details →</Link>
            </div>
            <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
              <h3 className="text-xl font-serif font-medium mb-2">Neural Networks for Mobile</h3>
              <p className="text-muted-foreground mb-4">Custom architectures designed specifically for mobile devices, balancing performance with power consumption.</p>
              <Link to="/portfolio" className="text-primary/80 hover:text-primary font-medium text-sm">Learn more →</Link>
            </div>
          </div>
        </div>
        
        <div className="pt-8 animate-slide-up" style={{
        animationDelay: '600ms'
      }}>
          <h2 className="text-2xl font-serif font-medium mb-6">Latest Writing</h2>
          <div className="grid grid-cols-1 gap-6">
            <BlogCard 
              title="Advancements in Mobile AI for Camera Systems"
              excerpt="Exploring the latest developments in on-device AI for camera systems and how they're revolutionizing mobile photography and video capture."
              date="June 12, 2023"
              readTime="7 min read"
              slug="mobile-ai-camera-systems"
            />
            
            <BlogCard 
              title="Optimizing Neural Networks for Edge Devices"
              excerpt="A deep dive into techniques for making complex neural networks run efficiently on resource-constrained mobile and IoT devices."
              date="May 22, 2023"
              readTime="9 min read"
              slug="optimizing-neural-networks-edge"
            />
            
            <BlogCard 
              title="The Future of Computer Vision in Consumer Electronics"
              excerpt="How emerging computer vision technologies will transform everyday devices and create new possibilities for human-computer interaction."
              date="April 18, 2023"
              readTime="6 min read"
              slug="future-computer-vision-consumer-electronics"
            />
            
            <BlogCard 
              title="Balancing AI Capability and Privacy in Camera Systems"
              excerpt="Examining the ethical considerations and technical approaches to implementing powerful AI features while respecting user privacy."
              date="March 5, 2023"
              readTime="8 min read"
              slug="ai-privacy-balance-cameras"
            />
          </div>

        </div>
      </section>
    </Layout>;
};
export default Index;
