import React from "react";
import { Container, Grid } from "@material-ui/core";
import TimerCard from "../../components/TimerCard/TimerCard";
import { timers } from "../../data/Timers";

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Grid container={true} spacing={2}>
        {Object.values(timers).map(timer => (
          <Grid item={true} xs={12} sm={6} key={timer.id}>
            <TimerCard timer={timer} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
