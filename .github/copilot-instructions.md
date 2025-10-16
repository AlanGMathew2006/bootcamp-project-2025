# Alan Mathew's Personal Website - AI Coding Instructions

## Project Overview

This is a personal portfolio website built with vanilla HTML, CSS, and minimal JavaScript. It's a GitHub Pages site (AlanGMathew.github.io) showcasing web development skills, based on the Hack4Impact Starter Pack.

## Architecture & Structure

- **Multi-page static site**: 5 HTML pages with consistent navigation and styling
- **Single CSS file**: `style.css` contains all styling with page-specific selectors
- **Asset management**: Images stored in root directory with descriptive names
- **No build process**: Direct HTML/CSS deployment to GitHub Pages

## Key Files & Components

- `index.html` - Homepage with hero section and two-column layout
- `portfolio.html` - Project showcase with image grid and descriptions
- `resume.html` - Professional experience and education sections
- `blog.html` - Coming soon page with placeholder content
- `contact.html` - Contact form (form handling not implemented)
- `style.css` - Single stylesheet with page-specific classes

## Styling Conventions

### Page-Specific Body Classes

Each page uses a unique body class for targeted styling:

```html
<body class="home-page">
  <!-- index.html -->
  <body class="portfolio-page">
    <!-- portfolio.html -->
    <body class="resume-page">
      <!-- resume.html -->
      <body class="blog-page">
        <!-- blog.html -->
        <body class="contact-page">
          <!-- contact.html -->
        </body>
      </body>
    </body>
  </body>
</body>
```

### CSS Organization Pattern

```css
/* Global Styles */
/* Nav Bar Styles */
/* Home Page Styles */
.resume-page main {
}
.blog-page main {
}
.contact-page main {
}
/* Footer Styles */
```

## Navigation Structure

All pages share identical header navigation:

```html
<header>
  <div class="logo">Alan Mathew</div>
  <nav>
    <a href="index.html">Home</a>
    <a href="portfolio.html">Portfolio</a>
    <!-- ... consistent across all pages -->
  </nav>
</header>
```

## Development Workflow

- **No build tools**: Direct file editing and Git push to deploy
- **GitHub Pages deployment**: Automatic on push to master branch
- **Accessibility**: Uses `.hintrc` with webhint for accessibility checking
- **Package management**: Minimal `package.json` with cowsay dependency (likely for fun/testing)

## Component Patterns

### Two-Column Layout (Homepage)

```html
<div class="about-content">
  <div class="left"><!-- Text content --></div>
  <div class="right"><!-- Image content --></div>
</div>
```

### Project Display (Portfolio)

```html
<div class="project-1">
  <div class="project-images-grid"><!-- Screenshots --></div>
  <div class="project-details">
    <h2 class="project-name">Project Title</h2>
    <p class="project-description">Description</p>
  </div>
</div>
```

## Image Naming Convention

- `home-page.png` - Homepage hero image
- `project-screenshot.png`, `project-screenshot-2.png`, etc. - Portfolio project images
- Descriptive, hyphenated names in root directory

## When Making Changes

- Always update the consistent navigation across all HTML files if adding/removing pages
- Use page-specific CSS classes (`.page-name main`, `.page-name h1`) for styling
- Maintain the fixed header design pattern with logo and navigation
- Keep the footer format consistent: `© 2023 Alan Mathew | All Rights Reserved`
- Test accessibility with webhint (configured in `.hintrc`)
