import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Screens/home";
import Chat from "../Screens/chat";
import NewComponent from "../Screens/newComponent";

function Approuter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/new" element={<NewComponent />}></Route>
      </Routes>
    </Router>
  );
}

export default Approuter;
