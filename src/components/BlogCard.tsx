
import React from "react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, date, readTime, slug }) => {
  return (
    <Link to={`/blog/${slug}`} className="block group">
      <article className="p-6 rounded-md border border-border/40 bg-card card-hover">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-muted-foreground">{date}</span>
          <span className="text-xs text-muted-foreground">{readTime}</span>
        </div>
        <h3 className="text-xl font-medium mb-2 text-foreground group-hover:text-primary/80 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-muted-foreground line-clamp-2">{excerpt}</p>
      </article>
    </Link>
  );
};

export default BlogCard;
