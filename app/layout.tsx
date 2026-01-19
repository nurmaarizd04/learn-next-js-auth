"use client";

import ThemeRegistry from "@/components/theme.registry";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
      return (
            <html lang="en">
                  <body>
                        <QueryClientProvider client={queryClient}>
                              <ThemeRegistry>{children}</ThemeRegistry>
                        </QueryClientProvider>
                  </body>
            </html>
      );
}
