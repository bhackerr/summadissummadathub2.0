import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MENU_ITEMS = [
  {
    id: 1,
    name: "Nay's Famous Fried Chicken",
    description: "Three pieces of golden, crispy, buttermilk-brined chicken seasoned with our secret spice blend.",
    price: 16.99,
    category: "Mains",
    isPopular: true,
  },
  {
    id: 2,
    name: "Smothered Pork Chops",
    description: "Tender center-cut chops slow-cooked in a rich, savory brown gravy over a bed of white rice.",
    price: 18.99,
    category: "Mains",
    isPopular: false,
  },
  {
    id: 3,
    name: "Braised Oxtails",
    description: "Fall-off-the-bone oxtails braised for 6 hours with carrots and butter beans in a deep, flavorful jus.",
    price: 24.99,
    category: "Mains",
    isPopular: true,
  },
  {
    id: 4,
    name: "Five-Cheese Baked Mac",
    description: "Our signature side. Creamy, cheesy, and baked until perfectly golden on top.",
    price: 6.99,
    category: "Sides",
    isPopular: true,
  },
  {
    id: 5,
    name: "Slow-Cooked Collard Greens",
    description: "Fresh greens simmered low and slow with smoked turkey and a touch of heat.",
    price: 5.99,
    category: "Sides",
    isPopular: false,
  },
  {
    id: 6,
    name: "Candied Yams",
    description: "Sweet, buttery, and spiced with cinnamon and nutmeg.",
    price: 5.99,
    category: "Sides",
    isPopular: false,
  },
  {
    id: 7,
    name: "Honey Butter Cornbread",
    description: "Two thick slices of warm cornbread drizzled with sweet honey butter.",
    price: 4.99,
    category: "Sides",
    isPopular: true,
  },
  {
    id: 8,
    name: "Peach Cobbler",
    description: "Warm, spiced peaches baked under a flaky, buttery crust. Like a hug on a plate.",
    price: 7.99,
    category: "Desserts",
    isPopular: true,
  },
  {
    id: 9,
    name: "Banana Pudding",
    description: "Layers of creamy vanilla pudding, fresh bananas, and toasted vanilla wafers.",
    price: 6.99,
    category: "Desserts",
    isPopular: false,
  },
  {
    id: 10,
    name: "Sweet Tea",
    description: "Ice cold, perfectly brewed, and sweet exactly the way it should be.",
    price: 3.99,
    category: "Drinks",
    isPopular: true,
  },
  {
    id: 11,
    name: "Half & Half",
    description: "The perfect blend of our sweet tea and fresh squeezed lemonade.",
    price: 3.99,
    category: "Drinks",
    isPopular: false,
  },
];

const CATEGORIES = ["All", "Mains", "Sides", "Desserts", "Drinks"];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="w-full bg-background min-h-screen pb-24">
      {/* Header */}
      <div className="bg-card py-20 px-4 border-b border-border/40">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">Our Kitchen</h1>
          <p className="text-xl text-muted-foreground">
            Fresh ingredients. Slow cooked. Served with soul. Check out what's hot today.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="rounded-full px-6"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <Card key={item.id} className="flex flex-col hover:border-primary/50 transition-colors bg-card">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  {item.isPopular && (
                    <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary">Fan Favorite</Badge>
                  )}
                </div>
                <CardTitle className="font-serif text-2xl mb-2">{item.name}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto pt-6 flex justify-between items-center">
                <span className="text-2xl font-bold text-foreground">${item.price.toFixed(2)}</span>
                <Button className="rounded-full">Add to Order</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
