export interface Education {
  year: string;
  institution: string;
  degree: string;
  gpa?: string;
  advisor?: string;
  achievements?: string[];
  thesis?: string;      
  thesisUrl?: string;
}

export const educationData: Education[] = [
  {
    year: "2021 – Present",
    institution: "Columbia University",
    degree: "Ph.D. in Economics",
    // gpa: "3.9/4.0",
    achievements: [
      "Graduate Research Assistant",
      "Published paper on distributed systems",
      "Teaching Assistant for Advanced Algorithms"
    ],
  },
  {
    year: "2015 - 2019",
    institution: "National University of Singapore",
    degree: "B.Soc.Sci. in Economics, Highest Distinction (Valedictorian)",
    // gpa: "3.8/4.0",
    achievements: [
      "Dean's List all semesters",
      "First Place, University Hackathon 2018",
      "Computer Science Student Association President"
    ],
  },
];
