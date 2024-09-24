import { useEffect, useState } from "react";
import GetData from "./GetData";

export default function ShelterDetails({ id }) {
  const [shelterDetails, setShelterDetails] = useState();
  const [loading, setLoading] = useState(true);

  async function handleResponse() {
    try {
      const res = await GetData(id);
      setShelterDetails(res.shelter);
      console.log(res.shelter);
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
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>Shelter aqui</div>
        )}
      </div>
    </>
  );
}
