import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Contact } from "@/lib/types/contact"; // sesuaikan path-nya

export function ContactCard({ contact }: { contact: Contact }) {
  const name = contact.name;
  const lastMessage =
    contact.relation?.lastMessage?.content || "Belum ada pesan";
  const date = "Baru saja"; // kamu bisa ambil waktu dari message kalau ada
  const totalUnreadMessage = contact.totalUnreadMessage;

  return (
    <Card className="w-full shadow-none max-w-sm p-4 cursor-pointer hover:bg-accent transition">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="/images/profile.jpg" alt={name} />
          <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>

        <div className="flex-1 mb-3">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-base">{name}</h3>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground truncate max-w-[80%]">
              {lastMessage}
            </p>
            <div className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full min-w-5 text-center">
              {totalUnreadMessage}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
