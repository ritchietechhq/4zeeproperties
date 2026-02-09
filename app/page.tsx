import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="absolute top-0 w-full z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <Building2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">4zeeproperties</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#" className="hover:text-primary transition-colors">Buy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Rent</Link>
            <Link href="#" className="hover:text-primary transition-colors">Sell</Link>
            <Link href="#" className="hover:text-primary transition-colors">Agents</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/auth">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-grid-small-black/20 dark:bg-grid-small-white/20">
        <div className="absolute inset-0 bg-background/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              The #1 Real Estate Platform
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              Find your place <br className="hidden md:block"/>
              <span className="text-primary">in the world.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We connect you with the best properties and top-rated agents in your area. 
              Whether you are buying, selling, or renting, we make the process seamless.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/auth">
                <Button size="lg" className="h-12 px-8 text-base">
                  Start Exploring
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                View Listings
              </Button>
            </div>
            
            <div className="pt-8 flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Verified Listings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Expert Agents</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Secure Payments</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
