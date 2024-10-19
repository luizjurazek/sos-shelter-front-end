import { useState, useEffect } from "react";
import Style from "../Supply/SupplyDetails.module.css";
import GetData from "../Supply/GetData";

export default function SupplyDetails({ id_shelter }) {
  const [supplies, setSupplies] = useState([]);
  const [loading, setLoading] = useState(true);

  async function handleResponse() {
    try {
      const res = await GetData(id_shelter);
      setSupplies(res.supplies);
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
    <div className={Style.supplyContainer}>
      <p className={Style.mainTitle}>Supplies</p>

      {loading ? (
        <div>Loading...</div>
      ) : supplies === undefined ? (
        <div className={Style.noSuppliesAvailable}>No supplies available.</div>
      ) : (
        <>
          <div className={Style.headTitles}>
            <p className={Style.supplyName}>Name</p>
            <p className={Style.supplyQuantity}>Quantity</p>
            <p className={Style.supplyUnit}>Unit</p>
          </div>
          <div className={Style.itensContainer}>
            {supplies.map((item) => (
              <div className={Style.supplyItem} key={item.id}>
                <p className={Style.supplyName}>{item.name}</p>
                <p className={Style.supplyQuantity}>{item.quantity}</p>
                <p className={Style.supplyUnit}>{item.unit}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
