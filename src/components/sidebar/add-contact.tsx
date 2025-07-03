import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getSocket } from "@/lib/socket/auth";
import { addNewContact } from "@/lib/socket/contact/contact";
import { toast } from "sonner";

export function AddContactDialog() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const showSonner = () => {
    toast("Kontak Berhasil Ditambahkan");
  };

  const handleAddContact = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const socket = getSocket();
      if (socket && name && phone) {
        addNewContact(socket, { name, phone });
        console.log("handle add new contact dipanggil");

        // Optional: reset input
        setName("");
        setPhone("");
        // Optional: close dialog programmatically kalau perlu
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="absolute bottom-10 right-1 z-50">+</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleAddContact}>
          <DialogHeader>
            <DialogTitle>Add New Contacts</DialogTitle>
            <DialogDescription>
              Masukkan nama dan nomor telepon, lalu klik Save.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0812xxxxxxx"
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
