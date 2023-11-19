import React from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./GlobalStayles";
import Routes from './routes'

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Routes />
    <GlobalStyles />
  </>
);
