import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <header className="header-area">
            <div className="container">
                <div className="gx-row d-flex align-items-center justify-content-between">
                    <Link className="logo" to="/">
                        <img src="/assets/images/logo-dark.svg" alt="Logo" />
                    </Link>

                    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}

                    <nav className="navbar">
                        <ul
                            data-in="#"
                            data-out="#"
                            className="menu"
                            id="menu-main-menu"
                        >
                            <li
                                id="menu-item-1850"
                                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-13 current_page_item menu-item-1850 ${
                                    props.activeTab === 'home' ? 'active' : ''
                                }`}
                            >
                                <Link to="/">Home</Link>
                            </li>
                            <li
                                id="menu-item-1851"
                                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-1851 ${
                                    props.activeTab === 'about' ? 'active' : ''
                                }`}
                            >
                                <Link to="/about">About</Link>
                            </li>
                            <li
                                id="menu-item-1853"
                                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-1853 ${
                                    props.activeTab === 'project'
                                        ? 'active'
                                        : ''
                                }`}
                            >
                                <Link to="/project">Project</Link>
                            </li>
                            <li
                                id="menu-item-1852"
                                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-1852 ${
                                    props.activeTab === 'contact'
                                        ? 'active'
                                        : ''
                                }`}
                            >
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <Link to="/contact" className="theme-btn">
                        Let&#039;s talk
                    </Link>

                    {/* <!-- End Navigation --> */}

                    <div className="show-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
}
