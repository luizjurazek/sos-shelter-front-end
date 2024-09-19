import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Style from "./SearchForm.module.css";

export default function SearchForm({placeholderText}) {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.SearchElement}>
          <input type="text" placeholder={placeholderText} name="search" />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
    </>
  );
}
