export interface Course {
  name: string;
  level: string;
  rating?: string;
}

export interface TeachingRole {
  date: string;
  role: string;
  institution: string;
  courses: Course[];
}

export interface TeachingExperience {
  institution: string;
  roles: TeachingRole[];
}

export const teachingExperienceData: TeachingExperience[] = [
  {
    institution: "Columbia University",
    roles: [
      {
        date: "Fall 2023, Spring 2024, Fall 2024",
        role: "Teaching Assistant",
        institution: "Columbia University",
        courses: [
          {
            name: "Intermediate Microeconomics",
            level: "UG",
            rating: "4.5/5.0"
          }
        ]
      },
      {
        date: "Spring 2023",
        role: "Teaching Assistant",
        institution: "Columbia University",
        courses: [
          {
            name: "Behavioral Economics",
            level: "UG",
            rating: "5.0/5.0"
          }
        ]
      },
      {
        date: "Fall 2022",
        role: "Teaching Assistant",
        institution: "Columbia University",
        courses: [
          {
            name: "Introduction to Econometrics",
            level: "UG",
            rating: "4.9/5.0"
          }
        ]
      },
      {
        date: "Summer 2023",
        role: "Ph.D. Bridge Program Tutor",
        institution: "Columbia University",
        courses: [
          {
            name: "Microeconomic Analysis I",
            level: "PhD"
          }
        ]
      }
    ]
  },
  {
    institution: "National University of Singapore",
    roles: [
      {
        date: "Fall 2017, Fall 2018, Spring 2019",
        role: "Teaching Assistant",
        institution: "National University of Singapore",
        courses: [
          {
            name: "Introduction to Economic Analysis",
            level: "UG",
            rating: "4.8/5.0"
          }
        ]
      }
    ]
  }
]; 