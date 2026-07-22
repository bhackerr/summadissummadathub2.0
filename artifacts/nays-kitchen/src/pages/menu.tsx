import React, { useState } from "react";

type MenuItem = {
  name: string;
  half: string;
  full: string;
  note?: string;
};

type MenuSection = {
  category: string;
  items: MenuItem[];
  note?: string;
};

const MENU: MenuSection[] = [
  {
    category: "Starters",
    note: "*Soul Rolls pricing available upon request",
    items: [
      { name: "Soul Rolls", half: "TBD", full: "TBD" },
      { name: "Corn Bread", half: "$30", full: "$70" },
    ],
  },
  {
    category: "Entrees & Specialties",
    items: [
      { name: "Jerk Chicken", half: "$150", full: "$225" },
      { name: "Fried Chicken", half: "$125", full: "$200" },
      { name: "Baked Chicken", half: "$125", full: "$200" },
      { name: "Barbecue Chicken", half: "$125", full: "$200" },
      { name: "Oxtails", half: "$275", full: "$400" },
      { name: "Fried Fish", half: "$150", full: "$275" },
      { name: "Stuffed Salmon", half: "$175", full: "$250" },
    ],
  },
  {
    category: "Sides & Pasta",
    items: [
      { name: "White Rice", half: "$65", full: "$125" },
      { name: "Spanish Rice", half: "$90", full: "$150" },
      { name: "Candied Yams", half: "$80", full: "$140" },
      { name: "Baked Macaroni & Cheese", half: "$100", full: "$200" },
      { name: "Lasagna", half: "$125", full: "$375" },
    ],
  },
  {
    category: "Vegetables & Salads",
    items: [
      { name: "Collard Greens", half: "$125", full: "$200" },
      { name: "Cabbage", half: "$75", full: "$150" },
      { name: "Green Beans", half: "$75", full: "$150" },
      { name: "Green Beans w/ Potatoes", half: "$85", full: "$175" },
      { name: "Potato Salad", half: "$90", full: "$175" },
      { name: "Seafood Salad", half: "$125", full: "$200" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Banana Pudding", half: "$90", full: "$200" },
      { name: "No-nana Pudding", half: "$80", full: "$275" },
    ],
  },
  {
    category: "Drinks",
    note: "*To-Go Pouch pricing available upon request",
    items: [
      { name: "Sweet Tea", half: "$30", full: "$60" },
      { name: "Lemonade", half: "$40", full: "$70" },
      { name: "Blue Lemonade", half: "$55", full: "$80" },
    ],
  },
];

const CATEGORIES = ["All", ...MENU.map((s) => s.category)];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleSections =
    activeCategory === "All"
      ? MENU
      : MENU.filter((s) => s.category === activeCategory);

  return (
    <div className="w-full bg-background min-h-screen pb-24">
      {/* Header */}
      <div className="bg-black py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <img
            src="/images/cateringnn.png"
            alt="Nay's Kitchen"
            className="h-28 w-auto object-contain mx-auto mb-6"
          />
          <span className="font-script text-primary text-2xl block mb-2">Catering Menu</span>
          <h1 className="font-lobster text-5xl md:text-6xl text-white mb-4">
            Nay's Summa Dis Summa Dat Kitchen
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto">
            All items are priced per tray — Half tray or Full tray. Place your order at least one week in advance.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-colors border ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "bg-background text-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Sections */}
        <div className="space-y-16 max-w-4xl mx-auto">
          {visibleSections.map((section) => (
            <div key={section.category}>
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-6">
                <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide uppercase">
                  {section.category}
                </h2>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Column Labels */}
              <div className="grid grid-cols-[1fr_80px_80px] gap-4 mb-3 px-4">
                <span />
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground text-center">Half</span>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground text-center">Full</span>
              </div>

              {/* Items */}
              <div className="divide-y divide-border border border-border rounded-2xl overflow-hidden">
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[1fr_80px_80px] gap-4 items-center px-6 py-4 bg-card hover:bg-primary/5 transition-colors"
                  >
                    <span className="font-medium text-foreground text-base">{item.name}</span>
                    <span className="text-center font-bold text-foreground">{item.half}</span>
                    <span className="text-center font-bold text-primary">{item.full}</span>
                  </div>
                ))}
              </div>

              {section.note && (
                <p className="text-muted-foreground text-sm mt-3 italic px-1">{section.note}</p>
              )}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="max-w-4xl mx-auto mt-16 bg-black text-white rounded-2xl px-8 py-6 text-center">
          <p className="font-bold text-base">
            * Catering requests made less than 1 week prior to the event date will be subject to an additional fee.
          </p>
        </div>
      </div>
    </div>
  );
}
