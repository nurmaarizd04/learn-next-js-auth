import { GridColDef } from "@mui/x-data-grid";

export const productColumns: GridColDef[] = [
      {
            field: "no",
            headerName: "No",
            width: 80,
            sortable: false,
            renderCell: (params) => {
                  const page = params.api.state.pagination.paginationModel.page;
                  const pageSize = params.api.state.pagination.paginationModel.pageSize;
                  const rowIndex = params.api.getRowIndexRelativeToVisibleRows(params.id);

                  return page * pageSize + rowIndex + 1;
            }
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
