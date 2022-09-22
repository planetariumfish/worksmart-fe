import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  score: number;
};

const Score = ({ score }: Props) => {
  const percentage = Math.floor(score * 100);

  return (
    <Center>
      <Text>Your company's health is at: {percentage}%</Text>
    </Center>
  );
};

export default Score;
