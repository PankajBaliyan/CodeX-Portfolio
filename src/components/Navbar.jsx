import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <header className="header-area">
            <div className="container">
                <div className="gx-row d-flex align-items-center justify-content-between">
                    <Link className="logo" to="/">
                        <svg
                            width="100"
                            height="40"
                            viewBox="0 0 370 132.33255242168946"
                            className="css-1j8o68f"
                        >
                            <defs id="SvgjsDefs3411"></defs>
                            <g
                                id="SvgjsG3412"
                                featurekey="symbolFeature-0"
                                transform="matrix(2.309468659400946,0,0,2.309468659400946,-17.09006169237226,-9.699775637671092)"
                                fill="#000000"
                            >
                                <path
                                    xmlns="http://www.w3.org/2000/svg"
                                    d="M12.2,46.4c-2.7,1.2-4.7,4-4.7,7.2c0,4.4,3.6,7.9,7.9,7.9c4.4,0,7.9-3.6,7.9-7.9c0-3.2-1.9-6-4.7-7.2v-13  c4.3,3.7,10.4,6.2,17,6.4c1.2,2.8,4,4.7,7.2,4.7c4.4,0,7.9-3.6,7.9-7.9c0-4.4-3.6-7.9-7.9-7.9c-3.2,0-5.9,1.9-7.2,4.6  c-9.2-0.4-17.1-6.2-17.1-12.9v-1.1c2.7-1.2,4.7-4,4.7-7.2c0-4.4-3.6-7.9-7.9-7.9c-4.4,0-7.9,3.6-7.9,7.9c0,3.2,1.9,6,4.7,7.2v5.1  l0-4 M11.6,12.1c0-2.2,1.8-3.9,3.9-3.9c2.2,0,3.9,1.8,3.9,3.9c0,2.2-1.8,3.9-3.9,3.9C13.3,16,11.6,14.2,11.6,12.1z M19.4,53.6  c0,2.2-1.8,3.9-3.9,3.9c-2.2,0-3.9-1.8-3.9-3.9c0-2.2,1.8-3.9,3.9-3.9C17.6,49.7,19.4,51.4,19.4,53.6z M43,40.5  c-2.2,0-3.9-1.8-3.9-3.9c0-2.2,1.8-3.9,3.9-3.9c2.2,0,3.9,1.8,3.9,3.9C46.9,38.7,45.1,40.5,43,40.5z"
                                ></path>
                            </g>
                            <g
                                id="SvgjsG3413"
                                featurekey="nameFeature-0"
                                transform="matrix(4.0531776712559715,0,0,4.0531776712559715,120,-38.36833926215294)"
                                fill="#5a77f6"
                            >
                                <path d="M5.36 39.92 c-2.96 0 -5.36 -2.4 -5.36 -5.36 l0 -17.76 c0 -2.96 2.4 -5.36 5.36 -5.36 s5.36 2.4 5.36 5.36 l0 1.6 l-3.8 0 l0 -1.6 c0 -0.84 -0.72 -1.56 -1.56 -1.56 s-1.56 0.72 -1.56 1.56 l0 17.76 c0 0.84 0.72 1.56 1.56 1.56 s1.56 -0.72 1.56 -1.56 l0 -2.56 l3.8 0 l0 2.56 c0 2.96 -2.4 5.36 -5.36 5.36 z M18.12 40.04 c-3 0 -5.4 -2.44 -5.4 -5.4 l0 -11.88 c0 -2.96 2.4 -5.4 5.4 -5.4 c2.96 0 5.36 2.44 5.36 5.4 l0 11.88 c0 2.96 -2.4 5.4 -5.36 5.4 z M18.12 21.2 c-0.88 0 -1.56 0.72 -1.56 1.56 l0 11.88 c0 0.88 0.68 1.56 1.56 1.56 c0.84 0 1.56 -0.68 1.56 -1.56 l0 -11.88 c0 -0.84 -0.72 -1.56 -1.56 -1.56 z M36.24 11.440000000000001 l0 28.6 l-5.96 0 c-2.64 0 -4.8 -2.12 -4.8 -4.8 l0 -13.08 c0 -2.64 2.16 -4.8 4.8 -4.8 l2.12 0 l0 -5.92 l3.84 0 z M32.4 21.16 l-2.12 0 c-0.56 0 -1 0.44 -1 1 l0 13.08 c0 0.56 0.44 1 1 1 l2.12 0 l0 -15.08 z M43.440000000000005 39.92 c-2.88 0 -5.2 -2.36 -5.2 -5.24 l0 -12.48 c0 -2.64 2.16 -4.8 4.8 -4.8 l0.84 0 c2.64 0 4.8 2.16 4.8 4.8 l0 5.24 l-6.72 0.12 l0 7.12 c0 0.84 0.64 1.52 1.48 1.52 s1.52 -0.68 1.52 -1.52 l0 -2.48 l3.72 0 l0 2.48 c0 2.88 -2.36 5.24 -5.24 5.24 z M43.88 21.08 l-0.84 0 c-0.6 0 -1.08 0.52 -1.08 1.12 l0 1.68 l3 -0.08 l0 -1.6 c0 -0.6 -0.48 -1.12 -1.08 -1.12 z M61.68 11.440000000000001 l-3.8 14.32 l3.76 14.24 l-3.4 0 l-2.08 -7.84 l-2.04 7.84 l-3.4 0 l3.76 -14.24 l-3.8 -14.32 l3.4 0 l2.08 7.88 l2.12 -7.88 l3.4 0 z"></path>
                            </g>
                        </svg>
                    </Link>
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
