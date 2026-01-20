import ActionButton from "@/components/common/ActionButton";
import { Stack } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

export const productColumns = (onDelete: (id: string) => void): GridColDef[] => [
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
      },
      {
            field: "action",
            headerName: "Action",
            width: 180,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                  <Stack direction="row" spacing={1}>
                        <ActionButton
                              label="Edit"
                              href={`/product/${params.row.id}/edit`}
                              size="small"
                        />
                        <ActionButton
                              label="Delete"
                              color="error"
                              size="small"
                              onClick={() => onDelete(params.row.id)}
                        />
                  </Stack>
            )
      }
];
