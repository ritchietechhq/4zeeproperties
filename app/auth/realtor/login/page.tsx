"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Legacy realtor login route – redirects to the unified login page.
 */
export default function RealtorLogin() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/auth/login");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-muted-foreground">Redirecting to login…</p>
    </div>
  );
}