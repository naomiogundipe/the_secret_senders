import React from "react";

const tiers = [
  {
    price: "₦10,000",
    name: "Quickie",
    items: [
      "Durag or Wave Cap",
      "Mini Jewellery set",
      "Snack Box",
      "Personalized Card",
      "Simple Beaded Wristband",
    ],
  },
  {
    price: "₦20,000",
    name: "Chill Vibes",
    items: [
      "Snack Box + Chocolates + Cake loaf",
      "Jewellery set",
      "Body Mist",
      "Durag and Wave Cap",
      "Mini skincare kit",
    ],
  },
  {
    price: "₦30,000",
    name: "Stay Sharp",
    items: [
      "Erotic Treats + Cake + drinks",
      "Durag + Sunglasses",
      "Skincare Mini Kit",
      "Jewellery set",
      "Body Mist and Cologne",
      "Personalised Note",
      "Belt",
      "Cuff links"
    ],
  },
  {
    price: "₦50,000",
    name: "Level Up",
    items: [
      "Erotic Treats + Cake + drinks",
      "Customised Jersey",
      "Cologne of choice",
      "Gym gloves or Boxing gloves",
      "Jewellery set",
      "Mini Skincare Kit",
      "Hair growth oil",
      "Belt and Wallet"
    ],
  },
  {
    price: "₦70,000",
    name: "Study & Style",
    items: [
      "Stylish Backpack",
      "Custom Hoodie",
      "Sweater Vest",
      "Fashion Accessories set",
      "Journal",
      "Alarm Clock",
      "Wireless Earbuds",
      "Jewellery set",
      "Photo Frame"
    ],
  },
  {
    price: "₦100,000",
    name: "Tech & Treats",
    items: [
      "Wireless Earbuds (Oraimo)",
      "Skincare Tray",
      "Erotic Treats + Cake + drinks",
      "Wrist Watch",
      "Laptop Bag",
      "Customized Jersey",
      "Cologne of Choice",
      "Beard grooming kit",
      "Fashion Accessories set",
      "Portable Charger",
      "Chocolate box"
    ],
  },
  {
    price: "₦130,000",
    name: "Baller",
    items: [
      "Football/Basketball",
      "Customised Jersey",
      "Shorts & Knee Guard",
      "Football Boots",
      "Snack Box",
      "Football themed Cake or Cupcake",
      "Snapback",
      "Grip socks and Sweat band",
      "Body Mist and Cologne",
      "Sports Bag",
      "Personalised Bottle",
      "Surprise baller set"
    ],
  },
  {
    price: "₦150,000",
    name: "Anime and Gamer's Deluxe",
    items: [
      "Bento-style snack box with cookies, biscuits, and small chops",
      "Gaming Headset",
      "Gamepad",
      "Anime Custom Hoodie",
      "Polaroid print of Anime characters",
      "Poster Set (Anime)",
      "Anime accessories of choice (3)",
      "Hard drive",
      "Manga",
      "Earbuds",
      "Asian inspired snacks",
      "Cologne"
    ],
  },
  {
    price: "₦170,000",
    name: "Fitness & Fly",
    items: [
      "Full Gym Set (Bands, Shorts, Bottle, Gym Bag...)",
      "Smartwatch (Mid-range)",
      "Wireless Earbuds or Headset",
      "Beard & Hair & Skin Care Kit",
      "Sneakers",
      "Custom Shaker Bottle",
      "Spotify Subscription (6 months)",
      "Masculine deodorant or body spray",
      "Shower Gel set",
      "Protein powder samples with shaker cup",
      "Gym tank top",
      "Custom gym Bag"
    ],
  },
  {
    price: "₦200,000",
    name: "Boss Mode",
    items: [
      "Wireless Earbuds",
      "Shoes",
      "Customised Hoodie and Jersey",
      "Body mist and Cologne",
      "Fashion Accessories set",
      "Corporate shirts and Pants",
      "Gym rat full set",
      "Snapback",
      "Bluetooth Speaker",
      "Hair growth oil",
      "Skincare tray",
      "Beard and hair grooming kit",
      "Durag and wave cap",
      "Erotic treats + cake + snack box + drinks",
      "Photo Frame",
      "Customised Bracelets"
    ],
  },
  {
    price: "₦250,000",
    name: "Odogwu",
    items: [
      "Wireless Earbuds",
      "Shoes",
      "Customised Hoodie and Jersey",
      "Body mist and Cologne",
      "Fashion Accessories set",
      "Jewellery set",
      "Corporate shirts and Pants",
      "Football Boots",
      "Fitness gear",
      "Snapback",
      "Shower gel set",
      "Bluetooth Speaker",
      "Hair growth oil",
      "Skincare tray",
      "Beard and hair grooming kit",
      "Durag and wave cap",
      "Erotic treats + cake + snack box + drinks",
      "Photo Frame or Photo Album",
      "Customised Bracelets"
    ],
  },
  {
    price: "₦300,000",
    name: "Elite Experience",
    items: [
      "Game pad",
      "Wireless Speaker",
      "Stylish Backpack",
      "3 Event Tickets of choice within school ",
      "Beard & Skin Combo Set",
      "Corporate combo set",
      "Complete gym set",
      "Wireless Earbuds",
      "Shoes",
      "Customised Hoodie and Jersey",
      "Body mist and Cologne",
      "Fashion Accessories set",
      "Jewellery set",
      "Football Boots",
      "Fitness gear",
      "Snapback",
      "Shower gel set",
      "Hair growth oil",
      "Durag and wave cap",
      "Erotic treats + cake + snack box + drinks",
      "Photo Album",
      "Wrist watch",
      "Customised Bracelets",
      "Appreciation Letter"
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
