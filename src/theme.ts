// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light", // or "dark"
    primary: {
      main: "#007aff", // Nuseunhage 감성에 어울리는 블루 계열
    },
    background: {
      default: "#f9f9f9",
    },
  },
  typography: {
    fontFamily: "'Pretendard', sans-serif",
  },
});

export default theme;
