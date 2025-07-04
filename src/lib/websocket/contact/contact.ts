import { ContactWsEvent } from "@/lib/enums/contacts-ws-event";
import { AddNewContact } from "@/lib/types/request/contact-request";
import { ContactResponse } from "@/lib/types/response/contact-response";
import { Socket } from "socket.io-client";

export const listenNewContact = (
  socket: Socket,
  setContactList: React.Dispatch<React.SetStateAction<ContactResponse[]>>
) => {
  socket.on(ContactWsEvent.CREATED_CONTACT, (newContact: ContactResponse) => {
    console.log(newContact);
    setContactList((prev) => [newContact, ...prev]);
  });
};

export const addNewContact = (socket: Socket, data: AddNewContact) => {
  socket.emit(ContactWsEvent.CREATE_CONTACT, data);
};

export const listenErrorAddNewContact = (socket: Socket) => {
  socket.on("contact:create:error", (response) => {
    alert("Error: " + JSON.stringify(response));
  });
};
