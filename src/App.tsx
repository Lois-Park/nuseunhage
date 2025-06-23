import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "./theme";
const isDarkMode = false; // 예시 (후에 상태값으로 전환 가능)
import Home from "./pages/Home";

export default function App() {
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}
