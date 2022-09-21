import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FinancialPicture } from "../types/types";
import axios from "axios";

type Props = {};

const Input = (props: Props) => {
  const [step, setStep] = React.useState<number>(1);
  const [info, setInfo] = React.useState<FinancialPicture | {}>();
  const [user, setUser]= React.useState<object>({});

  const validateUser = async () => {
    try{
      const user = await axios.get("http://localhost:8080/api/user/validate", {withCredentials: true});
      console.log(user.data[0]);
      // setUser(user.data);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {validateUser()},[])

  return (
    <Box w="80%" minH="60vh" px="2rem" display="flex" justifyContent="center">
      <Box
        bg="gray.100"
        borderWidth="1px"
        borderRadius="0.5rem"
        p="1rem"
        position="relative"
        w="100%"
      >
        <Heading>Step {step}</Heading>
        {step === 1 && <></>}
        {step === 2 && <></>}
        {step === 3 && <></>}
        {step === 4 && <></>}
        <Box position="absolute" bottom="1rem" right="1rem">
          <SimpleGrid gap={2} columns={4}>
            <Box
              bg={step === 1 ? "teal.500" : "gray.200"}
              color={step === 1 ? "white" : "black"}
              p="0.5rem 1rem"
              onClick={() => setStep(1)}
              _hover={{ cursor: "pointer" }}
              // style as pointer
            >
              <Text as="b">Costs & Revenues</Text>
            </Box>
            <Box
              bg={step === 2 ? "teal.500" : "gray.200"}
              color={step === 2 ? "white" : "black"}
              p="0.5rem 1rem"
              onClick={() => setStep(2)}
              _hover={{ cursor: "pointer" }}
              // style as pointer
            >
              <Text as="b">Long Term A & L</Text>
            </Box>
            <Box
              bg={step === 3 ? "teal.500" : "gray.200"}
              color={step === 3 ? "white" : "black"}
              p="0.5rem 1rem"
              onClick={() => setStep(3)}
              _hover={{ cursor: "pointer" }}
              // style as pointer
            >
              <Text as="b">Current A & L</Text>
            </Box>
            <Box
              bg={step === 4 ? "teal.500" : "gray.200"}
              color={step === 4 ? "white" : "black"}
              p="0.5rem 1rem"
              onClick={() => setStep(4)}
              _hover={{ cursor: "pointer" }}
              // style as pointer
            >
              <Text as="b">Cash Flow</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default Input;
