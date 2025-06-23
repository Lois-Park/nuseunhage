// src/theme.ts

// src/theme.ts

import { createTheme } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles";

// 공통 테마
const common: ThemeOptions = {
  typography: {
    fontFamily: "'Quicksand', sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.4 },
    h2: { fontSize: "2rem", fontWeight: 700, lineHeight: 1.4 },
    h3: { fontSize: "1.75rem", fontWeight: 600, lineHeight: 1.5 },
    h4: { fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.6 },
    h5: { fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.6 },
    h6: { fontSize: "1rem", fontWeight: 600, lineHeight: 1.4 },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
    body2: { fontSize: "0.875rem", lineHeight: 1.6 },
    caption: { fontSize: "0.75rem", lineHeight: 1.4 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
};

// 라이트 테마
export const lightTheme = createTheme({
  ...common,
  palette: {
    mode: "light",
    primary: { main: "#007aff" },
    background: { default: "#fafafa", paper: "#fff" },
    text: { primary: "#222", secondary: "#666" },
  },
});

// 다크 테마
export const darkTheme = createTheme({
  ...common,
  palette: {
    mode: "dark",
    primary: { main: "#7cb9ff" },
    background: { default: "#1a1a1a", paper: "#2c2c2c" },
    text: { primary: "#f0f0f0", secondary: "#aaa" },
  },
});


// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#007aff",
//     },
//     background: {

//       default: "#f9f9f9",
//     },
//   },
//   typography: {
//     fontFamily: "'Quicksand', 'Pretendard', sans-serif",
//     h1: {
//       fontSize: "3rem",
//       fontWeight: 700,
//       letterSpacing: "-0.015em",
//     },
//     h2: {
//       fontSize: "2.25rem",
//       fontWeight: 600,
//     },
//     h3: {
//       fontSize: "1.75rem",
//       fontWeight: 600,
//     },
//     h4: {
//       fontSize: "1.5rem",
//       fontWeight: 600,
//     },
//     h5: {
//       fontSize: "1.25rem",
//       fontWeight: 500,
//     },
//     h6: {
//       fontSize: "1rem",
//       fontWeight: 500,
//     },
//     body1: {
//       fontSize: "1rem",
//       lineHeight: 1.6,
//     },
//     body2: {
//       fontSize: "0.875rem",
//       lineHeight: 1.6,
//     },
//     button: {
//       textTransform: "none",
//       fontWeight: 600,
//     },
//     caption: {
//       fontSize: "0.75rem",
//       color: "#888",
//     },
//   },  
// });

// export default theme;

