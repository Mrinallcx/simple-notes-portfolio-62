
import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

// Sample notes data
const notes = [
  {
    title: "On Design Simplicity",
    content: "The best designs are not the ones with the most features, but the ones that solve problems in the simplest way possible.",
    date: "June 5, 2023",
    tags: ["design", "minimalism"]
  },
  {
    title: "CSS Grid vs Flexbox",
    content: "CSS Grid is great for two-dimensional layouts, while Flexbox excels at one-dimensional layouts. Use them together for powerful layouts.",
    date: "May 27, 2023",
    tags: ["css", "development"]
  },
  {
    title: "Color Psychology in UI",
    content: "Blue conveys trust and stability, green represents growth and harmony, red signals importance and excitement. Choose colors intentionally.",
    date: "May 18, 2023",
    tags: ["design", "color"]
  },
  {
    title: "Progressive Enhancement",
    content: "Start with a solid foundation that works for everyone, then enhance the experience for users with more capable browsers or devices.",
    date: "May 10, 2023",
    tags: ["development", "accessibility"]
  },
  {
    title: "Typography Hierarchy",
    content: "Establish a clear hierarchy with your type to guide users through your content. Size, weight, and spacing are your tools.",
    date: "April 29, 2023",
    tags: ["typography", "design"]
  },
  {
    title: "Sketch vs Figma",
    content: "Figma's collaboration features and web-based platform give it an edge over Sketch for team environments.",
    date: "April 15, 2023",
    tags: ["tools", "design"]
  }
];

const Notes = () => {
  return (
    <Layout>
      <section className="animate-fade-in">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Notes</h1>
          <p className="text-xl text-muted-foreground">
            Quick thoughts, tips, and snippets I've collected over time.
          </p>
        </div>
        
        <div className="space-y-8">
          {notes.map((note, index) => (
            <div 
              key={index} 
              className="p-6 rounded-md border border-border/40 bg-card animate-slide-up" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-medium">{note.title}</h3>
                <span className="text-xs text-muted-foreground">{note.date}</span>
              </div>
              <p className="text-muted-foreground mb-4">{note.content}</p>
              <div className="flex flex-wrap gap-2">
                {note.tags.map((tag, tagIndex) => (
                  <Link 
                    key={tagIndex} 
                    to={`/notes/tag/${tag}`}
                    className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/70 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Notes;
