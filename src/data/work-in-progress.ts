export interface WorkInProgressItem {
  title: string;
  description: string;
  collaborators?: string[];
  paperUrl?: string;
  codeUrl?: string;
}

export const workInProgressData: WorkInProgressItem[] = [
  {
    title: "To Each Their Own: How Much Do Workers Value Social Information?",
    description: "This project investigates workers' preferences for social information in workplace settings through a novel real-effort experiment. By eliciting workers' willingness-to-pay for peer performance information both before and after task completion, we examine how individuals value and utilize social comparisons. The study explores three key dimensions: (1) workers' heterogeneous preferences for seeking or avoiding social information, (2) the underlying mechanisms driving these preferences—including social preferences, emotional responses, and information processing—and (3) the welfare implications for optimal information transmission policies. This research contributes to our understanding of social comparison effects in the workplace and provides insights for designing effective feedback systems."
  },
  {
    title: "Intergenerational Dilemma: Preference Over Resource Allocation (with Mark Dean, Jeffrey Guo, and Hayeon Jeong)",
    description: "This project explores how individuals make decisions about resource allocation across generations, examining the complex trade-offs between immediate benefits and long-term sustainability."
  },
  {
    title: "Testing Spillovers in Resource Conservation: Evidence from a Natural Field Experiment (with Lorenz Goette)",
    description: "This paper studies the potential for behavioral interventions aimed at promoting resource conservation within one domain to induce spillovers in another. Through a large-scale natural field experiment involving around 2,000 residents, we assess the direct and spillover effects of real-time feedback and social comparisons on water and energy consumption. Three interventions were implemented: two targeting shower use and one targeting air conditioning use. We document a significant reduction in shower use attributable to both water-saving interventions, but no direct effects on air conditioning use from the energy-saving intervention. For spillovers, we precisely estimated null effects on air conditioning use arising from the water-saving interventions, and vice versa. Additionally, we observe moral licensing in showering behavior, but this mechanism does not manifest in air conditioning use or across domains."
  },
  {
    title: "The Dynamics of Goal-Setting: Evidence from a Natural Field Experiment (with Lorenz Goette and Hua-Jing Han)",
    description: "In a field experiment across two residential colleges, we investigate responses to evolving goal difficulty using real-time feedback and moral suasion in resource conservation. In phase 1, both moderate and hard goals lead to similar conservation effects. In phase 2, after adjusting goals to an intermediate level, treatment effects diverge due to the hard-goal group's underperformance, reducing the effect by 30%. Throughout the intervention, the moderate-goal group's high baseline users maintain stronger conservation effects than their counterparts in the hard-goal group. Our findings suggest excessively challenging goals can damage motivation, with subsequent goal adjustments failing to reverse the initial imprint."
  }
]; 