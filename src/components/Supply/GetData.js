export default async function GetData(id_shelter) {
  const token = localStorage.getItem("token_user");
  const api = process.env.REACT_APP_API_URL;
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    }
  };

  try {
    const response = await fetch(`${api}/shelter/get-supply-by-shelter-id/${id_shelter}`, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}
