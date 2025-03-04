
import React from "react";
import Layout from "../components/Layout";
import ResumeSection from "../components/ResumeSection";
import { Button } from "@/components/ui/button";

// Sample resume data
const workExperience = [
  {
    title: "Senior Product Designer",
    company: "Design Studio",
    period: "2021 - Present",
    description: "Lead designer for multiple client projects, focusing on creating accessible and user-centered experiences. Managed a team of three designers and implemented design systems for scale."
  },
  {
    title: "UX/UI Designer",
    company: "Tech Innovations",
    period: "2018 - 2021",
    description: "Designed user interfaces for web and mobile applications. Conducted user research and usability testing to inform design decisions. Collaborated with developers to ensure quality implementation."
  },
  {
    title: "Web Designer",
    company: "Creative Agency",
    period: "2016 - 2018",
    description: "Created responsive website designs for various clients. Worked closely with the development team to ensure design fidelity and optimization."
  }
];

const education = [
  {
    title: "Master of Design",
    institution: "Design University",
    period: "2014 - 2016",
    description: "Focused on interaction design and user experience. Graduated with honors."
  },
  {
    title: "Bachelor of Fine Arts",
    institution: "Arts Institute",
    period: "2010 - 2014",
    description: "Majored in Graphic Design with a minor in Digital Media."
  }
];

const skills = [
  {
    title: "Design",
    description: "UI/UX Design, Interaction Design, Design Systems, Wireframing, Prototyping, User Research"
  },
  {
    title: "Development",
    description: "HTML, CSS, JavaScript, React, SCSS, Tailwind CSS, Git"
  },
  {
    title: "Tools",
    description: "Figma, Adobe Creative Suite, Sketch, InVision, Zeplin, Notion"
  }
];

const Resume = () => {
  return (
    <Layout>
      <section className="animate-fade-in space-y-6">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Resume</h1>
          <p className="text-xl text-muted-foreground mb-6">
            A summary of my professional experience, education, and skills.
          </p>
          <Button 
            variant="outline" 
            className="border-primary/20 hover:border-primary/40 transition-colors"
            onClick={() => console.log("Resume download")}
          >
            Download Resume
          </Button>
        </div>
        
        <ResumeSection title="Work Experience" items={workExperience} />
        
        <ResumeSection title="Education" items={education} />
        
        <ResumeSection title="Skills" items={skills} />
        
        <div className="pt-8">
          <h2 className="text-2xl font-medium mb-6 pb-2 border-b border-border">Contact</h2>
          <p className="text-muted-foreground mb-6">
            I'm currently available for freelance work and full-time opportunities. If you'd like to get in touch, please send me an email or connect with me on social media.
          </p>
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:hello@example.com" 
              className="text-foreground hover:text-primary/80 transition-colors"
            >
              hello@example.com
            </a>
            <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground hover:text-primary/80 transition-colors"
            >
              Twitter
            </a>
            <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground hover:text-primary/80 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
