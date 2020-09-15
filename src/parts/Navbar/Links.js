import React from 'react';
import styles from './Links.module.css';
import TableChartIcon from "@material-ui/icons/TableChart";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import MoreIcon from "@material-ui/icons/More";
import DialpadIcon from "@material-ui/icons/Dialpad";
import MapIcon from "@material-ui/icons/Map";

const Links = ({ dflex, links }) => {
    const d_flex={
        flexDirection: dflex
    }

    const navLinkIcons = [
      <MapIcon className={styles.navLink__icon}/>,
      <DialpadIcon className={styles.navLink__icon}/>,
      <TableChartIcon className={styles.navLink__icon}/>,
      <MenuBookIcon className={styles.navLink__icon}/>,
      <MoreIcon className={styles.navLink__icon}/>,
    ];

    const cleanUrl = () => {
      window.history.pushState("object or string", "Page Title", "/");
    };

    return (
      <div className={styles.links}>
        <ul style={d_flex}>
          {links.map((link, i) => (
            <li
              onMouseLeave={cleanUrl}
              className={dflex === "column" ? `${styles.list__item}` : null}
              key={i}
            >
              {navLinkIcons[i]} <a href={link.id}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Links;
