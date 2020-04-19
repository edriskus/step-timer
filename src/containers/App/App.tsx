import React from "react";
import { ThemeProvider, CssBaseline, Box } from "@material-ui/core";
import NeumorphicLightTheme from "../../styles/NeumorphicLightTheme";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes/Routes";
import Header from "../../components/Header/Header";

function App() {
  return (
    <ThemeProvider theme={NeumorphicLightTheme}>
      <CssBaseline />
      <Router>
        <Header />
        <Box paddingY={1}>
          <Routes />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
