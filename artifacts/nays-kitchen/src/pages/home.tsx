import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="/images/hero.png" 
          alt="Soul food spread" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          <span className="font-script block text-6xl md:text-6xl text-primary mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Nay's
          </span>
          <h1 className="font-lobster text-7xl md:text-9xl lg:text-[10rem] mb-6 max-w-5xl mx-auto leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
            Summa Dis, Summa Dat.
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 max-w-2xl mx-auto text-white/90 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            Soulful, generous, home-cooked meals that bring the community together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <Button asChild size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-full font-bold">
              <Link href="/menu">Order Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-full font-bold bg-transparent text-white border-white hover:bg-white hover:text-foreground">
              <Link href="/catering">Book Catering</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
            Real food from real people.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We don't do fancy fine-dining, and we definitely don't do fast food. We do Sunday afternoon at grandma's house. Every plate we serve tells a story of passion, flavor, and deep community roots. Whether you're grabbing a quick bite, feeding a family reunion, or stocking our sauces on your shelves—we got you.
          </p>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Kitchen */}
            <div className="group cursor-pointer">
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                <img src="/images/fried-chicken.png" alt="Fried Chicken" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-6 left-6 font-serif text-3xl font-bold text-white">The Kitchen</h3>
              </div>
              <p className="text-muted-foreground mb-4 text-lg">Signature dishes and daily offerings served fresh, hot, and with a whole lotta soul.</p>
              <Link href="/menu" className="inline-flex items-center font-bold text-primary hover:text-primary/80 transition-colors">
                View Menu <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Catering */}
            <div className="group cursor-pointer">
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                <img src="/images/catering.png" alt="Catering Setup" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-6 left-6 font-serif text-3xl font-bold text-white">Catering</h3>
              </div>
              <p className="text-muted-foreground mb-4 text-lg">From family cookouts to corporate events, let us feed your crowd with love.</p>
              <Link href="/catering" className="inline-flex items-center font-bold text-primary hover:text-primary/80 transition-colors">
                Book Us <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Wholesale */}
            <div className="group cursor-pointer">
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                <img src="/images/wholesale.png" alt="Wholesale products" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-6 left-6 font-serif text-3xl font-bold text-white">Wholesale</h3>
              </div>
              <p className="text-muted-foreground mb-4 text-lg">Bring Nay's signature sauces and seasonings to your store or restaurant.</p>
              <Link href="/wholesale" className="inline-flex items-center font-bold text-primary hover:text-primary/80 transition-colors">
                Partner Up <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="/images/logo-transparent.png"
                alt="Nay's Kitchen"
                className="h-36 w-auto object-contain flex-shrink-0"
              />
              <div>
                <span className="font-script text-primary text-xl block mb-2">For Retailers & Restaurants</span>
                <h2 className="font-lobster text-4xl md:text-5xl mb-4 leading-tight">
                  Carry Nay's on Your Shelves
                </h2>
                <p className="text-white/70 text-lg max-w-xl">
                  Our signature sauces, seasonings, and prepared sides are available for wholesale. Visit our dedicated wholesale portal to browse product lines, check minimum orders, and apply for a partnership account.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <a
                href="https://wholesale.nayskitchen.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 py-5 rounded-full transition-colors duration-200 whitespace-nowrap"
              >
                Visit Wholesale Site
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dish Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl -z-10" />
            <img src="/images/mac-and-cheese.png" alt="Mac and Cheese" className="w-full h-auto rounded-3xl shadow-2xl transform -rotate-2" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
              The Mac That Made Us Famous.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Baked to golden perfection with five different cheeses, a crispy crust, and a rich, creamy center. It's the side dish that steals the show every single time. Come see what the hype is about.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/menu">Get Yours Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
