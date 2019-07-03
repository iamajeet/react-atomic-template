import React from "react";
import { storiesOf } from "@storybook/react";
import { LineChart } from "../../../components";

storiesOf("LineChart", module)
  .addWithJSX("default", () => (
    <LineChart
      canvasStyle={{ width: 800, height: 300 }}
      data={{
        labels: ["All", "Expired", "Expiring Soon"],
        datasets: [
          {
            label: "Products",
            data: [12, 19, 3],
            backgroundColor: "transparent"
          }
        ]
      }}
      options={{
        // This chart will not respond to mousemove, etc
        events: ["click"],
        onClick: (e, item) => {
          if (item && item.length > 0 && item[0]._index) {
            console.log("----- ", item[0]._index);
          }
        }
        // scales: {
        //   xAxes: [
        //     {
        //       gridLines: {
        //         drawOnChartArea: false
        //       }
        //     }
        //   ],
        //   yAxes: [
        //     {
        //       gridLines: {
        //         drawOnChartArea: false
        //       }
        //     }
        //   ]
        // }
      }}
    />
  ))
  .addWithJSX("Multiple dataset", () => (
    <LineChart
      canvasStyle={{ width: 800, height: 300 }}
      data={{
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        datasets: [
          {
            label: "All",
            data: [0, 2, 0, 1, 0, 4, 0, 0, 0, 0, 0, 0],
            backgroundColor: "transparent",
            borderColor: "red"
          },
          {
            label: "Expired",
            data: [0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
            backgroundColor: "transparent",
            borderColor: "blue"
          }
        ]
      }}
      options={{
        // This chart will not respond to mousemove, etc
        events: ["click"],
        onClick: (e, item) => {
          console.log("----- ", e.targets);
          console.log("----- ", item);
        }
      }}
    />
  ));
