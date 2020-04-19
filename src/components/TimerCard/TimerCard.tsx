import React from "react";
import { Card, Typography, CardContent, Button, Box } from "@material-ui/core";
import { StepTimer } from "../../types/Timer";
import { ArrowForward } from "@material-ui/icons";
import { Link } from "react-router-dom";

interface Props {
  timer: StepTimer;
}

export default function TimerCard({ timer }: Props) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom={true} color="secondary">
          {timer.title}
        </Typography>
        {!!timer.duration && (
          <Typography variant="body2" color="primary" gutterBottom={true}>
            Duration: {timer.duration}s
          </Typography>
        )}
        {!!timer.description && (
          <Typography
            variant="body2"
            gutterBottom={false}
            color="textSecondary"
          >
            {timer.description}
          </Typography>
        )}
        <Box display="flex" width="100%" justifyContent="flex-end">
          <Button
            component={Link}
            to={`/timer/${timer.id}`}
            variant="contained"
          >
            <ArrowForward color="secondary" />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
