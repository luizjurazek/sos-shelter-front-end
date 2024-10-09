export default async function PostData(shelterData, addressData) {
  const api = process.env.REACT_APP_API_URL;
  const token = localStorage.getItem("token");

  const createRequestOptions = (data) => ({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify(data),
  });

  try {
    const addressResponse = await fetch(`${api}/shelter/create-address`, createRequestOptions(addressData));
    const addressResult = await addressResponse.json();

    if (addressResult.error) {
      throw new Error("Has an error while creating an address");
    }

    // if the address was created with successfully
    shelterData["address"] = addressResult.id;

    const shelterResponse = await fetch(`${api}/shelter/create-shelter`, createRequestOptions(shelterData));
    const shelterResult = await shelterResponse.json();

    const result = {
      error: false,
      shelterResult,
      addressResult
    }

    return result;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}
