import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/auth/Login";
import Error from "./Pages/Error/Error";
import Announcement from "./Pages/Announcement/Announcement";
import VisitorLayout from "./Pages/visitor-view/VisitorLayout";
import VisitorHome from "./Pages/visitor-view/home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/visitor" element={<VisitorLayout />}>
          <Route path="dashboard" element={<VisitorHome />} />
          <Route path="announcement" element={<Announcement />} />
        </Route>

        <Route></Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
