// src/styles/GlobalStyle.tsx
import { Global, css } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={css`
      html, body, #root {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
          Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: #fdfdfd;
        box-sizing: border-box;
      }

      *, *::before, *::after {
        box-sizing: inherit;
      }
    `}
  />
);

export default GlobalStyle;
