export default async function PostData(submitedData){
  const api = process.env.REACT_APP_API_URL;
  const data = {
    name: submitedData.name,
    lastname: submitedData.lastname,
    birthday: submitedData.birthday,
    email: submitedData.email,
    phonenumber: submitedData.phonenumber,
    password: submitedData.password,
    role: null,
    id_shelter: null
  }


  const requestData = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    }
  }

  try {
    const response = await fetch(`${api}/user/create-user`, requestData);
    const data = await response.json();
    return data; // Retorna a resposta para que possa ser capturada no componente
  } catch (error) {
    console.error(error);
    throw new Error(error); // Propaga o erro para o componente lidar com ele
  }
}