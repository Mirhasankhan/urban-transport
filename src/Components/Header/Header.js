import React from 'react';
import { Link } from 'react-router-dom';
import header from '../../Images/Bg.png';
import Home from '../Home/Home';
import './header.css';

const Header = () => {
    return (
        <div style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})`}} className="header">
            <div><h1 className="urban">Urban Transport</h1></div>
            <nav className="nav">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="destination">Destination</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/contant">Contant</Link>
                </li>
              <Link to="login"><button className="nav-button">Login</button></Link>
            </nav>
            <div>
                <Home></Home>
            </div>

        </div>
    );
};

export default Header;