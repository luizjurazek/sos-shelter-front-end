import Header from "../../../components/header/Header";
import CreateShelterForm from "../../../components/SheltersPage/CreateShelterForm/CreateShelterForm";
import defaultStyle from "../../Pages.module.css"

export default function CreateShelter() {
  return (
    <>
      <div className={defaultStyle.container}>
        <div className={defaultStyle.headerContent}>
          <Header />
        </div>
        <div className={defaultStyle.mainContent}>
          <CreateShelterForm />
        </div>
      </div>
    </>
  );
}
