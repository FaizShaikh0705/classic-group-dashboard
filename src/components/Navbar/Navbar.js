import React, { useContext } from 'react';
import './Navbar.css';
import ClassicLogo from '../../assets/logo2.jpg';
import fire from '../../config/Fire';

const Navbar = () => {


    return (
        <div className="container-fluid">

            <nav className="navbar navbar-light bg-blue fixed-top bg-border-btm">
                <div className="text-center Usericon">
                    <img src={ClassicLogo} width="230" height="70" alt="icon" />
                </div>
                <div className="nav-sign-out">
                    <a className="nav-signout text-primary" onClick={() => fire.auth().signOut()}><i className="fas fa-power-off pr-3"></i><small>Sign-Out</small></a>
                </div>
            </nav>

        </div>
    );
}



export default Navbar;