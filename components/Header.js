import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  const x = 2;
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>
        You really dont want to do this on web dev simplified
      </p>

      <h1 className="title">
        <span>WebDev</span> News
      </h1>
      <style jsx>
        {`
          .title {
            color: ${x > 3 ? "red" : "blue"};
          }
        `}
      </style>
    </div>
  );
};

export default Header;
