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
    let stars;
    if (percentage <= 20) stars = 1;
    else if (percentage <= 40) stars = 2;
    else if (percentage <= 60) stars = 3;
    else if (percentage <= 80) stars = 4;
    else stars = 5;

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
