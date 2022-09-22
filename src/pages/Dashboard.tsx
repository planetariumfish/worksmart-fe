import { Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";
import Charts from "../components/results/Charts";
import { User } from "../contexts/user.context";
import axios from "../utils/axiosClient";

type Props = {};

const Dashboard = (props: Props) => {
  const { user, setUser } = React.useContext(User);

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
  }, []);

  return (
    <div className="d-flex justify-content-center ms-5">
      <Charts />
    </div>
  );
};

export default Dashboard;
