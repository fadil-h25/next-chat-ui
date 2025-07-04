"use-client";
import { useEffect, useState } from "react";
import { ContactCard } from "../ui/contact-card";

import { getSocket } from "@/lib/websocket/auth";

import { getContacts } from "@/lib/api/contact";
import { useRouter } from "next/navigation";
import { listenNewContact } from "@/lib/websocket/contact/contact";

import { listenUpdateContact } from "@/lib/websocket/contact/update-contact";
import { ContactResponse } from "@/lib/types/response/contact-response";

export function ContactList() {
  const [contactList, setContactList] = useState<ContactResponse[]>([]);
  const router = useRouter();

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
