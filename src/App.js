import React, { Fragment, useEffect, useRef } from "react";
import Loader from "./component/common/loader/loader";
import Header from "./component/common/header/header";
import Sidebar from "./component/common/sidebar/sidebar";
import Rightsidebar from "./component/common/sidebar/rightsidebar";
import Footer from "./component/common/footer/footer";
import ThemeCustomize from "./component/common/theme-customizer/themeCustomize";
import { ToastContainer } from "react-toastify";
import { Outlet, useLocation } from "react-router-dom";
import ConfigDB from "./data/customizer/config";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const App = ({...rest}) => {
  const animation = localStorage.getItem("animation") || ConfigDB.data.router_animation || "fade";
  const location = useLocation();
  const nodeRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const error = console.error;
  console.error = (...args) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  return (
    <Fragment>
      <Loader />
      <div className='page-wrapper'>
        <div className='page-body-wrapper'>
          <Header />
          <Sidebar />
          <Rightsidebar />
          <div className='page-body' ref={nodeRef}>
            <TransitionGroup {...rest}>
              <CSSTransition key={location.key} timeout={100} classNames={animation} unmountOnExit nodeRef={nodeRef}>
                <div>
                  <Outlet />
                </div>
              </CSSTransition>
            </TransitionGroup>
          </div>
          <Footer />
          <ThemeCustomize />
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default App;
