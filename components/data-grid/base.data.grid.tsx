"use client";

import { DataGrid, GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import { Paper } from "@mui/material";

type BaseDataGridProps<T> = {
      rows: T[];
      columns: GridColDef[];
      loading?: boolean;
      getRowId: (row: T) => string;

      paginationMode?: "client" | "server";
      rowCount?: number;
      paginationModel?: GridPaginationModel;
      onPaginationModelChange?: (model: GridPaginationModel) => void;
};

export default function BaseDataGrid<T>({
      rows,
      columns,
      loading,
      getRowId,
      paginationMode = "client",
      rowCount,
      paginationModel,
      onPaginationModelChange
}: BaseDataGridProps<T>) {
      return (
            <Paper sx={{ mt: 6, mx: 4, p: 2 }}>
                  <DataGrid
                        rows={rows}
                        columns={columns}
                        getRowId={getRowId}
                        loading={loading}
                        paginationMode={paginationMode}
                        rowCount={rowCount}
                        paginationModel={paginationModel}
                        onPaginationModelChange={onPaginationModelChange}
                        pageSizeOptions={[5, 10, 20]}
                        disableRowSelectionOnClick
                        autoHeight
                  />
            </Paper>
      );
}
