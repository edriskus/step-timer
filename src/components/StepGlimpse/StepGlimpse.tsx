import clsx from "clsx";
import React from "react";
import useStyles from "./StepGlimpse.styles";
import { Typography, Box } from "@material-ui/core";
import { Step } from "../../types/Timer";

interface Props {
  step: Step;
  color: "primary" | "secondary";
  prefix: string;
}

export default function StepGlimpse({ step, prefix, color }: Props) {
  const classes = useStyles();
  return (
    <Box paddingY={2}>
      <Typography variant="body2" color="textSecondary" align="center">
        <b
          className={clsx({
            [classes.prefixPrimary]: color === "primary",
            [classes.prefixSecondary]: color === "secondary"
          })}
        >
          {prefix}:{" "}
        </b>
        {step.title}
      </Typography>
    </Box>
  );
}
