import React, {useContext} from 'react';
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import {privateRoutes, publicRoutes} from "../router/routes";
import {BrowserRouter as Router, Link, Routes, Route, Redirect} from "react-router-dom";
import { Navigate } from "react-router-dom";
import {AuthContext} from "../context/Auth";

const AppRoutes = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {
                !isAuth ?
                    <Routes>
                        {
                            publicRoutes.map((route) =>
                                <Route key={route.path} element={route.component} path={route.path} exact={route.exact} />
                            )
                        }
                        <Route
                            path="*"
                            element={<Navigate to="/login" replace />}
                        />
                    </Routes>
                    :
                    <Routes>
                        {
                            privateRoutes.map((route) =>
                                <Route key={route.path} element={route.component} path={route.path} exact={route.exact} />
                            )
                        }
                        <Route
                            path="*"
                            element={<Navigate to="/posts" replace />}
                        />
                    </Routes>
            }
        </div>
    );
};

export default AppRoutes;