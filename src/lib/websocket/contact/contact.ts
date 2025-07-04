import { AddNewContact } from "@/lib/types/request/contact-request";
import { ContactResponse } from "@/lib/types/response/contact-response";
import { Socket } from "socket.io-client";

export const listenNewContact = (
  socket: Socket,
  setContactList: React.Dispatch<React.SetStateAction<ContactResponse[]>>
) => {
  socket.on("contact:get_new", (newContact: ContactResponse) => {
    console.log(newContact);
    setContactList((prev) => [newContact, ...prev]);
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
