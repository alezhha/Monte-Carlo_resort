import React from "react";
import { Pannellum } from "pannellum-react";
import reception from "../360img/reception.jpg";
import restaurant from '../360img/restaurant.jpg'
import restaurant2 from '../360img/restaurant2.jpg'
import hall from '../360img/hall.jpg'
import { useTranslation } from 'react-i18next';

const Galery = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="gallery">
        <div className="g-container">
          <div className="g-c-texts">
            <h1 className="g-c-t-header">{t('galeryTitle')}</h1>
            <p className="g-c-t-description">{t('galeryText')}</p>
          </div>

          <div className="g-c-grid">
            <Pannellum id='g-c-g-img1' lazyLoad image={reception} autoLoad yaw={20} showControls={false} autoRotate={-5} />
            <Pannellum id="g-c-g-img2" lazyLoad image={restaurant} autoLoad yaw={190} showControls={false} autoRotate={-5} />
            <Pannellum id="g-c-g-img3" lazyLoad image={restaurant2} autoLoad yaw={190} showControls={false} autoRotate={-5} />
          </div>

            <Pannellum id="g-c-img" lazyLoad image={hall} autoLoad yaw={0} showControls={false} autoRotate={-5} />
        </div>
      </section>

      <section className="services">
        <div className="s-container">
          <div className="s-c-texts">
            <h1 className="s-c-t-header">{t("servicesTitle")}</h1>
            <p className="s-c-t-text">{t('servicesText')}</p>
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
                    <p className="s-c-m-f-f-b-textOne">{t('restaurantTitle')}</p>
                    <p className="s-c-m-f-f-b-textTwo">{t('restaurantText')}</p>
                  </div>
                </div>
              </div>

              <div className="s-c-m-flexbox">
                <div className="s-c-m-f-flexbox">
                  <div className="s-c-m-f-f-block">
                    <h1 className="s-c-m-f-f-b-header">Monte-Carlo Pool</h1>
                    <p className="s-c-m-f-f-b-textOne">{t("poolTitle")}</p>
                    <p className="s-c-m-f-f-b-textTwo">{t("poolText")}</p>
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
