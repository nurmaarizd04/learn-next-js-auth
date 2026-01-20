export type ApiResponse<T> = {
      code: number;
      message: string;
      payload: T;
};

export type PaginatedResponse<T> = ApiResponse<T> & {
      page_info: {
            page: number;
            per_page: number;
            page_count: number;
            total_count: number;
      };
};

export type CreatedApiResponse = {
      code: number;
      message: string;
};
