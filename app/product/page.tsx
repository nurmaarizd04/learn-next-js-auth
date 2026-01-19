"use client";

import { useState } from "react";
import { useAuthStore } from "@/store/auth.store";
import { Box, CircularProgress } from "@mui/material";
import BaseDataGrid from "@/components/data-grid/base.data.grid";
import { Product } from "@/types/product/product.type";
import { productColumns } from "@/columns/product.columns";
import { useGetPageProducts } from "@/hooks/use.product";

export default function ProductsPage() {
      const [paginationModel, setPaginationModel] = useState({
            page: 0,
            pageSize: 5
      });

      const { data, isLoading } = useGetPageProducts(paginationModel);

      if (isLoading && !data) {
            return (
                  <Box display="flex" justifyContent="center" mt={6}>
                        <CircularProgress />
                  </Box>
            );
      }

      return (
            <BaseDataGrid<Product>
                  rows={data?.payload ?? []}
                  columns={productColumns}
                  loading={isLoading}
                  getRowId={(row) => row.id}
                  paginationMode="server"
                  rowCount={data?.page_info.total_count ?? 0}
                  paginationModel={paginationModel}
                  onPaginationModelChange={setPaginationModel}
            />
      );
}
