"use client";

import { useState } from "react";
import { useLogin } from "@/hooks/use.login";
import { Button, TextField, Stack, Typography } from "@mui/material";

export default function LoginPage() {
      const { mutate: login, isPending } = useLogin();

      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      const handleSubmit = () => {
            login({ email, password });
      };

      return (
            <Stack
                  spacing={2}
                  maxWidth={360}
                  mx="auto"
                  mt={12}
                  p={3}
                  boxShadow={1}
                  borderRadius={2}
                  bgcolor="white"
            >
                  <Typography variant="h6" textAlign="center">
                        Login
                  </Typography>

                  <TextField
                        id="email"
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                  />

                  <TextField
                        id="password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                  />

                  <Button variant="contained" onClick={handleSubmit} disabled={isPending} fullWidth>
                        {isPending ? "Loading..." : "Login"}
                  </Button>
            </Stack>
      );
}
