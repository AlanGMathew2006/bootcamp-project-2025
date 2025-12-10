import React from "react";
import styles from "./page.module.css";
import { getProjects } from "@/database/projectSchema";
import Button from "@/components/ui/Button";

export default async function Portfolio() {
  // Fetch projects from database
  const projects = await getProjects();

  // Handle null case if no projects found
  if (!projects) {
    return (
      <div className={styles.portfolioContainer}>
        <h1>My Projects</h1>
        <p>No projects found at the moment. Check back soon!</p>
      </div>
    );
  }
  return (
    <div className={styles.portfolioContainer}>
      <h1>My Projects</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
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
