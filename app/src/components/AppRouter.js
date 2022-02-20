import React from 'react';
import {Routes, Route} from "react-router-dom";
import App from "../App";
import Users from "../pages/Users/Users";
import Counter from "./Counter/Counter";
import Posts from "../pages/Posts/Posts";


const AppRouter = () => {
    return (
            <Routes>
                <Route path='/users' element={<Users/>}/>
                <Route path='/counter' element={<Counter/>}/>
                <Route path='/posts' element={<Posts/>}/>
            </Routes>

    );
};

export default AppRouter;