export type LoginRequest = {
      email: string;
      password: string;
};

export type LoginResponse = {
      token: string;
      payload: {
            access_token: string;
      };
};

export type LoginErrorResponse = {
      message: string;
};
