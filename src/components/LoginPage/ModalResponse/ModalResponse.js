import Style from "../ModalResponse/ModelResponse.module.css";

export default function ModalResponse({ isOpen, isError, errors, message }) {
  console.log(errors)
  return (
    <div className={`${Style.container} ${isOpen ? "" : Style.displayNone}`}>
      <div className={`${Style.textComponent} ${isError ? Style.backgroundRed : Style.backgroundGreen}`}>
        {isError ? (
          errors.map((error, index) => {
            return <p key={index}>{error}</p>;
          })
        ) : (
          <p>{message}</p>
        )}
      </div>
    </div>
  );
}
