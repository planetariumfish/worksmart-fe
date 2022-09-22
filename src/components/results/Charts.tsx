import React from 'react'
import { Chart } from "react-google-charts";

type Props = {
  result: any;
}

  export const options = {
    title: "Company Health",
    width: 1000,
    height: 800,
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };

const Charts = ({result}: Props) => {


const sort = []



for (const key in result) {
 
 
}


const data = [
  [
    "Element",
    "Density",
    { role: "style" },
    {
      sourceColumn: 0,
      role: "annotation",
      type: "string",
      calc: "stringify",
    },
  ],




  ["Average Collection Days", result[" Average Collection Days"
], "#81E6D9", null],
  [" Cash Flow to Sales"
  , result[" Cash Flow to Sales"

], "#81E6D9", null],
  [" Cash Reinvestment %"

  , result[" Cash Reinvestment %"


], "#81E6D9", null],
  [" Current Ratio"
  , result[" Current Ratio"

], "color: #81E6D9", null],
  [" Equity to Liability"

  , result[" Equity to Liability"


], "color: #81E6D9", null],
  [
    " Gross Profit to Sales"
,
    result[" Gross Profit to Sales"

],
    "color: 319795",
    null,
  ],
  [
    "Interest Coverage Ratio (Interest expense to EBIT)",
    result[" Interest Coverage Ratio (Interest expense to EBIT)"
],
    "color: #81E6D9",
    null,
  ],
  [" Operating Gross Margin", result[" Operating Gross Margin"
], "color: #319795", null],
  [" Quick Ratio"
  , result[" Quick Ratio"
], "color: #81E6D9", null],
  [" Realized Sales Gross Profit Growth Rate", result[" Realized Sales Gross Profit Growth Rate"
], "color: #81E6D9", null],
  [" Regular Net Profit Growth Rate", result[" Regular Net Profit Growth Rate"
], "color: #81E6D9", null],
  [" Research and development expense rate"
  , result[" Research and development expense rate"

], "color: #81E6D9", null],
  [" Retained Earnings to Total Assets", result[" Retained Earnings to Total Assets"
], "color: #81E6D9", null],
];


  return (
    <div>

<Chart
        chartType="BarChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />

    </div>
  )
}

export default Charts