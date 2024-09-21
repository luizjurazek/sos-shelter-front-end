import { useEffect, useState } from "react";
import Style from "./SheltersElement.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import GetData from "./GetData";

export default function SheltersElement() {
  const [shelters, setShelters] = useState(null);
  const [loading, setLoading] = useState(true);

  async function handleResponse() {
    try {
      const res = await GetData();
      setShelters(res.shelters);
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
        <div className={Style.sheltersElement}>
          <h1>Shelters</h1>
          <div className={Style.sheltersContainer}>
            {loading ? (
              <div>Loading...</div>
            ) : (
              shelters.map((shelter) => {
                return (
                  <div className={Style.shelter} key={shelter.id}>
                    <div>
                      <h3 className={Style.shelterName}>{shelter.name}</h3>
                      <p className={Style.shelteInfo}>Current occupancy: {shelter.current_occupancy}</p>
                      <p>Max capacity: {shelter.max_capacity}</p>
                    </div>
                    <div className={Style.containerArrowIcon}>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}
