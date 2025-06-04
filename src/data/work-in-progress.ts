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
]; 