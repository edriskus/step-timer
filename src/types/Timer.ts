export interface StepTimer {
  id: string;
  title: string;
  description?: string;
  duration: number;
  steps: Step[];
}

export interface Step {
  title: string;
  description?: string;
  duration?: number;
}
