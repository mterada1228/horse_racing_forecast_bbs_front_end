import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8080FF",
    },
    background: {
      default: "#DAE0E6",
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
    },
    h2: {
      fontSize: "1.5625rem",
    },
    h3: {
      fontSize: "1.25rem",
    },
  },
});

export default theme;
