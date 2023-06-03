import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1 className="h-header">Monte-Carlo</h1>
        <p className="h-text">Resort</p>
      </section>

      <section className="about" id="about">
        <div className="a-flexbox">
          <div className="a-f-left-block">
            <h1 className="a-f-l-b-header">О нашем отеле</h1>
            <p className="a-f-l-b-address">
              Улица Курорт 68, 720003 Джалал-Абад, Киргизия
            </p>
            <img
              src={require("../media/sectionAboutImg.png")}
              alt=""
              className="a-f-l-b-img"
            />
          </div>

          <p className="a-f-right-block">
            Курортный отель «Монте-Карло» с баром и бесплатным Wi-Fi расположен
            в Джалал-Абаде. Гости могут посетить оздоровительный и спа-центр с
            крытым бассейном, фитнес-центром и сауной, а также ресторан.В каждом
            номере отеля есть письменный стол. В номерах курортного отеля
            Monte-Carlo есть собственная ванная комната с ванной и феном,
            телевизор с плоским экраном и кондиционер, а в некоторых номерах
            есть балкон. Во всех номерах есть шкаф. Ежедневно в отеле подают
            завтрак по меню. Персонал, говорящий на английском и русском языках
            на стойке регистрации, всегда готов помочь.
          </p>
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
        <h1 className="b-header">Забронировать номер</h1>
        <p className="b-text">
          Заполните поля по ссылке ниже чтобы забронировать номер перед
          заселением
        </p>
        <Link to="/404" className="b-button" >Забронировать</Link>
      </section>
    </div>
  );
};

export default Home;
