import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme: Theme) => ({
  prefixPrimary: {
    color: theme.palette.primary.main
  },
  prefixSecondary: {
    color: theme.palette.secondary.main
  }
}));
