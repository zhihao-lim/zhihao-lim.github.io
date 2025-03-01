export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  companyUrl?: string;
  technologies?: string[];
}

export const experienceData: Experience[] = [
  {
    date: "2021 - Present",
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    description:
      "Led development of cloud-native microservices architecture • Implemented CI/CD pipelines reducing deployment time by 60% • Mentored junior developers and conducted code reviews",
    technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"],
    companyUrl: "https://example.com",
  },
  {
    date: "2019 - 2021",
    title: "Full Stack Developer",
    company: "Digital Innovations Ltd",
    description:
      "Developed and maintained multiple client-facing web applications • Optimized database queries improving application performance by 40% • Collaborated with UX team to implement responsive designs",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Redis", "GCP"],
    companyUrl: "https://example.com",
  },
  {
    date: "2018 - 2019",
    title: "Software Developer",
    company: "StartUp Co",
    description:
      "Built RESTful APIs for mobile applications • Implemented user authentication and authorization • Participated in agile development cycles",
    technologies: ["JavaScript", "Express.js", "MongoDB", "Git", "Jenkins"],
    companyUrl: "https://example.com",
  },
];
