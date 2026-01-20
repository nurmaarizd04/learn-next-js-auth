import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
      createProduct,
      deleteProduct,
      getProductDetail,
      getProductsApi
} from "@/services/product.service";
import { GridPaginationModel } from "@mui/x-data-grid";
import { GetProductsResponse } from "@/types/product/product.response.type";
import { CreateProduct, Product, UpdateProductPayload } from "@/types/product/product.type";
import { ApiResponse, CreatedApiResponse } from "@/types/api.type";
import { updateProduct } from "@/services/product.service";

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

export const useGetProductDetail = (id: string) => {
      return useQuery<ApiResponse<Product>>({
            queryKey: ["product", id],
            queryFn: async () => {
                  const res = await getProductDetail(id);
                  return res.data;
            },
            enabled: !!id
      });
};

export const useCreateProduct = () => {
      const queryClient = useQueryClient();

      return useMutation<CreatedApiResponse, Error, CreateProduct>({
            mutationFn: async (payload) => {
                  const res = await createProduct(payload);
                  return res.data;
            },
            onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ["products"] });
            }
      });
};

export const useUpdateProduct = () => {
      const queryClient = useQueryClient();

      return useMutation<CreatedApiResponse, Error, UpdateProductPayload>({
            mutationFn: async ({ id, data }) => {
                  const res = await updateProduct(id, data);
                  return res.data;
            },
            onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ["products"] });
            }
      });
};

export const useDeleteProduct = () => {
      const queryClient = useQueryClient();

      return useMutation<CreatedApiResponse, Error, string>({
            mutationFn: async (id: string) => {
                  const res = await deleteProduct(id);
                  return res.data;
            },
            onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ["products"] });
            }
      });
};
