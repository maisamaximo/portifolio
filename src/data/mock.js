// Mock data for Maisa Maximo Portfolio
// This file contains all the data that will be replaced by backend later

export const personalInfo = {
  name: "Maisa Maximo",
  fullName: "Maisa Maximo Ferreira",
  title: "Senior Frontend Developer",
  tagline: "Building digital experiences with code & creativity",
  impactPhrase: "The world is too big to stand still — I build, I explore, I evolve.",
  email: "ferreira.maximo.maisa@gmail.com",
  phone: "+351 914146005",
  whatsapp: "351914146005",
  location: "Alges, Portugal",
  github: "https://github.com/maisamaximo",
  linkedin: "https://linkedin.com/in/maisamaximo",
  instagram: "https://instagram.com/maisamaximo",
  cvUrl: "https://customer-assets.emergentagent.com/job_tech-maisa/artifacts/2aicsn4v_Maisa%20Maximo%20-%20CV.pdf"
};

export const aboutMe = {
  intro: "Hey there! I'm Maisa, a Senior Frontend Developer with 6+ years of experience crafting digital experiences.",
  paragraphs: [
    "I'm passionate about building scalable, accessible, and beautiful web applications. My journey spans from fintech giants to startups, always pushing the boundaries of what's possible on the web.",
    "Beyond code, I'm a curious soul who loves exploring new places, staying active at the gym, and diving into the latest tech trends. For me, technology is not just a career — it's a way of seeing the world differently.",
    "I believe in clean code, user-centered design, and the power of community. Whether I'm organizing tech events or speaking at conferences, I love sharing knowledge and empowering others in tech."
  ],
  photos: [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
  ]
};

export const projects = [
  {
    id: 1,
    name: "PIX Payment System",
    description: "Instant payment system for one of Brazil's largest financial institutions. Developed new components for internet banking with focus on UI/UX specifications.",
    technologies: ["Angular", "TypeScript", "RxJS", "Java", "Design Systems"],
    category: "Angular",
    previewUrl: "#",
    githubUrl: "#",
    featured: true,
    color: "#d946ef"
  },
  {
    id: 2,
    name: "Siemens GBS Portal",
    description: "Enterprise-level portal for Siemens Global Business Services. Implemented scalable features with high-performance standards.",
    technologies: ["Angular", "NgRx", "TypeScript", "REST APIs"],
    category: "Angular",
    previewUrl: "#",
    githubUrl: "#",
    featured: true,
    color: "#8b5cf6"
  },
  {
    id: 3,
    name: "Digital Banking NBB",
    description: "Digital banking migration for National Bank of Bahrain using Backbase platform. Developed screens following strict UI/UX specifications.",
    technologies: ["Angular", "Backbase", "TypeScript", "SCSS"],
    category: "Angular",
    previewUrl: "#",
    githubUrl: "#",
    featured: false,
    color: "#06b6d4"
  },
  {
    id: 4,
    name: "Crypto Gateway",
    description: "Ethereum and Bitcoin gateway for transaction and fee analysis on Atlas Quantum platform.",
    technologies: ["React", "Node.js", "Blockchain", "Web3"],
    category: "React",
    previewUrl: "#",
    githubUrl: "#",
    featured: false,
    color: "#f59e0b"
  },
  {
    id: 5,
    name: "HR Portal",
    description: "Internal portal for timesheet management and absences with seamless backend integration.",
    technologies: ["Angular", "Java Spring", "PostgreSQL"],
    category: "Frontend",
    previewUrl: "#",
    githubUrl: "#",
    featured: false,
    color: "#10b981"
  },
  {
    id: 6,
    name: "Personal Portfolio",
    description: "Modern, responsive portfolio showcasing my work and experience. Built with React and modern design principles.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Personal",
    previewUrl: "#",
    githubUrl: "https://github.com/maisamaximo",
    featured: true,
    color: "#ec4899"
  }
];

export const experiences = [
  {
    id: 1,
    role: "Senior Front-End Developer",
    company: "Breakwater Technology",
    location: "Estonia",
    period: "Jul 2024 - Present",
    description: "Building scalable web applications using Angular. Leading architectural decisions, conducting code reviews, and ensuring high-performance standards across the application.",
    technologies: ["Angular", "TypeScript", "RxJS", "REST APIs"]
  },
  {
    id: 2,
    role: "Senior Front-End Developer",
    company: "PrimeIT - Siemens",
    location: "Portugal",
    period: "Jan 2023 - Jul 2024",
    description: "Developed scalable features for Siemens Global Business Services. Collaborated with multidisciplinary teams ensuring high-quality deliveries.",
    technologies: ["Angular", "NgRx", "TypeScript"]
  },
  {
    id: 3,
    role: "Senior Front-End Developer",
    company: "Human IT",
    location: "Portugal",
    period: "Apr 2023 - Jul 2024",
    description: "Developed internal HR portal with Angular frontend and Java Spring backend. Led documentation initiatives and cross-team communication.",
    technologies: ["Angular", "Java Spring", "PostgreSQL"]
  },
  {
    id: 4,
    role: "Front-End Developer",
    company: "Velv by OnRising",
    location: "Portugal",
    period: "Aug 2022 - Apr 2023",
    description: "Developed features for Valtimo open source software. Collaborated with backend developers and wrote functional requirement documents.",
    technologies: ["Angular", "TypeScript", "Open Source"]
  },
  {
    id: 5,
    role: "Front-End Developer",
    company: "Hyphen Digital Experience",
    location: "Portugal",
    period: "Jun 2021 - Aug 2022",
    description: "Developed digital banking screens for National Bank of Bahrain. Migrated application using Backbase platform.",
    technologies: ["Angular", "Backbase", "SCSS"]
  },
  {
    id: 6,
    role: "FullStack Developer",
    company: "Tata Consultancy Services",
    location: "Brazil",
    period: "Mar 2020 - Feb 2021",
    description: "Implemented PIX instant payment system for major financial institution. Developed internet banking components with design systems.",
    technologies: ["Angular", "Java", "Design Systems"]
  },
  {
    id: 7,
    role: "FullStack Developer",
    company: "4CADIA",
    location: "Brazil",
    period: "Jun 2019 - Dec 2019",
    description: "Developed cryptocurrency transaction and fee analysis system. Created and maintained company landing page.",
    technologies: ["React", "Node.js", "Blockchain"]
  },
  {
    id: 8,
    role: "Java Developer",
    company: "FITec",
    location: "Brazil",
    period: "Apr 2018 - Feb 2019",
    description: "Developed billing system microservices with CI/CD. Performed code reviews and wrote comprehensive documentation.",
    technologies: ["Java", "Microservices", "CI/CD"]
  }
];

