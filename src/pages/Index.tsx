
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
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl animate-slide-down" style={{
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
            <p className="text-white text-xs font-medium px-2 py-1">
              <strong>N.B:</strong> Do not hire me if you are looking for certified designers. I can bring only experience and knowledge on the table.
            </p>
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
            I also have hands-on experience with Lovable, Cursor, Bolt.new, Shopify, Webflow, and Framer for development. For design, I use Figma and the Adobe Creative Suite.
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
                  <p className="text-muted-foreground text-sm mb-3">Distraction-free YouTube experience with enhanced focus features.</p>
                  
                </div>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
                <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-serif font-medium">Mind Reset</h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">Mental wellness app for mindfulness, meditation, and cognitive reset techniques.</p>
                  
                </div>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
                <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-serif font-medium">Crypto Search Engine</h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">Specialized search engine for cryptocurrency information and market data.</p>
                  
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
          <div className="flex flex-wrap gap-2">
            {[
              // Design
              'UX/UI Design',
              'Information Architecture',
              'Interaction Design',
              'Design Systems',
              'Component Libraries',
              'Responsive Design',
              // Research
              'User Research & Analysis',
              'Usability Testing',
              'A/B Testing',
              'Journey Mapping',
              'Heuristic Evaluation',
              'Design Thinking',
              'Agile UX',
              // Tools
              'n8n',
              'Make',
              'Bolt',
              'Lovable',
              'Figma (Advanced)',
              'Adobe XD',
              'Sketch',
              'Zeplin',
              'Miro',
              // Added per request
              'Agile Method',
              'Jira'
            ].map((skill) => (
              <span key={skill} className="text-xs md:text-sm px-3 py-1 rounded-full border border-border/60 bg-secondary/40 text-foreground/80">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="pt-8 animate-slide-up" style={{
        animationDelay: '500ms'
      }}>
          <h2 className="text-2xl font-serif font-medium mb-6">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Chat with Your Crypto: Voice-Activated, Multilingual UX for India’s Newest Investors",
                desc: "India’s next billion digital users are arriving online via low-cost smartphones, patchy data, and 22 official languages. Speech AI––already powering..."
              },
              {
                title: "Crypto Anxiety to Crypto Zen: Emotion-Aware UX for First-Time Investors",
                desc: "The cryptocurrency market's extreme volatility creates a perfect storm of emotional turbulence for first-time investors. While traditional..."
              },
              {
                title: "Frictionless Futures: Predictive Onboarding and the Vanishing Crypto UI",
                desc: "Over the next decade, a decisive share of Web3 adoption will be won or lost in the first 60 seconds of a user’s journey. Modern wallets..."
              },
              {
                title: "Frictionless KYC: Designing Instant, AI-Powered Digital Onboarding for the Unbanked",
                desc: "More than 1.3 billion adults worldwide remain outside the formal financial system despite recordhigh account ownership..."
              },
              {
                title: "AI-Generated Deepfakes and Revenge Porn: The Emerging Threat",
                desc: "The emergence of AI-generated deepfakes represents one of the most insidious technological threats of the digital age..."
              },
              {
                title: "Hype to Hand: How AI News Sentiment Moves Wallets Instantly",
                desc: "The cryptocurrency trading landscape has undergone a seismic transformation as artificial intelligence systems begin intercepting..."
              },
              {
                title: "Invisible Intelligence: Will Autonomous AI Agents Make Crypto Self-Driving?",
                desc: "AI agents are rapidly evolving from passive chatbots into on-chain copilots that execute trades, rebalance portfolios, police scams and even..."
              },
              {
                title: "The Influence of Personalization on User Experience in News Apps",
                desc: "Personalized news applications have fundamentally transformed how users consume information, creating a complex..."
              },
              {
                title: "Token of Inclusion: AI-Driven UX for Financial Access Among the Unbanked",
                desc: "Financial inclusion remains a pressing global challenge: 1.4 billion adults still lack a formal account..."
              }
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-md border border-border/40 bg-card card-hover group relative">
                <span className="absolute bottom-4 left-4 text-[10px] px-2 py-0.5 rounded-full border border-border/60 bg-secondary/40 text-foreground/70">Coming soon</span>
                <h3 className="text-xl font-serif font-medium mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
                <div className="mt-4 flex justify-end">
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </section>
    </Layout>;
};
export default Index;
