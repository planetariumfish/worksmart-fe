import React from "react";
import { Chart } from "react-google-charts";
import { User } from "../contexts/user.context";
import axios from "../utils/axiosClient";

type Props = {};

export const data = [
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
  ["Operating Gross Margin", 0.6023868894, "#b87333", null],
  ["Sales Gross Profit Growth Rate", 0.0220322234, "silver", null],
  ["Regular Net Profit Growth Rate", 0.688909579, "gold", null],
  ["Gross Profit to Sales", 0.6023877093, "color: #e5e4e2", null],
  ["Cash Reinvestment %", 0.3810401997, "color: #7f96ff", null],
  [
    "Research and development expense rate",
    0.0001039086,
    "color: #7f96ff",
    null,
  ],
  [
    "Interest Coverage Ratio (Interest expense to EBIT)",
    0.5645438572,
    "color: #E56399",
    null,
  ],
  ["Equity to Liability", 0.0253738162, "color: #fb8500", null],
  ["Retained Earnings to Total Assets", 0.9195777128, "color: #8338ec", null],
  ["Current Ratio", 0.0045990496, "color: #e63946", null],
  ["Average Collection Days", 0.0069448417, "color: #588157", null],
  ["Quick Ratio", 0.0026569364, "color: #8338ec", null],
  ["Cash Flow to Sales", 0.6715760034, "color: #ffb703", null],
];

export const options = {
  title: "Company Health",
  width: 1000,
  height: 800,
  bar: { groupWidth: "95%" },
  legend: { position: "none" },
};

const Dashboard = (props: Props) => {
  const { user, setUser } = React.useContext(User);

  const validateUser = async () => {
    try {
      const user = await axios.get("/api/user/validate");
      console.log(user.data[0]);
      // setUser(user.data);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    validateUser();
  }, []);

  return (
    <div className="d-flex justify-content-center ms-5">
      <Chart
        chartType="BarChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />
    </div>
  );
};

export default Dashboard;
