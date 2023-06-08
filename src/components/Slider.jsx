import React from "react";
import ROOMS from "../ROOMS";
import { Link } from "react-router-dom";
import { Pannellum } from "pannellum-react";

const Slider = () => {
  return (
    <ul className="r-f-main">
      {ROOMS.map((room) => {
        return (
          <li className="r-f-m-blocks">
            {room.images.map((img) => {
              return (
                <Pannellum
                  image={img}
                  autoLoad
                  showControls={false}
                  autoRotate={-5}
                />
              );
            })}

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
        );
      })}
    </ul>
  );
};

export default Slider;
