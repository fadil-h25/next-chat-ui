"use-client";
import { useEffect, useState } from "react";
import { ContactCard } from "../ui/contact-card";

import { getSocket } from "@/lib/socket/auth";
import { Contact } from "@/lib/types/contact";
import { getContacts } from "@/lib/api/contact";
import { useRouter } from "next/navigation";
import { listenNewContact } from "@/lib/socket/contact/contact";
import useContactStore from "@/store/use-contact-store";
import { listenUpdateContact } from "@/lib/socket/contact/update-contact";

export function ContactList() {
  const [contactList, setContactList] = useState<Contact[]>([]);
  const router = useRouter();

  function handlerShowContactDetais() {
    const isOpen = useContactStore.getState().isOpen;
    if (isOpen) {
      useContactStore.getState().close();
      useContactStore.getState().open();
    } else {
      useContactStore.getState().open();
    }
  }

  useEffect(() => {
    const socket = getSocket();
    listenNewContact(socket, setContactList);
    listenUpdateContact(socket, setContactList);
    const getMyContatcs = async () => {
      try {
        setContactList(await getContacts());
      } catch (error) {
        if (error.status == 401) {
          router.replace("/login");
        }
      }
    };

    getMyContatcs();

    return () => {
      socket.off("contact:new");
    };
  }, []);
  return (
    <div className="w-full space-y-2">
      {contactList &&
        contactList.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
    </div>
  );
}
