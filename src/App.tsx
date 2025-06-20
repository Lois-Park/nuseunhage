import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Home from "./pages/Home";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}
