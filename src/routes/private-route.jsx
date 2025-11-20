/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const [currentUser, setCurrentUser] = useState(false);

  const abortController = new AbortController();

  useEffect(() => {
    const color = localStorage.getItem("color");
    document.getElementById("color").setAttribute("href", `/assets/css/${color}.css`);
    console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
    console.disableYellowBox = true;
    return function cleanup() {
      abortController.abort();
    };
  }, [abortController]);

  return currentUser !== null ? <Outlet /> : <Navigate to={`/login`} />;
};

export default PrivateRoute;
