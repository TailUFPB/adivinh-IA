import React from "react";
import './App.css';
import { Link } from 'react-router-dom'
import TailLogo from "./assets/logo-tail.png";

function Nav() {
    const navStyle = {
        color: 'white'
    };

    return(
        <nav>
            <Link to="/">
            <img src={TailLogo} className = "logo" />
            </Link>
            <ul className="nav-links">
                <Link style={navStyle} to="/game">
                    <li>Game</li>
                </Link>
                <Link style={navStyle} to="/about">
                    <li>Quem Somos</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;