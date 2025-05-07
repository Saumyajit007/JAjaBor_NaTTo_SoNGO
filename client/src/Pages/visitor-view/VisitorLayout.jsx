import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "@/components/Visitor/Header/Header";
import Footer from "@/components/Visitor/Footer/Footer";

const VisitorLayout = () => {
  const RouteLocation=useLocation()

  return (
    <div>
      <Header />
      <Outlet />
      {RouteLocation.pathname==="/visitor/announcement" ? <></>: <Footer />}
    </div>
  );
};

export default VisitorLayout;
