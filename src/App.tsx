import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Input from "./pages/Input";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Box width="100vw" minH="100vh">
      <NavBar />
      <Box h="3rem" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/input" element={<Input />} />
      </Routes>
    </Box>
  );
}

export default App;
