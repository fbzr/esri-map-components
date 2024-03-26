import React, { RefObject } from "react";
import {
  ArcgisMap,
  ArcgisSearch,
  ArcgisLegend,
} from "@arcgis/map-components-react";
import mapController from "../../controllers/MapController";
import "./Map.scss";

const Map = () => {
  const mapRef: RefObject<HTMLArcgisMapElement> | null = React.useRef(null);

  return (
    <ArcgisMap
      ref={mapRef}
      basemap={"topo"}
      extent={mapController.initialExtent}
      onArcgisViewReadyChange={() => {
        mapController.initMap(mapRef.current!);
      }}
      onArcgisViewClick={mapController.handleClick}
    >
      <ArcgisSearch position="top-right"></ArcgisSearch>
      <ArcgisLegend position="bottom-left"></ArcgisLegend>
    </ArcgisMap>
  );
};

export default Map;
