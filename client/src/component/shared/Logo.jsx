import React from 'react';
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <nav className="navbar">
            <div className="container-fluid" style={{display: "block"}}>
                <i className="bi bi-google" style={{
                    backgroundColor: "#5A67BA",
                    padding: "10px",
                    borderRadius: "50%",
                    color: "white",
                    fontSize: "13px"
                }}></i>
                <Link className="navbar-brand" to="/" style={{color: "#5A67BA", marginLeft: "20px"}}>CRUD Food</Link>
            </div>
        </nav>
    );
};

export default Logo;