import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#1EA896"
    },
    secondary: {
      main: "#FF715B"
    },
    background: {
      // default: "#4C5454"
    }
  },
  typography: {
    fontFamily: "'Source Sans Pro', sans-serif",
    h3: {
      fontWeight: 300
    }
  },
  shape: {
    borderRadius: 3
  }
});
