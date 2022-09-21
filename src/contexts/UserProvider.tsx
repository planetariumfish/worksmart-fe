import React from "react";
import { User as UserType } from "../types/types";
import { User } from "./user.context";

type Props = {
  children: React.ReactNode;
};

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = React.useState<UserType | null>(null);

  return <User.Provider value={{ user, setUser }}>{children}</User.Provider>;
};

export default UserProvider;
