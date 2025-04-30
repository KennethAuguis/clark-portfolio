import React, { useState, useRef } from "react";
import './Navbar.css';
import clarki3 from '../../assets/clarki3.png'; // Logo image
import line3 from '../../assets/line3.png'; // Line image for active indicator
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.png'// Hamburger menu icon
import menu_close from '../../assets/menu_close.png'; // Exit icon for mobile menu

const Navbar = () => {

    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right="0px"
    }
    const closeMenu = () => {
        menuRef.current.style.right="-350px"
    }

    return (
        <div className='navbar'>
             <div className='navbar1'>
            <img src={clarki3} alt='Clarki logo' />
            </div>
            <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open'/>
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-exit'/>
                <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" && <img src={line3} alt="active menu indicator line" className="line-img"/>}
                </li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About</p></AnchorLink>{menu === "about" && <img src={line3} alt="active menu indicator line" className="line-img"/>}
                </li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu === "services" && <img src={line3} alt="active menu indicator line" className="line-img"/>}
                </li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("work")}>My Work</p></AnchorLink>{menu === "work" && <img src={line3} alt="active menu indicator line" className="line-img"/>}
                </li> 
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" && <img src={line3} alt="active menu indicator line" className="line-img" />}
                </li>
            </ul>
            <button className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></button>
        </div>
    );
}

export default Navbar;
