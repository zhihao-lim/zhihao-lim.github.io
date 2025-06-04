export interface WorkingPaperItem {
  title: string;
  description: string;
  collaborators?: string[];
  paperUrl?: string;
  codeUrl?: string;
}

export const workingPapersData: WorkingPaperItem[] = [
  {
    title: "The Dynamics of Goal-Setting: Evidence from a Natural Field Experiment (with Lorenz Goette and Hua-Jing Han)",
    description: "In a field experiment across two residential colleges, we investigate responses to evolving goal difficulty using real-time feedback and moral suasion in resource conservation. In phase 1, both moderate and hard goals lead to similar conservation effects. In phase 2, after adjusting goals to an intermediate level, treatment effects diverge due to the hard-goal group's underperformance, reducing the effect by 30%. Throughout the intervention, the moderate-goal group's high baseline users maintain stronger conservation effects than their counterparts in the hard-goal group. Our findings suggest excessively challenging goals can damage motivation, with subsequent goal adjustments failing to reverse the initial imprint.",
    paperUrl: "/papers/goal-setting-june2025.pdf"
  },
  {
    title: "Testing Spillovers in Resource Conservation: Evidence from a Natural Field Experiment (with Lorenz Goette)",
    description: "This paper studies the potential for behavioral interventions aimed at promoting resource conservation within one domain to induce spillovers in another. Through a large-scale natural field experiment involving around 2,000 residents, we assess the direct and spillover effects of real-time feedback and social comparisons on water and energy consumption. Three interventions were implemented: two targeting shower use and one targeting air-conditioning use. We document a significant reduction in shower use attributable to both water-saving interventions, but no direct effects on air-conditioning use from the energy-saving intervention. For spillovers, we precisely estimated null effects on air-conditioning use arising from the water-saving interventions, and vice versa.",
    paperUrl: "/papers/spillovers-june2025.pdf"
  }
]; 