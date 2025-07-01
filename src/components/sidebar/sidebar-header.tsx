import { ChatFilterTabs } from "../chat-filter-tabs";
import { Input } from "../ui/input";
import { AddContactDialog } from "./add-contact";

export function SidebarHeader() {
  return (
    <div className="sticky top-0 z-10 shadow-none bg-white mb-2 ">
      <h3 className="text-lg font-semibold mb-2">Chat</h3>
      <Input type="search" placeholder="Cari" className="mb-2" />
      <ChatFilterTabs />
    </div>
  );
}
