import { useParams } from "react-router-dom";
import defaultStyle from "../../Pages.module.css"

// Components
import Header from "../../../components/header/Header";
import ShelterDetails from "../../../components/SheltersPage/ShelterDetails/ShelterDetails";

export default function ShelterPage() {
  const { id } = useParams();

  return (
    <>
      <div className={defaultStyle.container}>
        <div className={defaultStyle.headerContent}>
          <Header />
        </div>
        <div className={defaultStyle.mainContent}>
          <ShelterDetails id={id} />
        </div>
      </div>
    </>
  );
}
