import React from "react";
import styles from "./page.module.css";
import projects from "../../data/projectData";
import Button from "@/components/ui/Button";

export default function Portfolio() {
  return (
    <div className={styles.portfolioContainer}>
      <h1>My Projects</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.slug} className={styles.projectCard}>
            <img
              src={project.image}
              alt={project.imageAlt}
              className={styles.projectImage}
            />
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDate}>{project.date}</p>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.projectTechnologies}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.projectTechnology}>
                  {tech}
                </span>
              ))}
            </div>
            <div className={styles.projectLinks}>
              {project.githubUrl && (
                <Button href={project.githubUrl}>GitHub</Button>
              )}
              {project.liveUrl && (
                <Button href={project.liveUrl}>Live Demo</Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
