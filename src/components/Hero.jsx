import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import hero from "../assets/images/hero.jpeg";
const Hero = () => {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-[#cfb2b1] text-white text-center flex items-center flex-col justify-center bg-cover bg-bottom bg-no-repeat relative shadow-md shadow-black h-[80vh] "
        style={{ backgroundImage: `url(${hero})` }}
      >
        <h2
          className="text-5xl font-bold text-[#fff]"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
        >
          <Typewriter
            words={["You've just arrived at Secret Senders — where surprises come alive! 🎁", 'The Ultimate Surprise Hub 🎉', 'Sprinkle sparkle on every celebration ✨']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <p className="mt-4 text-lg">
          Crafting unforgettable surprises for your special moments
        </p>
        <a
          href="https://tally.so/r/w2oQyg"
          className="mt-6 inline-block px-6 py-3 bg-white text-[#5C5470] rounded-full font-semibold shadow-md hover:bg-[#f4e3e2] transition"
        >
          Book a Surprise
        </a>
      </motion.section>

      {/* About Snippet */}
      <section className="bg-white text-[#5C5470] py-20 text-center px-6">
        <h3 className="text-3xl font-semibold mb-4">Who We Are</h3>
        <p className="max-w-2xl mx-auto mb-6">
          Secret Senders is a student-led creative surprise service dedicated to
          making every occasion unforgettable. We specialize in transforming
          dorm rooms and spaces into magical settings for birthdays,
          anniversaries, romantic gestures, apologies, and spontaneous
          celebrations.
        </p>
        <p className="max-w-2xl mx-auto mb-6">
          Our team of five passionate students shares a commitment to bringing
          joy and emotional connection through thoughtful, custom-designed
          surprise setups. From handcrafted decorations and aesthetic layouts to
          thematic cakes, drinks, snacks, and personalized notes, every surprise
          is crafted with care.
        </p>
        <p className="max-w-2xl mx-auto">
          With an emphasis on convenience and creativity, we provide tiered
          packages ranging from ₦10,000 to ₦300,000, accommodating a wide range
          of budgets and ideas. We also offer rental items, custom purchases,
          and photography services to make your moment extra memorable.
        </p>
      </section>

      {/* FAQ Snippet */}
      <section className="bg-[#fbe4e3] text-[#5C5470] py-20 px-6">
        <h3 className="text-3xl font-semibold text-center mb-10">FAQs</h3>
        <div className="max-w-7xl mx-auto space-y-6">
          <div>
            <div className="flex gap-3 items-center">
              <div className="w-15 h-15 rounded-full bg-[#cfb2b1]"></div>
              <div className="">
                <h4 className="font-bold">How do I book a surprise?</h4>
                <p>
                  Simply visit our contact page and fill out the form or DM us
                  on Instagram/Telegram.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row-reverse gap-3 items-center">
              <div className="w-15 h-15 rounded-full bg-[#cfb2b1]"></div>
              <div className="text-end">
                <h4 className="font-bold">
                  Can I customize the items in the package?
                </h4>
                <p>
                  Yes! You can share your preferences when booking, and we’ll
                  tailor the package just for you.
                </p>
              </div>
            </div>
          </div>
         
        </div>
      </section>
    </div>
  );
};

export default Hero;
