"use client";

import { useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import BaseDataGrid from "@/components/data-grid/base.data.grid";
import { Product } from "@/types/product/product.type";
import { productColumns } from "@/columns/product.columns";
import { useDeleteProduct, useGetPageProducts } from "@/hooks/use.product";
import ActionButton from "@/components/common/ActionButton";

export default function ProductsPage() {
      const [paginationModel, setPaginationModel] = useState({
            page: 0,
            pageSize: 5
      });

      const { data, isLoading } = useGetPageProducts(paginationModel);

      const deleteMutation = useDeleteProduct();
      const handleDelete = (id: string) => {
            deleteMutation.mutate(id);
      };

      if (isLoading && !data) {
            return (
                  <Box display="flex" justifyContent="center" mt={6}>
                        <CircularProgress />
                  </Box>
            );
      }

      return (
            <Box>
                  <Box display={"flex"} justifyContent={"end"} mx={"auto"} mt={6}>
                        <ActionButton href="/product/create" label="Add Product" />
                  </Box>

                  <BaseDataGrid<Product>
                        rows={data?.payload ?? []}
                        columns={productColumns(handleDelete)}
                        loading={isLoading || deleteMutation.isPending}
                        getRowId={(row) => row.id}
                        paginationMode="server"
                        rowCount={data?.page_info.total_count ?? 0}
                        paginationModel={paginationModel}
                        onPaginationModelChange={setPaginationModel}
                  />
            </Box>
      );
}
