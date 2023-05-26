import './App.css';
import './responsive.css';

function App() {
  return (
    <div className="App" >

      <section className="hero">
        <div className="h-navbar">

          <div className="h-n-leftSide">
            <a href="#about" className="h-n-lS-links">Об Отеле</a>
            <a href="#rooms" className="h-n-lS-links">Номера</a>
            <a href="#booking" className="h-n-lS-links">Забронировать</a>
          </div>

          <div className="h-n-rightSide">
            <p className="h-n-rS-address">Улица Курорт 68, 720003 Джалал-Абад, Киргизия</p>
            <button className="h-n-rS-button">Выбрать номер</button>
          </div>

        </div>

        <h1 className="h-header">Monte-Carlo</h1>
        <p className="h-text">Resort</p>
      </section>

      <section className="about" id='about'>
        <div className="a-flexbox">

          <div className="a-f-left-block">
            <h1 className="a-f-l-b-header">О нашем отеле</h1>
            <p className="a-f-l-b-address">Улица Курорт 68, 720003 Джалал-Абад, Киргизия</p>
            <img src={require('./media/sectionAboutImg.png')} alt="" className="a-f-l-b-img" />
          </div>

          <p className="a-f-right-block">
            Курортный отель «Монте-Карло» с баром и бесплатным Wi-Fi расположен в Джалал-Абаде. Гости могут посетить оздоровительный и спа-центр с крытым бассейном, фитнес-центром и сауной, а также ресторан.В каждом номере отеля есть письменный стол. В номерах курортного отеля Monte-Carlo есть собственная ванная комната с ванной и феном, телевизор с плоским экраном и кондиционер, а в некоторых номерах есть балкон. Во всех номерах есть шкаф. <br /> Ежедневно в отеле подают завтрак по меню. Персонал, говорящий на английском и русском языках на стойке регистрации, всегда готов помочь.
          </p>

        </div>
      </section>

      <section className="rooms" id='rooms'>

        <div className="r-flexbox">

          <div className='r-f-texts'>
            <h1 className="r-f-t-header">Наши номера</h1>
            <p className="r-f-t-text">Мы предлагаем вам выбрать один из трёх типов наших гостевых номеров. Во всех них есть вай-фай и ванная.</p>
          </div>

          <ul className="r-f-main">

            <li className="r-f-m-blocks">

              <img src={require('./media/sectionRoomsImg.png')} alt="" className="r-f-m-b-img" />

              <div className="r-f-m-b-container">
                <h1 className="r-f-m-b-c-header">Стандартный <br /> номер</h1>
                <p className="r-f-m-b-c-description">Хорош для 2-3 человек</p>
                <p className="r-f-m-b-c-price">$20 - $45</p>
                <p className="r-f-m-b-c-text">22-24 m2 (248 ft2)King size or <br /> twin bedsBathroom is equipped <br /> with a hairdryerFree high-speed <br /> Internet accessSafe</p>
                <button className="r-f-m-b-c-button">Забронировать</button>
              </div>

            </li>

            <li className="r-f-m-blocks">

              <img src={require('./media/sectionRoomsImg.png')} alt="" className="r-f-m-b-img" />

              <div className="r-f-m-b-container">
                <h1 className="r-f-m-b-c-header">Стандартный <br /> номер</h1>
                <p className="r-f-m-b-c-description">Хорош для 2-3 человек</p>
                <p className="r-f-m-b-c-price">$20 - $45</p>
                <p className="r-f-m-b-c-text">22-24 m2 (248 ft2)King size or <br /> twin bedsBathroom is equipped <br /> with a hairdryerFree high-speed <br /> Internet accessSafe</p>
                <button className="r-f-m-b-c-button">Забронировать</button>
              </div>

            </li>

            <li className="r-f-m-blocks">

              <img src={require('./media/sectionRoomsImg.png')} alt="" className="r-f-m-b-img" />

              <div className="r-f-m-b-container">
                <h1 className="r-f-m-b-c-header">Стандартный <br /> номер</h1>
                <p className="r-f-m-b-c-description">Хорош для 2-3 человек</p>
                <p className="r-f-m-b-c-price">$20 - $45</p>
                <p className="r-f-m-b-c-text">22-24 m2 (248 ft2)King size or <br /> twin bedsBathroom is equipped <br /> with a hairdryerFree high-speed <br /> Internet accessSafe</p> <br />
                <button className="r-f-m-b-c-button">Забронировать</button>
              </div>

            </li>

          </ul>

        </div>

      </section>

      <section className="gallery">

        <div className="g-container">

          <div className='g-c-texts'>
            <h1 className="g-c-t-header">Изображения отеля и интерьера</h1>
            <p className="g-c-t-description">Мы находимся в самом ярком и интересном месте города. Центр города в 400 метрах от нас. В то же время, территория отеля наполненаудивительными растениями и видами на горы</p>
          </div>

          <div className="g-c-grid">
            <img src={require('./media/sectionGalleryImgOne.png')} alt="" className='g-c-g-img1' />
            <img src={require('./media/sectionGalleryImgTwo.png')} alt="" className='g-c-g-img2' />
            <img src={require('./media/sectionGalleryImgThree.png')} alt="" className='g-c-g-img3' />
          </div>

          <img src={require('./media/sectionGalleryImgFour.png')} alt="" className="g-c-img" />
        </div>

      </section>

      <section className="services">

        <div className="s-container">
          <div className='s-c-texts'>
            <h1 className="s-c-t-header">Наши сервисы: Ресторан и СПА</h1>
            <p className="s-c-t-text">Мы предлагаем вам различные виды сервисов: Управляйте релаксирующей атмосферой отдыха или отмечайте праздники в ресторане отеля.</p>
          </div>

          <div className="s-c-main">

            <div className='s-c-m-flexboxes'>
              <div className="s-c-m-flexbox">
                <img src={require('./media/sectionServicesImgOne.png')} alt="" className="s-c-m-f-img" />

                <div className="s-c-m-f-flexbox">

                  <div className="s-c-m-f-f-block">
                    <h1 className="s-c-m-f-f-b-header">Dada restaurant</h1>
                    <p className="s-c-m-f-f-b-textOne">Our spa salon is super cool, you can <br /> do whatever you want there, <br /> serriously, everything, even call stuff.</p>
                    <p className="s-c-m-f-f-b-textTwo">Our spa salon is super cool, you can <br /> do whatever you want there</p>
                  </div>

                </div>

              </div>

              <div className="s-c-m-flexbox">

                <div className="s-c-m-f-flexbox">

                  <div className="s-c-m-f-f-block">
                    <h1 className="s-c-m-f-f-b-header">Spa & <br /> Cosmetology</h1>
                    <p className="s-c-m-f-f-b-textOne">Our spa salon is super cool, you can <br /> do whatever you want there</p>
                    <p className="s-c-m-f-f-b-textTwo">Our spa salon is super cool, you can <br /> do whatever you want there</p>
                  </div>

                </div>


                <img src={require('./media/sectionServicesImgTwo.png')} alt="" className="s-c-m-f-img" />
              </div>
            </div>

          </div>

        </div>

      </section>

      <section className="features">

        <div className="f-flexbox">
          <h1 className="f-f-header">Особенности нашего отеля</h1>
          <p className="f-f-text">Мы хотим чтобы наши гости чувствовали себя свободно и удобно в <span className="f-f-t-mark">Monte-Carlo Resort</span> </p>

          <div className="f-f-main">

              <div className="f-f-m-b-holder">
                <img src={require('./media/sectionFeaturesIcon.png')} alt="" className="f-f-m-b-h-icon" />

                <div className="f-f-m-b-h-container">
                  <h1 className="f-f-m-b-h-c-header">Лобби кафе-бар, открытый 24 <br /> часа в сутки</h1>
                  <p className="f-f-m-b-h-c-text">Lorem ipsum dolor sit omen. cheto cheto <br /> tam bebra krch</p>
                </div>

              </div>

              <div className="f-f-m-b-holder">
                <img src={require('./media/sectionFeaturesIcon.png')} alt="" className="f-f-m-b-h-icon" />

                <div className="f-f-m-b-h-container">
                  <h1 className="f-f-m-b-h-c-header">Лобби кафе-бар, открытый 24 <br /> часа в сутки</h1>
                  <p className="f-f-m-b-h-c-text">Lorem ipsum dolor sit omen. cheto cheto <br /> tam bebra krch</p>
                </div>

              </div>

              <div className="f-f-m-b-holder">
                <img src={require('./media/sectionFeaturesIcon.png')} alt="" className="f-f-m-b-h-icon" />

                <div className="f-f-m-b-h-container">
                  <h1 className="f-f-m-b-h-c-header">Лобби кафе-бар, открытый 24 <br /> часа в сутки</h1>
                  <p className="f-f-m-b-h-c-text">Lorem ipsum dolor sit omen. cheto cheto <br /> tam bebra krch</p>
                </div>

              </div>

              <div className="f-f-m-b-holder">
                <img src={require('./media/sectionFeaturesIcon.png')} alt="" className="f-f-m-b-h-icon" />

                <div className="f-f-m-b-h-container">
                  <h1 className="f-f-m-b-h-c-header">Лобби кафе-бар, открытый 24 <br /> часа в сутки</h1>
                  <p className="f-f-m-b-h-c-text">Lorem ipsum dolor sit omen. cheto cheto <br /> tam bebra krch</p>
                </div>

              </div>

              <div className="f-f-m-b-holder">
                <img src={require('./media/sectionFeaturesIcon.png')} alt="" className="f-f-m-b-h-icon" />

                <div className="f-f-m-b-h-container">
                  <h1 className="f-f-m-b-h-c-header">Лобби кафе-бар, открытый 24 <br /> часа в сутки</h1>
                  <p className="f-f-m-b-h-c-text">Lorem ipsum dolor sit omen. cheto cheto <br /> tam bebra krch</p>
                </div>

              </div>

              <div className="f-f-m-b-holder">
                <img src={require('./media/sectionFeaturesIcon.png')} alt="" className="f-f-m-b-h-icon" />

                <div className="f-f-m-b-h-container">
                  <h1 className="f-f-m-b-h-c-header">Лобби кафе-бар, открытый 24 <br /> часа в сутки</h1>
                  <p className="f-f-m-b-h-c-text">Lorem ipsum dolor sit omen. cheto cheto <br /> tam bebra krch</p>
                </div>

              </div>

          </div>

        </div>

      </section>

      <section className="booking" id='booking' style={{ backgroundImage: 'url(/sectionBookingBackgroundImg.png', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <h1 className="b-header">Забронировать номер</h1>
        <p className="b-text">Заполните поля по ссылке ниже чтобы <br /> забронировать номер перед заселением</p>
        <button className="b-button">Забронировать</button>
      </section>

      <section className="location">
        <h1 className="l-header">Улица Курорт 68</h1>
        <p className="l-number">Номер телефона: +996 755 22 76 55</p>
        <p className="l-email">Электронная почта: callermanjohnson@gmail.com</p>

        <div className="l-container">
          <a href="#" className="l-c-socials"><img src={require('./media/facebookIcon.png')} alt="" className="l-c-s-icons" /></a>
          <a href="#" className="l-c-socials"><img src={require('./media/twitterIcon.png')} alt="" className="l-c-s-icons" /></a>
          <a href="#" className="l-c-socials"><img src={require('./media/instagramIcon.png')} alt="" className="l-c-s-icons" /></a>
        </div>

        <img src={require('./media/sectionLocationImg.png')} alt="" className="l-img" />
      </section>

    </div>
  );
}

export default App;
