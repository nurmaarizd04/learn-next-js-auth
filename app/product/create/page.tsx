"use client";

import {
      Box,
      Button,
      Card,
      CardContent,
      MenuItem,
      Stack,
      TextField,
      Typography
} from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCreateProduct } from "@/hooks/use.product";
import { CreateProduct } from "@/types/product/product.type";

const STATUS_OPTIONS = ["ACTIVE", "INACTIVE"];

export default function CreateProductPage() {
      const router = useRouter();
      const { mutate, isPending } = useCreateProduct();

      const [form, setForm] = useState<CreateProduct>({
            name: "",
            description: "",
            status: ""
      });

      const handleChange =
            (key: keyof CreateProduct) => (e: React.ChangeEvent<HTMLInputElement>) => {
                  setForm((prev) => {
                        if (!prev) return prev;

                        return {
                              ...prev,
                              [key]: e.target.value
                        };
                  });
            };

      const handleSubmit = () => {
            console.log("form", form);

            mutate(form, {
                  onSuccess: () => {
                        router.push("/product");
                  }
            });
      };

      return (
            <Box maxWidth={600} mx="auto" mt={6}>
                  <Card>
                        <CardContent>
                              <Typography variant="h5" mb={3}>
                                    Create Product
                              </Typography>

                              <Stack spacing={2}>
                                    <TextField
                                          label="Name"
                                          name="name"
                                          value={form.name}
                                          onChange={handleChange("name")}
                                          fullWidth
                                          required
                                    />

                                    <TextField
                                          label="Description"
                                          name="description"
                                          value={form.description}
                                          onChange={handleChange("description")}
                                          fullWidth
                                          multiline
                                          rows={3}
                                    />

                                    <TextField
                                          select
                                          label="Status"
                                          name="status"
                                          value={form.status}
                                          onChange={handleChange("status")}
                                          fullWidth
                                    >
                                          {STATUS_OPTIONS.map((status) => (
                                                <MenuItem key={status} value={status}>
                                                      {status}
                                                </MenuItem>
                                          ))}
                                    </TextField>

                                    <Stack direction="row" spacing={2} justifyContent="flex-end">
                                          <Button variant="outlined" onClick={() => router.back()}>
                                                Cancel
                                          </Button>

                                          <Button
                                                variant="contained"
                                                onClick={handleSubmit}
                                                disabled={isPending}
                                          >
                                                Create
                                          </Button>
                                    </Stack>
                              </Stack>
                        </CardContent>
                  </Card>
            </Box>
      );
}
