import React from "react";
import { Phone, Mail, Instagram } from "lucide-react";

export default function Catering() {
  return (
    <div className="w-full bg-background min-h-screen">
      {/* Hero */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-white/15 z-10"/>
        <img 
          src="/images/group.jpg" 
          alt="Catering setup" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20 text-center text-white mt-16 flex flex-col items-center">
          <img
            src="/images/catering-logo-transparent.png"
            alt="Summa Dis Summa Dat Catering"
            className="h-52 md:h-64 w-auto object-contain mb-6 drop-shadow-2xl"
          />
          <p className="text-xl md:text-2xl text-black/90 max-w-3xl mx-auto">
            From joyful family reunions to large corporate events, we bring the warmth, flavor, and generosity of Summa Dis Summa Dat right to your venue.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div>
            <h2 className="font-serif text-4xl font-bold mb-8">Full-Service Catering with Soul</h2>
            <div className="space-y-8 text-lg text-muted-foreground">
              <p>
                When you book Summa Dis Summa Dat for your event, you're not just getting food—you're getting an experience. We handle the heavy lifting so you can focus on enjoying yourself and have a full belly.
              </p>
              
              <div>
                <h3 className="font-bold text-foreground text-xl mb-4">What we do best:</h3>
                <ul className="space-y-3 list-disc list-inside ml-4">
                  <li>Family Reunions &amp; Cookouts</li>
                  <li>Corporate Lunches &amp; Retreats</li>
                  <li>Weddings &amp; Anniversaries</li>
                  <li>Holiday Parties</li>
                  <li>Milestone Birthdays</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border mt-8">
                <h3 className="font-bold text-primary text-xl mb-3">How it works</h3>
                <p className="mb-4">
                  Reach out to us directly via phone, email, or Instagram with your event details. We'll get back to you within 48 hours to discuss menu options, dietary needs, and pricing.
                </p>
                <p className="text-sm font-medium">
                  * Please note: We require a minimum of 2 weeks' notice for all catering orders. Minimum order is for 20 guests.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Side */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-3xl font-bold mb-2 text-foreground">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">Ready to book or just have questions? Reach out through any of the options below.</p>
            </div>

            <a
              href="tel:7744370594"
              className="group flex items-center gap-5 bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200"
            >
              <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-lg">Call Us</p>
                <p className="text-muted-foreground">(774) 437-0594</p>
              </div>
            </a>

            <a
              href="mailto:nayssummadissummadat@gmail.com"
              className="group flex items-center gap-5 bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200"
            >
              <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-lg">Email Us</p>
                <p className="text-muted-foreground">nayssummadissummadat@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/summadissummadat_kitchen?igsh=MTI5dmNsYjZ0ZTRkaQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200"
            >
              <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200 shrink-0">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-lg">Instagram</p>
                <p className="text-muted-foreground">@nayssummadissummadat</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
