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
    description: "The role of social information in motivating worker effort is well-documented, but to what extent do workers value it, and what mechanisms explain their use of this information? In a real-effort experiment with around 800 workers, we distinguish among competing mechanisms—competitiveness, inequity aversion, social stress, and cognitive information-processing—by eliciting workers' willingness-to-pay for social information provided either before or after the task."
  },

  {
    title: "Intergenerational Dilemma: Preference Over Resource Allocation (with Mark Dean, Jeffrey Guo, and Hayeon Jeong)",
    description: "Anthropogenic climate change poses an intergenerational challenge, where present decisions impact future generations. While underinvestment by the current generation is often attributed to selfishness, trust in future generations may also play a crucial role. This study examines how control over resource allocation affects intergenerational decision-making using two modified versions of the dictator game: (1) the Simultaneous Dictator Game (SIM), where the current generation allocates resources for all future generations; (2) the Sequential Dictator Game (SEQ), where resources are passed down iteratively. By comparing behavior across these settings, we explore how generosity, equity, and social norms influence intergenerational resource allocation."
  },
  {
    title: "Behavioral Spillovers in Resource Conservation (with Lorenz Goette)",
    description: "This paper studies the potential for behavioral interventions aimed at promoting resource conservation within one domain to induce spillovers in another. Through a large-scale natural field experiment involving around 2,000 residents, we assess the direct and spillover effects of real-time feedback and social comparisons on water and energy consumption. Three interventions were implemented: two targeting shower use and one targeting air conditioning use. We document a significant reduction in shower use attributable to both water-saving interventions, but no direct effects on air conditioning use from the energy-saving intervention. For spillovers, we precisely estimated null effects on air conditioning use arising from the water-saving interventions, and vice versa. Additionally, we observe moral licensing in showering behavior, but this mechanism does not manifest in air conditioning use or across domains."
  }
]; 