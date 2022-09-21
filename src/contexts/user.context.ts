import React from "react";
import { User as UserType } from "../types/types";

export const User = React.createContext<{
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>> | null;
}>({ user: null, setUser: null });
