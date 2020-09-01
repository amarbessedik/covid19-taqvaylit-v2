import React from 'react';
import styles from './Links.module.css';

const Links = ({ dflex, links }) => {
    const d_flex={
        flexDirection: dflex
    }

    return (
      <div className={styles.links}>
        <ul style={d_flex}>
          {links.map((link, i) => (
            <li className={dflex === 'column' ? `${styles.list__item}` : null} key={i}>
              <a href={link.id}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Links;
