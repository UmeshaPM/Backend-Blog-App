import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
    return (
        <>
            <div id="navigation">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Sandelwood'>Sandelwood</Link></li>
                    <li><Link to='/Technology'>Technology</Link></li>
                    <li><Link to='/Fitness'>Fitness</Link></li>
                    <li><Link to='/Food'>Food</Link></li>
                    <li><Link to='/Tourism'>Tourism</Link></li>
                </ul>
            </div>
            <hr></hr>
        </>
    )
}

export default Navigation;