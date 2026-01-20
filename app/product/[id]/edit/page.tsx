"use client";

import { useEffect, useState } from "react";
import { Box, Button, CircularProgress, MenuItem, TextField, Typography } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { useGetProductDetail, useUpdateProduct } from "@/hooks/use.product";
import { CreateProduct } from "@/types/product/product.type";

export default function EditProductPage() {
      const { id } = useParams<{ id: string }>();
      const router = useRouter();

      const { data, isLoading } = useGetProductDetail(id);
      const { mutate: updateProduct, isPending } = useUpdateProduct();

      const [form, setForm] = useState<CreateProduct | null>(null);

      // ✅ Sinkronisasi query → local state
      useEffect(() => {
            if (data?.payload) {
                  setForm({
                        name: data.payload.name,
                        description: data.payload.description,
                        status: data.payload.status
                  });
            }
      }, [data]);

      if (isLoading || !form) {
            return (
                  <Box display="flex" justifyContent="center" mt={6}>
                        <CircularProgress />
                  </Box>
            );
      }

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
            updateProduct(
                  { id, data: form },
                  {
                        onSuccess: () => router.push("/product")
                  }
            );
      };

      return (
            <Box maxWidth={500} mx="auto" mt={6}>
                  <Typography variant="h5" mb={3}>
                        Edit Product
                  </Typography>

                  <TextField
                        fullWidth
                        label="Name"
                        value={form.name}
                        onChange={handleChange("name")}
                        margin="normal"
                  />

                  <TextField
                        fullWidth
                        label="Description"
                        value={form.description}
                        onChange={handleChange("description")}
                        margin="normal"
                        multiline
                        rows={3}
                  />

                  <TextField
                        fullWidth
                        select
                        label="Status"
                        value={form.status}
                        onChange={handleChange("status")}
                        margin="normal"
                  >
                        <MenuItem value="ACTIVE">ACTIVE</MenuItem>
                        <MenuItem value="INACTIVE">INACTIVE</MenuItem>
                  </TextField>

                  <Box display="flex" justifyContent="flex-end" gap={2} mt={3}>
                        <Button variant="outlined" onClick={() => router.back()}>
                              Cancel
                        </Button>
                        <Button variant="contained" onClick={handleSubmit} disabled={isPending}>
                              {isPending ? "Updating..." : "Update"}
                        </Button>
                  </Box>
            </Box>
      );
}
