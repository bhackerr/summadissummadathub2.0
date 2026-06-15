import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="w-full bg-background min-h-screen pb-24">
      {/* Hero */}
      <div className="container mx-auto px-4 pt-24 pb-16 text-center max-w-4xl">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-8">
          The Story Behind the Stove
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          It started with a recipe, a cast iron skillet, and a whole lotta love. 
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-4xl font-bold mb-6 text-foreground">Meet Nay</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Renee "Nay" Johnson didn't go to culinary school. She went to the school of Sunday dinners, holiday cookouts, and standing on a stool next to her grandmother's stove, learning that cooking isn't just about measurements—it's about feeling.
              </p>
              <p>
                "Summa dis, summa dat" was her grandmother's constant refrain. A pinch of this, a dash of that. You cook until your spirit says it's right. That philosophy became the foundation of Nay's Kitchen.
              </p>
              <p>
                What started as a side hustle selling plates out of her home kitchen quickly grew into a community staple. People didn't just come for the food; they came for the feeling. They came because eating Nay's food felt like coming home.
              </p>
              <p>
                Today, Nay's Kitchen is a full-service operation, offering hot meals, event catering, and a line of wholesale products. But the secret ingredient remains exactly the same: unapologetic, generous love.
              </p>
            </div>
            
            <div className="mt-10">
              <Button asChild size="lg" className="rounded-full text-lg px-8">
                <Link href="/menu">Taste the Love</Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img 
                src="/images/about-kitchen.png" 
                alt="Nay's homestyle kitchen" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </div>
        </div>

        <div className="mt-32 text-center bg-card p-12 md:p-24 rounded-3xl border border-border">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 max-w-3xl mx-auto">
            "Food is the one language everybody speaks. We're just here to make sure it tastes good."
          </h2>
          <p className="text-xl font-bold text-primary">— Nay</p>
        </div>
      </div>
    </div>
  );
}
