import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Loader from "./loader/loader";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import Rightsidebar from "./sidebar/rightsidebar";
import ThemeCustomize from "./theme-customizer/themeCustomize";
import Footer from "./footer/footer";

const Layout = () => {
  return (
    <Fragment>
      <Loader />
      <div className="page-wrapper">
        <div className="page-body-wrapper">
          <Header />
          <Sidebar />
          <Rightsidebar />
          <div className="page-body">
            <div>
              <Outlet />
            </div>
          </div>
          <Footer />
          <ThemeCustomize />
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
