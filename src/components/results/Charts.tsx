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
], "#b87333", null],
  [" Cash Flow to Sales"
  , result[" Cash Flow to Sales"

], "silver", null],
  [" Cash Reinvestment %"

  , result[" Cash Reinvestment %"


], "gold", null],
  [" Current Ratio"
  , result[" Current Ratio"

], "color: #e5e4e2", null],
  [" Equity to Liability"

  , result[" Equity to Liability"


], "color: #7f96ff", null],
  [
    " Gross Profit to Sales"
,
    result[" Gross Profit to Sales"

],
    "color: #7f96ff",
    null,
  ],
  [
    "Interest Coverage Ratio (Interest expense to EBIT)",
    result[" Interest Coverage Ratio (Interest expense to EBIT)"
],
    "color: #E56399",
    null,
  ],
  [" Operating Gross Margin", result[" Operating Gross Margin"
], "color: #fb8500", null],
  [" Quick Ratio"
  , result[" Quick Ratio"
], "color: #8338ec", null],
  [" Realized Sales Gross Profit Growth Rate", result[" Realized Sales Gross Profit Growth Rate"
], "color: #e63946", null],
  [" Regular Net Profit Growth Rate", result[" Regular Net Profit Growth Rate"
], "color: #588157", null],
  [" Research and development expense rate"
  , result[" Research and development expense rate"

], "color: #8338ec", null],
  [" Retained Earnings to Total Assets", result[" Retained Earnings to Total Assets"
], "color: #ffb703", null],
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