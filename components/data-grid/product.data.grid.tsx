"use client";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import { Product } from "@/types/product/product.type";

type Props = {
      rows: Product[];
      loading?: boolean;
};

export default function ProductDataGrid({ rows, loading }: Props) {
      const columns: GridColDef[] = [
            {
                  field: "no",
                  headerName: "No",
                  width: 80,
                  sortable: false,
                  renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.id) + 1
            },
            {
                  field: "name",
                  headerName: "Name",
                  flex: 1
            },
            {
                  field: "description",
                  headerName: "Description",
                  flex: 2
            },
            {
                  field: "status",
                  headerName: "Status",
                  width: 120
            }
      ];

      return (
            <Paper sx={{ mt: 6, mx: 4, p: 2 }}>
                  <DataGrid
                        rows={rows}
                        columns={columns}
                        getRowId={(row) => row.id}
                        loading={loading}
                        pageSizeOptions={[5, 10, 20]}
                        initialState={{
                              pagination: {
                                    paginationModel: { pageSize: 5, page: 0 }
                              }
                        }}
                        disableRowSelectionOnClick
                        autoHeight
                  />
            </Paper>
      );
}
