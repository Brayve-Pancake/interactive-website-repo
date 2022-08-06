import "../components-css/linkButton.css";
import { Link } from "react-router-dom";

export default function LinkButton(props) {
  return (
    <div className="linkButton">
      <Link to={props.url}>{props.text}</Link>
    </div>
  );
}
