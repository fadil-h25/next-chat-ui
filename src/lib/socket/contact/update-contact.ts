import { Contact, UpdateContact } from "@/lib/types/contact";
import useContactStore from "@/store/use-contact-store";
import { use } from "react";
import { Socket } from "socket.io-client";

export const sendUpdateContact = (socket: Socket, data: UpdateContact) => {
  socket.emit("contact:update", data, (response) => {
    if (response.status === "OK") {
      console.log("✅ Sukses:", response.message);
    } else {
      console.error("❌ Gagal:", response.message);
    }
  });
};

export const listenUpdateContact = (
  socket: Socket,
  setContactList: React.Dispatch<React.SetStateAction<Contact[]>>
) => {
  socket.on("contact:updated", (response) => {
    setContactList((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === response.data.id
          ? { ...contact, ...response.data.contact }
          : contact
      )
    );
    useContactStore.getState().setSelectedContact((prev) => {
      if (prev?.id === response.data.contact.id) {
        return { ...response.data.contact };
      }
      return prev;
    });
  });
};
export const listenErrorUpdateContact = (socket: Socket) => {
  socket.on("contact:update:error", (response) => {
    alert("Error: " + JSON.stringify(response));
  });
};
