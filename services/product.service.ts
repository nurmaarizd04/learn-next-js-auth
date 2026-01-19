import axiosInstanceProducts from "@/libs/axios.product";
import { PaginationParams } from "@/types/pagination.type";
import { GetProductsResponse } from "@/types/product/product.response.type";

export const getProductsApi = (params: PaginationParams) => {
      return axiosInstanceProducts.get<GetProductsResponse>("/category", { params });
};
