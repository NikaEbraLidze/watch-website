import React, { useState, useEffect } from "react";
import Logo from "../../images/NEwatchlogo.png";
import SearchIcon from '@mui/icons-material/Search';
import MenuBarIcon from "../../images/menu-bar.png";
import "../../assets/style/style.css";
import Dropdown from "./Dropdown";
import MobileDropdown from "./MobileDropdown";
import { Link } from 'react-router-dom';


function Header() {
  const [showNavbar, setShowNavbar] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [dropdown1, setDropdown1] = React.useState(false);
  const [dropdown2, setDropdown2] = React.useState(false);
  const [dropdown3, setDropdown3] = React.useState(false);

  React.useEffect(() => {
    let lastScrollTop = 0;

    function handleScroll() {
      const currentScroll = window.scrollY;
      setShowNavbar(currentScroll <= lastScrollTop);
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
        <div className={`burgermenu ${showNavbar ? "show" : ""}`}>
            <div className="burgermenu-container"><Link to="/#welcome-section">
            <div className="namexlogo">
                <img src={Logo} alt="NEwatchlogo" />
                <h2>NEwatch</h2>
            </div> </Link>
            <div className="links">
                <Link to="/#welcome-section">HOME</Link>
                <Dropdown 
                  title="WATCHES" 
                  items={["Classic", "Sports", "Smartwatches", "Automatic", "Quartz", "Luxury"]} 
                  link="/watches#welcome-catalog"
                  />

                <Dropdown 
                  title="COMPANY" 
                  items={["History", "Mission & Vision", "Optional", "Why Choose Us"]} 
                  link="/aboutus#heading"
                  />

                <Dropdown 
                  title="CONTACT" 
                  items={["Contact", "Address", "FAQ", "Social Media"]} 
                  link="/contact#heading"
                  />

                {/* <SearchIcon className="addedIcons" /> */}
                <img
                src={MenuBarIcon}
                className="menubarmobile addedIcons"
                id="menubarmobile"
                alt="menu"
                onClick={() => setMenuOpen(!menuOpen)}
                />
            </div>
            </div>
        </div>

        <div className={`burgermenu-mobile ${menuOpen ? "show" : ""}`}>
          <div className="burgermenu-container-mobile">
            {/* <div className="burgermenu-container-mobile-row">
              <input type="text" placeholder="Search" />
              <SearchIcon className="mobileSearchIcon"/>
            </div> */}
            <div className="D-C-row">
              <Link to="/#welcome-section">HOME</Link>
            </div>
            <MobileDropdown
              title="WATCHES"
              items={["Classic", "Sports", "Smartwatches", "Automatic", "Quartz", "Luxury"]}
              isOpen={dropdown1}
              toggle={() => setDropdown1(!dropdown1)}
              link="/watches#welcome-catalog"
            />
            <MobileDropdown
              title="COMPANY"
              items={["History", "Mission & Vision", "Optional", "Why Choose Us"]}
              isOpen={dropdown2}
              toggle={() => setDropdown2(!dropdown2)}
              link="/aboutus#heading"
            />
            <MobileDropdown
              title="CONTACT"
              items={["Contact", "Address", "FAQ", "Social Media"]}
              isOpen={dropdown3}
              toggle={() => setDropdown3(!dropdown3)}
              link="/contact#heading"
            />
          </div>
        </div>
    </>
  );
};

export default Header;