import React from 'react';
import Header from "./Header.jsx";
import {Navbar} from "rsuite";
import Logo from "./Logo.jsx";

const Masterlayout = (props) => {
    return (
        <div>
            <Logo/>
            <Header/>
            {props.children}
        </div>
    )
};

export default Masterlayout;