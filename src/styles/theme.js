import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1a237e",
    },

    text: {
      primary: "#333",
      secondary: "#757575",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h4: {
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
      color: "#333",
    },
  },
});

export default theme;
