import { api } from ".";

export const getContacts = async () => {
  // const response = await axios.get("http://localhost:8000/contacts", {
  //   withCredentials: true,
  // });
  const response = await api.get("/contacts");
  return response.data;
};

// export const addNewContact = async () =>{
//   const re
// }
