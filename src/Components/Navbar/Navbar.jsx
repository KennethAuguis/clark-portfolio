import React, { useState, useRef } from "react";
import './Navbar.css';
import clarki3 from '../../assets/clarki3.png';
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.png'// Hamburger menu icon
import menu_close from '../../assets/menu_close.png'; // Exit icon for mobile menu

function Navbar() {
    const menuRef = useRef(null);

    const openMenu = () => {
        if (menuRef.current) {
            menuRef.current.style.right = '0';
        }
    };

    const closeMenu = () => {
        if (menuRef.current) {
            menuRef.current.style.right = '-350px';
        }
    };

    return (
        <div className='navbar'>
            <div className='navbar1'>
                <img src={clarki3} alt='Clarki logo' />
            </div>
            <img src={menu_open} onClick={openMenu} alt='Open menu' className='nav-mob-open' />
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt='Close menu' className='nav-mob-exit' />
                <li>
                    <AnchorLink className='anchor-link' href='#home'>
                        <p>Home</p>
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#about'>
                        <p>About</p>
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#services'>
                        <p>Services</p>
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#work'>
                        <p>My Work</p>
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#certificate'>
                        <p>Certificates</p>
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                        <p>Contact</p>
                    </AnchorLink>
                </li>
            </ul>
            <button className="nav-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
            </button>
        </div>
    );
}

export default Navbar;
