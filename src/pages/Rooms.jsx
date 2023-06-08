import React from "react";
import Slider from "../components/Slider";
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
          <Slider />
        </div>
      </section>
    </>
  );
};

export default Rooms;
