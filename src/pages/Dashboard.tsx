import React from "react";
import Charts from "../components/results/Charts";
import Score from "../components/results/Score";
import Stars from "../components/results/Stars";
import { User } from "../contexts/user.context";
import axios from "../utils/axiosClient";

type Props = {};

const Dashboard = (props: Props) => {
  const { user, setUser } = React.useContext(User);
  const [result, setResult] = React.useState<object>({});
  const [score, setScore] = React.useState<number>(0);

  React.useEffect(() => {
    getDataScience();
    console.log(score);
  }, []);

  const getDataScience = async () => {
    try {
      const res = await axios.get("/api/company/result");
      // console.log(res.data);
      setResult(res.data[0]);
      setScore(res.data[1].score);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex justify-content-center ms-5">
      <Stars score={score} />
      <Score score={score} />
      <Charts result={result} />
    </div>
  );
};

export default Dashboard;
