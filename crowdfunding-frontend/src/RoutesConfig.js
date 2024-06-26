// RoutesConfig.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

const RoutesConfig = () => {
    return (
        <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            {/* Add more routes as needed */}
        </Routes>
    );
}

export default RoutesConfig;
