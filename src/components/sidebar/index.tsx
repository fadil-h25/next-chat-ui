import { AddContactDialog } from "./add-contact";
import { ContactList } from "./contact-list";
import { SidebarHeader } from "./sidebar-header";

export function Sidebar() {
  return (
    <div className="relative min-h-screen">
      <SidebarHeader />
      <ContactList />
      <AddContactDialog />
    </div>
  );
}
