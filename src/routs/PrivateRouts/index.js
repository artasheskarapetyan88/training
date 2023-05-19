import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRout = () => {
    return !Cookies.get("token") ? <Outlet/> : <Navigate to="/trainings"/>
};

export default ProtectedRout;