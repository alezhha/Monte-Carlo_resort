import React from "react";
import { Pannellum } from "pannellum-react";
import { Link } from "react-router-dom";
import { ROOMS } from "../rooms.jsx";

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
              <svg
                className="f-f-m-b-h-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ebc42f"
                  d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93c0 3.21-1.92 6-4.72 7.28L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76 22 12c0-5.18-3.95-9.45-9-9.95M11 2c-1.95.2-3.8.96-5.32 2.21L7.1 5.63A8.195 8.195 0 0 1 11 4V2M4.2 5.68C2.96 7.2 2.2 9.05 2 11h2c.19-1.42.75-2.77 1.63-3.9L4.2 5.68M6 8v2h3v1H8c-1.1 0-2 .9-2 2v3h5v-2H8v-1h1c1.11 0 2-.89 2-2v-1a2 2 0 0 0-2-2H6m6 0v5h3v3h2v-3h1v-2h-1V8h-2v3h-1V8h-2M2 13c.2 1.95.97 3.8 2.22 5.32l1.42-1.42A8.21 8.21 0 0 1 4 13H2m5.11 5.37l-1.43 1.42A10.04 10.04 0 0 0 11 22v-2a8.063 8.063 0 0 1-3.89-1.63Z"
                />
              </svg>
              <div className="f-f-m-b-h-container">
                <h1 className="f-f-m-b-h-c-header">
                  Ресторан, открытый 24 часа в сутки
                </h1>
                <p className="f-f-m-b-h-c-text">
                  Наш ресторан Monte-Carlo открыт всё время вашего прибывания у
                  нас!
                </p>
              </div>
            </div>
            <div className="f-f-m-b-holder">
              <svg
                className="f-f-m-b-h-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ebc42f"
                  d="m12 21l3.6-4.8c-1-.75-2.25-1.2-3.6-1.2s-2.6.45-3.6 1.2L12 21m0-18C7.95 3 4.21 4.34 1.2 6.6L3 9c2.5-1.88 5.62-3 9-3s6.5 1.12 9 3l1.8-2.4C19.79 4.34 16.05 3 12 3m0 6c-2.7 0-5.19.89-7.2 2.4l1.8 2.4C8.1 12.67 9.97 12 12 12c2.03 0 3.9.67 5.4 1.8l1.8-2.4C17.19 9.89 14.7 9 12 9Z"
                />
              </svg>
              <div className="f-f-m-b-h-container">
                <h1 className="f-f-m-b-h-c-header">
                  Бесплатный Wi-Fi по всему отелю
                </h1>
                <p className="f-f-m-b-h-c-text">
                  Вы можете использовать его когда Вам угодно и где Вам угодно!
                </p>
              </div>
            </div>
            <div className="f-f-m-b-holder">
              <svg
                className="f-f-m-b-h-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ebc42f"
                  d="M16 17v2H2v-2s0-4 7-4s7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.39 3.39 0 0 0-1.93.59a5 5 0 0 1 0 5.82A3.39 3.39 0 0 0 15 11a3.5 3.5 0 0 0 0-7Z"
                />
              </svg>
              <div className="f-f-m-b-h-container">
                <h1 className="f-f-m-b-h-c-header">
                  Отзывчивый и приветливый персонал
                </h1>
                <p className="f-f-m-b-h-c-text">
                  Наши сотрудники отеля - настоящие профессионалы своего дела!
                </p>
              </div>
            </div>
            <div className="f-f-m-b-holder">
              <svg
                className="f-f-m-b-h-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ebc42f"
                  d="M21 4c-.6 0-3.6 1.5-9 1.5C6.7 5.5 3.5 4 3 4s-1 .4-1 1v14c0 .6.5 1 1 1c.6 0 3.5-1.5 9-1.5c5.4 0 8.4 1.5 9 1.5c.5 0 1-.4 1-1V5c0-.6-.5-1-1-1m-1 13.6c-2-.6-4.6-1.1-8-1.1c-3.4 0-6 .5-8 1.1V6.4c2.6.7 5.3 1.1 8 1.1c3.4 0 6-.5 8-1.1v11.2M9.2 11l-3.7 4.4c2-.3 4.2-.4 6.5-.4s4.5.1 6.5.4L14 10l-2.8 3.4l-2-2.4Z"
                />
              </svg>
              <div className="f-f-m-b-h-container">
                <h1 className="f-f-m-b-h-c-header">
                  Великолепный вид со всех сторон отеля
                </h1>
                <p className="f-f-m-b-h-c-text">
                  Наслаждайтесь природой города Джалал-Абад из любой точки
                  обзора!
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
            {ROOMS.map((room) => (
              <li className="r-f-m-blocks">
                <Pannellum
                  autoLoad
                  showControls={false}
                  autoRotate={-5}
                  image={room.pannellum}
                  yaw={room.yaw}
                />

                <div className="r-f-m-b-container">
                  <h1 className="r-f-m-b-c-header">{room.title}</h1>
                  <p className="r-f-m-b-c-description">
                    Хорош для {room.people} человек
                  </p>
                  <p className="r-f-m-b-c-price">${room.price}</p>
                  <p className="r-f-m-b-c-text">{room.description}</p>
                  <Link to="/404" className="r-f-m-b-c-button">
                    Забронировать
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Rooms;
