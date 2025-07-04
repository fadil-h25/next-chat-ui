import { Socket } from "socket.io-client";

export const getError = (socket: Socket) => {
  socket.on("error", (err) => {
    console.error(" Error dari server:", err);
    // tampilkan alert atau toast
    alert(err.message || "Terjadi kesalahan dari server");
  });

  return () => {
    socket.off("error"); // bersihkan saat unmount
  };
};
