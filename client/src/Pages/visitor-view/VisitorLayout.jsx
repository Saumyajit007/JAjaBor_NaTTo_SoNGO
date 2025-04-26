import React from "react";
import Header from "@/components/Visitor/Header/Header";
import Footer from "@/components/Visitor/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";


const VisitorLayout = () => {
  const RouteLocation=useLocation()
  console.log(RouteLocation)
  return (
    <div>
      <Header />
      <Outlet />
      {RouteLocation.pathname==="/visitor/announcement" ? <></>: <Footer />}
    </div>
  );
};

export default VisitorLayout;
