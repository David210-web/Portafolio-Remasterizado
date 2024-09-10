import React, { useState } from "react";
import locales from "../language/locales.json";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Menu({ isEnglish, toggleLanguage, translation }) {
  const language = isEnglish ? "en" : "es";
  const [isResponsive, setIsResponsive] = useState(true);
  const [desactive, isDesactive] = useState(false);

  const handleMenuResponsive = () => {
    setIsResponsive(!isResponsive);
    isDesactive(!desactive);
    
  };

  console.log(desactive);
  

  const menuItems = translation[language].menu;
  return (
    <nav className="menu">
      <section>
        <h2 className="fade-in">Castillo development</h2>
      </section>
      <ul className={!isResponsive ? "responsive" : ""}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={'#' + item} className="fade-in">
              {item}
            </a>
          </li>
        ))}

        <li className="switch">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              checked={!isEnglish}
              onChange={toggleLanguage}
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              {isEnglish ? "EN" : "ES"}
            </label>
          </div>
        </li>
      </ul>
      <span className="btn-menu">
        <div
          className={`barras ${desactive ? "icon-desactive" : "icon-active"}`}
          onClick={handleMenuResponsive}
        >
          <IoMdMenu size={32} />
        </div>
        <div
          className={`cerrar ${desactive ? "icon-active" : "icon-desactive"}`}
          onClick={handleMenuResponsive}
        >
          <IoMdClose size={32} />
        </div>
      </span>
    </nav>
  );
}

export default Menu;
