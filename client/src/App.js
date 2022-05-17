import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from '@mui/material/Container';

import Login from "./components/login/Login";
import SignUp from "./components/login/Signup";
import Home from "./components/home/Home";

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup"  element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
