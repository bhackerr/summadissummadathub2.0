import React from "react";
import { ExternalLink } from "lucide-react";

export default function Wholesale() {
  return (
    <div className="w-full bg-background min-h-screen">
      {/* Header */}
      <div className="bg-secondary py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="flex justify-center mb-8">
            <img
              src="/images/logo-transparent.png"
              alt="Nay's Summa Dis Summa Dat Kitchen"
              className="h-52 w-auto object-contain drop-shadow-2xl"
            />
          </div>
          <span className="text-secondary-foreground/70 uppercase tracking-widest font-bold text-sm mb-4 block">Partner With Us</span>
          <h1 className="font-display text-5xl md:text-7xl text-secondary-foreground mb-6">Wholesale Products</h1>
          <p className="text-xl text-secondary-foreground/90 max-w-2xl mx-auto mb-10">
            Bring the signature flavors of Nay's Kitchen to your grocery store, restaurant, or specialty shop.
          </p>
          <a
            href="YOUR_WHOLESALE_URL_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 py-5 rounded-full transition-colors duration-200"
          >
            Visit Our Wholesale Portal
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div>
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-10">
              <img 
                src="/images/food.jpg" 
                alt="Nay's Wholesale Products" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div>
            <h2 className="font-serif text-3xl font-bold mb-6">Our Product Lines</h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-foreground font-bold text-xl mb-2">Signature Sauces &amp; Marinades</h3>
                <p>Our famous Tangy BBQ, Sweet &amp; Spicy Mustard, and Fiery Hot Sauce, bottled and ready for retail shelves or back-of-house use.</p>
              </div>
              <div>
                <h3 className="text-foreground font-bold text-xl mb-2">Dry Rubs &amp; Seasoning Blends</h3>
                <p>The secret is out. Our proprietary blends for poultry, pork, and seafood are available in retail shakers and bulk tubs.</p>
              </div>
              <div>
                <h3 className="text-foreground font-bold text-xl mb-2">Prepared Sides (Foodservice Only)</h3>
                <p>Restaurants and caterers can order our Five-Cheese Mac, Collard Greens, and Yams in large-format foodservice trays.</p>
              </div>
            </div>

            <div className="mt-10 bg-primary/10 border border-primary/20 p-6 rounded-2xl">
              <h3 className="text-primary font-bold text-lg mb-2">Wholesale Requirements</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Valid Reseller Permit / Tax ID required</li>
                <li>Minimum opening order: $250 for retail, $500 for foodservice</li>
                <li>Standard lead time: 7-10 business days</li>
                <li>Local delivery available; shipping calculated at checkout</li>
              </ul>
            </div>

            <div className="mt-8">
              <a
                href="YOUR_WHOLESALE_URL_HERE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-4 rounded-full transition-colors duration-200"
              >
                Go to Wholesale Portal
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
