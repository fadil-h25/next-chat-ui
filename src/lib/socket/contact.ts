import { Socket } from "socket.io-client";
import { AddNewContact, Contact } from "../types/contact";
import { SocketResponseType } from "../types/socket-response.type";

export const listenNewContact = (
  socket: Socket,
  setContactList: React.Dispatch<React.SetStateAction<Contact[]>>
) => {
  socket.on("contact:get_new", (newContact: Contact) => {
    console.log(newContact);
    setContactList((prev) => [newContact.data, ...prev]);
  });
};

export const addNewContact = (socket: Socket, data: AddNewContact) => {
  socket.emit("contact:create", data, (response) => {
    if (response.status === "OK") {
      console.log("✅ Sukses:", response.message);
    } else {
      console.error("❌ Gagal:", response.message);
    }
  });
};

export const listenErrorAddNewContact = (socket: Socket) => {
  socket.on("contact:create:error", (response) => {
    alert("Error: " + JSON.stringify(response));
  });
};
