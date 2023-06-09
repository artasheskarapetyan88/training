import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import Cookies from "js-cookie";
import LayoutAfterLogin from "../../components/Layout"

const ProtectedRout = () => {
    return Cookies.get("token") ? < LayoutAfterLogin><Outlet/></LayoutAfterLogin> : <Navigate to="/"/>
};

export default ProtectedRout;