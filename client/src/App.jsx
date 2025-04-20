import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Login from "./Pages/auth/Login";
import Error from "./Pages/Error/Error";
import Publiclayout from "./components/PublicLayout/Publiclayout";
function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Publiclayout>
              <Route path="/" element={<Home />} />
            </Publiclayout>
          }
        ></Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  );
}

export default App;
