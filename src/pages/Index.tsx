
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
            </div>
          </div>
        </div>
        
        <div className="pt-8 animate-slide-up" style={{
        animationDelay: '450ms'
      }}>
                    <h2 className="text-2xl font-serif font-medium mb-6">Live Projects</h2>
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            <div className="flex md:contents overflow-x-auto md:overflow-visible gap-4 md:gap-0 pb-4 md:pb-0 scrollbar-hide">
            {/* <a href="https://exchange.lcx.com/" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
            <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-serif font-medium">LCX</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                </div>
                <p className="text-muted-foreground text-sm">Cryptocurrency exchange platform with advanced trading features and security.</p>
              </div>
            </a> */}
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
            <a href="https://decent.xyz/" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
              <div className="p-6 pb-14 rounded-md border border-border/40 bg-card card-hover relative">
                <span className="absolute bottom-4 left-4 text-[10px] px-2 py-0.5 rounded-full border border-border/60 bg-secondary/40 text-foreground/70">Agency</span>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-serif font-medium">Decent</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                </div>
                <p className="text-muted-foreground text-sm">Decentralized platform for creators and digital content monetization.</p>
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
            <a href="https://www.spherium.finance/" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
              <div className="p-6 pb-14 rounded-md border border-border/40 bg-card card-hover relative">
                <span className="absolute bottom-4 left-4 text-[10px] px-2 py-0.5 rounded-full border border-border/60 bg-secondary/40 text-foreground/70">Agency</span>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-serif font-medium">Spherium Finance</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                </div>
                <p className="text-muted-foreground text-sm">Cross-chain DeFi platform for lending, borrowing, and yield optimization.</p>
              </div>
            </a>
            <a href="https://www.magpiefi.xyz/" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
              <div className="p-6 pb-14 rounded-md border border-border/40 bg-card card-hover relative">
                <span className="absolute bottom-4 left-4 text-[10px] px-2 py-0.5 rounded-full border border-border/60 bg-secondary/40 text-foreground/70">Agency</span>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-serif font-medium">Magpie Dapp</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                </div>
                <p className="text-muted-foreground text-sm">DeFi application offering innovative financial products and services.</p>
            </div>
            </a>
            {/* <a href="https://masterdex.app/" target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 md:flex-shrink w-80 md:w-auto">
            <div className="p-6 rounded-md border border-border/40 bg-card card-hover">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-serif font-medium">Masterdex</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                </div>
                <p className="text-muted-foreground text-sm">Decentralized exchange platform for seamless crypto trading.</p>
              </div>
            </a> */}
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
                title: "Real-Time Sentiment Mining for Proactive Trading/Investing UX",
                desc: "The convergence of artificial intelligence, real-time data processing, and behavioral psychology has created unprecedented opportunities ..."
              },
              {
                title: "Regulation Blues: The Challenge of Policing Soft Porn on Instagram in India",
                desc: "The regulation of sexually explicit content on social media platforms in India represents..."
              },
              {
                title: "The \"Highlight Reel\" Effect: Showcasing Success, Hiding Struggles",
                desc: "The digital age has created an unprecedented disconnect between online..."
              },
              {
                title: "The Effectiveness of Personalized Learning Platforms in K-12 Education",
                desc: "Personalized learning platforms represent a paradigm shift in K-12 education..."
              },
              {
                title: "The Hidden System: Multi-Level Corruption, Accountability Gaps, and User Disempowerment in Gurugram's Road Maintenance",
                desc: "Gurugram's road maintenance system represents a masterclass in institutional failure, where systemic corruption, accountability gaps, and user disempowerment create a perfect storm of public service breakdown."
              },
              {
                title: "The Impact of Dark Patterns in E-Commerce on Consumer Trust and Behavior",
                desc: "Dark patterns in e-commerce have emerged as one of the most pervasive and damaging phenomena in digital commerce, with research revealing that over 76% of websites now employ at least one deceptive design element. These manipulative user interface tactics systematically exploit..."
              },
              {
                title: "The Influence of Personalization on User Experience in News Apps",
                desc: "Personalized news applications have fundamentally transformed how users consume information, creating a complex..."
              }
            ].map((item) => {
              const isDeepfakesCase = item.title === "AI-Generated Deepfakes and Revenge Porn: The Emerging Threat";
              const isCryptoAnxietyCase = item.title === "Crypto Anxiety to Crypto Zen: Emotion-Aware UX for First-Time Investors";
              const isFrictionlessCase = item.title === "Frictionless Futures: Predictive Onboarding and the Vanishing Crypto UI";
              const isKYCcase = item.title === "Frictionless KYC: Designing Instant, AI-Powered Digital Onboarding for the Unbanked";
              const isSentimentMiningCase = item.title === "Real-Time Sentiment Mining for Proactive Trading/Investing UX";
              const isRegulationBluesCase = item.title === "Regulation Blues: The Challenge of Policing Soft Porn on Instagram in India";
              const isHighlightReelCase = item.title === "The \"Highlight Reel\" Effect: Showcasing Success, Hiding Struggles";
              const isPersonalizedLearningCase = item.title === "The Effectiveness of Personalized Learning Platforms in K-12 Education";
              const isHiddenSystemCase = item.title === "The Hidden System: Multi-Level Corruption, Accountability Gaps, and User Disempowerment in Gurugram's Road Maintenance";
              const isDarkPatternsCase = item.title === "The Impact of Dark Patterns in E-Commerce on Consumer Trust and Behavior";
              const isNewsPersonalizationCase = item.title === "The Influence of Personalization on User Experience in News Apps";
              const hasLink = isDeepfakesCase || isCryptoAnxietyCase || isFrictionlessCase || isKYCcase || isSentimentMiningCase || isRegulationBluesCase || isHighlightReelCase || isPersonalizedLearningCase || isHiddenSystemCase || isDarkPatternsCase || isNewsPersonalizationCase;
              
              const cardContent = (
                <div className="p-6 rounded-md border border-border/40 bg-card card-hover group relative">
                  {!hasLink && (
                    <span className="absolute bottom-4 left-4 text-[10px] px-2 py-0.5 rounded-full border border-border/60 bg-secondary/40 text-foreground/70">Coming soon</span>
                  )}
                  <h3 className="text-xl font-serif font-medium mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                  <div className="mt-4 flex justify-end">
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                  </div>
                </div>
              );

              if (isDeepfakesCase) {
                return (
                  <a 
                    key={item.title}
                    href="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/case%20study%2FAI-Generated%20Deepfakes%20and%20Revenge%20Porn_%20The%20Emerg.pdf?alt=media&token=e243c6fc-8aab-4508-a317-e49fd0d6315b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {cardContent}
                  </a>
                );
              } else if (isCryptoAnxietyCase) {
                return (
                  <a 
                    key={item.title}
                    href="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/case%20study%2FCrypto%20Anxiety%20to%20Crypto%20Zen_%20Emotion-Aware%20UX%20for.pdf?alt=media&token=d7333ac3-67ae-4d70-95ed-7c5c6035502c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {cardContent}
                  </a>
                );
              } else if (isFrictionlessCase) {
                return (
                  <a 
                    key={item.title}
                    href="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/case%20study%2FFrictionless%20Futures_%20Predictive%20Onboarding%20and%20th.pdf?alt=media&token=7b8118f3-a1ae-44a2-9c78-75a959cb7326"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {cardContent}
                  </a>
                );
              } else if (isKYCcase) {
                return (
                  <a 
                    key={item.title}
                    href="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/case%20study%2FFrictionless%20KYC_%20Designing%20Instant%2C%20AI-Powered%20Di.pdf?alt=media&token=625268f9-89a4-4a52-8031-a5566ce5a07d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {cardContent}
                  </a>
                );
              } else if (isSentimentMiningCase) {
                return (
                  <a 
                    key={item.title}
                    href="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/case%20study%2FReal-Time%20Sentiment%20Mining%20for%20Proactive%20Trading_I.pdf?alt=media&token=0a5d428d-cdfd-4b98-8bb5-bb2decccec62"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {cardContent}
                  </a>
                );
              } else if (isRegulationBluesCase) {
                return (
                  <a 
                    key={item.title}
                    href="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/case%20study%2FRegulation%20Blues_%20The%20Challenge%20of%20Policing%20Soft%20P.pdf?alt=media&token=6cea42b7-b810-4db4-a814-be5f175f2ba5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {cardContent}
                  </a>
                );
              } else if (isHighlightReelCase) {
                return (
                  <a 
                    key={item.title}
                    href="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/case%20study%2FThe%20_Highlight%20Reel_%20Effect_%20Showcasing%20Success%2C%20H.pdf?alt=media&token=b5392a73-719f-4d14-82da-6996470d5277"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {cardContent}
                  </a>
                );
              } else if (isPersonalizedLearningCase) {
                return (
                  <a 
                    key={item.title}
                    href="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/case%20study%2FThe%20Effectiveness%20of%20Personalized%20Learning%20Platfor.pdf?alt=media&token=4565a2ed-6ff7-492d-979a-200c1a3643d7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {cardContent}
                  </a>
                );
              } else if (isHiddenSystemCase) {
                return (
                  <a 
                    key={item.title}
                    href="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/case%20study%2FThe%20Hidden%20System_%20Multi-Level%20Corruption%2C%20Account.pdf?alt=media&token=e6d55d7e-1ad2-43a3-9102-cdee81c95c86"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {cardContent}
                  </a>
                );
              } else if (isDarkPatternsCase) {
                return (
                  <a 
                    key={item.title}
                    href="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/case%20study%2FThe%20Impact%20of%20Dark%20Patterns%20in%20E-Commerce%20on%20Consu.pdf?alt=media&token=13b62a7e-aa8a-4a1f-ab5e-5d56d6b0854a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {cardContent}
                  </a>
                );
              } else if (isNewsPersonalizationCase) {
                return (
                  <a 
                    key={item.title}
                    href="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/case%20study%2FThe%20Influence%20of%20Personalization%20on%20User%20Experienc.pdf?alt=media&token=9c56efff-69c9-4e83-848d-76c277c4bdfc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {cardContent}
                  </a>
                );
              } else {
                return (
                  <div key={item.title}>
                    {cardContent}
          </div>
                );
              }
            })}
          </div>
        </div>
        
      </section>
    </Layout>;
};
export default Index;
