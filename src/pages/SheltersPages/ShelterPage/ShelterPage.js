import { useParams } from "react-router-dom";

import Style from "../ShelterPage/ShelterPage.module.css"

// Components
import Header from "../../../components/header/Header";
import ShelterDetails from "../../../components/SheltersPage/ShelterDetails/ShelterDetails";

export default function ShelterPage() {
  const { id } = useParams();

  return (
    <>
      <div className={Style.container}>
        <div className={Style.headerContent}>
          <Header />
        </div>
        <div className={Style.mainContent}>
          <ShelterDetails id={id} />
        </div>
      </div>
    </>
  );
}
