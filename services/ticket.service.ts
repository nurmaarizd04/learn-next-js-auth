import axiosInstanceProducts from "@/libs/axios.product";
import { PaginationParams } from "@/types/pagination.type";
import { GetTicketDetailResponse, GetTicketsResponse } from "@/types/ticket/ticket.response.type";

export const getPageTicketApi = (params: PaginationParams) => {
      return axiosInstanceProducts.get<GetTicketsResponse>("/ticket", { params });
};

export const getDetailTicket = (id: string) => {
      return axiosInstanceProducts.get<GetTicketDetailResponse>(`/ticket/${id}`);
};
