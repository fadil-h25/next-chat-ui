import { create } from "zustand";

import { ContactResponse } from "@/lib/types/response/contact-response";

// 👉 1. Tipe untuk state dan actions
type ContactStore = {
  isOpen: boolean;
  selectedContact: ContactResponse | null;
  open: () => void;
  close: () => void;
  setSelectedContact: (contact: ContactResponse | null) => void;
};

// 👉 2. Buat store dengan tipe ContactStore
const useContactStore = create<ContactStore>((set) => ({
  isOpen: false,
  selectedContact: null,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  setSelectedContact: (contact) => set({ selectedContact: contact }),
}));

export default useContactStore;
