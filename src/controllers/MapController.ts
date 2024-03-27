import Extent from "@arcgis/core/geometry/Extent";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

class MapController {
  #map: __esri.Map | null = null;
  #mapView: __esri.MapView | null = null;
  #featureLayer: __esri.FeatureLayer | null = null;

  #initialExtent = new Extent({
    xmin: -87.9401,
    ymin: 41.6445,
    xmax: -87.5246,
    ymax: 42.023,
    spatialReference: {
      wkid: 4326,
    },
  });

  initMap = async (mapElement: HTMLArcgisMapElement) => {
    this.#mapView = mapElement.view;
    this.#map = mapElement.map;

    console.log("MapController.initMap", this.#map);
    if (!this.#map) {
      return;
    }

    this.#featureLayer = new FeatureLayer({
      url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/ChicagoCr/FeatureServer/0",
      minScale: 0,
      maxScale: 0,
      outFields: ["*"],
      popupEnabled: true,
      popupTemplate: {
        title: "Crime",
        content: "Type: {Primary_Ty}",
      },
    });

    this.#map.add(this.#featureLayer);

    await this.#mapView.when();

    return this.#mapView;
  };

  handleClick = (event: any) => {
    console.log("MapController.handleClick", event);
  };

  get map() {
    return this.#map;
  }

  get mapView() {
    return this.#mapView;
  }

  get initialExtent() {
    return this.#initialExtent;
  }

  get featureLayer() {
    return this.#featureLayer;
  }
}

export const mapController = new MapController();

declare global {
  interface Window {
    mapController: typeof mapController;
  }
}

if (import.meta.env.MODE === "development") {
  window.mapController = mapController;
}