export const certifications = [
  {
    id: 1,
    name: "Certified Junior Angular Developer",
    institution: "Certificates.dev & AngularTraining.com",
    year: "2025",
    description: "Official Angular certification validating expertise in Angular framework development.",
    credentialUrl: "https://certificates.dev/c/a03a0b6a-8b57-4826-857d-935a143d75ed",
    previewImage: "https://customer-assets.emergentagent.com/job_tech-maisa/artifacts/9sftx62d_doc.pdf",
    technology: "Angular",
    techColor: "#DD0031",
    techIcon: "angular"
  },
  {
    id: 2,
    name: "Web Front-End Developer",
    institution: "Udacity",
    year: "2019",
    description: "Comprehensive nanodegree covering modern frontend development practices.",
    credentialUrl: "#",
    previewImage: null,
    technology: "Frontend",
    techColor: "#F7DF1E",
    techIcon: "javascript"
  }
];

export const courses = [
  {
    id: 1,
    name: "Postgraduate FullStack Development",
    platform: "Descomplica",
    year: "2023",
    url: "https://descomplica.com.br/"
  },
  {
    id: 2,
    name: "Nanodegree Java Web Developer",
    platform: "Udacity",
    year: "2020",
    url: "https://www.udacity.com/"
  },
  {
    id: 3,
    name: "Bachelor's Degree in Computer Science",
    platform: "IBTA",
    year: "2018",
    url: "https://unibta.edu.br/"
  },
  {
    id: 4,
    name: "Web Front-End Developer Nanodegree",
    platform: "Udacity",
    year: "2019",
    url: "https://www.udacity.com/"
  }
];

export const talks = [
  {
    id: 1,
    title: "Clean Code: A code that not only you and God understand",
    event: "Front in Vale",
    year: "2023",
    description: "Best practices for writing maintainable and readable code that stands the test of time."
  },
  {
    id: 2,
    title: "Web Accessibility: UI is not the same as UX",
    event: "International Women's Day - GDG",
    year: "2022",
    description: "Deep dive into web accessibility standards and the difference between visual design and user experience."
  },
  {
    id: 3,
    title: "10 Principles of Development You Should Know",
    event: "Code Like a Girl - GDGirl",
    year: "2021",
    description: "Essential development principles for building robust and scalable applications."
  }
];

export const articles = [
  {
    id: 1,
    title: "Building Scalable Angular Applications: Best Practices",
    platform: "Medium",
    date: "2024",
    url: "#",
    excerpt: "A comprehensive guide to structuring large-scale Angular applications for maintainability and performance."
  },
  {
    id: 2,
    title: "The Art of Clean Code in Frontend Development",
    platform: "Dev.to",
    date: "2023",
    url: "#",
    excerpt: "Why clean code matters and how to implement it in your daily development workflow."
  },
  {
    id: 3,
    title: "Web Accessibility: More Than Just Compliance",
    platform: "LinkedIn",
    date: "2023",
    url: "#",
    excerpt: "Understanding accessibility as a fundamental part of user experience, not just a checkbox."
  }
];

export const skills = {
  frameworks: ["Angular", "React", "Vue.js", "Spring Boot"],
  languages: ["TypeScript", "JavaScript", "Java", "HTML", "CSS", "Python"],
  libraries: ["RxJS", "NgRx", "Angular Material", "Jest", "Jasmine", "JUnit"],
  tools: ["Git", "Docker", "Jenkins", "Jira", "Postman", "SonarQube"]
};

export const volunteering = [
  {
    role: "Organizer",
    organization: "Google Developer Group SJC",
    description: "Organizing tech events and meetups for the local developer community."
  },
  {
    role: "Organizer",
    organization: "Women Techmakers SJC",
    description: "Empowering women in technology through events and mentorship programs."
  },
  {
    role: "Instructor",
    organization: "Digital Innovation One",
    description: "Teaching Introduction to JSF for web applications."
  }
];