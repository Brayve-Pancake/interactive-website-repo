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
        <div className="home--c2-card">
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod
            nisi porta lorem mollis aliquam. Mattis rhoncus urna neque viverra
            justo nec. Dignissim sodales ut eu sem integer vitae. Varius vel
            pharetra vel turpis nunc eget lorem dolor. Mauris pharetra et
            ultrices neque. Urna molestie at elementum eu facilisis sed odio.
            Enim lobortis scelerisque fermentum dui faucibus. Ullamcorper eget
            nulla facilisi etiam dignissim diam quis enim lobortis. Pellentesque
            eu tincidunt tortor aliquam nulla. Tellus cras adipiscing enim eu
            turpis egestas pretium aenean pharetra. Arcu vitae elementum
            curabitur vitae nunc sed. Gravida rutrum quisque non tellus orci ac.
            Quam viverra orci sagittis eu volutpat odio facilisis mauris sit.
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
          </ul>
          <button>Learn more</button>
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
