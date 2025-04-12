import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import {
  Cake,
  Gift,
  GraduationCap,
  Group,
  Heart,
  PartyPopper,
  Plane,
} from "lucide-react";
import { Link } from "react-router-dom";

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
      <section className="bg-[#fbe4e3] py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold text-[#5C5470] mb-10">
          Our Packages
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              price: "₦10,000",
              features: [
                "🎈 Basic room décor",
                "🎂 Mini snack pack",
                "📸 One digital photo",
              ],
            },
            {
              price: "₦20,000",
              features: [
                "🎈 Standard room décor",
                "🎂 Small cake or snack box",
                "📸 2 digital photos",
                "🎁 Simple personal gift",
              ],
            },
            {
              price: "₦30,000",
              features: [
                "🎈 Upgraded room décor",
                "🎂 Medium cake or deluxe snacks",
                "📸 2 Polaroid + digital photos",
                "🎁 Personalized gift",
              ],
            },
            {
              price: "₦50,000",
              features: [
                "🎈 Premium room décor",
                "🎂 Large cake/snack combo",
                "📸 3 Polaroids + digital gallery",
                "🎁 Custom surprise box",
                "💌 Handwritten message card",
              ],
            },
            {
              price: "₦70,000",
              features: [
                "🎈 Premium décor with theme",
                "🎂 Cake + snack hamper",
                "📸 Photoshoot (5+ photos)",
                "🎁 Gift box with premium items",
                "🎶 Background music setup",
              ],
            },
            {
              price: "₦100,000",
              features: [
                "🎈 Themed décor + lights",
                "🎂 Large cake & drink set",
                "📸 Polaroids + digital album",
                "🎁 Customized gift package",
                "👑 Surprise reveal entrance",
              ],
            },
            {
              price: "₦150,000",
              features: [
                "🎈 Luxury themed décor",
                "🎂 Premium cake/snack/wine combo",
                "📸 Full digital + printed album",
                "🎁 Personalized premium gift",
                "💐 Fresh flowers",
              ],
            },
            {
              price: "₦170,000",
              features: [
                "🎈 Romantic luxury décor",
                "🎂 Dessert tower + drinks",
                "📸 Photographer coverage",
                "🎁 Couple gift set",
                "💌 Love letter scroll",
              ],
            },
            {
              price: "₦200,000",
              features: [
                "🎈 Complete themed setup",
                "🎂 Large custom cake",
                "📸 Photoshoot + video coverage",
                "🎁 Premium customized gift box",
                "🎶 DJ/speaker setup",
              ],
            },
            {
              price: "₦250,000",
              features: [
                "🎈 Full room transformation",
                "🎂 Cake, snacks, wine, bouquet",
                "📸 Videography + edited clips",
                "🎁 Customized hamper",
                "🎤 Surprise narration",
              ],
            },
            {
              price: "₦300,000",
              features: [
                "🎈 Deluxe full-suite décor",
                "🎂 Multi-tier cake + dessert cart",
                "📸 Cinematic photo/video",
                "🎁 Luxury surprise box",
                "🎊 Celebration coordination",
              ],
            },
            {
              price: "Custom",
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
                {tier.price} Tier
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
          <a href="https://tally.so/r/w2oQyg" className="underline text-[#d6b5ff]">
            form
          </a>{" "}
          and find our more or{" "}
          <Link to={"/contact"} className="underline text-[#d6b5ff]">
            contact
          </Link>{" "}
          us to find out more
        </p>
      </section>
    </>
  );
};

export default Services;
