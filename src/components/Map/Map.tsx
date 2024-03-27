import React, { RefObject } from "react";
import { useDispatch } from "react-redux";
import {
  ArcgisMap,
  ArcgisSearch,
  ArcgisLegend,
  ArcgisExpand,
  ArcgisPlacement,
} from "@arcgis/map-components-react";
import { mapController } from "../../controllers/MapController";
import Chart from "../Chart/Chart";
import { setIsMapInitialized } from "../../store/slices/mapSlice";
import "./Map.scss";

const Map = () => {
  const dispatch = useDispatch();
  const mapRef: RefObject<HTMLArcgisMapElement> | null = React.useRef(null);

  return (
    <ArcgisMap
      ref={mapRef}
      basemap={"topo"}
      extent={mapController.initialExtent}
      onArcgisViewReadyChange={async () => {
        await mapController.initMap(mapRef.current!);
        dispatch(setIsMapInitialized(true));
      }}
      onArcgisViewClick={mapController.handleClick}
    >
      <ArcgisSearch position="top-right"></ArcgisSearch>
      <ArcgisLegend position="bottom-left"></ArcgisLegend>

      <ArcgisExpand position="top-left" mode="floating" className="expand">
        <ArcgisPlacement position="top-left">
          <Chart />
        </ArcgisPlacement>
      </ArcgisExpand>
    </ArcgisMap>
  );
};

export default Map;
