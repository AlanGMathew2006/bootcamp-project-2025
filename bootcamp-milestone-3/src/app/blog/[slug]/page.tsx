import React from "react";
import { notFound } from "next/navigation";
import { getBlogBySlug, getBlogs } from "@/database/blogSchema";
import styles from "./page.module.css";
import Button from "@/components/ui/Button";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className={styles.blogPostContainer}>
      <article className={styles.blogPost}>
        <header className={styles.blogHeader}>
          <h1 className={styles.blogTitle}>{blog.title}</h1>
          <p className={styles.blogDate}>{blog.date}</p>
          <img
            src={blog.image}
            alt={blog.imageAlt}
            className={styles.blogHeroImage}
          />
        </header>

        <div className={styles.blogContent}>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>

        <footer className={styles.blogFooter}>
          <Button href="/blog">← Back to Blog</Button>
        </footer>
      </article>
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const blogs = await getBlogs();
  if (!blogs) return [];

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
} // Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostProps) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${blog.title} | Alan Mathew`,
    description: blog.description,
  };
}
