import setItemLocalStorage from "../../utils/setItemLocalStorage";

export default function HandleResponse(response) {
  if (response.error === false) {
    setItemLocalStorage("id_user", response.id_user);
    setItemLocalStorage("email_user", response.email);
    setItemLocalStorage("token_user", response.token);
    // Redirecionar o usuário
  }
}
