import React, { useState, useMemo, useCallback } from "react";
import { StepTimer } from "../../types/Timer";
import { Box, LinearProgress } from "@material-ui/core";
import StepGlimpse from "../StepGlimpse/StepGlimpse";
import StepInfo from "../StepInfo/StepInfo";

interface Props {
  timer: StepTimer;
}

export default function TimeStepper({ timer }: Props) {
  const [step, setStep] = useState(0);

  const previousStep = useMemo(
    () => (step > 0 ? timer.steps[step - 1] ?? null : null),
    [step, timer.steps]
  );
  const currentStep = useMemo(() => timer.steps[step] ?? null, [
    step,
    timer.steps
  ]);
  const nextStep = useMemo(
    () =>
      step < timer.steps.length - 1 ? timer.steps[step + 1] ?? null : null,
    [step, timer.steps]
  );

  const handleNext = useCallback(() => {
    if (!!nextStep) {
      setStep(step => step + 1);
    }
  }, [nextStep]);

  const handlePrevious = useCallback(() => {
    if (!!previousStep) {
      setStep(step => step - 1);
    }
  }, [previousStep]);

  return (
    <Box>
      <LinearProgress
        variant="determinate"
        color="primary"
        value={(step / (timer.steps.length - 1)) * 100}
      />
      {!!previousStep && (
        <StepGlimpse
          color="primary"
          prefix="Previous step"
          step={previousStep}
        />
      )}
      {!!currentStep && (
        <StepInfo
          key={step}
          stepIndex={step}
          step={currentStep}
          onNext={handleNext}
          hasNext={!!nextStep}
          onPrevious={handlePrevious}
          hasPrevious={!!previousStep}
        />
      )}
      {!!nextStep && (
        <StepGlimpse color="secondary" prefix="Next step" step={nextStep} />
      )}
    </Box>
  );
}
