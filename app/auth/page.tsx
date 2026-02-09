"use client";

import { useRouter } from "next/navigation";
import { User, Home, ChevronRight, Building2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AuthRoleSelect() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-muted/40 flex flex-col">
      {/* Header */}
      <header className="px-6 py-6 md:px-12 lg:px-20 border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <Building2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">4zeeproperties</span>
          </div>
          <Button 
            variant="ghost" 
            onClick={() => router.push("/auth/login")}
            className="flex items-center gap-2"
          >
            Sign in
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 md:py-20 animate-in fade-in duration-500">
        <div className="w-full max-w-5xl">
          {/* Heading */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Welcome to 4zeeproperties
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Choose your journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Select your role to access a personalized dashboard tailored to your real estate needs.
            </p>
          </div>

          {/* Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Client Option */}
            <Card 
              className="group cursor-pointer border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 bg-card relative overflow-hidden"
              onClick={() => router.push("/auth/clients/signup")}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <User className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">I am a Client</CardTitle>
                <CardDescription className="text-base text-muted-foreground mt-2">
                  Find your dream home, browse exclusive listings, and connect with top-rated agents.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Browse 1000+ properties
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Save your favorites
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                 <Button className="w-full group-hover:bg-primary/90">
                    Get Started
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                 </Button>
              </CardFooter>
            </Card>

            {/* Realtor Option */}
            <Card 
              className="group cursor-pointer border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 bg-card relative overflow-hidden"
              onClick={() => router.push("/auth/realtor/signup")}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Home className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">I am a Realtor</CardTitle>
                <CardDescription className="text-base text-muted-foreground mt-2">
                  List properties, manage leads, and grow your real estate business with our pro tools.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Post unlimited listings
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Access analytics dashboard
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                 <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5 hover:text-primary">
                    Join as Pro
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                 </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 4zeeproperties. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
