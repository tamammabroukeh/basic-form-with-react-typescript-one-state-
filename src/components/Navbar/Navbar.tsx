import { IProps } from "../../interfaces/interfaces";
import classes from "./Navbar.module.scss";
import React from "react";

const Navbar: React.FC<IProps> = ({
  aboutTxt,
  company,
  isLoggedIn: loginTxt,
  setIsLoggedIn: setLoginTxt,
}) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="#">{company}</a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">{aboutTxt}</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <button type="submit" onClick={() => setLoginTxt(!loginTxt)}>
            {loginTxt ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
