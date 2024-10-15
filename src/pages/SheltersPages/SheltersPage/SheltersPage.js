import Header from "../../../components/header/Header";
import SearchForm from "../../../components/SearchForm/SearchForm";
import SheltersElement from "../../../components/SheltersPage/SheltersElement/SheltersElement";
import defaultStyle from "../../Pages.module.css"

export default function SheltersPage() {
  return (
    <>
      <div className={defaultStyle.container}>
        <div className={defaultStyle.headerContent}>
          <Header />
        </div>
        <div className={defaultStyle.mainContent}>
          <SearchForm placeholderText={"Search"} />
          <SheltersElement />
        </div>
      </div>
    </>
  );
}
