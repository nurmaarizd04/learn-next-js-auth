import axiosInstanceProducts from "@/libs/axios.product";
import { ApiResponse, CreatedApiResponse } from "@/types/api.type";
import { PaginationParams } from "@/types/pagination.type";
import { GetProductsResponse } from "@/types/product/product.response.type";
import { CreateProduct, Product } from "@/types/product/product.type";

export const getProductsApi = (params: PaginationParams) => {
      return axiosInstanceProducts.get<GetProductsResponse>("/category", { params });
};

export const getProductDetail = (id: string) => {
      return axiosInstanceProducts.get<ApiResponse<Product>>(`/category/${id}`);
};

export const createProduct = (payload: CreateProduct) => {
      return axiosInstanceProducts.post<CreatedApiResponse>("/category", payload);
};
export const updateProduct = (id: string, payload: CreateProduct) => {
      return axiosInstanceProducts.put<CreatedApiResponse>(`/category/${id}`, payload);
};

export const deleteProduct = (id: string) => {
      return axiosInstanceProducts.delete<CreatedApiResponse>(`/category/${id}`);
};
