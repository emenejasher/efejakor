import React from "react";
import {Nav, NavLink, NavMenu} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavMenu>
                <NavLink to= "/index" activeStyle>
                    Home
                </NavLink>
                <NavLink to= "/services" activeStyle>
                    Services</NavLink>
                        <NavLink to= "/projects" activeStyle>
                            Recent Jobs
                            </NavLink>
                            <NavLink to= "/contact" activeStyle>
                        Contact Us </NavLink>
                                </NavMenu>
                                </Nav>
                                </>
    );
};

export default Navbar;