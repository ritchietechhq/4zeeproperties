"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Legacy client login route – redirects to the unified login page.
 */
export default function ClientLogin() {
  const router = useRouter();

<<<<<<< HEAD
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.login(form);
      if (response?.success) {
        router.push("/client/dashboard");
      } else {
        setError(response?.error || "Invalid email or password.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
=======
  useEffect(() => {
    router.replace("/auth/login");
  }, [router]);
>>>>>>> a5fed51c8aebd108f32c50818e41acf8bd643980

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-muted-foreground">Redirecting to login…</p>
    </div>
  );
}