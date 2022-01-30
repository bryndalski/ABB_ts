import React, { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import Login from "./Pages/login/Login";
import Home from "./Pages/home/Home";

const UserContextValue = {
  user: "",
  isLogged: false,
  permissions: "",
};

export default function App() {
  return (
    <Router>
      <UserContext.Provider value={UserContextValue}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}
