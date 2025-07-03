"use client";
import { ContactDetail } from "@/components/contact-detail";
import { Sidebar } from "@/components/sidebar/index";
import { connectSocket, getSocket } from "@/lib/socket/auth";
import { listenErrorAddNewContact } from "@/lib/socket/contact";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    connectSocket(getSocket());
    listenErrorAddNewContact(getSocket());
  }, []);
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="basis-[30%] bg-white p-4 min-h-screen">
        <Sidebar />
      </div>

      {/* Konten utama */}
      <div className="basis-[70%] bg-gray-100 p-4">
        <h1 className="text-xl font-bold">Konten Utama</h1>
        <p>Ini bagian kanan, isi konten di sini.</p>
      </div>

      <ContactDetail />
    </div>
  );
}
