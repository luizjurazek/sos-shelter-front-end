import { useState } from "react";
import Style from "../header/Header.module.css";
import Logo from "../../assets/img/logoShelter.svg";
import { FaHome, FaHotel, FaPlusCircle, FaUsers } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={Style.container}>
        <div className={Style.logo}>
          <img src={Logo} />
        </div>
        <button className={Style.menuButton} onClick={toggleMenu}>
          ☰
        </button>
        <div className={`${Style.sideMenu} ${isOpen ? Style.open : ""}`}>
          <div className={Style.closeButtonContainer}>
            <button className={Style.menuButton} onClick={toggleMenu}>
              X
            </button>
            <div className={Style.logo}>S.O.S Shelter</div>
          </div>
          <nav>
            <ul>
              <li>
                <FaHome className="icon" size={24}/>
                <a href="/">Home</a>
              </li>
              <li>
                <FaHotel className="icon" size={24}/>
                <a href="/shelters">Shelters</a>
              </li>
              <li>
                <FaPlusCircle className="icon" size={24}/>
                <a href="/create-shelter">Create shelter</a>
              </li>
              <li>
                <FaUsers className="icon" size={24}/>
                <a href="/people">People</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
