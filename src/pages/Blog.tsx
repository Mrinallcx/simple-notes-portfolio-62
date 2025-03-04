
import React from "react";
import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";

// Sample blog data
const blogPosts = [
  {
    title: "The Principles of Minimalist Design",
    excerpt: "An exploration of minimalist design principles and how they can be applied to create more effective digital products.",
    date: "May 15, 2023",
    readTime: "5 min read",
    slug: "principles-of-minimalist-design"
  },
  {
    title: "Creating Accessible User Interfaces",
    excerpt: "A deep dive into web accessibility standards and practices to ensure your products are usable by everyone.",
    date: "April 3, 2023",
    readTime: "8 min read",
    slug: "creating-accessible-interfaces"
  },
  {
    title: "The Future of Web Typography",
    excerpt: "Exploring upcoming trends and technologies that will shape how we use typography on the web.",
    date: "March 22, 2023",
    readTime: "6 min read",
    slug: "future-of-web-typography"
  },
  {
    title: "Designing for Dark Mode",
    excerpt: "Best practices and considerations when implementing dark mode in your applications and websites.",
    date: "February 15, 2023",
    readTime: "7 min read",
    slug: "designing-for-dark-mode"
  },
  {
    title: "The Role of Animation in User Experience",
    excerpt: "How thoughtful animation can enhance usability and create more engaging digital experiences.",
    date: "January 28, 2023",
    readTime: "4 min read",
    slug: "animation-in-user-experience"
  }
];

const Blog = () => {
  return (
    <Layout>
      <section className="animate-fade-in">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Thoughts, ideas, and explorations on design, development, and creativity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <BlogCard
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readTime={post.readTime}
                slug={post.slug}
              />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
