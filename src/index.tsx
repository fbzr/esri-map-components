import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Map from "./components/Map/Map";
import store from "./store";

// import defineCustomElements to register custom elements with the custom elements registry
import { defineCustomElements } from "@arcgis/map-components/dist/loader";
import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements as defineChartsElements } from "@arcgis/charts-components/dist/loader";
import "./index.scss";

// Register custom elements
defineCustomElements(window, {
  resourcesUrl: "https://js.arcgis.com/map-components/4.29/assets",
});
// define custom elements in the browser, and load the assets from the CDN
defineChartsElements(window, {
  resourcesUrl: "https://js.arcgis.com/charts-components/4.29/t9n",
});
defineCalciteElements(window, {
  resourcesUrl: "https://js.arcgis.com/calcite-components/2.4.0/assets",
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Map />
    </Provider>
  </React.StrictMode>,
);
