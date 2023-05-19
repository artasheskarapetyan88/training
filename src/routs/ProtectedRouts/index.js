import React from 'react';
import Cookies from "js-cookie";
import {Navigate, Outlet} from "react-router-dom";
import LayoutAfterLogin from "../../components/Layout"

const ProtectedRout = () => {
    return Cookies.get("Token") ? < LayoutAfterLogin><Outlet/></LayoutAfterLogin> : <Navigate to="/"/>
};

export default ProtectedRout;