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
      fontSize: "1.3rem",
    },
    h3: {
      fontSize: "1.1rem",
    },
    h4: {
      fontSize: "0.8rem",
    },
  },
});

export default theme;
