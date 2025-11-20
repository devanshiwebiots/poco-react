import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from '..';
import { routes } from './layouts-routes';

const Layout = () => {

    return (
        <>
            <Routes>
                {routes.map(({ path, Component }, i) => (
                    <Route element={<AppLayout />} key={i}>
                        <Route path={path} element={Component} />
                    </Route>
                ))}
            </Routes>
        </>
    );
};

export default Layout;