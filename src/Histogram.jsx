import React, { useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";
import "ag-charts-enterprise";

const ChartExample = ({ countedData, x, y, title }) => {
  // Convert counted data into an array of objects
  const data = Object.entries(countedData).map(([age, count]) => ({
    age: parseInt(age),
    count
  }));

  // Filter data where age is smaller than 14
  const filteredData = data.filter(bar => bar.age < 14);

  const [options, setOptions] = useState({
    title: {
      text: title
    },
    data: filteredData,
    series: [
      {
        type: "histogram",
        xKey: "age",
        yKey: "count",
        label: {
          enabled: true
        }
      }
    ],
    axes: [
      {
        type: "number",
        position: "bottom",
        title: { text: x },
        label: { format: "{value}", rotation: 90 },
        tick: { interval: 1 },
        min: 0
      },
      {
        type: "number",
        position: "left",
        title: { text: y }
      }
    ],
    background: {
      fill: "#a9bbcc"
    }
  });

  return <AgChartsReact options={options} />;
};

export default ChartExample;


// import React, { useState, useEffect } from "react";
// import { AgChartsReact } from "ag-charts-react";
// import "ag-charts-enterprise";

// const ChartExample = ({ countedData, x, y, title }) => {
//   // Convert counted data into an array of objects
//   const data = Object.entries(countedData).map(([age, count]) => ({
//     age: parseInt(age),
//     count
//   }));

//   // Filter data where x is smaller than 35
//   const filteredData = data.filter(bar => bar.age < 35);

//   const [options, setOptions] = useState({
//     title: {
//       text: title
//     },
//     data: filteredData,
//     series: [
//       {
//         type: "column",
//         xKey: "age",
//         yKey: "count"
//       }
//     ],
//     axes: [
//       {
//         type: "number",
//         position: "bottom",
//         title: { text: x },
//         label: { format: "{value}", rotation: 90 },
//         tick: { interval: 1 },
//         min: 0
//       },
//       {
//         type: "number",
//         position: "left",
//         title: { text: y }
//       }
//     ],
//     background: {
//       fill: "#a9bbcc"
//     }
//   });

//   return <AgChartsReact options={options} />;
// };

// export default ChartExample;

