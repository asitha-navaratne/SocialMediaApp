import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fadc07",
      contrastText: "##000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "2.5rem",
          padding: "1rem 2rem",
        },
      },
    },
  },
});

export default theme;
