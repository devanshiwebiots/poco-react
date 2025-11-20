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
            <Route path={`/login`} element={Signin} />
            <Route
                path={`/pages/error-400`}
                element={Error400}
            ></Route>
            <Route
                path={`/pages/error-404`}
                element={Error404}
            ></Route>
            <Route
                path={`/pages/error-500`}
                element={Error500}
            ></Route>

            <Route
                path={`/pages/maintenance`}
                element={Maintenance}
            ></Route>

            <Route
                path={`/pages/login`}
                element={Login}
            ></Route>
            <Route
                path={`/pages/register`}
                element={Register}
            ></Route>
            <Route
                path={`/pages/forget-password`}
                element={Forgetpwd}
            ></Route>

            <Route
                path={`/pages/comingsoon`}
                element={Comingsoon}
            ></Route>
            <Route
                path={`/pages/comingsoon-bg-image`}
                element={ComingsoonImg}
            ></Route>
            <Route
                path={`/pages/comingsoon-bg-video`}
                element={ComingsoonVideo}
            ></Route>
        </Routes>
    )
}

export default AuthRoutes;
