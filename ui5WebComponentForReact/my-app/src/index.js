import { ThemeProvider } from "@ui5/webcomponents-react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MyApp } from "./MyApp";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <HashRouter>
    <ThemeProvider>
      <MyApp />
    </ThemeProvider>
  </HashRouter>
);
reportWebVitals();
