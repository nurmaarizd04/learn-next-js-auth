"use client";

import { useGetTicketDetail } from "@/hooks/use.ticket";
import { Button, CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useParams } from "next/navigation";

function PageDetailTicket() {
      const params = useParams();
      const id = params.id as string;

      const { data, isLoading } = useGetTicketDetail(id);

      if (isLoading) {
            return (
                  <Box display="flex" justifyContent="center" mt={6}>
                        <CircularProgress />
                  </Box>
            );
      }

      if (!data) {
            return <Typography>Ticket not found</Typography>;
      }

      return (
            <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
                              {data.payload.description}
                        </Typography>
                        <Typography variant="h5" component="div">
                              {data.payload.reference_code}
                        </Typography>
                        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>adjective</Typography>
                        <Typography variant="body2">{data.payload.category?.name}</Typography>
                        <Button variant="contained">{data.payload.status}</Button>
                  </CardContent>
            </Card>
      );
}

export default PageDetailTicket;
