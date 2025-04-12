import React from "react";
import Header from "../components/Header";

const Gallery = () => {
  return (
    <>
      <Header />
      <section className="bg-white py-20 text-center px-6">
        <h2 className="text-3xl font-semibold text-[#5C5470] mb-6">Gallery</h2>
        <p className="max-w-2xl mx-auto text-[#5C5470] mb-6">
          Check out our stunning gallery showcasing our previous surprise
          events! From beautiful room décor to delicious cakes, we have it all!
        </p>
      </section>
    </>
  );
};

export default Gallery;
