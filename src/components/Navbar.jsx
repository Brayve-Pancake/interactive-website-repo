import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <h1>Navbar</h1>
      {props.isDesktop && (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      )}
    </div>
  );
}
