import logo from "../assets/default.svg";
import "../css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [navBarOpen, setNavBarOpen] = useState(false);

  function toggleNavBar() {
    setNavBarOpen((prevState) => !prevState);
  }

  return (
    <nav className="navbar-main" id="navbar-m">
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <ul className="nav-list" data-visible={navBarOpen}>
        <li className="nav-list-item">
          <NavLink to="/otherdetails">Find a Room-mate</NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink to="/findanapartment">Find an Apartment</NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink to="/propertyposting">Post a Property</NavLink>
        </li>
        <li className="nav-list-item">
          {!localStorage.getItem("token") ? (
            <NavLink to="/signup">SignUp/Login</NavLink>
          ) : (
            <NavLink to="/profile">Profile</NavLink>
          )}
        </li>
      </ul>
      <FontAwesomeIcon
        icon={navBarOpen ? faClose : faBars}
        className="hamburger"
        onClick={toggleNavBar}
      ></FontAwesomeIcon>
    </nav>
  );
}
