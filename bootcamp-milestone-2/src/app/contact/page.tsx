import React from "react";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactHeader}>
        <h1>Contact Me</h1>
      </div>

      <div className={styles.contactContent}>
        <div className={styles.contactForm}>
          <h2>Send Me a Message</h2>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={styles.formInput}
                placeholder="Your full name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={styles.formInput}
                placeholder="your.email@example.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className={styles.formInput}
                placeholder="What's this about?"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className={styles.formTextarea}
                placeholder="Tell me about your project or just say hello..."
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>

        <div className={styles.contactInfo}>
          <h2>Get In Touch</h2>

          <div className={styles.contactItem}>
            <h3>📧 Email</h3>
            <p>
              <a
                href="mailto:alangmathew@gmail.com"
                className={styles.contactLink}
              >
                alangmathew@gmail.com
              </a>
            </p>
          </div>

          <div className={styles.contactItem}>
            <h3>📱 Phone</h3>
            <p>
              <a href="tel:+19167505525" className={styles.contactLink}>
                (916) 750-5525
              </a>
            </p>
          </div>

          <div className={styles.contactItem}>
            <h3>🌐 Social Media</h3>
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/AlanGMathew2006"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/alan-mathew-6b14a7318"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className={styles.contactItem}>
            <h3>🎓 Location</h3>
            <p>California Polytechnic State University</p>
            <p>San Luis Obispo, CA</p>
          </div>

          <div className={styles.responseTime}>
            <h3>⏰ Response Time</h3>
            <p>I typically respond within 24-48 hours during weekdays.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
