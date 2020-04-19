import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  LinearProgress,
  Button
} from "@material-ui/core";
import { Step } from "../../types/Timer";
import { SkipNext, SkipPrevious, Pause, PlayArrow } from "@material-ui/icons";
import { useTimer } from "../../utils/Timer";
import { getQuantifier } from "../../utils/Grammar";

interface Props {
  step: Step;
  onNext(): void;
  hasNext: boolean;
  stepIndex: number;
  onPrevious(): void;
  hasPrevious: boolean;
}

export default function StepInfo({
  step,
  stepIndex,
  hasNext,
  onNext,
  onPrevious,
  hasPrevious
}: Props) {
  const { running, timeLeft, onPause, onStart } = useTimer({
    duration: step.duration ?? 0,
    autoStart: step.duration !== undefined
  });

  useEffect(() => {
    if (step.duration && timeLeft < 1) {
      onNext();
    }
  }, [onNext, step.duration, timeLeft]);

  return (
    <Box paddingY={2} display="flex" alignItems="center" flexDirection="column">
      <Typography
        variant="h2"
        align="center"
        color="primary"
        gutterBottom={!step.duration || !!running}
      >
        {stepIndex + 1}
        <sup>{getQuantifier(stepIndex + 1)}</sup>
      </Typography>
      <Typography variant="body1" align="center" gutterBottom={true}>
        {step.title}
      </Typography>
      {!!step.description && (
        <Typography variant="body2" align="center" gutterBottom={true}>
          {step.description}
        </Typography>
      )}
      {!!step.duration && !!step.duration && (
        <Typography
          variant="h2"
          align="center"
          color="secondary"
          gutterBottom={!step.duration || !!running}
        >
          {running ? timeLeft : <Pause fontSize="large" />}
        </Typography>
      )}
      {!!step.duration && !running && (
        <Typography
          variant="subtitle1"
          color="textSecondary"
          gutterBottom={true}
        >
          {timeLeft}
        </Typography>
      )}
      {!!step.duration && (
        <Box width="100%" paddingTop={2}>
          <LinearProgress
            variant="determinate"
            color="secondary"
            value={((step.duration - timeLeft) / step.duration) * 100}
          />
        </Box>
      )}
      <Box paddingTop={4} paddingBottom={2}>
        <Grid container={true} spacing={2} justify="center">
          <Grid item={true}>
            <Button
              variant="contained"
              disabled={!hasPrevious}
              onClick={onPrevious}
            >
              <SkipPrevious color="primary" />
            </Button>
          </Grid>
          <Grid item={true}>
            {running ? (
              <Button
                variant="contained"
                onClick={onPause}
                disabled={!step.duration}
              >
                <Pause color="action" />
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={onStart}
                disabled={!step.duration}
              >
                <PlayArrow color="action" />
              </Button>
            )}
          </Grid>
          <Grid item={true}>
            <Button variant="contained" disabled={!hasNext} onClick={onNext}>
              <SkipNext color="secondary" />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
