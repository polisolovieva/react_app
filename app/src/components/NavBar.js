import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import AuthContext from "../context/context";

const NavBar = () => {
    const [menuActive, setMenuActive] = useState( false);
    const {auth,setAuth} = useContext(AuthContext);
    const links = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'Users',
            link: '/users',
        },
        {
            name: 'Post',
            link: '/posts',
        },
        {
            name: 'Photos',
            link: '/photos',
        },
    ]

    const toggleMenu = () => {
      setMenuActive(!menuActive);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">LOGO</a>
                <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => setMenuActive(true)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-end ${menuActive ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        {links.map((link, index) =>
                            <li key={index} className="nav-item">
                                <Link
                                    to={link.link}
                                    className="nav-link"
                                    onClick={toggleMenu}
                                >
                                    {link.name}</Link>
                            </li>
                        )};

                    </ul>
                </div>
                {auth ?
                    <button className="btn btn-outline-secondary" onClick={()=>setAuth(false)}>Log Out</button>
                    : ""}
            </div>
        </nav>
    );
};

export default NavBar;