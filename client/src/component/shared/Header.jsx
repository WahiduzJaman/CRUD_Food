import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <ul className="nav flex-column side_nav">
            <li  className="nav-item">
                <Link style={{color:"#A6ABC8", padding:"0"}} className="nav-link" to="/">MENU</Link>
            </li>
            <li className="nav-item d-flex align-items-center">
                <i style={{color:"#A6ABC8"}} className="bi bi-cart4"></i>
                <Link style={{color:"#A6ABC8"}} className="nav-link" to='/create'>Create Food</Link>
            </li>
            <li className="nav-item d-flex align-items-center">
                <i style={{color:"#A6ABC8"}} className="bi bi-card-checklist"></i>
                <Link style={{color:"#A6ABC8"}} className="nav-link" to='/'>All Foods</Link>
            </li>
        </ul>
    );
};

export default Header;