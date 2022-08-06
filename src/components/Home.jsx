import { useEffect } from "react";
import "../components-css/home.css";
import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";

export default function Home(props) {
  // useEffect(() => {
  //   console.log(props);
  // });

  return (
    <div className="home">
      <div className="home--c1 home--banner">
        {props.images ? (
          <img className="home--banner-one" src={props.images[0].ImageUrl} />
        ) : (
          <p>Loading...</p>
        )}
        <div className="home--overlay">
          <h1>Lorem ipsum dolor</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <LinkButton url="/contact" text="Contact us" />
        </div>
      </div>

      <div className="home--c2 home--banner">
        {props.images ? (
          <img className="home--banner-two" src={props.images[1].ImageUrl} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="home--c3">
        {props.images ? (
          <img className="home--banner-one" src={props.images[2].ImageUrl} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="home--c4"></div>
    </div>
  );
}
