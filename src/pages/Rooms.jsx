import React from "react";
import standart from "../360img/standart.jpg";
import family from "../360img/family.jpg";
import lux from "../360img/lux.jpg";
import { Pannellum } from "pannellum-react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Rooms = () => {
  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    draggable: false,
    lazyLoad: true,
  };
  return (
    <>
      <section className="features">
        <div className="f-flexbox">
          <h1 className="f-f-header">Особенности нашего отеля</h1>
          <p className="f-f-text">
            Мы хотим чтобы наши гости чувствовали себя свободно и удобно в{" "}
            <span className="f-f-t-mark">Monte-Carlo Resort</span>{" "}
          </p>

          <div className="f-f-main">
            <div className="f-f-m-b-holder">
              <img
                src={require("../media/sectionFeaturesIcon.png")}
                alt=""
                className="f-f-m-b-h-icon"
              />
              <div className="f-f-m-b-h-container">
                <h1 className="f-f-m-b-h-c-header">
                  Лобби кафе-бар, открытый 24 часа в сутки
                </h1>
                <p className="f-f-m-b-h-c-text">
                  Lorem ipsum dolor sit omen. cheto cheto tam bebra krch
                </p>
              </div>
            </div>

            <div className="f-f-m-b-holder">
              <img
                src={require("../media/sectionFeaturesIcon.png")}
                alt=""
                className="f-f-m-b-h-icon"
              />
              <div className="f-f-m-b-h-container">
                <h1 className="f-f-m-b-h-c-header">
                  Лобби кафе-бар, открытый 24 часа в сутки
                </h1>
                <p className="f-f-m-b-h-c-text">
                  Lorem ipsum dolor sit omen. cheto cheto tam bebra krch
                </p>
              </div>
            </div>

            <div className="f-f-m-b-holder">
              <img
                src={require("../media/sectionFeaturesIcon.png")}
                alt=""
                className="f-f-m-b-h-icon"
              />

              <div className="f-f-m-b-h-container">
                <h1 className="f-f-m-b-h-c-header">
                  Лобби кафе-бар, открытый 24 часа в сутки
                </h1>
                <p className="f-f-m-b-h-c-text">
                  Lorem ipsum dolor sit omen. cheto cheto tam bebra krch
                </p>
              </div>
            </div>

            <div className="f-f-m-b-holder">
              <img
                src={require("../media/sectionFeaturesIcon.png")}
                alt=""
                className="f-f-m-b-h-icon"
              />

              <div className="f-f-m-b-h-container">
                <h1 className="f-f-m-b-h-c-header">
                  Лобби кафе-бар, открытый 24 часа в сутки
                </h1>
                <p className="f-f-m-b-h-c-text">
                  Lorem ipsum dolor sit omen. cheto cheto tam bebra krch
                </p>
              </div>
            </div>

            <div className="f-f-m-b-holder">
              <img
                src={require("../media/sectionFeaturesIcon.png")}
                alt=""
                className="f-f-m-b-h-icon"
              />

              <div className="f-f-m-b-h-container">
                <h1 className="f-f-m-b-h-c-header">
                  Лобби кафе-бар, открытый 24 часа в сутки
                </h1>
                <p className="f-f-m-b-h-c-text">
                  Lorem ipsum dolor sit omen. cheto cheto tam bebra krch
                </p>
              </div>
            </div>

            <div className="f-f-m-b-holder">
              <img
                src={require("../media/sectionFeaturesIcon.png")}
                alt=""
                className="f-f-m-b-h-icon"
              />

              <div className="f-f-m-b-h-container">
                <h1 className="f-f-m-b-h-c-header">
                  Лобби кафе-бар, открытый 24 часа в сутки
                </h1>
                <p className="f-f-m-b-h-c-text">
                  Lorem ipsum dolor sit omen. cheto cheto tam bebra krch
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rooms" id="rooms">
        <div className="r-flexbox">
          <div className="r-f-texts">
            <h1 className="r-f-t-header">Наши номера</h1>
            <p className="r-f-t-text">
              Мы предлагаем вам выбрать один из трёх типов наших гостевых
              номеров. Во всех них есть вай-фай и ванная.
            </p>
          </div>
          <ul className="r-f-main">
            <li className="r-f-m-blocks">
              <Slider {...settings}>
                <Pannellum
                  autoLoad
                  showControls={false}
                  autoRotate={-5}
                  image={standart}
                  yaw={180}
                />
                <Pannellum
                  autoLoad
                  showControls={false}
                  autoRotate={-5}
                  image={lux}
                />
              </Slider>

              <div className="r-f-m-b-container">
                <h1 className="r-f-m-b-c-header">Стандартный номер</h1>
                <p className="r-f-m-b-c-description">Хорош для 2-3 человек</p>
                <p className="r-f-m-b-c-price">$60</p>
                <p className="r-f-m-b-c-text">
                  Отличный стандартный номер для проживания самому или с второй
                  половиной.
                </p>
                <Link to="/404" className="r-f-m-b-c-button">
                  Забронировать
                </Link>
              </div>
            </li>
            <li className="r-f-m-blocks">
              <Slider>
                <Pannellum
                  autoLoad
                  showControls={false}
                  autoRotate={-5}
                  image={family}
                  yaw={30}
                />
                <Pannellum
                  autoLoad
                  showControls={false}
                  autoRotate={-5}
                  image={standart}
                  yaw={180}
                />
              </Slider>

              <div className="r-f-m-b-container">
                <h1 className="r-f-m-b-c-header">Семейный номер</h1>
                <p className="r-f-m-b-c-description">Хорош для 2-4 человек</p>
                <p className="r-f-m-b-c-price">$60</p>
                <p className="r-f-m-b-c-text">
                  Отличный вариант для небольшой семьи из двух детей и
                  родителей.
                </p>
                <Link to="/404" className="r-f-m-b-c-button">
                  Забронировать
                </Link>
              </div>
            </li>
            <li className="r-f-m-blocks">
              <Slider>
                <Pannellum
                  autoLoad
                  showControls={false}
                  autoRotate={-5}
                  image={lux}
                />
                <Pannellum
                  autoLoad
                  showControls={false}
                  autoRotate={-5}
                  image={standart}
                  yaw={180}
                />
              </Slider>

              <div className="r-f-m-b-container">
                <h1 className="r-f-m-b-c-header">Люксовый номер</h1>
                <p className="r-f-m-b-c-description">Хорош для 1-2 человек</p>
                <p className="r-f-m-b-c-price">$60</p>
                <p className="r-f-m-b-c-text">
                  Номер для экстренного ощущения комфорта и роскоши.
                </p>
                <Link to="/404" className="r-f-m-b-c-button">
                  Забронировать
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Rooms;
