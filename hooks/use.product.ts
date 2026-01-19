import { useQuery } from "@tanstack/react-query";
import { getProductsApi } from "@/services/product.service";
import { GridPaginationModel } from "@mui/x-data-grid";
import { GetProductsResponse } from "@/types/product/product.response.type";

export const useGetPageProducts = (paginationModel: GridPaginationModel) => {
      return useQuery<GetProductsResponse>({
            queryKey: ["products", paginationModel.page, paginationModel.pageSize],
            queryFn: async () => {
                  const res = await getProductsApi({
                        page: paginationModel.page + 1,
                        limit: paginationModel.pageSize
                  });
                  return res.data;
            },
            placeholderData: (prev) => prev
      });
};
