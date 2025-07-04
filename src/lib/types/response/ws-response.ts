import { ContactWsEvent } from "../../enums/contacts-ws-event";
import { ContactResponse } from "./contact-response";

export type WsCustomResponse<
  T extends ContactResponse,
  E extends ContactWsEvent
> = {
  event: E;

  data: T;
  statusCode: number;
};
