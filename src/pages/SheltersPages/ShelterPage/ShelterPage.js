import { useParams } from "react-router-dom";

// Components
import Header from "../../../components/header/Header";
import ShelterDetails from "../../../components/SheltersPage/ShelterDetails/ShelterDetails";

export default function ShelterPage() {
  const { id } = useParams();

  return (
    <>
      <div style={{ backgroundColor: "#F0F0F0"}}>
        <Header />
        <ShelterDetails id={id} />
      </div>
    </>
  );
}
