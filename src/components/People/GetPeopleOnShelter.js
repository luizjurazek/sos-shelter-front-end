export default async function GetPeopleOnShelter(id_shelter) {
  const token = localStorage.getItem("token_user");
  const api = process.env.REACT_APP_API_URL;

  const requestOptions = {
    method: "GET",
    headers: {
      authorization: token,
      "Content-Type": "application/json",
    },
  };

  try {
    const resoonse = await fetch(`${api}/people/get-people-by-shelter-id/${id_shelter}`, requestOptions);
    const data = await resoonse.json();
    return data;
  } catch (error) {
    throw new Error(error);
    console.log("Error: ", error);
  }
}
