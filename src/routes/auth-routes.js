import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signin from "../auth/signin";
import Error400 from "../pages/errors/error400";
import Error404 from "../pages/errors/error404";
import Error500 from "../pages/errors/error500";

import Maintenance from "../pages/maintenance";

import Login from "../pages/authentication/login";
import Register from "../pages/authentication/register";
import Forgetpwd from "../pages/authentication/forgetpwd";

import Comingsoon from "../pages/comingSoon/comingsoon";
import ComingsoonVideo from "../pages/comingSoon/comingsoonVideo";
import ComingsoonImg from "../pages/comingSoon/comingsoonImg";

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path={`${process.env.PUBLIC_URL}/login`} element={Signin} />
            <Route
                path={`${process.env.PUBLIC_URL}/pages/error-400`}
                element={Error400}
            ></Route>
            <Route
                path={`${process.env.PUBLIC_URL}/pages/error-404`}
                element={Error404}
            ></Route>
            <Route
                path={`${process.env.PUBLIC_URL}/pages/error-500`}
                element={Error500}
            ></Route>

            <Route
                path={`${process.env.PUBLIC_URL}/pages/maintenance`}
                element={Maintenance}
            ></Route>

            <Route
                path={`${process.env.PUBLIC_URL}/pages/login`}
                element={Login}
            ></Route>
            <Route
                path={`${process.env.PUBLIC_URL}/pages/register`}
                element={Register}
            ></Route>
            <Route
                path={`${process.env.PUBLIC_URL}/pages/forget-password`}
                element={Forgetpwd}
            ></Route>

            <Route
                path={`${process.env.PUBLIC_URL}/pages/comingsoon`}
                element={Comingsoon}
            ></Route>
            <Route
                path={`${process.env.PUBLIC_URL}/pages/comingsoon-bg-image`}
                element={ComingsoonImg}
            ></Route>
            <Route
                path={`${process.env.PUBLIC_URL}/pages/comingsoon-bg-video`}
                element={ComingsoonVideo}
            ></Route>
        </Routes>
    )
}

export default AuthRoutes;
