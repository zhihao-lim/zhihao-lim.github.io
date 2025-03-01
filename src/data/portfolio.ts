export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "E-commerce Platform",
    description:
      "Built a full-stack e-commerce platform with features including user authentication, product management, shopping cart, and payment integration using Stripe.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    projectUrl: "https://ecommerce-demo.com",
    imageUrl: "/projects/ecommerce.jpg",
    codeUrl: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Task Management App",
    description:
      "Developed a real-time task management application with collaborative features, drag-and-drop functionality, and automated notifications.",
    technologies: ["Vue.js", "Firebase", "Vuex", "Material UI"],
    projectUrl: "https://taskmanager-demo.com",
    imageUrl: "/projects/taskmanager.jpg",
    codeUrl: "https://github.com/yourusername/taskmanager",
  },
  {
    title: "Weather Dashboard",
    description:
      "Created a responsive weather dashboard that displays current weather conditions and forecasts using data from multiple weather APIs.",
    technologies: ["React", "TypeScript", "Chart.js", "Weather API"],
    projectUrl: "https://weather-demo.com",
    imageUrl: "/projects/weather.jpg",
    codeUrl: "https://github.com/yourusername/weather-dashboard",
  },
];
