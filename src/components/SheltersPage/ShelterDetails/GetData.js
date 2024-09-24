export default async function GetData(id) {
  const api = process.env.REACT_APP_API_URL;
  console.log(api)

  const requestData = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(`${api}/shelter/get-shelters-by-id/${id}`, requestData);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}
