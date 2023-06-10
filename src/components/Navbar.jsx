import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  function handleChange(value) {
    navigate(`${value}`);
    value = "";
  }
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="h-navbar">
      <div className="h-n-leftSide">
        <Link to="/" className="h-n-lS-links">
          {t("main")}
        </Link>
        <Link to="/galery" className="h-n-lS-links">
          {t("galery")}
        </Link>
        <Link to="/rooms" className="h-n-lS-links">
          {t("rooms")}
        </Link>
      </div>

      <select
        onChange={(event) => handleChange(event.target.value)}
        className="h-n-select"
      >
        <option value="/">{t("main")}</option>
        <option value="/galery">{t("galery")}</option>
        <option value="/rooms">{t("rooms")}</option>
      </select>
      <p className="h-n-rS-address">{t("address")}</p>
      <select
          onChange={(event) => changeLanguage(event.target.value)}
          className="h-n-language-select"
        >
          <option value="ru">Русский</option>
          <option value="en">English</option>
        </select>
    </div>
  );
};

export default Navbar;
