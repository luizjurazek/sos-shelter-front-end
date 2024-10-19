import { useState, useEffect } from "react";
import Style from "./PeopleDetails.module.css";
import GetPeopleOnShelter from "./GetPeopleOnShelter";
import { FaRegEdit } from "react-icons/fa"
import { HiOutlineUserRemove } from "react-icons/hi"

export default function PeopleDetails({ id_shelter }) {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  async function handleResponse() {
    try {
      const res = await GetPeopleOnShelter(id_shelter);
      setPeople(res.peopleOnShelter);
      console.log(res.peopleOnShelter);
    } catch (error) {
      console.error("Erro ao carregar os dados:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleResponse();
  }, []);

  return (
    <>
      <div className={Style.container}>
        <div className={Style.peopleContainer}>
          <p className={Style.mainTitle}>Peoples</p>
          {loading ? (
            <div>Loading...</div>
          ) : people.length === 0 ? (
            <div className={Style.noPeopleAvailable}>No people available</div>
          ) : (
            <div>
              <div className={Style.peopleHeadTitle}>
                <p>Id</p>
                <p>Name</p>
                <p>Birthday</p>
                <p>Phonenumber</p>
                <p>CPF</p>
                <p>Status</p>
                <p className={Style.actionsName}>Actions</p>
              </div>
              <div>
                {people.map((person) => (
                  <div className={Style.peopleInfo}>
                    <p>{person.id}</p>
                    <p>{person.name}</p>
                    <p>{person.birthday}</p>
                    <p>{person.phonenumber}</p>
                    <p>{person.cpf}</p>
                    <p>{person.PeopleStatus.status}</p>
                    <div className={Style.actionsIcons}>
                      <button title="Edit person"><FaRegEdit size={18} color="#555"/></button>
                      <button title="Remove person from shelter"><HiOutlineUserRemove size={18} color="#555"/></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
