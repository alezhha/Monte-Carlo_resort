import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Pannellum } from "pannellum-react";

const Room = (props) => {
  const location = useLocation();
  const room = location.state.room;
  console.log(room);
  return (
    <div className="room">
      <li className="r-f-m-blocks">
        <div className="r-f-m-b-container" style={{ marginBottom: "40px" }}>
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
        <img src={room.image} className="r-img" alt={room.title} />
      </li>
      <div className="g-c-grid">
          <Pannellum
            id="g-c-g-img1"
            image={room.pannellum[0]}
            autoLoad
            yaw={room.yaw[0]}
            showControls={false}
            autoRotate={-5}
            hfov={150}
          />
          <Pannellum
            id="g-c-g-img2"
            image={room.pannellum[1]}
            autoLoad
            yaw={room.yaw[1]}
            showControls={false}
            autoRotate={-5}
            hfov={150}
          />
          <Pannellum
            id="g-c-g-img3"
            image={room.pannellum[2]}
            autoLoad
            yaw={room.yaw[2]}
            showControls={false}
            autoRotate={-5}
            hfov={150}
          />
        </div>
    </div>
  );
};

export default Room;
