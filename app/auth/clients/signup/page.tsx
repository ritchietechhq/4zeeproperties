"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Mail, Lock, User } from "lucide-react";
import { api } from "@/lib/api";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ClientSignupPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.clientSignup(form);
      if (response?.success) {
        // Redirect to Client Login
        router.push("/auth/clients/login");
      } else {
        setError(response?.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-muted/40 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        <div className="p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">Sign Up</h1>
            <p className="text-muted-foreground text-sm">
              Create your account to access your portal.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                <p className="text-destructive text-sm text-center font-medium">{error}</p>
              </div>
            )}

            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={16} className="text-muted-foreground" />
                </span>
                <Input
                  id="name"
                  required
                  type="text"
                  value={form.name}
                  placeholder="John Doe"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="pl-9"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={16} className="text-muted-foreground" />
                </span>
                <Input
                  id="email"
                  required
                  type="email"
                  value={form.email}
                  placeholder="name@example.com"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="pl-9"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={16} className="text-muted-foreground" />
                </span>
                <Input
                  id="password"
                  required
                  type="password"
                  value={form.password}
                  placeholder="Create a strong password"
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="pl-9"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full"
              size="lg"
            >
              <span>{loading ? "Creating Account..." : "Sign Up"}</span>
              {!loading && <ArrowRight size={16} className="ml-2" />}
            </Button>
          </form>

          {/* Sign In Link */}
          <p className="text-center text-muted-foreground text-sm mt-6">
            Already have an account?{" "}
            <a href="/auth/clients/login" className="text-primary font-semibold hover:underline">
              Sign In
            </a>
          </p>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
          <p className="text-muted-foreground text-xs">
            By signing up, you agree to our{" "}
            <a href="#" className="text-primary hover:underline">Terms</a>
            {" "}and{" "}
            <a href="#" className="text-primary hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}
