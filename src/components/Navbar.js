import React, {useState} from "react";
import styles from "./Navbar.module.css";
import logo from '../images/logo.png';
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import MapIcon from "@material-ui/icons/Map";
import TimelineIcon from "@material-ui/icons/Timeline";
import PublicIcon from "@material-ui/icons/Public";
import InfoIcon from "@material-ui/icons/Info";
import MenuBookIcon from "@material-ui/icons/MenuBook";

function Navbar() {
  const [open, setOpen] = useState(false); 

  const openMenu = () =>{
    let side__menu = document.getElementById("side__menu");
    side__menu.style.transform = "translateX(0)";
    setOpen(true);
  }
  const closeMenu = () => {
    let side__menu = document.getElementById("side__menu");
    side__menu.style.transform = "translateX(100%)";
    setOpen(false);
  }

  const handleClick = (e) => {
    e.preventDefault();
    open? closeMenu():openMenu();
  };

  const cleanUrl = () =>{
    window.history.pushState("object or string", "Page Title", "/");    
  }
  return (
    <header id="top" className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">
          <img src={logo} alt="logo" />
          <div className={styles.logo__text}>
            <span>AMḌFAR AGREƔLAN</span>
            <span>N ANFAFAD AMAYNUT N CURUNA 19</span>
          </div>
        </a>
      </div>
      <ul className={styles.links}>
        <li>
          <MapIcon className={styles.link__icon} />
          <a onMouseLeave={cleanUrl} href="#map">
            TAGERTILT UMAḌAL
          </a>
        </li>
        <li>
          <PublicIcon className={styles.link__icon} />
          <a onMouseLeave={cleanUrl} href="#table">
            UṬṬUNEN
          </a>
        </li>
        <li>
          <TimelineIcon className={styles.link__icon} />
          <a onMouseLeave={cleanUrl} href="#amawal">
            TIMẒṚIT
          </a>
        </li>
        <li>
          <InfoIcon className={styles.link__icon} />
          <a onMouseLeave={cleanUrl} href="#about">
            ARNU ẒER
          </a>
        </li>
        <li onClick={closeMenu}>
          <MenuBookIcon className={styles.link__icon} />
          <a onMouseLeave={cleanUrl} href="#amawal">
            AMAWAL
          </a>
        </li>
      </ul>
      <div onClick={handleClick} className={styles.hamburger}>
        {open ? (
          <CloseIcon className={styles.bar} />
        ) : (
          <MenuIcon className={styles.bar} />
        )}
      </div>
      <div id="side__menu" className={styles.side__menu}>
        <ul className={styles.side__menu__links}>
          <li onClick={closeMenu}>
            <MapIcon className={styles.link__icon} />
            <a onMouseLeave={cleanUrl} href="#map">
              TAGERTILT UMAḌAL
            </a>
          </li>
          <li onClick={closeMenu}>
            <PublicIcon className={styles.link__icon} />
            <a onMouseLeave={cleanUrl} href="#table">
              UṬṬUNEN
            </a>
          </li>
          <li onClick={closeMenu}>
            <TimelineIcon className={styles.link__icon} />
            <a onMouseLeave={cleanUrl} href="#graph">
              TIMẒṚIT
            </a>
          </li>
          <li onClick={closeMenu}>
            <MenuBookIcon className={styles.link__icon} />
            <a onMouseLeave={cleanUrl} href="#amawal">
              AMAWAL
            </a>
          </li>
          <li onClick={closeMenu}>
            <InfoIcon className={styles.link__icon} />
            <a onMouseLeave={cleanUrl} href="#about">
              ARNU ẒER
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
