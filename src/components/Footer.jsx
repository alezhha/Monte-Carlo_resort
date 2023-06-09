import React from "react";

const Footer = () => {
  return (
    <section className="location">
      <h1 className="l-header">Улица Курорт 68</h1>
      <p className="l-number">Номер телефона: +996 755 22 76 55</p>
      <p className="l-email">Электронная почта: callermanjohnson@gmail.com</p>

      <div className="l-container">
        <a href="https://www.instagram.com/montecarloresort/">
          <img
            loading="lazy"
            src={require("../media/instagramIcon.png")}
            alt=""
            className="l-c-s-icons"
          />
        </a>
      </div>
      <iframe className="l-img" title="Monte-Carlo" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12055.298034008478!2d73.0274365!3d40.9415132!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bd15b9a1626cc1%3A0xf43a9f331faf20a7!2sMonte-Carlo%20Resort!5e0!3m2!1sru!2skg!4v1685795006403!5m2!1sru!2skg" width="800" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  );
};

export default Footer;
