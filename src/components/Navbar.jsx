import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  let navigate = useNavigate();
    function handleChange(value) {
      navigate(`${value}`);
      value = "";
    }
  return (
    <div className="h-navbar">
      <div className="h-n-leftSide">
        <Link to="/" className="h-n-lS-links">
          Главная
        </Link>
        <Link to="/galery" className="h-n-lS-links">
          Галерея
        </Link>
        <Link to="/rooms" className="h-n-lS-links">
          Номера
        </Link>
      </div>

      <select onChange={event => handleChange(event.target.value)} className="h-n-select">
        <option value='/'>Главная</option>
        <option value='/galery'>Галерея</option>
        <option value='/rooms'>Номера</option>
      </select>
      <p className="h-n-rS-address">
        Улица Курорт 68, 720003 Джалал-Абад, Киргизия
      </p>
      <Link to="/404" className="h-n-rS-button">Забронировать</Link>
    </div>
  );
};

export default Navbar;
