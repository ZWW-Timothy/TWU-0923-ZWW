import React from "react"
import {NavLink} from 'react-router-dom';
import '../../styles/Header.css';

const Header = () => {
    return (
        <nav className="nav">        
            <NavLink to="/aboutUs" className="nav-link" exact activeStyle={{ textDecoration: "underline" }}>
                About Us
            </NavLink>
            <NavLink to="/myProfile" className="nav-link" exact activeStyle={{ textDecoration: "underline" }}>
                My Profile
            </NavLink>
            <NavLink to="/products" className="nav-link" activeStyle={{ textDecoration: "underline" }}>
                Products
            </NavLink>
            <NavLink to="/" className="nav-link" exact activeStyle={{ textDecoration: "underline" }}>
                Home
            </NavLink>
        </nav>
    )
};

export default Header;
