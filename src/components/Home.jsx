import { useEffect } from "react";
import "../components-css/home.css";

export default function Home(props) {
  // useEffect(() => {
  //   console.log(props);
  // });

  return (
    <div className="home">
      <h1>Home</h1>
      {props.images ? (
        <img className="home--banner-one" src={props.images[0].ImageUrl} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
