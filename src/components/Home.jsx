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
          <div className="home--contact">
            <LinkButton url="/contact" text="Contact us" />
          </div>
        </div>
      </div>

      <div className="home--c2 home--banner">
        {props.images ? (
          <img className="home--banner-two" src={props.images[1].ImageUrl} />
        ) : (
          <p>Loading...</p>
        )}
        <div className="home--c2-text">
          <h2 className="home--c2-title">
            Justo ipsum dolor sit amet, consectetur amet
          </h2>
          <p className="home--c2-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod
            nisi porta lorem mollis aliquam. Mattis rhoncus urna neque viverra
            justo nec. Dignissim sodales ut eu sem integer vitae. Varius vel
            pharetra vel turpis nunc.
          </p>
          <ul className="home--c2-ulist">
            <li className="home--c2-list">
              <span>Dolor sit amet consectetur adipisicing elit.</span>
            </li>
            <li className="home--c2-list">
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing neque.
              </span>
            </li>
            <li className="home--c2-list">
              <span>Mattis rhoncus urna neque viverra justo.</span>
            </li>
            <li className="home--c2-list">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elitusem.
              </span>
            </li>
          </ul>
          <div className="home--learn-more">
            <LinkButton url="/about" text="Learn more" />
          </div>
        </div>
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
