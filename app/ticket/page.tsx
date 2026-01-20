"use client";

import { useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import BaseDataGrid from "@/components/data-grid/base.data.grid";
import { useGetPageTickets } from "@/hooks/use.ticket";
import { Ticket } from "@/types/ticket/ticket.type";
import { ticketColumns } from "@/columns/ticket.columns";

export default function TicketPage() {
      const [paginationModel, setPaginationModel] = useState({
            page: 0,
            pageSize: 5
      });

      const { data, isLoading } = useGetPageTickets(paginationModel);

      if (isLoading && !data) {
            return (
                  <Box display="flex" justifyContent="center" mt={6}>
                        <CircularProgress />
                  </Box>
            );
      }

      return (
            <BaseDataGrid<Ticket>
                  rows={data?.payload ?? []}
                  columns={ticketColumns}
                  loading={isLoading}
                  getRowId={(row) => row.id}
                  paginationMode="server"
                  rowCount={data?.page_info.total_count ?? 0}
                  paginationModel={paginationModel}
                  onPaginationModelChange={setPaginationModel}
            />
      );
}
