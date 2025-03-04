
import React from "react";
import Layout from "../components/Layout";
import ResumeSection from "../components/ResumeSection";
import { Button } from "@/components/ui/button";

// Resume data based on Harish Shivaraman's LinkedIn profile
const workExperience = [
  {
    title: "Senior Technical Staff - Media AI",
    company: "Samsung Research America",
    period: "2020 - Present",
    description: "Leading research and development in Media AI for next-generation Samsung devices. Working on cutting-edge AI applications for camera and video technologies."
  },
  {
    title: "Research Engineer",
    company: "Samsung Electronics",
    period: "2016 - 2020",
    description: "Developed computer vision and deep learning solutions for Samsung's mobile devices. Worked on image processing algorithms and machine learning models for camera applications."
  },
  {
    title: "Software Engineer",
    company: "Qualcomm",
    period: "2014 - 2016",
    description: "Worked on embedded systems and multimedia software development. Implemented camera and image processing algorithms for Snapdragon processors."
  }
];

const education = [
  {
    title: "M.S. in Electrical and Computer Engineering",
    institution: "University of Florida",
    period: "2012 - 2014",
    description: "Specialized in Signal Processing, Computer Vision, and Machine Learning."
  },
  {
    title: "B.Tech in Electronics and Communication Engineering",
    institution: "National Institute of Technology",
    period: "2008 - 2012",
    description: "Focused on signal processing and communication systems."
  }
];

const skills = [
  {
    title: "Technical Skills",
    period: "", // Adding required period property
    description: "Computer Vision, Machine Learning, Deep Learning, PyTorch, TensorFlow, Python, C++, CUDA"
  },
  {
    title: "Research",
    period: "", // Adding required period property
    description: "AI/ML Research, Technical Paper Writing, Patent Development, Research Prototyping"
  },
  {
    title: "Tools & Platforms",
    period: "", // Adding required period property
    description: "Camera Systems, Mobile AI, GPU Computing, Linux, Git, Docker"
  }
];

const Resume = () => {
  return (
    <Layout>
      <section className="animate-fade-in space-y-6">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Resume</h1>
          <p className="text-xl text-muted-foreground mb-6">
            A summary of my professional experience, education, and skills in AI and computer vision research.
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
            I'm open to research collaborations and discussions about AI technologies in media processing. Feel free to connect with me via email or LinkedIn.
          </p>
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:harish.shivaraman@example.com" 
              className="text-foreground hover:text-primary/80 transition-colors"
            >
              harish.shivaraman@example.com
            </a>
            <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
            <a 
              href="https://in.linkedin.com/in/harishshivaraman" 
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
