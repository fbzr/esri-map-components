import React from "react";
import ReactDOM from "react-dom/client";
import Map from "./components/Map/Map";
// import defineCustomElements to register custom elements with the custom elements registry
import { defineCustomElements } from "@arcgis/map-components/dist/loader";
import "./index.scss";

// Register custom elements
defineCustomElements(window, {
  resourcesUrl: "https://js.arcgis.com/map-components/4.29/assets",
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Map />
  </React.StrictMode>,
);
