import React from "react";

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
            <img
              src={require("../media/sectionGalleryImgOne.png")}
              alt=""
              className="g-c-g-img1"
            />
            <img
              src={require("../media/sectionGalleryImgTwo.png")}
              alt=""
              className="g-c-g-img2"
            />
            <img
              src={require("../media/sectionGalleryImgThree.png")}
              alt=""
              className="g-c-g-img3"
            />
          </div>

          <img
            src={require("../media/sectionGalleryImgFour.png")}
            alt=""
            className="g-c-img"
          />
        </div>
      </section>

      <section className="services">
        <div className="s-container">
          <div className="s-c-texts">
            <h1 className="s-c-t-header">Наши сервисы: Ресторан и СПА</h1>
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
                  src={require("../media/sectionServicesImgOne.png")}
                  alt=""
                  className="s-c-m-f-img"
                />

                <div className="s-c-m-f-flexbox">
                  <div className="s-c-m-f-f-block">
                    <h1 className="s-c-m-f-f-b-header">Dada restaurant</h1>
                    <p className="s-c-m-f-f-b-textOne">
                      Our spa salon is super cool, you can <br /> do whatever
                      you want there, <br /> serriously, everything, even call
                      stuff.
                    </p>
                    <p className="s-c-m-f-f-b-textTwo">
                      Our spa salon is super cool, you can <br /> do whatever
                      you want there
                    </p>
                  </div>
                </div>
              </div>

              <div className="s-c-m-flexbox">
                <div className="s-c-m-f-flexbox">
                  <div className="s-c-m-f-f-block">
                    <h1 className="s-c-m-f-f-b-header">
                      Spa & <br /> Cosmetology
                    </h1>
                    <p className="s-c-m-f-f-b-textOne">
                      Our spa salon is super cool, you can <br /> do whatever
                      you want there
                    </p>
                    <p className="s-c-m-f-f-b-textTwo">
                      Our spa salon is super cool, you can <br /> do whatever
                      you want there
                    </p>
                  </div>
                </div>

                <img
                  src={require("../media/sectionServicesImgTwo.png")}
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
