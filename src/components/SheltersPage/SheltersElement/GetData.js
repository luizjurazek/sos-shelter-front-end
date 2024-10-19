export default async function GetData() {
  const api = process.env.REACT_APP_API_URL;

  const requestData = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(`${api}/shelter/get-shelters`, requestData);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}
