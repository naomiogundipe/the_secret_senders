import React from "react";

const Hamper = () => {
  const hampers = [
    {
      name: "Mini Hamper",
      items: [
        "Lip liner",
        "Lip gloss ",
        "Mini Skincare",
      ],
    },
    {
      name: "Simple Hamper",
      items: [
        "Mini makeup kit",
        "Mini Skincare",
        "Perfume oil",
        "Customized card",
      ],
    },
    {
      name: "Classic Hamper",
      items: [
        "Skincare Tray",
        "Perfume oil",
        "Card",
        "Mini makeup kit",
        "Flower",
      ],
    },
    {
      name: "Luxury Hamper",
      items: [
        "Bag",
        "Skincare Tray",
        "Perfume",
        "Perfume oil",
        "Flower bouquet",
        "Mini hair accessories",
        "Hand Mirror",
      ],
    },
    {
      name: "Premium Hamper",
      items: [
        "A bag",
        "A shoe",
        "Teddy bear",
        "Sippy cup",
        "Skin care Cart",
        "Dress",
        "Jewellery kit",
        "Glasses",
        "Lip care kit",
        "Money Bouquet",
        "Perfume",
        "Perfume oil",
        "Shirts",
      ],
    },
    {
      name: "Elite Hamper",
      items: [
        "Bag",
        "Shoes",
        "Shirts",
        "Pant trousers",
        "Skincare kit",
        "Hair care kit",
        "Glasses",
        "Hair Accessories",
        "Money Bouquet",
        "Teddy Bear",
        "Lip care kit",
        "5 sesnses gift",
        "Jewellery kit",
        "Clothes",
        "Sippy cup",
        "Hand Mirror",
        "Earbuds",
      ],
    },
    {
      name: "Surprise Theme Hamper",
      items: [
        "Fully customized package based on recipient's theme",
        "Mix of sweets, fashion, gadgets, letters, and decor",
      ],
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-[#5C5470] mb-10">
        Female Hamper Tiers
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hampers.map((hamper, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#5C5470]">
              {hamper.name}
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-[#444]">
              {hamper.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hamper;
