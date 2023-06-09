import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Pannellum } from "pannellum-react";
import { useTranslation } from "react-i18next";
import { Slide } from "react-reveal";

const Room = () => {
  const location = useLocation();
  const room = location.state.room;
  const {t} = useTranslation()
  return (
    <div className="room">
      <li className="r-f-m-blocks">
        <div className="r-f-m-b-container" style={{ marginBottom: "40px" }}>
          <h1 className="r-f-m-b-c-header">{t(room.title)}</h1>
          <p className="r-f-m-b-c-description">
            {t("roomPeople1")} {room.people} {t("roomPeople2")}
          </p>
          <p className="r-f-m-b-c-price">${room.price}/24{t("roomPrice")}</p>
          <p className="r-f-m-b-c-text">{t(room.description)}</p>
          <Link to="/404" className="r-f-m-b-c-button">{t("bookingButton")}</Link>
        </div>
        <img src={room.image} loading="lazy" className="r-img" alt={t(room.description)} />
      </li>
      <Slide right>
      <div className="g-c-grid">
          <Pannellum
            id="g-c-g-img1"
            image={room.pannellum[0]}
            autoLoad
            yaw={room.yaw[0]}
            showControls={false}
            autoRotate={-5}
            hfov={150}
            lazyLoad
          />
          <Pannellum
            id="g-c-g-img2"
            image={room.pannellum[1]}
            autoLoad
            yaw={room.yaw[1]}
            showControls={false}
            autoRotate={-5}
            hfov={150}
            lazyLoad
          />
          <Pannellum
            id="g-c-g-img3"
            image={room.pannellum[2]}
            autoLoad
            yaw={room.yaw[2]}
            showControls={false}
            autoRotate={-5}
            hfov={150}
            lazyLoad
          />
      </div>
      </Slide>
    </div>
  );
};

export default Room;
