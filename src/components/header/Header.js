import { useState } from "react";
import Style from "../header/Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={Style.container}>
        <div className={Style.logo}>S.O.S Shelter</div>
        <button className={Style.menuButton} onClick={toggleMenu}>
          ☰
        </button>
        <div className={`${Style.sideMenu} ${isOpen ? Style.open : ""}`}>
          <div className={Style.closeButtonContainer}>
            <button className={Style.menuButton} onClick={toggleMenu}>X</button>
            <div className={Style.logo}>S.O.S Shelter</div>
          </div>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/shelter">Shelters</a>
              </li>
              <li>
                <a href="/people">People</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
