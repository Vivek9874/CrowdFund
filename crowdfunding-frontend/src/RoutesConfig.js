// RoutesConfig.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Home from "./Pages/Home";
import RiseNow from "./Pages/RiseNow";
import FundraiserForm from "./Pages/FundraiserForm";

const RoutesConfig = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/RiseNow" element={<RiseNow />} />
            <Route path="/RaiserForm" element={<FundraiserForm/>}/>
            {/* Add more routes as needed */}
        </Routes>
    );
}

export default RoutesConfig;
