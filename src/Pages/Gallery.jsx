import React from "react";
import Header from "../components/Header";
import coming from "../assets/images/coming_soon.jpg";
import one from "../assets/images/image1.jpg";
import two from "../assets/images/image2.jpg";
import three from "../assets/images/image3.jpg";
import four from "../assets/images/image4.jpg";
import gift from "../assets/images/gift.jpg";
import cake from "../assets/images/cake.jpg";
import five from "../assets/images/NASPA 1.jpg"
import six from "../assets/images/NASPA 2.jpg"
import seven from "../assets/images/NASPA 3.jpg"
const images = [
  `${coming}`,
  `${one}`,
  `${two}`,
  `${three}`,
  `${four}`,
  `${gift}`,
  `${cake}`,
  `${five}`,
  `${six}`,
  `${seven}`
];

const Gallery = () => {
  return (
    <>
      <Header />
      <section className="bg-white py-5 text-center px-6">
        <h2 className="text-3xl font-semibold text-[#5C5470] mb-6">Gallery</h2>
        <p className="max-w-2xl mx-auto text-[#5C5470] mb-6">
          Explore our stunning gallery featuring a mix of our previous surprise
          events and creative inspiration! From beautifully decorated rooms to
          mouthwatering cakes, you'll find both our work and ideas you can
          choose from—we’re ready to recreate your favorite look!
        </p>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full overflow-hidden rounded-2xl hover:scale-105 hover:z-10 transition-transform duration-300 ease-in-out shadow-md"
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
