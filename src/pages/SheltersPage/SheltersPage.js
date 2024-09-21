import Header from "../../components/header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import SheltersElement from "../../components/SheltersPage/SheltersElement/SheltersElement";

export default function SheltersPage() {
  return (
    <>
      <div style={{backgroundColor: "#F0F0F0", height: "100vh"}}>
        <Header />
        <SearchForm placeholderText={"Search"} />
        <SheltersElement />
      </div>
    </>
  );
}
