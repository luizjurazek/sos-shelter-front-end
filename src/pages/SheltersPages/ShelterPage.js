import { useParams } from "react-router-dom";

// Components
import Header from "../../components/header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import ShelterDetails from "../../components/SheltersPage/ShelterDetails/ShelterDetails";

export default function ShelterPage() {
  const { id } = useParams();

  return (
    <>
      <div style={{ backgroundColor: "#F0F0F0", height: "100vh" }}>
        <Header />
        {/* <SearchForm placeholderText={"Search"} /> */}
        <ShelterDetails id={id} />
      </div>
    </>
  );
}
