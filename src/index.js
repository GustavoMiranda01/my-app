import React from "react";
import { createRoot } from "react-dom/client";
// import Home from "./Pages/Home";
import Orders from './Pages/Orders'
import GlobalStyles from "./GlobalStayles";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Orders />
    <GlobalStyles />
  </>
);
