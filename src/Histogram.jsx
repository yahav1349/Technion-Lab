// import React, { Fragment, useState } from "react";
// import { AgChartsReact } from "ag-charts-react";
// import "ag-charts-enterprise";


// // Convert counted data into an array of objects

// const ChartExample = ({countedData, x, y, title}) => {
//   const data = Object.entries(countedData).map(([age, count]) => ({ age: parseInt(age), count }));
//   const [options, setOptions] = useState({
//     title: {
//       text: title,
//     },
//     data: data,
//     series: [
//       {
//         type: "histogram",
//         xKey: "age",
//         yKey: "count", // Use 'count' as the yKey representing frequency
//         xName: "Participant Age",
//         label: {
//             enabled: true} // Enable data labels
//       },
//     ],
//     axes: [
//       {
//         type: "number",
//         position: "bottom",
//         title: { text: x},
//         label: { format: "{value}" }, // This line sets the format for the x-axis labels
//         tick: { interval: 10 },
//         min: 0,
//       },
//       {
//         type: "number",
//         position: "left",
//         title: { text: y },
//       },
//     ],
//     background: {
//         fill: "#a9bbcc", // Set the background color here
//       }
      
//   });

//   return <AgChartsReact options={options} />;
// };

// export default ChartExample;


import React, { Fragment, useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";
import "ag-charts-enterprise";

const ChartExample = ({ countedData, x, y, title }) => {
  const data = Object.entries(countedData).map(([age, count]) => ({
    age: parseInt(age),
    count
  }));

  useEffect(() => {
    // Log each bar in the data
    data.forEach(bar => {
      console.log(`Age: ${bar.age}, Count: ${bar.count}`);
    });
  }, []); // Empty dependency array to run the effect only once after the initial render

  const [options, setOptions] = useState({
    title: {
      text: title
    },
    data: data,
    series: [
      {
        type: "histogram",
        xKey: "age",
        yKey: "count",
        xName: "Participant Age",
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
        label: { format: "{value}", rotation: 90},
        tick: { interval: (x[x.length - 1] - x[0]) / 10 },  
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
