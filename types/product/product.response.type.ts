import { PaginatedResponse } from "../api.type";
import { Product } from "./product.type";

export type GetProductsResponse = PaginatedResponse<Product[]>;
