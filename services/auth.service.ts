import axiosInstance from "@/libs/axios";
import { LoginRequest, LoginResponse } from "@/types/auth.type";

export const loginApi = (payload: LoginRequest) => {
      return axiosInstance.post<LoginResponse>("/login", payload);
};
