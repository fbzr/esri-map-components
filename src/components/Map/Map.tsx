import React, { RefObject } from "react";
import {
  ArcgisMap,
  ArcgisSearch,
  ArcgisLegend,
  ArcgisExpand,
  ArcgisPlacement,
} from "@arcgis/map-components-react";
import { mapController } from "../../controllers/MapController";
import "./Map.scss";

const Map = () => {
  const [isMapLoaded, setIsMapLoaded] = React.useState(false);
  const mapRef: RefObject<HTMLArcgisMapElement> | null = React.useRef(null);

  return (
    <ArcgisMap
      ref={mapRef}
      basemap={"topo"}
      extent={mapController.initialExtent}
        onArcgisViewReadyChange={async () => {
          await mapController.initMap(mapRef.current!);
          setIsMapLoaded(true);
      }}
      onArcgisViewClick={mapController.handleClick}
    >
      <ArcgisSearch position="top-right"></ArcgisSearch>
      <ArcgisLegend position="bottom-left"></ArcgisLegend>
    </ArcgisMap>
  );
};

export default Map;
