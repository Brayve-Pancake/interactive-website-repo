import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import "../components-css/navbar.css";

export default function Navbar(props) {
  const isDesktop = props.isDesktop;

  return (
    <div className="navbar">
      {isDesktop ? (
        <img className="navbar--logo" src={logo} alt="Company logo" />
      ) : (
        <Link to="/">
          <img className="navbar--logo" src={logo} alt="Company logo" />
        </Link>
      )}
      {isDesktop && (
        <nav className="navbar--nav">
          <Link className="navbar--link" to="/">
            HOME
          </Link>
          <Link className="navbar--link" to="/about">
            ABOUT US
          </Link>
          <Link className="navbar--link" to="/contact">
            CONTACT US
          </Link>
          <button className="navbar--log-in">Log in</button>
        </nav>
      )}
    </div>
  );
}
