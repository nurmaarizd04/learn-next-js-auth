import { ApiResponse, PaginatedResponse } from "../api.type";
import { Ticket } from "./ticket.type";

export type GetTicketsResponse = PaginatedResponse<Ticket[]>;
export type GetTicketDetailResponse = ApiResponse<Ticket>;
