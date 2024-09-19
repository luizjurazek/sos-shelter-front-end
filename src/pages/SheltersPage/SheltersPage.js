import Header from "../../components/header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import SheltersElement from "../../components/SheltersPage/SheltersElement/SheltersElement";

export default function SheltersPage() {
  return (
    <>
      <Header />
      <SearchForm placeholderText={"Search"}/>
      <SheltersElement />
    </>
  );
}
