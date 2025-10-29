export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    title: "Creating Brilliant Consulting",
    date: "Summer 2025",
    description:
      "Self learned Web Developer, building a scheduling app for a small tech consulting business.",
    image: "../images/blogs/blog-brilliant-consulting.png",
    imageAlt: "Web development project",
    slug: "creating-brilliant-consulting",
  },
  {
    title: "Joining Hack For Impact",
    date: "Fall 2025",
    description:
      "First year CS student at Cal Poly SLO, joining Hack For Impact to make a difference.",
    image: "../images/blogs/blog-hack-for-impact.png",
    imageAlt: "Hack For Impact event",
    slug: "joining-hack-for-impact",
  },
  {
    title: "First Year at Cal Poly SLO",
    date: "Fall 2025",
    description:
      "My journey as a Computer Science student at California Polytechnic State University, San Luis Obispo.",
    image: "../images/blogs/blog-first-year-calpoly.png",
    imageAlt: "Cal Poly Mustangs logo",
    slug: "my-first-year-at-cal-poly-slo",
  },
];

export default blogs;
