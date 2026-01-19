import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

import { loginApi } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";
import { LoginErrorResponse } from "@/types/auth.type";

export const useLogin = () => {
      const setToken = useAuthStore((s) => s.setToken);
      const router = useRouter();

      return useMutation({
            mutationFn: loginApi,

            onSuccess: (res) => {
                  const token = res.data?.payload.access_token;

                  setToken(token);

                  router.push("/product");
            },

            onError: (error: AxiosError<LoginErrorResponse>) => {
                  console.error(error.response?.data.message);
            }
      });
};
