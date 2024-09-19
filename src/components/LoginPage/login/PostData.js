export default async function PostData(email, password) {
  const api = "http://localhost:3030";

  const data = {
    email: email,
    password: password,
  };

  const requestData = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(`${api}/login`, requestData);
    const data = await response.json();
    return data; // Retorna a resposta para que possa ser capturada no componente
  } catch (error) {
    console.error(error);
    throw new Error(error); // Propaga o erro para o componente lidar com ele
  }
}
