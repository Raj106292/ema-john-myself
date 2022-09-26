import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navigation">
                <div className="container">
                    <img src={logo} alt="" />
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <div className="d-flex option">
                            <a href="/home">Home</a>
                            <a href="/shop">Shop</a>
                            <a href="/review">Order Review</a>
                            <a href="/inventory">Manage Inventory</a>
                            <a href="/login">Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;