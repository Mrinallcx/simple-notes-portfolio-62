
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
            UX Designer @LCX | Web3.0 | 5 Years of Product Design | Applied AI Engineer
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
              <strong>N.B:</strong> I bring real-world experience and knowledge over certifications.
            </p>
          </div>
          <div className="mt-2 flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/uxmrinal/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/5 text-foreground/80"
            >
              <svg width="16" height="16" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2665_66918)">
                  <path d="M511.872 512L512 511.979V324.203C512 232.341 492.224 161.579 384.832 161.579C333.205 161.579 298.56 189.909 284.416 216.768H282.923V170.155H181.099V511.979H287.125V342.72C287.125 298.155 295.573 255.061 350.763 255.061C405.141 255.061 405.952 305.92 405.952 345.579V512H511.872ZM8.448 170.176H114.603V512H8.448V170.176ZM61.4827 0C27.5413 0 0 27.5413 0 61.4827C0 95.424 27.5413 123.541 61.4827 123.541C95.424 123.541 122.965 95.424 122.965 61.4827C122.954 45.1799 116.473 29.5481 104.945 18.0203C93.4172 6.49255 77.7854 0.0113017 61.4827 0Z" fill="currentColor"/>
                </g>
                <defs>
                  <clipPath id="clip0_2665_66918">
                    <rect width="512" height="512" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a 
              href="https://x.com/builtby_mrinal" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/5 text-foreground/80"
            >
              <svg width="16" height="16" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M303.661 216.797L490.166 0H445.971L284.028 188.242L154.686 0H5.50391L201.096 284.655L5.50391 512H49.7021L220.717 313.21L357.313 512H506.495L303.651 216.797H303.661ZM243.126 287.163L223.308 258.818L65.6274 33.2716H133.513L260.764 215.295L280.581 243.64L445.992 480.241H378.106L243.126 287.174V287.163Z" fill="currentColor"/>
              </svg>
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
              <a href="https://focusedtube.xyz/" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
            <div className="rounded-md border border-border/40 bg-card card-hover overflow-hidden">
                  <div className="h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/Focusedtube.png" 
                      alt="FocusedTube Preview" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-serif font-medium">Focusedtube</h3>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">Distraction-free YouTube experience with enhanced focus features.</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {['Lovable', 'Bolt', 'Cursor', 'Vercel'].map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full border border-border/60 bg-secondary/40 text-foreground/70">{tag}</span>
                      ))}
                    </div>
                  </div>
            </div>
              </a>
              <a href="https://mind-reset.xyz" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
            <div className="rounded-md border border-border/40 bg-card card-hover overflow-hidden">
                  <div className="h-32 bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/Mindreset.png" 
                      alt="Mind Reset Preview" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-serif font-medium">Mind Reset</h3>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">Mental wellness app for mindfulness, meditation, and cognitive reset techniques.</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {['Lovable', 'Netlify'].map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full border border-border/60 bg-secondary/40 text-foreground/70">{tag}</span>
                      ))}
                    </div>
                  </div>
            </div>
              </a>
              <a href="https://chat.bharat0.xyz/" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
            <div className="rounded-md border border-border/40 bg-card card-hover overflow-hidden">
                  <div className="h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/Cryptosearch engine.png" 
                      alt="Crypto Search Engine Preview" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-serif font-medium">Crypto Search Engine</h3>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">Specialized search engine for cryptocurrency information and market data.</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {['Cursor', 'Vercel'].map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full border border-border/60 bg-secondary/40 text-foreground/70">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://payme-your-simple-payment-hub.vercel.app/" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
            <div className="rounded-md border border-border/40 bg-card card-hover overflow-hidden">
                  <div className="h-32 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center overflow-hidden">
                    <div className="text-4xl font-bold text-blue-400/60">Payme</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-serif font-medium">Payme</h3>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">Peer-to-peer payment gateway based on x402 protocol. Developed using AI only.</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {['AI', 'Cursor', 'Vercel', 'x402'].map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full border border-border/60 bg-secondary/40 text-foreground/70">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 animate-slide-up" style={{
        animationDelay: '445ms'
      }}>
          <h2 className="text-2xl font-serif font-medium mb-6">Custom GPT</h2>
          <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4">
            <div className="flex md:contents overflow-x-auto md:overflow-visible gap-3 md:gap-0 pb-4 md:pb-0 scrollbar-hide">
              <a href="https://chatgpt.com/g/g-69721ed3b52881919d82b02d7db8f342-bharatx" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-64 md:w-auto">
                <div className="rounded-md border border-border/40 bg-card card-hover overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-base font-serif font-medium">BharatX</h3>
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                    </div>
                    <p className="text-muted-foreground text-xs mb-2">A finance only AI for data driven market analysis and future predictoin across markets.</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {['Finance', 'Chatgpt'].map((tag) => (
                        <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded-full border border-border/60 bg-secondary/40 text-foreground/70">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://chatgpt.com/g/g-69722926302081919d617882ee4fa36f-bharatx-senior-ux-researcher" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-64 md:w-auto">
                <div className="rounded-md border border-border/40 bg-card card-hover overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-base font-serif font-medium">UX Researcher</h3>
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                    </div>
                    <p className="text-muted-foreground text-xs mb-2">A senior UX researcher GPT for writing clear, research based, portfolio ready UX case studies.</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {['Design', 'UX', 'Chatgpt'].map((tag) => (
                        <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded-full border border-border/60 bg-secondary/40 text-foreground/70">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://chatgpt.com/g/g-69722e919e18819191212b461610609d-bharatx-prompt-engineer" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-64 md:w-auto">
                <div className="rounded-md border border-border/40 bg-card card-hover overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-base font-serif font-medium">Prompt Engineer</h3>
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                    </div>
                    <p className="text-muted-foreground text-xs mb-2">I create precise, structured image prompts optimized for Nano Banana, ensuring clarity and visual accuracy.</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {['Design', 'Image', 'Chatgpt'].map((tag) => (
                        <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded-full border border-border/60 bg-secondary/40 text-foreground/70">{tag}</span>
                      ))}
                    </div>
                  </div>
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
              <div className="p-6 pb-14 rounded-md border border-border/40 bg-card card-hover relative">
                <span className="absolute bottom-4 left-4 text-[10px] px-2 py-0.5 rounded-full border border-border/60 bg-secondary/40 text-foreground/70">Corporate</span>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-serif font-medium">LCX</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                </div>
                <p className="text-muted-foreground text-sm">Cryptocurrency exchange platform with advanced trading features and security.</p>
              </div>
            </a>
            <a href="https://app.tiamonds.com/" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
              <div className="p-6 pb-14 rounded-md border border-border/40 bg-card card-hover relative">
                <span className="absolute bottom-4 left-4 text-[10px] px-2 py-0.5 rounded-full border border-border/60 bg-secondary/40 text-foreground/70">Corporate</span>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-serif font-medium">Tiamonds</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                </div>
                <p className="text-muted-foreground text-sm">NFT marketplace and diamond trading platform on blockchain technology.</p>
              </div>
            </a>
            <a href="https://www.jito.wtf/" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
              <div className="p-6 pb-14 rounded-md border border-border/40 bg-card card-hover relative">
                <span className="absolute bottom-4 left-4 text-[10px] px-2 py-0.5 rounded-full border border-border/60 bg-secondary/40 text-foreground/70">Agency</span>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-serif font-medium">Jito Wtf</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                </div>
                <p className="text-muted-foreground text-sm">DeFi platform offering innovative trading and yield farming solutions.</p>
              </div>
            </a>
            <a href="https://particle.network/" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
              <div className="p-6 pb-14 rounded-md border border-border/40 bg-card card-hover relative">
                <span className="absolute bottom-4 left-4 text-[10px] px-2 py-0.5 rounded-full border border-border/60 bg-secondary/40 text-foreground/70">Agency</span>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-serif font-medium">Particle Network</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                </div>
                <p className="text-muted-foreground text-sm">Web3 infrastructure platform for seamless blockchain integration.</p>
              </div>
            </a>
            <a href="https://manimama.exchange/" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
              <div className="p-6 pb-14 rounded-md border border-border/40 bg-card card-hover relative">
                <span className="absolute bottom-4 left-4 text-[10px] px-2 py-0.5 rounded-full border border-border/60 bg-secondary/40 text-foreground/70">Corporate</span>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-serif font-medium">Manimama</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                </div>
                <p className="text-muted-foreground text-sm">Cryptocurrency exchange with user-friendly interface and trading tools.</p>
              </div>
            </a>
            <a href="https://masterdex.xyz/" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
              <div className="p-6 pb-14 rounded-md border border-border/40 bg-card card-hover relative">
                <span className="absolute bottom-4 left-4 text-[10px] px-2 py-0.5 rounded-full border border-border/60 bg-secondary/40 text-foreground/70">Agency</span>
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
                title: "Real-Time Sentiment Mining for Proactive Trading/Investing UX",
                desc: "The convergence of artificial intelligence, real-time data processing, and behavioral psychology has created unprecedented opportunities ..."
              },
              {
                title: "The Impact of Dark Patterns in E-Commerce on Consumer",
                desc: "Research reveals that over 76% of websites employ deceptive design elements that manipulate user behavior and erode consumer trust in e-commerce.",
                url: "https://drive.google.com/file/d/1l1Nf75gzqyORcAKGH7B6nbqDMsRP27ZG/view?usp=drive_link"
              }
            ].map((item) => {
              const cardContent = (
                <div className="p-6 rounded-md border border-border/40 bg-card card-hover group relative">
                  {!item.url && (
                    <span className="absolute bottom-4 left-4 text-[10px] px-2 py-0.5 rounded-full border border-border/60 bg-secondary/40 text-foreground/70">Coming soon</span>
                  )}
                  <h3 className="text-xl font-serif font-medium mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                  <div className="mt-4 flex justify-end">
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                  </div>
                </div>
              );

              return (
                <div key={item.title}>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                      {cardContent}
                    </a>
                  ) : (
                    cardContent
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
      </section>
    </Layout>;
};
export default Index;
