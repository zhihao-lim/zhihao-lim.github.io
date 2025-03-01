export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Zhi Hao Lim",
  title: "Ph.D. Candidate in Economics",
  institution: "Columbia University",
  description:
    "I am a 4th year PhD candidate in Economics at Columbia University. My research interests lie at the intersection of behavioral, experimental, and labor economics. One strand of my research focuses on what motivates workers and their information preferences. Another strand explores human decision-making more generally, particularly in relation to charitable giving, goal-setting and resource conservation. I employ field, lab, and online experiments in my research.",
  email: "zl2969@columbia.edu",
  imageUrl: "/images/profile.jpg",
  githubUsername: "zhihao-94",
  linkedinUsername: "zhihao-lim",
  cvUrl: "/CV LZH.pdf",
};
