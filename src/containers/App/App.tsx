import React from "react";
import { ThemeProvider, CssBaseline, Box } from "@material-ui/core";
import DarkTheme from "../../styles/DarkTheme";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes/Routes";
import Header from "../../components/Header/Header";

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Router>
        <Header />
        <Box paddingY={3}>
          <Routes />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
