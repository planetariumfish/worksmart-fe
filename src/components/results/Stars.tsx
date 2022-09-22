import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { BsStarFill, BsStar } from "react-icons/bs";

type Props = {
  score: number;
};

const Stars = ({ score }: Props) => {
  const rating: React.ReactNode[] = [];
  const makeStars = () => {
    const percentage = Math.floor(score * 100);
    const stars = Math.ceil(percentage / 20);

    for (let i = 0; i < 5; i++) {
      rating.push(i < stars ? <BsStarFill /> : <BsStar />);
    }
  };
  makeStars();

  return (
    <Center color="yellow.500" gap={1}>
      {rating}
    </Center>
  );
};

export default Stars;
