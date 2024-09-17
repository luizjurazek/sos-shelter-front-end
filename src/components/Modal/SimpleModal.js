import Style from "../Modal/SimpleModal.module.css";

export default function SimpleModal(props) {
  return (
    <>
      <div className={Style.container} onClick={props.onClose}>
        <div className={Style.modalContent}>
          <div className={Style.modalIcon}>
            <img src={props.img} alt="" />
          </div>
          <div className={Style.modalText}>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
