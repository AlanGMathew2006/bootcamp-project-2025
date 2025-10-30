export interface Blog {
  title: string;
  date: string;
  description: string;
  content: string;
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
    content: `
      <p>
        This summer, I embarked on an exciting journey to create Brilliant
        Consulting - a scheduling application for a small tech consulting
        business. As a self-taught web developer, this project pushed me to
        learn new technologies and solve real-world problems.
      </p>

      <h2>The Challenge</h2>
      <p>
        The client needed a comprehensive scheduling system that could
        handle multiple consultants, client appointments, and resource
        management. The existing manual process was time-consuming and prone
        to double-bookings.
      </p>

      <h2>Technology Stack</h2>
      <p>For this project, I chose a modern web development stack:</p>
      <ul>
        <li>
          <strong>Frontend:</strong> HTML5, CSS3, and vanilla JavaScript for
          a clean, responsive interface
        </li>
        <li>
          <strong>Backend:</strong> Node.js with Express for the server-side
          logic
        </li>
        <li>
          <strong>Database:</strong> MongoDB for reliable data storage
        </li>
        <li><strong>Deployment:</strong> Planning to use Heroku for easy cloud hosting</li>
      </ul>

      <h2>Key Features Developed</h2>
      <p>The application includes several core features:</p>
      <ul>
        <li>Interactive calendar view for appointment scheduling</li>
        <li>Client management system with contact information</li>
        <li>User and Admin dashboard</li>
        <li>Stripe payment integration for seamless billing</li>
        <li>Automated email notifications</li>
      </ul>

      <h2>Lessons Learned</h2>
      <p>
        Building Brilliant Consulting taught me the importance of
        user-centered design and iterative development. Working closely with
        the client helped me understand their workflow and create a solution
        that truly met their needs.
      </p>

      <p>
        This project reinforced my passion for creating practical solutions
        through web development and gave me confidence to tackle more
        complex challenges.
      </p>
    `,
    image: "../images/blogs/blog-brilliant-consulting.png",
    imageAlt: "Web development project",
    slug: "creating-brilliant-consulting",
  },
  {
    title: "Joining Hack For Impact",
    date: "Fall 2025",
    description:
      "First year CS student at Cal Poly SLO, joining Hack For Impact to make a difference.",
    content: `
      <p>
        Starting my journey as a first-year Computer Science student at Cal
        Poly SLO, I made one of the most impactful decisions of my academic
        career - joining Hack For Impact. This organization has opened doors
        to using technology for social good and connected me with
        like-minded peers passionate about making a difference.
      </p>

      <h2>What is Hack For Impact?</h2>
      <p>
        Hack For Impact is a student-run nonprofit that partners with other
        nonprofits and social impact organizations to develop technological
        solutions for their challenges. We believe that technology should be
        accessible and used to create positive change in our communities.
      </p>

      <h2>Why I Joined</h2>
      <ul>
        <li>
          <strong>Purpose-Driven Development:</strong> Building applications
          that solve real problems for real people
        </li>
        <li>
          <strong>Learning Opportunity:</strong> Working with experienced
          developers and learning industry best practices
        </li>
        <li>
          <strong>Community Impact:</strong> Using my skills to help
          nonprofits achieve their missions more effectively
        </li>
        <li>
          <strong>Professional Growth:</strong> Gaining experience in
          project management, client communication, and team collaboration
        </li>
      </ul>

      <h2>My Experience So Far</h2>
      <p>
        In my first quarter with Hack For Impact, I've been working on the
        UI/UX and Developer bootcamps to build a strong foundation in full
        stack development. Currently I have landed a role as a designer for
        Hack For Impact.
      </p>

      <h2>Skills I'm Developing</h2>
      <p>Through Hack For Impact, I'm gaining experience with:</p>
      <ul>
        <li>Full-stack web development using modern frameworks</li>
        <li>Database design and management</li>
        <li>User experience design and testing</li>
        <li>Agile development methodologies</li>
        <li>Client communication and project management</li>
        <li>UI/UX design and prototyping with Figma</li>
      </ul>

      <p>
        Being part of Hack For Impact has shown me that programming isn't
        just about writing code - it's about understanding problems,
        collaborating with others, and creating solutions that make a
        meaningful impact. I'm excited to continue growing with this amazing
        organization and contributing to projects that matter.
      </p>
    `,
    image: "../images/blogs/blog-hack-for-impact.png",
    imageAlt: "Hack For Impact event",
    slug: "joining-hack-for-impact",
  },
  {
    title: "First Year at Cal Poly SLO",
    date: "Fall 2025",
    description:
      "My journey as a Computer Science student at California Polytechnic State University, San Luis Obispo.",
    content: `
      <p>
        Starting my journey at California Polytechnic State University, San
        Luis Obispo, has been an incredible experience. As a first-year
        Computer Science student, I'm excited to share my initial
        impressions and goals for my time here at Cal Poly.
      </p>

      <h2>Why Cal Poly SLO?</h2>
      <p>
        Cal Poly's "Learn by Doing" philosophy immediately drew me to the
        university. The Computer Science program's emphasis on hands-on
        projects and practical experience aligns perfectly with my passion
        for building real-world solutions. The beautiful San Luis Obispo
        campus and strong industry connections made this the perfect choice
        for my education.
      </p>

      <h2>Academic Journey</h2>
      <p>My first quarter at Cal Poly includes exciting coursework:</p>
      <ul>
        <li>
          <strong>CSC 123:</strong> Fundamentals of Computer Science -
          Introduction to programming concepts and problem-solving
        </li>
        <li>
          <strong>MATH 143:</strong> Calculus III - Essential mathematical
          foundation for computer science
        </li>
        <li>
          <strong>ENGL 134:</strong> Writing and Rhetoric - Developing
          technical communication skills
        </li>
        <li>
          <strong>GE Courses:</strong> Exploring diverse subjects to build a
          well-rounded education
        </li>
      </ul>

      <h2>Campus Life and Opportunities</h2>
      <p>
        Beyond academics, Cal Poly offers incredible opportunities for
        growth. I'm actively seeking involvement in student organizations
        like the Computer Science and Software Engineering Club, and
        exploring research opportunities with faculty members.
      </p>

      <p>
        The collaborative environment here encourages students to work
        together on projects, share knowledge, and build lasting
        professional relationships. I'm excited to participate in hackathons
        and coding competitions throughout my time here.
      </p>

      <h2>Goals for My Cal Poly Journey</h2>
      <ul>
        <li>Excel in core computer science coursework</li>
        <li>Participate in undergraduate research projects</li>
        <li>Secure meaningful internships in the tech industry</li>
        <li>Contribute to open-source projects</li>
        <li>Build a strong network of peers and mentors</li>
        <li>Develop expertise in emerging technologies</li>
      </ul>

      <h2>Looking Forward</h2>
      <p>
        My first year at Cal Poly is just the beginning of what I hope will
        be an transformative educational experience. The combination of
        rigorous academics, hands-on learning, and the supportive Mustang
        community provides the perfect environment for growth as both a
        developer and a person.
      </p>

      <p>
        I'm grateful for this opportunity and excited to see where this
        journey takes me. Go Mustangs! 🐎
      </p>
    `,
    image: "../images/blogs/blog-first-year-calpoly.png",
    imageAlt: "Cal Poly Mustangs logo",
    slug: "my-first-year-at-cal-poly-slo",
  },
];

export default blogs;
