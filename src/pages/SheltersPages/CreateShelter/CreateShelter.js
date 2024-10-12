import Header from "../../../components/header/Header";
import CreateShelterForm from "../../../components/SheltersPage/CreateShelterForm/CreateShelterForm";
import Style from "../CreateShelter/CreateShelter.module.css"

export default function CreateShelter() {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.headerContent}>
          <Header />
        </div>
        <div className={Style.mainContent}>
          <CreateShelterForm />
        </div>
      </div>
    </>
  );
}
