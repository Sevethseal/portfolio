import recipe from "./recipe.png";
import portFolio from "./portFolio.png";
const data = {
  name: "Nirmal Cherian Itty",
  position: "Full Stack Developer",
  tag: "Experienced Full Stack Developer | JavaScript & Python | Delivering Quality Web Solutions",
  sections: {
    whatDrivesMe: {
      title: "What Drives Me",
      description: [
        "I'm a computer science engineering graduate with nearly three years of experience. My passion lies in frontend development, and I absolutely love creating amazing web experiences. I've honed my skills with several JavaScript frameworks, including React, Next.js, Nuxt, and Vue.js. But that's not all—I also have solid backend experience with Express and Django. 🖥️",
        "What really attracts me to web development is the joy of creating something from scratch. There's nothing quite like seeing your ideas come to life on the screen. I'm always up for a good challenge, which is why I enjoy problem-solving and competitive coding. 💡",
      ],
    },
    projectsExperience: {
      title: "Projects & Experience",
      description: [
        "I've had the privilege of working on several exciting projects. Some of these have been client projects for a leading e-commerce firm with a global presence. Each project has been a unique learning experience, helping me grow both personally and professionally. 🌐",
      ],
    },
    outsideOfWork: {
      title: "Outside of Work",
      description: [
        "When I'm not coding, I like to unwind by listening to music and surfing social media. I also keep myself updated on the latest political happenings. It's my way of staying connected to the world around me. 🎶📱🗳️",
      ],
    },
  },
  experience: [
    {
      title: "Software Engineer, QBurst Technologies",
      timePeriod: "Aug 2021 - Oct 2023",
      description:
        "I have worked extensively as a full-stack developer on various client projects, conducting demo sessions and contributing to frontend and backend development. My role involved creating UI components, integrating APIs, and Dockerizing applications for efficient deployment. I also specialize in UI design using Figma, ensuring intuitive and visually appealing interfaces. Engaging directly with clients, I've conducted impactful demo sessions to gather feedback and refine project features. My skills include designing scalable UI components and optimizing API integrations for seamless data flow. Proficient in React for frontend and Express/Django for backend, I excel in agile environments. Dockerization has been key to my workflow, streamlining development cycles and maintaining consistency across environments. Implementing GraphQL in projects has significantly enhanced performance by optimizing data fetching. I'm dedicated to mastering new technologies and thrive on challenges that drive innovation. Outside work, I enjoy competitive coding, exploring emerging technologies, and staying updated with industry trends. These activities complement my professional growth and passion for solving complex problems.",
      technologies: [
        "TypeScript",
        "JavaScript",
        "React",
        "CSS",
        "Express",
        "REST API",
        "GraphQL",
        "Docker",
        "Django",
        "Jest",
        "Next.js",
        "Vue.js",
        "Nuxt.js",
        "Python",
        "Figma",
      ],
      navigationLink: "https://www.qburst.com/en-de/",
    },
  ],
  project: [
    {
      title: "Recipe App",
      description:
        "Build an application using React and Firebase that allows users to create, edit, view, and delete recipes.",
      technologies: ["React", "Typescript", "Firebase", "CSS"],
      navigationLink: "https://recipe-app-69222.web.app/login",
      image: recipe,
    },
    {
      title: "PortFolio Website",
      description:
        "Build Port Folio Website using Next.js that outlines my career and skills",
      technologies: ["Next.js", "Typescript", "CSS"],
      navigationLink: "https://github.com/Sevethseal/portfolio",
      image: portFolio,
    },
    {
      title: "Django CRUD",
      description: "Build a Django application with CRUD operations",
      technologies: ["Django"],
      navigationLink: "https://github.com/Sevethseal/DjangoCRUD",
    },
  ],
};

export default data;
