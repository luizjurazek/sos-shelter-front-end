import Style from "./SheltersElement.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function SheltersElement() {
  const shelters = [
    {
      id: 4,
      name: "casa do joao",
      address: 1,
      max_capacity: 10,
      current_occupancy: 1,
      amount_volunteers: 0,
      id_admin_shelter: 7,
      createdAt: "2024-07-23T23:56:44.000Z",
      updatedAt: "2024-07-24T00:05:28.000Z",
      ShelterAddress: {
        id: 1,
        country: "Brasil",
        state: "Paraná",
        city: "Mandaguaçu",
        street: "Miguel perissin",
        zipcode: "87160-000",
        number: "165",
        complement: null,
        createdAt: "2024-07-23T23:54:06.000Z",
        updatedAt: "2024-07-23T23:54:06.000Z",
      },
    },
    {
      id: 5,
      name: "jorgin",
      address: 2,
      max_capacity: 10,
      current_occupancy: 1,
      amount_volunteers: 0,
      id_admin_shelter: 7,
      createdAt: "2024-07-23T23:56:44.000Z",
      updatedAt: "2024-07-24T00:05:28.000Z",
      ShelterAddress: {
        id: 2,
        country: "Brasil",
        state: "Paraná",
        city: "Mandaguacu",
        street: "Miguel perissin",
        zipcode: "87160-000",
        number: "165",
        complement: null,
        createdAt: "2024-07-23T23:54:06.000Z",
        updatedAt: "2024-07-23T23:54:06.000Z",
      },
    },
    {
      id: 5,
      name: "jorgin",
      address: 2,
      max_capacity: 10,
      current_occupancy: 1,
      amount_volunteers: 0,
      id_admin_shelter: 7,
      createdAt: "2024-07-23T23:56:44.000Z",
      updatedAt: "2024-07-24T00:05:28.000Z",
      ShelterAddress: {
        id: 2,
        country: "Brasil",
        state: "Paraná",
        city: "Mandaguacu",
        street: "Miguel perissin",
        zipcode: "87160-000",
        number: "165",
        complement: null,
        createdAt: "2024-07-23T23:54:06.000Z",
        updatedAt: "2024-07-23T23:54:06.000Z",
      },
    },
    {
      id: 5,
      name: "jorgin",
      address: 2,
      max_capacity: 10,
      current_occupancy: 1,
      amount_volunteers: 0,
      id_admin_shelter: 7,
      createdAt: "2024-07-23T23:56:44.000Z",
      updatedAt: "2024-07-24T00:05:28.000Z",
      ShelterAddress: {
        id: 2,
        country: "Brasil",
        state: "Paraná",
        city: "Mandaguacu",
        street: "Miguel perissin",
        zipcode: "87160-000",
        number: "165",
        complement: null,
        createdAt: "2024-07-23T23:54:06.000Z",
        updatedAt: "2024-07-23T23:54:06.000Z",
      },
    },
    {
      id: 5,
      name: "jorgin",
      address: 2,
      max_capacity: 10,
      current_occupancy: 1,
      amount_volunteers: 0,
      id_admin_shelter: 7,
      createdAt: "2024-07-23T23:56:44.000Z",
      updatedAt: "2024-07-24T00:05:28.000Z",
      ShelterAddress: {
        id: 2,
        country: "Brasil",
        state: "Paraná",
        city: "Mandaguacu",
        street: "Miguel perissin",
        zipcode: "87160-000",
        number: "165",
        complement: null,
        createdAt: "2024-07-23T23:54:06.000Z",
        updatedAt: "2024-07-23T23:54:06.000Z",
      },
    },
    {
      id: 5,
      name: "jorgin",
      address: 2,
      max_capacity: 10,
      current_occupancy: 1,
      amount_volunteers: 0,
      id_admin_shelter: 7,
      createdAt: "2024-07-23T23:56:44.000Z",
      updatedAt: "2024-07-24T00:05:28.000Z",
      ShelterAddress: {
        id: 2,
        country: "Brasil",
        state: "Paraná",
        city: "Mandaguacu",
        street: "Miguel perissin",
        zipcode: "87160-000",
        number: "165",
        complement: null,
        createdAt: "2024-07-23T23:54:06.000Z",
        updatedAt: "2024-07-23T23:54:06.000Z",
      },
    },
    {
      id: 5,
      name: "jorgin",
      address: 2,
      max_capacity: 10,
      current_occupancy: 1,
      amount_volunteers: 0,
      id_admin_shelter: 7,
      createdAt: "2024-07-23T23:56:44.000Z",
      updatedAt: "2024-07-24T00:05:28.000Z",
      ShelterAddress: {
        id: 2,
        country: "Brasil",
        state: "Paraná",
        city: "Mandaguacu",
        street: "Miguel perissin",
        zipcode: "87160-000",
        number: "165",
        complement: null,
        createdAt: "2024-07-23T23:54:06.000Z",
        updatedAt: "2024-07-23T23:54:06.000Z",
      },
    },
  ];

  return (
    <>
      <div className={Style.container}>
        <div className={Style.sheltersElement}>
          <h1>Shelters</h1>
          <div className={Style.sheltersContainer}>
            {shelters.map((shelter) => {
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
            })}
          </div>
        </div>
      </div>
    </>
  );
}
