import { Box } from "@chakra-ui/react";
import { useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Input from "./pages/Input";
import { User } from "./contexts/user.context";

function App() {
  const { user } = useContext(User);
  return (
    <Box
      width="100vw"
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <NavBar />
      <Box h="3.5rem" />
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/input" element={<Input />} />
      </Routes>
    </Box>
  );
}

export default App;
