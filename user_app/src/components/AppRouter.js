import React from 'react';
import {Routes, Route} from "react-router-dom";
import App from "../App";
import Users from "../pages/Users/Users";
import Counter from "./Counter/Counter";


const AppRouter = () => {
    return (
            <Routes>
                <Route path='/' element={<Users/>}/>
                <Route path='/users' element={<Users/>}/>
                <Route path='/counter' element={<Counter/>}/>
            </Routes>

    );
};

export default AppRouter;