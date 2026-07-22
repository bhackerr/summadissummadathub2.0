import React, { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/catering", label: "Catering" },
    { href: "/wholesale", label: "Wholesale" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-black shadow-lg" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/cateringnn.png"
              alt="Nay's Summa Dis Summa Dat Kitchen"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary border-b-2 border-primary py-1" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="font-bold tracking-wide rounded-full px-6">
              <Link href="/menu">Order Now</Link>
            </Button>
          </nav>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xl font-serif font-medium transition-colors ${
                      location === link.href ? "text-primary" : "text-foreground/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 w-full font-bold py-6 text-lg rounded-full">
                  <Link href="/menu">Order Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-foreground text-background py-16 mt-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <img
              src="/images/cateringnn.png"
              alt="Nay's Summa Dis Summa Dat Kitchen"
              className="h-28 w-auto object-contain mb-4"
            />
            <p className="text-background/80 max-w-md leading-relaxed">
              Summa dis, summa dat, and a whole lotta love. Serving up soulful, home-cooked meals that bring the community together, one plate at a time.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/80 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-background/80">
              
              <li>(774) 437-0594</li>
              <li>hello@nayskitchen.com</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-background/20 text-center text-background/60 text-sm">
          © {new Date().getFullYear()} Nay's Summa Dis Summa Dat Kitchen. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
