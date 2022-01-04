import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from '../pages/home/Homepage';
import Testpage from '../pages/Testpage';

const MainRouting = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Homepage/>} />
                <Route path="test" element={<Testpage />} />
            </Route>
        </Routes>
    )
}

export default MainRouting
