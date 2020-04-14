import React, { useEffect } from "react";
import { Box, Typography, Fab, Grid, LinearProgress } from "@material-ui/core";
import { Step } from "../../types/Timer";
import {
  SkipNext,
  SkipPrevious,
  Pause,
  Flag,
  PlayArrow
} from "@material-ui/icons";
import { useTimer } from "../../utils/Timer";

interface Props {
  step: Step;
  onNext(): void;
  hasNext: boolean;
  onPrevious(): void;
  hasPrevious: boolean;
}

export default function StepInfo({
  step,
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
        gutterBottom={!step.duration || !!running}
      >
        {step.duration ? (
          running ? (
            timeLeft
          ) : (
            <Pause fontSize="large" />
          )
        ) : (
          <Flag fontSize="large" />
        )}
      </Typography>
      {!!step.duration && !running && (
        <Typography
          variant="subtitle1"
          color="textSecondary"
          gutterBottom={true}
        >
          {timeLeft}
        </Typography>
      )}
      <Typography variant="h5" align="center" gutterBottom={true}>
        {step.title}
      </Typography>
      {!!step.description && (
        <Typography variant="body2" align="center" gutterBottom={true}>
          {step.description}
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
            <Fab color="secondary" disabled={!hasPrevious} onClick={onPrevious}>
              <SkipPrevious />
            </Fab>
          </Grid>
          <Grid item={true}>
            {running ? (
              <Fab color="default" onClick={onPause} disabled={!step.duration}>
                <Pause />
              </Fab>
            ) : (
              <Fab color="default" onClick={onStart} disabled={!step.duration}>
                <PlayArrow />
              </Fab>
            )}
          </Grid>
          <Grid item={true}>
            <Fab color="primary" disabled={!hasNext} onClick={onNext}>
              <SkipNext />
            </Fab>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
