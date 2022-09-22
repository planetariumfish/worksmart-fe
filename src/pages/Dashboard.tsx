import React from "react";
import Charts from "../components/results/Charts";
import { User } from "../contexts/user.context";
import axios from "../utils/axiosClient";


type Props = {};

const Dashboard = (props: Props) => {
  const { user, setUser } = React.useContext(User);
  const [result, setResult] = React.useState<object>({});
  const [star, setStar]= React.useState<number>(0);

  const validateUser = async () => {
    try {
      const user = await axios.get("/api/user/validate");
      if (setUser) setUser(user.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    validateUser();
    getDataScience()
    console.log(star)
  }, []);


  const getDataScience = async () => {
    try {
      const res = await axios.get("/api/company/result");
      // console.log(res.data);
      setResult(res.data[0]);
      setStar(res.data[1].score);
    } catch (err) {
      console.log(err);
    }
  }



  return (
    <div className="d-flex justify-content-center ms-5">
      <Charts result={result} />
    </div>
  );
}

export default Dashboard;
