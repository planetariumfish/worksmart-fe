import React from "react";
import { User as UserType } from "../types/types";
import { User } from "./user.context";
import axios from "../utils/axiosClient";

type Props = {
  children: React.ReactNode;
};

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = React.useState<UserType | null>(null);

  React.useEffect(() => {
    const getUserOnLoad = async () => {
      const login = await axios.get("/api/user/validate");
      if (login.data) {
        setUser(login.data[0]);
      }
    };
    getUserOnLoad();
  }, []);

  return <User.Provider value={{ user, setUser }}>{children}</User.Provider>;
};

export default UserProvider;
