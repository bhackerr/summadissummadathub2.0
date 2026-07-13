import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const cateringSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  eventType: z.string().min(1, "Please select an event type"),
  date: z.string().min(1, "Date is required"),
  guests: z.string().min(1, "Number of guests is required"),
  message: z.string().optional(),
});

type CateringFormValues = z.infer<typeof cateringSchema>;

export default function Catering() {
  const form = useForm<CateringFormValues>({
    resolver: zodResolver(cateringSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      date: "",
      guests: "",
      message: "",
    },
  });

  const onSubmit = (data: CateringFormValues) => {
    console.log(data);
    toast({
      title: "Inquiry Sent!",
      description: "We've received your catering request and will be in touch soon.",
    });
    form.reset();
  };

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Hero */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/35 z-10"/>
        <img 
          src="/images/family.jpg" 
          alt="Catering setup" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20 text-center text-white mt-16 flex flex-col items-center">
          <img
            src="/images/catering-logo-transparent.png"
            alt="Summa Dis Summa Dat Catering"
            className="h-52 md:h-64 w-auto object-contain mb-6 drop-shadow-2xl"
          />
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            From joyful family reunions to large corporate events, we bring the warmth, flavor, and generosity of Summa Dis Summa Dat right to your venue.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
                  <li>Family Reunions & Cookouts</li>
                  <li>Corporate Lunches & Retreats</li>
                  <li>Weddings & Anniversaries</li>
                  <li>Holiday Parties</li>
                  <li>Milestone Birthdays</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border mt-8">
                <h3 className="font-bold text-primary text-xl mb-3">How it works</h3>
                <p className="mb-4">
                  Fill out the inquiry form with your event details. Our team will review your request and reach out within 48 hours to discuss menu options, dietary needs, and pricing.
                </p>
                <p className="text-sm font-medium">
                  * Please note: We require a minimum of 2 weeks' notice for all catering orders. Minimum order is for 20 guests.
                </p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-card p-8 md:p-12 rounded-3xl shadow-xl border border-border/50">
            <h3 className="font-serif text-3xl font-bold mb-8 text-foreground">Request a Quote</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select event type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="wedding">Wedding</SelectItem>
                            <SelectItem value="corporate">Corporate Event</SelectItem>
                            <SelectItem value="family">Family Reunion / Cookout</SelectItem>
                            <SelectItem value="birthday">Birthday Party</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estimated Guests</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select headcount" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="20-50">20 - 50 guests</SelectItem>
                            <SelectItem value="51-100">51 - 100 guests</SelectItem>
                            <SelectItem value="101-200">101 - 200 guests</SelectItem>
                            <SelectItem value="200+">200+ guests</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Details (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us a bit more about your event, venue, or dietary restrictions..." 
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full text-lg rounded-full h-14">
                  Send Inquiry
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
