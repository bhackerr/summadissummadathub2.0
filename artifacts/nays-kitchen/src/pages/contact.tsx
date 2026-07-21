import React from "react";
import { Phone, Mail, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full bg-background min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">Holla At Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got a question? Want to book something? Slide in — we don't bite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone */}
          <a
            href="tel:7744370594"
            className="group bg-card p-8 rounded-3xl border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200 flex flex-col items-center text-center gap-4"
          >
            <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
              <Phone className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Call Us</h3>
              <p className="text-muted-foreground">(774) 437-0594</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:nayssummadissummadat@gmail.com"
            className="group bg-card p-8 rounded-3xl border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200 flex flex-col items-center text-center gap-4"
          >
            <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
              <Mail className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Email Us</h3>
              <p className="text-muted-foreground break-all">nayssummadissummadat@gmail.com</p>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/summadissummadat_kitchen?igsh=MTI5dmNsYjZ0ZTRkaQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card p-8 rounded-3xl border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200 flex flex-col items-center text-center gap-4"
          >
            <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
              <Instagram className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Instagram</h3>
              <p className="text-muted-foreground">@nayssummadissummadat</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
