import React from "react";

const tiers = [
  {
    price: "₦10,000",
    name: "Quick Boost",
    items: [
      "Durag or Wave Cap",
      "Mini Jewellery set",
      "Snack Box",
      "Personalized Note",
      "Simple Beaded Wristband",
    ],
  },
  {
    price: "₦20,000",
    name: "Chill Vibes",
    items: [
      "Charger",
      "Snack Box + Chocolates",
      "Jewellery set",
      "Body Mist",
      "Durag and Wave Cap",
      "Note Jar",
    ],
  },
  {
    price: "₦30,000",
    name: "Stay Sharp",
    items: [
      "Snack box + cake + drinks",
      "Durag + Sunglasses",
      "Skincare Mini Kit",
      "Mini Hamper",
      "Body Mist and Perfume",
      "Personalised Note"
    ],
  },
  {
    price: "₦50,000",
    name: "Level Up",
    items: [
      "Custom T-shirt",
      "Power Bank",
      "Airpods (Oraimo)",
      "Gym gloves or Boxing gloves",
      "Journal",
      "Mini Hamper"
    ],
  },
  {
    price: "₦70,000",
    name: "Study & Style",
    items: [
      "Stylish Backpack",
      "Custom Hoodie",
      "Mini Protein Powder & Shaker",
      "Journal",
      "Wireless Earbuds",
      "Premium Hamper",
    ],
  },
  {
    price: "₦100,000",
    name: "Tech & Treats",
    items: [
      "Wireless Earbuds (Oraimo/JBL)",
      "Skincare Set",
      "Custom Sneakers (budget-friendly)",
      "Netflix/Spotify Subscription(3 months)",
      "Polaroid Print Photo Set",
      "Customized Jersey",
    ],
  },
  {
    price: "₦130,000",
    name: "Baller",
    items: [
      "Football/Basketball",
      "Customised Jersey",
      "Shorts & Knee Guard",
      "Gym gloves & Boxing gloves",
      "Snack Box + Custom Cake",
      "Premium Hamper",
      "Skincare",
      "Body Mist or Perfume"
    ],
  },
  {
    price: "₦150,000",
    name: "Anime and Gamer's Deluxe",
    items: [
      "Gaming Headset",
      "Gamepad",
      "Anime Custom Hoodie",
      "Netflix Subscription (5 months)",
      "Poster Set (Anime/FIFA)",
      "Anime accessories of choice (3)",
      "Hard drive",
      "Luxury Hamper"
    ],
  },
  {
    price: "₦170,000",
    name: "Fitness & Fly",
    items: [
      "Full Gym Set (Bands, Shorts, Bottle, Gym Bag)",
      "Smartwatch (Mid-range)",
      "Subscription to a Workout App",
      "Beard & Hair & Skin Care Kit",
      "Sneaker Cleaner Kit",
      "Personalized Water Bottle",
      "Spotify Subscription (6 months)",
      "Luxury Hamper"
    ],
  },
  {
    price: "₦200,000",
    name: "Boss Mode",
    items: [
      "Wireless Earbuds",
      "1 shoe",
      "Customised Hoodie and Jersey",
      "Spotify + Netflix Subscription (6 months)",
      "Beard Kit + Perfume",
      "Skin care and Hair kit",
      "2 Shirts & 1 corporate pant",
      "Body mist and perfume",
      "Personalised gift",
      "Luxury Hamper"
    ],
  },
  {
    price: "₦250,000",
    name: "Big Baller",
    items: [
      "Branded Sneakers (Nike/Adidas)",
      "Portable Bluetooth Speaker",
      "Power Bank + Flash Drive",
      "Memory Jar + Journal",
      "Polaroid Shoot Session",
      "Go-Karting or Paintball Experience",
    ],
  },
  {
    price: "₦300,000",
    name: "Elite Experience",
    items: [
      "Game pad (2)",
      "JBL Wireless Speaker",
      "Stylish Backpack + Hoodie",
      "3 Event Ticket within school of choice",
      "Beard & Skin Combo Set",
      "3 shirts + 2 pants + 1 trousers",
      "Royalty Hamper",
      "Complete gym set"
    ],
  },
  {
    price: "Custom",
    name: "Custom Tier",
    items: [
      "Fully personalized based on his hobbies, lifestyle, and interests.",
      "Choose preferred categories and delivery style.",
    ],
  },
];

const MaleHampers = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-[#493f3f] mb-2">
        Male Hampers
      </h1>
      <p className="mb-10 text-md text-gray-500 text-center font-semibold">50k+ comes with snack box + drinks + mini cake</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-[#cfb2b1] hover:scale-105 transition-all duration-300"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {tier.name}
            </h2>
            <p className="text-[#736464] font-semibold text-lg mb-4">
              {tier.price}
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              {tier.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaleHampers;
