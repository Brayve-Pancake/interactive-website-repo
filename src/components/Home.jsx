import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "../components-css/swiperStyles.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import chairImage from "../assets/shutterstock_696636415.jpg";
import modelImage from "../assets/shutterstock_1302552622.jpg";
import LinkButton from "./LinkButton";
import "../components-css/home.css";

export default function Home(props) {
  return (
    <div className="home">
      <div className="home--c1">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          navigation={props.isDesktop}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="with-gradient">
            {props.images ? (
              <img
                className="home--banner-one"
                src={props.images[0].ImageUrl}
              />
            ) : (
              <p>Loading...</p>
            )}
          </SwiperSlide>
          <SwiperSlide className="with-gradient">
            {props.images ? (
              <img
                className="home--banner-one second"
                src={props.images[1].ImageUrl}
              />
            ) : (
              <p>Loading...</p>
            )}
          </SwiperSlide>
          <SwiperSlide className="with-gradient">
            {props.images ? (
              <img
                className="home--banner-one third"
                src={props.images[2].ImageUrl}
              />
            ) : (
              <p>Loading...</p>
            )}
          </SwiperSlide>
          <div className="home--overlay">
            <h1>Lorem ipsum dolor</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="home--contact">
              <LinkButton url="/contact" text="Contact us" />
            </div>
          </div>
        </Swiper>
      </div>

      <div className="home--c2">
        <div className="container-re-order">
          <div className="col1">
            <img className="home--banner-two" src={chairImage} />
          </div>
          <div className="home--c2-text col2">
            <h2 className="home--c2-title">
              Justo ipsum dolor sit amet, conture et
            </h2>
            <p className="home--c2-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Euismod nisi porta lorem mollis aliquam. Mattis rhoncus urna neque
              viverra justo nec. Dignissim sodales ut eu sem integer vitae.
              Varius vel pharetra vel turpis nunc.
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
            <div className="home--contact home--learn-more">
              <LinkButton url="/about" text="Learn more" />
            </div>
          </div>
        </div>
      </div>

      <div className="home--c3">
        <img className="home--banner-one c3" src={modelImage} />
        <div className="home--c3-overlay">
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod
            nisi porta lorem mollis aliquam. Mattis rhoncus urna neque viverra
            justo nec. Dignissim sodales ut eu sem integer vitae. Varius vel
            pharetra vel turpis nunc eget lorem dolor. Nisi illuminati porta
            lorem mollis aliquam. Dignissim sodales ut eu sem integer vitae.
          </p>
          <div className="home--contact c3">
            <LinkButton url="/" text="Log in" />
          </div>
        </div>
      </div>

      <div className="home--c4">
        <div className="home--c4-head">
          <h2>Dolor ipsum amet, lorem loreum non</h2>
          <h4>taria illuminati porta lorem mollis</h4>
        </div>
        <p>
          <span className="first-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod
            nisi porta lorem mollis aliquam. Mattis rhoncus urna neque viverra
            justo nec. Dignissim sodales ut eu sem integer vitae. Varius vel
            pharetra vel turpis nunc eget lorem dolor.
          </span>
          <br></br>
          <br></br>
          Eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod
          nisi porta lorem mollis aliquam. Mattis rhoncus urna neque viverra
          justo nec. Dignissim sodales ut eu sem integer vitae. Varius vel
          pharetra vel turpis nunc eget lorem dolor. Nisi illuminati porta lorem
          mollis aliquam. Dignissim sodales ut eu sem integer vitae. Nisi
          illuminati porta lorem mollis aliquam. Dignissim sodales ut eu sem
          integer vitae.
          <br></br>
          <br></br>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Euismod nisi porta lorem mollis
          aliquam. Mattis rhoncus urna neque viverra justo nec. Dignissim
          sodales ut eu sem integer vitae. Dignissim sodales ut eu sem integer
          vitae. Varius vel pharetra vel turpis nunc eget lorem dolor. Nisi
          illuminati porta lorem mollis aliquam. Dignissim sodales ut eu sem
          integer vitae. Nisi illuminati porta lorem mollis aliquam. Dignissim
          sodales ut eu sem integer vitae. Nisi illuminati porta lorem mollis
          aliquam. Dignissim sodales ut eu sem integer vitae.
        </p>
        <br></br>
        <div className="home--contact c4">
          <LinkButton url="/contact" text="Contact us" />
        </div>
      </div>
    </div>
  );
}
