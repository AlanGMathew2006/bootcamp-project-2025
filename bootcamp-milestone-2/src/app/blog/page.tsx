import React from "react";
import styles from "./page.module.css";
import blogs from "../../data/blogData";
import Button from "@/components/ui/Button";

export default function Blog() {
  return (
    <div className={styles.blogContainer}>
      <h1>My Blog</h1>
      <div className={styles.blogsGrid}>
        {blogs.map((blog) => (
          <div key={blog.slug} className={styles.blogCard}>
            <div className={styles.blogContent}>
              <h2 className={styles.blogTitle}>{blog.title}</h2>
              <p className={styles.blogDate}>{blog.date}</p>
              <p className={styles.blogDescription}>{blog.description}</p>
              <img
                src={blog.image}
                alt={blog.imageAlt}
                className={styles.blogImage}
              />
              <div className={styles.blogLinks}>
                <Button href={`/blog/${blog.slug}`}>Read More</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
