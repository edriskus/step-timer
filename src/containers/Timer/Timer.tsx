import React, { useMemo } from "react";
import { Container, Typography } from "@material-ui/core";
import { timers } from "../../data/Timers";
import { useParams, Redirect } from "react-router-dom";
import TimeStepper from "../../components/TimeStepper/TimeStepper";

export default function Timer() {
  const { id } = useParams();
  const timer = useMemo(() => (id ? timers[id] ?? null : null), [id]);

  if (timer === null) {
    return <Redirect to="/" />;
  } else {
    return (
      <Container maxWidth="md">
        <Typography
          variant="h5"
          align="center"
          color="secondary"
          gutterBottom={true}
        >
          {timer.title}
        </Typography>
        <TimeStepper timer={timer} />
      </Container>
    );
  }
}
