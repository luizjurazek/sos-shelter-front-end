import Style from "../Address/AddressDetails.module.css";

export default function AddressDetails({ address }) {
  return (
    <div className={Style.container}>
      <p className={Style.addressTitle}>Address</p>

      <div className={Style.addressDetails}>
        <div className={Style.addressItem}>
          <label>Country:</label>
          <span>{address.country}</span>
        </div>
        <div className={Style.addressItem}>
          <label>State:</label>
          <span>{address.state}</span>
        </div>
        <div className={Style.addressItem}>
          <label>City:</label>
          <span>{address.city}</span>
        </div>
        <div className={Style.addressItem}>
          <label>Street:</label>
          <span>{address.street}</span>
        </div>
        <div className={Style.addressItem}>
          <label>Number:</label>
          <span>{address.number}</span>
        </div>
        <div className={Style.addressItem}>
          <label>Zipcode:</label>
          <span>{address.zipcode}</span>
        </div>
      </div>
    </div>
  );
}
