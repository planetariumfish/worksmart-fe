import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../contexts/user.context";

type Props = {};

const NavBar = (props: Props) => {
  const { user, setUser } = React.useContext(User);
  const navigate = useNavigate();

  return (
    <Flex
      bg="teal.400"
      borderRadius="0 0 0.5rem 0.5rem"
      w="100%"
      h="2.5rem"
      position="fixed"
      top={0}
      px="0.5rem"
      sx={{ zIndex: 10 }}
    >
      <Heading
        color="white"
        size="lg"
        _hover={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        WorkSmart
      </Heading>
      <Spacer />
      {user && (
        <HStack gap={3}>
          <Button size="sm" my={1} onClick={() => navigate("/input")}>
            Input Info
          </Button>
          <Avatar
            size="sm"
            src={user.photo || ""}
            name={user.name}
            bg="teal.100"
          />
        </HStack>
      )}
    </Flex>
  );
};

export default NavBar;
