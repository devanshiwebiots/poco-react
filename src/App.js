import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import MainRoutes from "./routes";

const App = () => {
  return (
    <Fragment>
      <MainRoutes />
      <ToastContainer />
    </Fragment>
  );
};

export default App;
