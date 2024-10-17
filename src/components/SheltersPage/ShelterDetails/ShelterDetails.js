import { useEffect, useState } from "react";
import GetData from "./GetData";
import Style from "../ShelterDetails/ShelterDetails.module.css";
import UserDetails from "../../User/UserDetails";
import AddressDetails from "../../Address/AddressDetails";
import SupplyDetails from "../../Supply/SupplyDetails";
import PeopleDetails from "../../People/PeopleDetails"

export default function ShelterDetails({ id }) {
  const [shelterDetails, setShelterDetails] = useState();
  const [loading, setLoading] = useState(true);

  async function handleResponse() {
    try {
      const res = await GetData(id);
      setShelterDetails(res.shelter);
      console.log(res)
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
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className={Style.shelterInfo}>
            <h1 className={Style.shelterMainTitle}>Shelter Details</h1>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}}>
              <UserDetails user={shelterDetails.ShelterAdmin} />
              <AddressDetails address={shelterDetails.ShelterAddress}/>
              <SupplyDetails id_shelter={id}/>
            </div>
            <div>
              <PeopleDetails people={''} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
