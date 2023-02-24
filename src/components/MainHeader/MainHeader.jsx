import React from "react";
import DropdownMenu from "./DropdownMenu";
import { useState, useRef } from "react";
import './MainHeader.css';


function MainHeader() {
    
    const [menuOpen, setMenuOpen] = useState(false);

    const menu = useRef();
    const dropdownRef = useRef();

    function closeMenu(e) {
        if (dropdownRef.current && menuOpen && !menu.current.contains(e.target)) {
            dropdownRef.current.className = "dropdown-container inactive";
            setMenuOpen(false);
            console.log(e.target) 
        }
    }
    document.addEventListener("mousedown", closeMenu);

    return (
        <header>
            <div className="header-logo">
                FREE <span className="header-logo-span">IMAGES</span>
            </div>
            <ul className="header-links">
                <li className="links-li"><a className="li-a" href="https://www.flickr.com/services/api/" target="_blank">API</a></li>
                <li className="links-li"><a className="li-a" href="https://github.com/alextsoi101" target="_blank">Github</a></li>
                <li className="menu-item"
                    ref={menu}
                >
                    <div onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="material-symbols-outlined menubtn">
                            menu
                        </span>
                    </div>
                    <div className={`dropdown-container ${menuOpen ? 'active' : 'inactive'}`}
                        ref={dropdownRef}
                    >
                        <DropdownMenu />
                    </div>
                </li>
            </ul>
        </header>
    );
}

export default MainHeader;