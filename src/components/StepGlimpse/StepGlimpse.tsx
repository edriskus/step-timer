import React from "react";
import { Typography, Box } from "@material-ui/core";
import { Step } from "../../types/Timer";

interface Props {
  step: Step;
}

export default function StepGlimpse({ step }: Props) {
  return (
    <Box paddingY={2}>
      <Typography variant="body2" color="textSecondary" align="center">
        {step.title}
      </Typography>
    </Box>
  );
}
