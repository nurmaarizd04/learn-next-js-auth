import ActionButton from "@/components/common/ActionButton";
import { GridColDef } from "@mui/x-data-grid";

export const ticketColumns: GridColDef[] = [
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
            field: "account_id",
            headerName: "Account ID",
            flex: 1
      },
      {
            field: "code",
            headerName: "Code",
            flex: 1
      },
      {
            field: "reference_code",
            headerName: "Reference Code",
            flex: 1
      },
      {
            field: "reference_type",
            headerName: "Reference Type",
            flex: 1
      },
      {
            field: "description",
            headerName: "Description",
            flex: 1
      },
      {
            field: "categoryName",
            headerName: "Category",
            flex: 1,
            renderCell: (params) => params.row?.category?.name ?? "-"
      },

      {
            field: "status",
            headerName: "Status",
            width: 120
      },
      {
            field: "created_at",
            headerName: "Created At",
            width: 120
      },
      {
            field: "action",
            headerName: "Action",
            width: 120,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                  <ActionButton href={`/ticket/${params.row.id}`} label="Detail" />
            )
      }
];
