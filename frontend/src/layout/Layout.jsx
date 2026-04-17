import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import Sidebar from "../components/sidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <div className="flex flex-1">
          <Sidebar />
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
