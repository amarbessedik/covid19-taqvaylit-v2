import React from "react";
import styles from "./ShareButtons.module.css";

const ShareButtons = () => {
  return (
    // <!-- I got these buttons from simplesharebuttons.com -->
    <div className={styles.share__buttons}>
      {/* <!-- Twitter --> */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/twitter.png"
          alt="Twitter"
        />
      </a>

      {/* <!-- Facebook --> */}
      <a
        href="http://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/facebook.png"
          alt="Facebook"
        />
      </a>

      {/* <!-- LinkedIn --> */}
      <a
        href="http://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/linkedin.png"
          alt="LinkedIn"
        />
      </a>

      {/* <!-- Reddit --> */}
      <a
        href="http://reddit.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/reddit.png"
          alt="Reddit"
        />
      </a>
    </div>
  );
};

export default ShareButtons;
