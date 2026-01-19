"use client";

import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
      const token = useAuthStore((s) => s.token);
      const hasHydrated = useAuthStore((s) => s.hasHydrated);
      const router = useRouter();

      useEffect(() => {
            if (!hasHydrated) return; // ⛔ tunggu hydrate selesai

            if (!token) {
                  router.replace("/login");
            }
      }, [token, hasHydrated, router]);

      // ⛔ jangan render apa-apa sebelum hydrate
      if (!hasHydrated) return null;

      // ⛔ hydrate selesai tapi tidak ada token
      if (!token) return null;

      return <>{children}</>;
}
