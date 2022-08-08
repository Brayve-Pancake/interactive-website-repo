import "../components-css/about.css";
import chair from "../assets/shutterstock_696636415.jpg";

export default function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        <span className="about--bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          nisi temporibus sapiente, quos odit nemo.
        </span>
        <br></br>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
        architecto nesciunt, sint neque blanditiis inventore obcaecati iusto
        sunt nobis beatae reiciendis ea cum debitis odit error aliquid est
        quaerat eveniet ipsum consequatur excepturi?{" "}
        <a href="https://www.epicroadrides.com/" className="about--a">
          Beatae veniam magni nostrum!
        </a>{" "}
        Adipisci vero beatae, dicta magni illum, eveniet, non illo modi dolore
        ducimus vel.
        <br></br>
        <br></br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sunt cum
        vitae fugit doloremque dolore aspernatur sapiente fugiat dignissimos
        error minus veritatis! Quos reprehenderit a perspiciatis praesentium
        distinctio adipisci nam iure dolorum cum quidem! Nobis consequuntur,
        perspiciatis dignissimos consectetur ipsa incidunt mollitia consequatur
        neque numquam, sapiente, praesentium et. Consequuntur cumque commodi
        culpa quo dolorem doloribus corporis eum delectus animi odio!
        <br></br>
        <br></br>
        <img
          className="about--img"
          src={chair}
          alt="Office space with a comfortable orange chair"
        ></img>
        <br></br>
        Velit, sunt cum vitae fugit doloremque dolore aspernatur sapiente fugiat
        dignissimos error minus veritatis! Quos reprehenderit a perspiciatis
        praesentium distinctio adipisci nam iure dolorum cum quidem! Nobis
        consequuntur, perspiciatis dignissimos consectetur ipsa incidunt
        mollitia consequatur neque numquam, sapiente, praesentium et.
        Consequuntur cumque commodi culpa quo dolorem doloribus corporis eum
        delectus animi odio!
        <br></br>
        <br></br>
        <span className="about--ulist-title">
          Taria ipsum dolor amet consectetur:
        </span>
        <ul className="about--ulist">
          <li>
            <span>Dorem ipsum dolor, sit amet consectetur adipisicing.</span>
          </li>
          <li>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
          </li>
          <li>
            <span>Wolor sit amet consectetur adipisicing.</span>
          </li>
          <li>
            <span>Sorem ipsum dolor sit amet consectetur adipisicing.</span>
          </li>
        </ul>
        <br></br>
        Fugit doloremque dolore aspernatur sapiente fugiat dignissimos error
        minus veritatis! Quos reprehenderit a perspiciatis praesentium
        distinctio adipisci nam iure dolorum cum quidem! Nobis consequuntur,
        perspiciatis dignissimos consectetur ipsa incidunt mollitia consequatur
        neque numquam, sapiente, praesentium et. Consequuntur cumque commodi
        culpa quo dolorem doloribus corporis eum delectus animi odio!
        <br></br>
        <br></br>
        Doloremque dolore aspernatur sapiente fugiat dignissimos error minus
        veritatis! Quos reprehenderit a perspiciatis praesentium distinctio
        adipisci nam iure dolorum cum quidem! Nobis consequuntur, perspiciatis
        dignissimos consectetur ipsa incidunt mollitia consequatur neque
        numquam, sapiente, praesentium et. Consequuntur cumque commodi culpa quo
        dolorem doloribus corporis eum delectus animi odio! Consequuntur cumque
        commodi culpa quo dolorem doloribus corporis eum delectus animi odio!
        <br></br>
        <br></br>
      </p>
    </div>
  );
}
