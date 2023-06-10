import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';



const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home">
      <section className="hero">
        <h1 className="h-header">Monte-Carlo</h1>
        <p className="h-text">Resort</p>
      </section>

      <section className="about" id="about">
        <div className="a-flexbox">
          <div className="a-f-left-block">
            <h1 className="a-f-l-b-header">{t('aboutTitle')}</h1>
            <p className="a-f-l-b-address">
              {t('address')}
            </p>
            <img
              loading="lazy"
              src={require("../media/sectionAboutImg.png")}
              alt=""
              className="a-f-l-b-img"
            />
          </div>

          <p className="a-f-right-block">{t('aboutText')}</p>
        </div>
      </section>

      <section
        className="booking"
        id="booking"
        style={{
          backgroundImage: "url(/sectionBookingBackgroundImg.png",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="b-header">{t('bookingTitle')}</h1>
        <p className="b-text">{t('bookingText')}</p>
        <Link to="/404" className="b-button" >{t('bookingButton')}</Link>
      </section>
    </div>
  );
};

export default Home;
