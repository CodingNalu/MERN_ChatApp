import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register, Login, Chat, AvatarSet } from "./pages";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Chat />} />
        <Route path="/setAvatar" element={<AvatarSet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
