import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";

import useContactStore from "@/store/use-contact-store";
import { sendUpdateContact } from "@/lib/socket/contact/update-contact";
import { getSocket } from "@/lib/socket/auth";
import { useState } from "react";

export function ContactDetail() {
  const isOpen = useContactStore((state) => state.isOpen);
  const selectedContact = useContactStore((state) => state.selectedContact);
  const [name, setName] = useState("");

  function handleUpdateContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("handleUpdateContact", name, selectedContact);

    if (selectedContact?.id !== undefined) {
      sendUpdateContact(getSocket(), { name, contactId: selectedContact.id });
    }
  }

  return (
    <Sheet
      open={isOpen}
      onOpenChange={(open) => {
        if (open) {
          useContactStore.getState().open();
        } else {
          useContactStore.getState().close();
        }
      }}
    >
      <SheetContent>
        <form onSubmit={handleUpdateContact}>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">
            <div className="grid gap-3">
              <Label htmlFor="name">name</Label>
              <Input
                onChange={(e) => setName(e.target.value)}
                id="name"
                name="name"
                defaultValue={selectedContact?.name}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="">phone</Label>
              <Input
                id="phone"
                name="phone"
                defaultValue={selectedContact?.target.phone}
              />
            </div>
          </div>
          <SheetFooter>
            <Button type="submit">Save changes</Button>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
