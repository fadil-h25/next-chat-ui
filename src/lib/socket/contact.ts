import { Socket } from "socket.io-client";
import { AddNewContact, Contact } from "../types/contact";

export const listenNewContact = (
  socket: Socket,
  setContactList: React.Dispatch<React.SetStateAction<Contact[]>>
) => {
  socket.on("contact:get_new", (newContact: Contact) => {
    setContactList((prev) => [newContact, ...prev]);
  });
};

export const addNewContact = (socket: Socket, data: AddNewContact) => {
  socket.emit("contact:create", data, (response) => {
    console.log("Server response:", response);
    alert("Server says: " + JSON.stringify(response));
  });
};

export const listenErrorAddNewContact = (socket: Socket) => {
  socket.on("contact:create:error", (response) => {
    alert("Error: " + JSON.stringify(response));
  });
};
