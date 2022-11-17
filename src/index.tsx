import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/App/App";
import { AppContextProvider } from "./App/AppContext/AppContext";
import { ThemeProvider } from "@mui/styles";
import theme from "./Theme/Theme";
import { AppEnterState } from "./App/AppEnterState/AppEnterState";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <AppEnterState>
          <App />
        </AppEnterState>
      </ThemeProvider>
    </AppContextProvider>
  </React.StrictMode>
);
