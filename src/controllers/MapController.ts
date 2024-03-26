import Extent from "@arcgis/core/geometry/Extent";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

class MapController {
  #map: __esri.Map | null = null;
  #featureLayer: __esri.FeatureLayer | null = null;

  #initialExtent = new Extent({
    xmin: -8591349.995937862,
    ymin: 4680000,
    xmax: -8560851.621652117,
    ymax: 4721753.174946784,
    spatialReference: {
      wkid: 102100,
    },
  });

  initMap = (mapElement: HTMLArcgisMapElement) => {
    this.#map = mapElement.map;

    console.log("MapController.initMap", this.#map);
    if (!this.#map) {
      return;
    }

    this.#featureLayer = new FeatureLayer({
      url: "https://maps2.dcgis.dc.gov/dcgis/rest/services/DCOZ/Zone_Mapservice/MapServer/21",
      minScale: 0,
      maxScale: 0,
      popupEnabled: true,
      popupTemplate: {
        title: "Zone",
        content: "Zone: {District}",
      },
    });

    this.#map.add(this.#featureLayer);
  };

  handleClick = (event: any) => {
    console.log("MapController.handleClick", event);
  };

  get map() {
    return this.#map;
  }

  get initialExtent() {
    return this.#initialExtent;
  }

  get featureLayer() {
    return this.#featureLayer;
  }
}

const mapController = new MapController();

export default mapController;
