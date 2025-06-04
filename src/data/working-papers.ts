export interface WorkingPaperItem {
  title: string;
  description: string;
  collaborators?: string[];
  paperUrl?: string;
  codeUrl?: string;
}

export const workingPapersData: WorkingPaperItem[] = [
  {
    title: "The Dynamics of Goal-Setting: Evidence from a Natural Field Experiment",
    description: "In a field experiment across two residential colleges, we investigate responses to evolving goal difficulty using real-time feedback and moral suasion in resource conservation. In phase 1, both moderate and hard goals lead to similar conservation effects. In phase 2, after adjusting goals to an intermediate level, treatment effects diverge due to the hard-goal group's underperformance, reducing the effect by 30%. Throughout the intervention, the moderate-goal group's high baseline users maintain stronger conservation effects than their counterparts in the hard-goal group. Our findings suggest excessively challenging goals can damage motivation, with subsequent goal adjustments failing to reverse the initial imprint.",
    collaborators: ["Lorenz Goette", "Hua-Jing Han"],
    paperUrl: "/papers/goal-setting-june2025.pdf"
  }
]; 