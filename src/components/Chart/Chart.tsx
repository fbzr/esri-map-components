import { RefObject, useEffect, useRef } from "react";
import {
  ArcgisChartsActionBar,
  ArcgisChartsBarChart,
} from "@arcgis/charts-components-react";
import { BarChartModel } from "@arcgis/charts-model";
import { mapController } from "../../controllers/MapController";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import "./Chart.scss";

const Chart = () => {
  const chartRef: RefObject<HTMLArcgisChartsBarChartElement> | null =
    useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      initChart();
    }
  }, [chartRef]);

  const initChart = async () => {
    console.log("log.mapController.map", mapController.map);
    console.log("log.mapController.mapView", mapController.mapView);

    // const layer = mapController.featureLayer;
    const layer = new FeatureLayer({
      url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/ChicagoCr/FeatureServer/0",
      outFields: ["*"],
    });

    console.log("Chart.initChart", layer);
    if (layer) {
      await layer.load();

      const barChartParams = {
        layer,
        category: "Primary_Ty",
      };

      const barChartModel = new BarChartModel(barChartParams);

      barChartModel.description = "Primary Type of Crime";

      const config = await barChartModel.config;

      chartRef.current!.config = config;
      chartRef.current!.layer = layer;

      // const actionBar = document.getElementById(
      //   "action-bar",
      // ) as HTMLArcgisChartsActionBarElement;

      // if (actionBar) {
      //   actionBar.actionBarHideActionsProps = {
      //     hideRotateChart: false,
      //     hideFilterByExtent: true,
      //     hideZoom: true,
      //     hideSelection: true,
      //     hideFullExtent: true,
      //   };
      // }
    }
  };

  return (
    <ArcgisChartsBarChart ref={chartRef} className="Chart">
      <ArcgisChartsActionBar
        slot="action-bar"
        id="action-bar"
        disableLegend={true}
      ></ArcgisChartsActionBar>
    </ArcgisChartsBarChart>
  );
};

export default Chart;
