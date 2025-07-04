// lib/socket.ts
import { io, Socket } from "socket.io-client";
import { getError } from "./error";

let socket: Socket | null = null;

export const getSocket = (): Socket => {
  if (!socket) {
    socket = io("http://localhost:8000", {
      withCredentials: true,
    }); // Ganti sesuai URL server kamu
  }
  return socket;
};

export const connectSocket = (socket: Socket) => {
  socket.on("connect", () => {
    console.log("Connected to server with id ", socket.id);
  });
  socket.emit("room:join");
  getError(socket);
};

export const disconnectSocket = (socket: Socket) => {
  socket.on("disconnect", () => {
    console.log("Disconnected from server");
  });
};
