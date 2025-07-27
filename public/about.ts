import recipe from "./recipe.png";
import portFolio from "./portFolio.png";
import uxPortFolio from './uxPortfolio.png'

const data = {
  name: 'Nirmal Cherian Itty',
  position: 'Full Stack Developer',
  tag: 'AI/ML/LLM GenAI Enthusiast | Full Stack Developer | JavaScript & Python | Building Robust Web Applications',
  sections: {
    whatDrivesMe: {
      title: 'What Drives Me',
      description: [
        "I'm a computer science engineering graduate with nearly three years of experience. My passion spans full-stack development and creating software products with AI integration, and I absolutely love bringing ideas to life through both web experiences and intelligent solutions. I've honed my skills with several JavaScript frameworks, including React, Next.js, Nuxt, and Vue.js. But that's not all—I also have solid backend experience with Express and Django. 🖥️",
        "What really attracts me to web development is the joy of creating something from scratch. There's nothing quite like seeing your ideas come to life on the screen. I'm always up for a good challenge, which is why I enjoy problem-solving and competitive coding. 💡",
        "My passion isn't limited to full-stack development; I also love building AI and machine learning solutions and crafting LLM-driven RAG systems for intelligent, context-aware applications. 🤖📊 🤖📊",
      ],
    },
    projectsExperience: {
      title: 'Projects & Experience',
      description: [
        "I've had the privilege of working on several exciting projects. Some of these have been client projects for a leading e-commerce firm with a global presence. Each project has been a unique learning experience, helping me grow both personally and professionally. 🌐",
        'Conducted research on LLM bias mitigation and presented a seminar on NLP applications in misinformation detection, earning high attendee approval. 📈🗣️',
      ],
    },
    outsideOfWork: {
      title: 'Outside of Work',
      description: [
        "When I'm not coding, I like to unwind by listening to music and surfing social media. I also keep myself updated on the latest political happenings. It's my way of staying connected to the world around me. 🎶📱🗳️",
      ],
    },
  },
  experience: [
    {
      title: 'Research Intern, Universität Koblenz',
      timePeriod: 'Nov 2024 - Apr 2025',
      description: [
        'Developed transformer-based prompt-engineering workflows with HuggingFace Transformers, enhancing LLM outputs for misinformation classification.',
        'Applied counterfactual data augmentation and fine-tuned LLMs on the RedditBias dataset, reducing demographic bias metrics by 30%.',
        'Evaluated embedding models (Word2Vec, BERT) for semantic similarity and stance detection, improving retrieval relevance by 20%.',
        'Studied LSTM-ensemble FakeBlocker and Thai fake-news classifiers, validating multi-language detection.',
        'Presented a seminar on NLP covering COVID-19 extraction, misinformation detection, and LLM bias mitigation earning 95% attendee approval.',
      ],
      technologies: [
        'Python',
        'HuggingFace Transformers',
        'ChromaDB',
        'Word2Vec',
        'BERT',
        'LSTM',
        'NLP',
      ],
      navigationLink:
        'https://www.uni-koblenz.de/en/degree-programs/web-and-data-science-msc',
    },
    {
      title: 'Front-end Engineer Internship Full Time, Niologic Gmbh',
      timePeriod: 'Aug 2024 - Oct 2024',
      description: [
        'Built responsive and dynamic user interfaces using React.',
        'Developed reusable UI components and managed state efficiently.',
        'Ensured smooth API integration and collaborated with backend developers.',
        'Worked closely with the design team to maintain UI/UX consistency.',
        'Enhanced skills in TypeScript and JavaScript through hands-on experience.',
      ],
      technologies: ['JavaScript', 'TypeScript', 'React'],
      navigationLink: 'https://niologic.com',
    },
    {
      title: 'Software Engineer, QBurst Technologies',
      timePeriod: 'Aug 2021 - Oct 2023',
      description: [
        'Worked extensively as a full-stack developer on various client projects.',
        'Conducted demo sessions and contributed to frontend and backend development.',
        'Created UI components, integrated APIs, and Dockerized applications for deployment.',
        'Specialized in UI design using Figma for intuitive and visually appealing interfaces.',
        'Engaged with clients for feedback and refinement through impactful demo sessions.',
        'Designed scalable UI components and optimized API integrations.',
        'Proficient in React (frontend) and Express/Django (backend) in agile environments.',
        'Implemented Docker to streamline development and maintain environment consistency.',
        'Integrated GraphQL to optimize data fetching and enhance performance.',
        'Pursued continuous learning through competitive coding and exploring emerging technologies.',
      ],
      technologies: [
        'TypeScript',
        'JavaScript',
        'React',
        'CSS',
        'Express',
        'REST API',
        'GraphQL',
        'Docker',
        'Django',
        'Jest',
        'Next.js',
        'Vue.js',
        'Nuxt.js',
        'Python',
        'Figma',
      ],
      navigationLink: 'https://www.qburst.com/en-de/',
    },
  ],
  project: [
    {
      title: 'House Rent Prediction',
      description: [
        'Built a complete ML pipeline for predicting monthly rent using property features like square footage, bedrooms, bathrooms, region, and amenities.',
        'Performed EDA, feature engineering, model training, hyperparameter tuning, and evaluation (RMSE, MAE).',
        'Implemented models like Linear Regression, Random Forest, and XGBoost in a Jupyter Notebook environment.',
      ],
      technologies: [
        'Python',
        'Pandas',
        'Scikit-learn',
        'XGBoost',
        'EDA',
        'Jupyter',
      ],
      navigationLink:
        'https://github.com/Sevethseal/ML_projects/tree/main/House_Rent_Prediction',
    },
    {
      title: 'RAG & Embeddings Toolkit',
      description: [
        'Built a comprehensive suite of CLI tools and demos for Retrieval-Augmented Generation (RAG) pipelines using HuggingFace and ChromaDB.',
        'Implemented semantic search and context-based answer generation without using OpenAI APIs.',
        'Included word embedding comparison and RAG data store generation with Markdown chunking and vector persistence.',
      ],
      technologies: [
        'Python',
        'HuggingFace Transformers',
        'ChromaDB',
        'RAG',
        'Embeddings',
        'CLI',
      ],
      navigationLink: 'https://github.com/Sevethseal/RAG_prototype',
    },
    {
      title: 'E-commerce Application with Social Login & Referral System',
      description: [
        'Built an e-commerce web application with Next.js and Supabase, featuring Google social login and responsive product listing UI.',
        'Implemented a referral system allowing users to generate and share referral codes and track new sign-ups.',
        'Secured authentication with Supabase Auth and managed sessions with logout functionality.',
      ],
      technologies: [
        'Next.js',
        'React',
        'Tailwind',
        'Supabase Auth',
        'Supabase Postgres',
        'Prisma Client',
        'Vercel',
      ],
      navigationLink: 'https://github.com/Sevethseal/Chat-Application',
    },
    {
      title: 'Portfolio Website for a UI/UX Developer',
      description: [
        'Built a portfolio website using Next.js tailored for a UI/UX developer.',
        'Showcased skills, achievements, and design philosophy.',
        'Used GSAP for animations and Tailwind for clean responsive styling.',
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'GSAP', 'Tailwind'],
      navigationLink: 'https://ux-portfolio-mu.vercel.app/home',
      image: uxPortFolio,
    },
    {
      title: 'Django CRUD',
      description: [
        'Built a Django application with full CRUD operations.',
        'Managed models, views, and templates to enable dynamic content.',
        'Applied Django admin and form handling for backend management.',
      ],
      technologies: ['Django'],
      navigationLink: 'https://github.com/Sevethseal/DjangoCRUD',
    },
    {
      title: 'PortFolio Website',
      description: [
        'Developed a personal portfolio using Next.js.',
        'Outlined my career, skills, and project experience.',
        'Implemented responsive design and modern UI practices.',
      ],
      technologies: ['Next.js', 'Typescript', 'CSS'],
      navigationLink: 'https://github.com/Sevethseal/portfolio',
      image: portFolio,
    },
    {
      title: 'Recipe App',
      description: [
        'Built an application using React and Firebase.',
        'Enabled users to create, edit, view, and delete recipes.',
        'Focused on clean UI and responsive design.',
      ],
      technologies: ['React', 'Typescript', 'Firebase', 'CSS'],
      navigationLink: 'https://recipe-app-69222.web.app/login',
      image: recipe,
    },
  ],
}

export default data;
