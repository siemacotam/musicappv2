import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/App/App";
import { AppContextProvider } from "./App/AppContext/AppContext";
import { ThemeProvider } from "@mui/styles";
import theme from "./Theme/Theme";
import { BrowserRouter } from "react-router-dom";
import { AppAuth } from "./App/AppAuth/AppAuth";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <AppAuth>
            <App />
          </AppAuth>
        </BrowserRouter>
      </ThemeProvider>
    </AppContextProvider>
  </React.StrictMode>
);
