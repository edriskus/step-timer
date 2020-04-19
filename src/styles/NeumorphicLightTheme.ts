import { createMuiTheme } from "@material-ui/core/styles";

const base = createMuiTheme();

export default createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#00BCD4"
    },
    secondary: {
      main: "#FF5722"
    },
    background: {
      default: "#E0E5EC",
      paper: "#E0E5EC"
    }
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    body2: {
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "160%"
    },
    body1: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "17px"
    },
    h2: {
      fontWeight: 500,
      fontSize: "40px",
      lineHeight: "49px"
    },
    h3: {
      fontWeight: 300
    },
    h6: {
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "20px"
    }
  },
  shape: {
    borderRadius: 8
  },
  shadows: [
    "none",
    "6px 6px 12px rgba(163, 177, 198, 0.5), -6px -6px 12px rgba(255, 255, 255, 0.5)",
    "6px 6px 12px rgba(163, 177, 198, 0.5), -6px -6px 12px rgba(255, 255, 255, 0.5)",
    ...base.shadows.slice(2)
  ] as any,
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: "#E0E5EC",
        padding: 9,
        minWidth: 0,
        "&.Mui-disabled": {
          backgroundColor: "#E0E5EC",
          opacity: 0.2,
          boxShadow:
            "6px 6px 12px rgba(163, 177, 198, 0.5), -6px -6px 12px rgba(255, 255, 255, 0.5)"
        }
      }
    },
    MuiCardContent: {
      root: {
        "&:last-child": {
          paddingBottom: 16
        }
      }
    }
  }
});
