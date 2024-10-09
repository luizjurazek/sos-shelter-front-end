import { useState, useEffect } from "react";
import Style from "../CreateShelterForm/CreateShelterForm.module.css";
import GetData from "./GetData";

export default function CreateShelterForm() {
  // Shelter info variables
  const [shelterName, setShelterName] = useState();
  const [maxCapacity, setMaxCapacity] = useState();
  const [currentOccupancy, setCurrentOccupancy] = useState();
  const [amountVolunteers, setAmountVolunteers] = useState();
  const [admin, setAdmin] = useState();

  // Address info variables
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [street, setStreet] = useState();
  const [zipcode, setZipcode] = useState();
  const [number, setNumber] = useState();
  const [complement, setComplement] = useState();

  // Function to await the loading of data
  const [loading, setLoading] = useState(true);

  // Functions to get the admins free
  const [adminFree, setAdminFree] = useState();
  async function GetAdminFree() {
    try {
      const data = await GetData();
      setAdminFree(data.users);
    } catch (error) {
      console.error("Erro ao carregar os dados:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    GetAdminFree();
  }, []);

  function setInputs(e, setInput) {
    setInput(e.target.value);
  }

  async function handleSubmit(){
    const shelterInfo = {
      shelterName,
      maxCapacity,
      currentOccupancy,
      amountVolunteers,
      admin
    }

    const addressInfo = {
      country,
      state,
      city,
      street,
      zipcode,
      number,
      complement
    }

    console.log(shelterInfo)
    console.log(addressInfo)
  }

  return (
    <div className={Style.container}>
      <div className={Style.createElementCard}>
        <section className={Style.FormSection}>
          <h3>Shelter information</h3>
          <label for="shelterName">Shelter name</label>
          <input type="text" placeholder="Enter Shelter name" name="shelterName" onChange={(e) => setInputs(e, setShelterName)} />
          <label for="maxCapacity">Maximum Capacity</label>
          <input type="number" placeholder="Enter Maximum Capacity" name="maxCapacity" onChange={(e) => setInputs(e, setMaxCapacity)} />
          <label for="currentOccupancy">Current Occupancy</label>
          <input type="number" placeholder="Enter Current Occupancy" name="currentOccupancy" defaultValue={0} onChange={(e) => setInputs(e, setCurrentOccupancy)} />
          <label for="numberVolunteers">Number of volunteers</label>
          <input type="number" placeholder="Enter Number of volunteers" name="currentOccupancy" defaultValue={0} onChange={(e) => setInputs(e, setAmountVolunteers)} />
          <label for="admin">Admin</label>
          <select name="admin" onChange={(e) => setInputs(e, setAdmin)}>
            <option disabled>Select an admin</option>
            {loading ? (
              <option>Loading...</option>
            ) : (
              adminFree.map((admin) => {
                return (
                  <option key={admin.id} value={admin.id}>
                    {admin.name} {admin.lastname}
                  </option>
                );
              })
            )}
          </select>
        </section>

        <section className={Style.FormSection}>
          <h3>Address information</h3>
          <label for="country">Country</label>
          <input type="text" placeholder="Enter the country" name="country" onChange={(e) => setInputs(e, setCountry)} />
          <label for="state">State</label>
          <input type="text" placeholder="Enter the State" name="state" onChange={(e) => setInputs(e, setState)} />
          <label for="city">City</label>
          <input type="text" placeholder="Enter the city" name="city" onChange={(e) => setInputs(e, setCity)} />
          <label for="street">Street</label>
          <input type="text" placeholder="Enter the street" name="street" onChange={(e) => setInputs(e, setStreet)} />
          <label for="zipcode">Zipcode</label>
          <input type="text" placeholder="Enter the zipcode" name="zipcode" onChange={(e) => setInputs(e, setZipcode)} />
          <label for="number">Number</label>
          <input type="text" placeholder="Enter the number" name="number" onChange={(e) => setInputs(e, setNumber)} />
          <label for="complement">Complement</label>
          <input type="text" placeholder="Enter the complement" name="complement" onChange={(e) => setInputs(e, setComplement)} />
        </section>

        <section className={Style.btnSection}>
          <button className={Style.btnLogin} onClick={handleSubmit}>Create shelter</button>
        </section>
      </div>
    </div>
  );
}
