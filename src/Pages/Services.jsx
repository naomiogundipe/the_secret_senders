import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import {
  Cake,
  Flower,
  Gift,
  GraduationCap,
  Group,
  Heart,
  PartyPopper,
  Plane,
} from "lucide-react";
import { Link } from "react-router-dom";
import MaleHampers from "../components/MaleHampers";
import Hamper from "../components/Hamper";
const occasions = [
  {
    title: "Birthdays",
    icon: <Cake className="w-8 h-8 text-pink-500" />,
    description: "Celebrate birthdays with custom cakes, décor & surprises.",
  },
  {
    title: "Anniversaries",
    icon: <Heart className="w-8 h-8 text-red-500" />,
    description: "Make your love stories unforgettable with romantic setups.",
  },
  {
    title: "Matriculation/Convocation ",
    icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
    description: "Honor achievements with themed decorations & gifts.",
  },
  {
    title: "Surprise Packages (just because)",
    icon: <Gift className="w-8 h-8 text-yellow-500" />,
    description: "Send joy-packed surprises for friends or loved ones.",
  },
  {
    title: "Proposals",
    icon: <PartyPopper className="w-8 h-8 text-green-600" />,
    description: "Plan the perfect ‘Yes!’ moment with full coordination.",
  },
  {
    title: "Squad Celebration",
    icon: <Group className="w-8 h-8 text-blue-500" />,
    description: "Celebrate with your group of friends or best friend",
  },
];

const Services = () => {
  return (
    <>
      <Header />
      <section className=" py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold text-[#5C5470] mb-10">
          Occasions
        </h2>
        <p className="max-w-4xl  mx-auto ">
          We offer a wide range of custom-themed decorations for all kinds of
          events and special occasions. From birthdays to surprises, we provide
          a variety of custom-themed decorations tailored for every occasion.{" "}
        </p>
        <div className="py-12 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#5C5470] mb-10">
            🎊 Occasions We Cover
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {occasions.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-[#cfb2b1] transition-all"
              >
                <div className="flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#5C5470] text-center mb-2">
                  {item.title}
                </h3>
                <p className="text-[#5C5470] text-sm text-center">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <p>
          We offer these and much more, fill the{" "}
          <a
            href="https://tally.so/r/w2oQyg"
            className="underline text-[#d6b5ff]"
          >
            form
          </a>{" "}
          and find our more or{" "}
          <Link to={"/contact"} className="underline text-[#d6b5ff]">
            contact
          </Link>{" "}
          us to find out more
        </p>
      </section>
      <section className="bg-[#fbe4e3] py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold text-[#5C5470] mb-2">
          Our Packages
        </h2>
        <p className=" text-sm text-gray-400">
          All will be planned anonymously except stated otherwise
        </p>
        <p className="mb-10 text-sm text-gray-700">
          Check the hamper section below to know what will be included in the hamper
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              price: "₦10,000 - Sweet & Simple",
              features: [
                "🎈 Basic room décor",
                "🎁 Mini hamper",
                "🎂 Mini cake loaf"
              ],
            },
            {
              price: "₦20,000 - Sweet Moments",
              features: [
                "🎈 Standard room décor",
                "🎂 Bento cake or snack box",
                "📸 Photography",
                "🎁 Mini hamper",
                "💐 Flower",
              ],
            },
            {
              price: "₦30,000 - Chop & Cheer",
              features: [
                "🎈 Upgraded room décor",
                "🎂 Small sized cake ",
                "📸 Photography",
                "🎁 Simple hamper",
                "💐 Flower ",
              ],
            },
            {
              price: "₦50,000 - Golden Surprise",
              features: [
                "🎈 Premium room décor",
                "🎂 Medium sized cake ",
                "🎂 Snack combo",
                "📸 Professional photos",
                "📸 Edited reaction vlog",
                "🎁 Simple Hamper",
                "💌 Handwritten message card",
              ],
            },
            {
              price: "₦70,000 - Cherished Vibes",
              features: [
                "🎈 Premium room décor ",
                "🎂 Large Cake ",
                "🎂 Snack hamper ",
                "🎂 Drinks",
                "📸 Photoshoot",
                "🎁 Classic Hamper",
                "🎶 Full edited vlog",
                "💐 Flower",
              ],
            },
            {
              price: "₦100,000 - All-In-One",
              features: [
                "🎈 Premium room decor",
                "🎂 Large cake ",
                "🎂 Drink set ",
                "🎂 Small chops",
                "📸 Digital Album",
                "🎁 Classic Hamper",
                "💐 Flower Bouquet",
                "🎶 Full edited vlog",
                "📸 Photoshoot",
              ],
            },
            {
              price: "₦150,000 - Deluxe Moment",
              features: [
                "🎈 Luxury themed décor",
                "🎂 Premium cake",
                "🎂 Wine combo",
                "🎂 Snack combo",
                "📸 Full digital album",
                "🎁 Luxury Hamper",
                "🎁 Small Teddy Bear",
                "💐 Flower  Bouquet",
                "📸 Photoshoot",
              ],
            },
            {
              price: "₦170,000 - Regal Treat",
              features: [
                "🎈 Romantic luxury décor",
                "🎂 Dessert tower + drinks + food platter",
                "📸 Photographer coverage",
                "🎁 Premium Hamper",
                "💌 Lash Session",
                "👑 Makeup Session",
                "Money Bouquet",
                " Deluxe Moment Package included",
              ],
            },
            {
              price: "₦200,000 - Lavish Spark",
              features: [
                "🎈 Complete themed setup",
                "🎂 Large custom cake",
                "📸 Photoshoot + video coverage",
                "🎁 Premium Hamper",
                "💌 Lash Session",
                "👑 Makeup Session",
                "Money Bouquet",
                "Regal Treat Package included",
              ],
            },
            {
              price: "₦250,000 - Royalty Package",
              features: [
                "🎈 Full room transformation",
                "🎂 Cake, snacks, wine, bouquet",
                "📸 Videography + edited clips",
                "🎁 Luxury hamper",
                "💌 Lash Session",
                "👑 Makeup Session",
                "Money Bouquet",
                "Skincare and Period care Package",
                "Done according to your plan",
                "Lavish Spark Package included",
              ],
            },
            {
              price: "₦300,000 - Diamond Affair",
              features: [
                "🎈 Deluxe full-suite décor",
                "🎂 Multi-tier cake + dessert cart",
                "📸 Cinematic photo/video",
                "🎊 Celebration coordination",
                "🎁 Elite hamper",
                "💌 Lash Session",
                "👑 Makeup Session",
                "👑 Hair Session",
                "Flower with Money Bouquet",
                "Skincare and Period care Package",
                "Royalty Package included",
              ],
            },
            {
              price: "Custom - Name your dream",
              features: [
                "🎯 Fully personalized experience",
                "📋 Consultation to plan package",
                "🎁 Tailored gift & décor",
                "💡 You dream it, we create it",
              ],
            },
          ].map((tier, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-[#cfb2b1]"
            >
              <h3 className="text-xl font-bold text-[#5C5470] mb-2">
                {tier.price}
              </h3>
              <ul className="text-left text-[#5C5470] space-y-2">
                {tier.features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
      <Hamper />
      <MaleHampers />
    </>
  );
};

export default Services;
