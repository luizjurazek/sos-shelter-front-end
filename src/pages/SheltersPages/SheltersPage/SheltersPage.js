import Header from "../../../components/header/Header";
import SearchForm from "../../../components/SearchForm/SearchForm";
import SheltersElement from "../../../components/SheltersPage/SheltersElement/SheltersElement";
import Style from "../SheltersPage/SheltersPage.module.css";

export default function SheltersPage() {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.headerContent}>
          <Header />
        </div>
        <div className={Style.mainContent}>
          <SearchForm placeholderText={"Search"} />
          <SheltersElement />
        </div>
      </div>
    </>
  );
}
