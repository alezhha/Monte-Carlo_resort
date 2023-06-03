import React from "react";
import { Link } from "react-router-dom";

const Rooms = () => {
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
              <img
                src={require("../media/sectionRoomsImg.png")}
                alt=""
                className="r-f-m-b-img"
              />

              <div className="r-f-m-b-container">
                <h1 className="r-f-m-b-c-header">
                  Стандартный номер
                </h1>
                <p className="r-f-m-b-c-description">Хорош для 2-3 человек</p>
                <p className="r-f-m-b-c-price">$20 - $45</p>
                <p className="r-f-m-b-c-text">
                  22-24 m2 (248 ft2)King size or  twin bedsBathroom is
                  equipped with a hairdryerFree high-speed
                  Internet accessSafe
                </p>
                <Link to="/404" className="r-f-m-b-c-button">Забронировать</Link>
              </div>
            </li>

            <li className="r-f-m-blocks">
              <img
                src={require("../media/sectionRoomsImg.png")}
                alt=""
                className="r-f-m-b-img"
              />

              <div className="r-f-m-b-container">
                <h1 className="r-f-m-b-c-header">
                  Стандартный номер
                </h1>
                <p className="r-f-m-b-c-description">Хорош для 2-3 человек</p>
                <p className="r-f-m-b-c-price">$20 - $45</p>
                <p className="r-f-m-b-c-text">
                  22-24 m2 (248 ft2)King size or twin bedsBathroom is
                  equipped with a hairdryerFree high-speed
                  Internet accessSafe
                </p>
                <Link to="/404" className="r-f-m-b-c-button">Забронировать</Link>
              </div>
            </li>

            <li className="r-f-m-blocks">
              <img
                src={require("../media/sectionRoomsImg.png")}
                alt=""
                className="r-f-m-b-img"
              />

              <div className="r-f-m-b-container">
                <h1 className="r-f-m-b-c-header">
                  Стандартный номер
                </h1>
                <p className="r-f-m-b-c-description">Хорош для 2-3 человек</p>
                <p className="r-f-m-b-c-price">$20 - $45</p>
                <p className="r-f-m-b-c-text">
                  22-24 m2 (248 ft2)King size or twin bedsBathroom is
                  equipped with a hairdryerFree high-speed
                  Internet accessSafe
                </p>{" "}
                <Link to="/404" className="r-f-m-b-c-button">Забронировать</Link>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Rooms;
