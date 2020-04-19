import React, { useCallback } from "react";
import { Timer } from "@material-ui/icons";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Header() {
  const { push } = useHistory();
  const goHome = useCallback(() => push("/"), [push]);
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar>
        <Box
          onClick={goHome}
          flexGrow={1}
          display="flex"
          flexDirection="row"
          alignItems="center"
          flexWrap="nowrap"
        >
          <Box
            marginRight={1}
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <Timer color="secondary" />
          </Box>
          <Typography variant="overline" color="secondary">
            Step Timer
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
