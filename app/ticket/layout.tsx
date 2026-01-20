"use client";

import AuthGuard from "@/components/auth.guard";

export default function TicketLayout({ children }: { children: React.ReactNode }) {
      return <AuthGuard>{children}</AuthGuard>;
}
