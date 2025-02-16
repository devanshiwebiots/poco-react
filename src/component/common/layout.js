import React, { Fragment, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Loader from "./loader/loader";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import Rightsidebar from "./sidebar/rightsidebar";
import ThemeCustomize from "./theme-customizer/themeCustomize";
import ConfigDB from "../../data/customizer/config";
import Footer from "./footer/footer";

const Layout = () => {
  // const animation = localStorage.getItem("animation") || ConfigDB.data.router_animation || "fade";
  // const location = useLocation();
  // const nodeRef = useRef(null);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location.pathname]);

  // const error = console.error;
  // console.error = (...args) => {
  //   if (/defaultProps/.test(args[0])) return;
  //   error(...args);
  // };

  return (
    <Fragment>
      <Loader />
      <div className="page-wrapper">
        <div className="page-body-wrapper">
          <Header />
          <Sidebar />
          <Rightsidebar />
          <div className="page-body">
            {/* <TransitionGroup {...rest}> */}
            {/* <CSSTransition key={location.key} timeout={100} classNames={animation} unmountOnExit nodeRef={nodeRef}> */}
            <div>
              <Outlet />
            </div>
            {/* </CSSTransition> */}
            {/* </TransitionGroup> */}
          </div>
          <Footer />
          <ThemeCustomize />
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
