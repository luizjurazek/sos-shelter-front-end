import { useState } from "react";
import Style from "../header/Header.module.css";
import Logo from "../../assets/img/logoShelter.svg";

import menuItems from "./menuItens";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={Style.container}>
        <div className={Style.logo}>
          <a className={Style.logoLink} href="/">
            <img className={Style.logoImg} src={Logo} alt="SOS Logo" />
            <p className={Style.logoText}>SOS Shelter</p>
          </a>
        </div>
        <button className={Style.menuButton} onClick={toggleMenu}>
          ☰
        </button>
        <div className={`${Style.sideMenu} ${isOpen ? Style.open : ""}`}>
          {/* Butto displayed only on mobile */}
          <div className={Style.closeButtonContainer}>
            <button className={Style.menuButton} onClick={toggleMenu}>
              X
            </button>
            <div className={Style.logo}>S.O.S Shelter</div>
          </div>
          <nav>
            <ul className={Style.menu}>
              {menuItems.map((item, index) => (
                <li className={Style.menuItem} key={index}>
                  <a className={Style.item} href={item.path}>
                    <item.icon className={Style.icon} size={22} />
                    <p>{item.name}</p>
                  </a>
				  {/* If has children then render */}
                  {item.children.length > 0 && (
                    <ul className={Style.submenu}>
                      {item.children.map((subItem, subItemIndex) => (
                        <li className={Style.subItem} key={subItemIndex}>
                          <a className={Style.item} href={subItem.path}>
                            <subItem.icon className="icon" size={22} /> {/* Usando o ícone diretamente */}
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
