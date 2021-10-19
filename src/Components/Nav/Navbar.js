import React, { useState } from 'react'
import { Link } from "react-router-dom";
import '../../index.css';
import "./Navbar.css"

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const data = [
        {
            title: "Company",
            path: "/",

            className: "nav-text",
        },
        {
            title: "Clients",
            path: "/Servicios",

            className: "nav-text",
        },

        {
            title: "Services",
            path: "/Portafolio",

            className: "nav-text",
        },
        {
            title: "Our Team",
            path: "/Quienes-somos",

            className: "nav-text",
        },
        {
            title: "Contact Us",
            path: "/Cotizar",

            className: "nav-text",
        },
    ];

    const showSidebar = () => {
        setSidebar(!sidebar);
    };

    return (
        <>

            <nav className="nav">
                <div className="bar">
                    <input type="checkbox" id="check" />
                    <label for="check" className="checkbtn">
                        {/*<FaBars className="menu-icon" size={28} onClick={showSidebar} />*/}
                    </label>
                    <Link to="/">
                        <img
                            src="Dark.svg"
                            className="nav-logo"
                            alt="logo"
                        />
                    </Link>

                    {/*<img
                    src="https://firebasestorage.googleapis.com/v0/b/punto-banana.appspot.com/o/Puntobanana%2FBANANA%20Texto.svg?alt=media&token=6b8c2ed2-9128-4f91-87d1-f30840d26136"
                    className="nav-logo-letras"
                />*/}


                    <ul className={sidebar ? "nav-ul nav-ul-hide" : "nav-ul"} >
                        <li className="nav-li">
                            <Link className="nav-a" to="/" onClick={showSidebar} >
                                Company
                            </Link>

                        </li>
                        <li className="nav-li">
                            <Link className="nav-a" to="/Servicios" onClick={showSidebar} >
                                Clients
                            </Link>
                        </li>
                        <li className="nav-li">
                            <Link className="nav-a" to="/Portafolio" onClick={showSidebar} >
                                Services
                            </Link>
                        </li>
                        <li className="nav-li">
                            <Link className="nav-a" to="/Quienes-somos" onClick={showSidebar} >
                                Our Team
                            </Link>
                        </li>
                        <li className="nav-li">
                            <Link className="nav-a" to="/Cotizar" onClick={showSidebar} >
                                Contact Us
                            </Link>
                        </li>
                    </ul>

                    <ul className="nav-social-ul">
                        <li className="nav-li">
                            <Link to="/">
                                <img
                                    src="facebook2.svg"
                                    className="face-logo"
                                    alt="face-logo"
                                />
                            </Link>
                        </li>

                        <li className="nav-li">
                            <Link to="/">
                                <img
                                    src="Whatsapp.svg"
                                    className="whats-logo"
                                    alt="whats-logo"
                                />
                            </Link>
                        </li>

                        <li className="nav-li">
                            <Link to="/">
                                <img
                                    src="Linkedin.svg"
                                    className="in-logo"
                                    alt="in-logo"
                                />
                            </Link>
                        </li>
                    </ul>

                 
                </div>
                <hr className="nav-hr" />
            </nav>


        </>

    );
}

export default Navbar
