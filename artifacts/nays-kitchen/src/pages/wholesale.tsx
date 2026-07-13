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

const wholesaleSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  businessType: z.string().min(1, "Please select a business type"),
  products: z.string().min(1, "Please indicate products of interest"),
});

type WholesaleFormValues = z.infer<typeof wholesaleSchema>;

export default function Wholesale() {
  const form = useForm<WholesaleFormValues>({
    resolver: zodResolver(wholesaleSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      businessType: "",
      products: "",
    },
  });

  const onSubmit = (data: WholesaleFormValues) => {
    console.log(data);
    toast({
      title: "Application Received!",
      description: "Our wholesale team will contact you within 2-3 business days.",
    });
    form.reset();
  };

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
            href="https://wholesale.nayskitchen.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 py-5 rounded-full transition-colors duration-200"
          >
            Visit Our Wholesale Portal
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image & Details */}
          <div>
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-10">
              <img 
                src="/images/food.jpg" 
                alt="Nay's Wholesale Products" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <h2 className="font-serif text-3xl font-bold mb-6">Our Product Lines</h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-foreground font-bold text-xl mb-2">Signature Sauces & Marinades</h3>
                <p>Our famous Tangy BBQ, Sweet & Spicy Mustard, and Fiery Hot Sauce, bottled and ready for retail shelves or back-of-house use.</p>
              </div>
              <div>
                <h3 className="text-foreground font-bold text-xl mb-2">Dry Rubs & Seasoning Blends</h3>
                <p>The secret is out. Our proprietary blends for poultry, pork, and seafood are available in retail shakers and bulk tubs.</p>
              </div>
              <div>
                <h3 className="text-foreground font-bold text-xl mb-2">Prepared Sides (Foodservice Only)</h3>
                <p>Restaurants and caterers can order our Five-Cheese Mac, Collard Greens, and Yams in large-format foodservice trays.</p>
              </div>
            </div>

            <div className="mt-12 bg-primary/10 border border-primary/20 p-6 rounded-2xl">
              <h3 className="text-primary font-bold text-lg mb-2">Wholesale Requirements</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Valid Reseller Permit / Tax ID required</li>
                <li>Minimum opening order: $250 for retail, $500 for foodservice</li>
                <li>Standard lead time: 7-10 business days</li>
                <li>Local delivery available; shipping calculated at checkout</li>
              </ul>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-card p-8 md:p-12 rounded-3xl shadow-xl border border-border/50 sticky top-28">
            <h3 className="font-serif text-3xl font-bold mb-2 text-foreground">Become a Partner</h3>
            <p className="text-muted-foreground mb-8">Fill out the application below to access wholesale pricing and bulk ordering.</p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Acme Grocery Co." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contactName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Person</FormLabel>
                      <FormControl>
                        <Input placeholder="Jane Smith" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="jane@example.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                </div>

                <FormField
                  control={form.control}
                  name="businessType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="retail">Retail / Grocery / Corner Store</SelectItem>
                          <SelectItem value="restaurant">Restaurant / Cafe</SelectItem>
                          <SelectItem value="caterer">Caterer</SelectItem>
                          <SelectItem value="distributor">Distributor</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="products"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Products of Interest</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us which products you're looking to carry..." 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full text-lg rounded-full h-14">
                  Submit Application
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
