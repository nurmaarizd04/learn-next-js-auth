import { useQuery } from "@tanstack/react-query";
import { GridPaginationModel } from "@mui/x-data-grid";
import { GetTicketDetailResponse, GetTicketsResponse } from "@/types/ticket/ticket.response.type";
import { getDetailTicket, getPageTicketApi } from "@/services/ticket.service";

export const useGetPageTickets = (paginationModel: GridPaginationModel) => {
      return useQuery<GetTicketsResponse>({
            queryKey: ["ticket", paginationModel.page, paginationModel.pageSize],
            queryFn: async () => {
                  const res = await getPageTicketApi({
                        page: paginationModel.page + 1,
                        limit: paginationModel.pageSize
                  });
                  return res.data;
            },
            placeholderData: (prev) => prev
      });
};

export const useGetTicketDetail = (id: string) => {
      return useQuery<GetTicketDetailResponse>({
            queryKey: ["ticket-detail", id],
            queryFn: async () => {
                  const res = await getDetailTicket(id);
                  return res.data;
            },
            enabled: !!id // 🔥 penting

            // Kenapa enabled: !!id?
            // Supaya query tidak jalan kalau id belum ada
            // Ini best practice di React Query
      });
};
