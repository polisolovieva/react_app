import React from 'react';
import {Routes, Route} from "react-router-dom";
import App from "../App";
import Users from "../pages/Users/Users";
import Counter from "./Counter/Counter";
import Posts from "../pages/Posts/Posts";
import UserEdit from "../pages/Users/UserEdit";
import NotFound from "../pages/NotFound";


const AppRouter = () => {
    return (
            <Routes>
                <Route path='/' element={<Users/>}/>
                <Route path='/users' element={<Users/>}/>
                <Route path='/users/:id' element={<UserEdit/>}/>
                <Route path='/counter' element={<Counter/>}/>
                <Route path='/posts' element={<Posts/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>

    );
};

export default AppRouter;