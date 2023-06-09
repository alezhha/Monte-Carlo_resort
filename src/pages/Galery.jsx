import React from "react";
import { Pannellum } from "pannellum-react";
import reception from "../360img/reception.jpg";
import restaurant from '../360img/restaurant.jpg'
import restaurant2 from '../360img/restaurant2.jpg'

const Galery = () => {
  return (
    <>
      <section className="gallery">
        <div className="g-container">
          <div className="g-c-texts">
            <h1 className="g-c-t-header">Изображения отеля и интерьера</h1>
            <p className="g-c-t-description">
              Мы находимся в самом ярком и интересном месте города. Центр города
              в 400 метрах от нас. В то же время, территория отеля наполнена
              удивительными растениями и видами на горы
            </p>
          </div>

          <div className="g-c-grid">
            <Pannellum id='g-c-g-img1' lazyLoad image={reception} autoLoad yaw={20} showControls={false} autoRotate={-5} />
            <Pannellum id="g-c-g-img2" lazyLoad image={restaurant} autoLoad yaw={190} showControls={false} autoRotate={-5} />
            <Pannellum id="g-c-g-img3" lazyLoad image={restaurant2} autoLoad yaw={190} showControls={false} autoRotate={-5} />
          </div>

          <img
            loading="lazy"
            src={require("../media/sectionGalleryImgFour.jpg")}
            alt=""
            className="g-c-img"
          />
        </div>
      </section>

      <section className="services">
        <div className="s-container">
          <div className="s-c-texts">
            <h1 className="s-c-t-header">Наши сервисы: Ресторан и Бассейн</h1>
            <p className="s-c-t-text">
              Мы предлагаем вам различные виды сервисов: Управляйте
              релаксирующей атмосферой отдыха или отмечайте праздники в
              ресторане отеля.
            </p>
          </div>

          <div className="s-c-main">
            <div className="s-c-m-flexboxes">
              <div className="s-c-m-flexbox">
                <img
                  loading="lazy"
                  src={require("../media/sectionGalleryImgOne.jpg")}
                  alt=""
                  className="s-c-m-f-img"
                />

                <div className="s-c-m-f-flexbox">
                  <div className="s-c-m-f-f-block">
                    <h1 className="s-c-m-f-f-b-header">Monte-Carlo Restaurant</h1>
                    <p className="s-c-m-f-f-b-textOne">
                      Наш отель имеет при себе одноименный ресторан, в котором вы можете отдохнуть после тяжелого дня или отметить праздники с семьёй.
                    </p>
                    <p className="s-c-m-f-f-b-textTwo">
                      Находится он сразу на втором этаже и распологает огромный выбор блюд, напитков и шикарный вид на горы и ночной город.
                    </p>
                  </div>
                </div>
              </div>

              <div className="s-c-m-flexbox">
                <div className="s-c-m-f-flexbox">
                  <div className="s-c-m-f-f-block">
                    <h1 className="s-c-m-f-f-b-header">Monte-Carlo Pool</h1>
                    <p className="s-c-m-f-f-b-textOne">
                      Зона для свободных плаваний и отдыха.
                    </p>
                    <p className="s-c-m-f-f-b-textTwo">
                      Расслабляющая кристально чистая вода в бассейне сможет заставить вас позабыть о всех делах и расслабиться по максимуму.
                    </p>
                  </div>
                </div>

                <img
                  loading="lazy"
                  src={require("../media/sectionGalleryImgTwo.jpg")}
                  alt=""
                  className="s-c-m-f-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Galery;
