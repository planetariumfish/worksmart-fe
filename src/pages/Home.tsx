import { Center, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";

type Props = {};

const Home = (props: Props) => {
  return (
    <Center>
      <Image src={logo} />
    </Center>
  );
};

export default Home;
