import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="footer-content text-center">
                    <Link className="logo" to="/">
                        <img src="/assets/images/logo-dark.svg" alt="Logo" />
                    </Link>

                    <ul
                        data-in="#"
                        data-out="#"
                        className="footer-menu"
                        id="menu-footer-menu"
                    >
                        <li
                            id="menu-item-1856"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-13 current_page_item menu-item-1856 active"
                        >
                            <Link to="/">Home</Link>
                        </li>
                        <li
                            id="menu-item-1857"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1857"
                        >
                            <Link to="/about">About</Link>
                        </li>
                        <li
                            id="menu-item-1859"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1859"
                        >
                            <Link to="/project">Projects</Link>
                        </li>
                        <li
                            id="menu-item-1858"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1858"
                        >
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <p className="copyright">
                        © All rights reserved by <span>CodeWithPankaj</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
