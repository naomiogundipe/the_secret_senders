import { motion } from "framer-motion";
import {
  ChevronDown,
  Mail,
  MessageCircleQuestion,
  PartyPopper,
} from "lucide-react";
import React, { useState } from "react";
import Header from "../components/Header";
const faqs = [
  {
    question: "What is Secret Senders all about?",
    answer:
      "We create unforgettable surprise packages for students — from room décor to cakes, gifts, and heartfelt notes. Whether it's a birthday, apology, or celebration, we bring the magic!",
  },
  {
    question: "Who can order a surprise package?",
    answer:
      "Anyone! Friends, lovers, parents, or even you (for yourself). As long as it's a celebration, we deliver it in style within Covenant.",
  },
  {
    question: "Do you only deliver in Covenant University?",
    answer:
      "For now, yes. But we're expanding soon — stay tuned to our socials to know when we launch in your school!",
  },
  {
    question: "How do I place an order?",
    answer:
      "Just send us a DM on Instagram, WhatsApp, or use the 'Contact Us' button below. We'll guide you through the tier options and customizations.",
  },
  {
    question: "Can I customize a package?",
    answer:
      "Absolutely! You can choose the cake type, gifts, décor theme, and even the delivery message. We're all about personal touches.",
  },
  {
    question: "What if the recipient isn't in their room?",
    answer:
      "No worries — we'll work with you or their roommates to ensure it's a perfect surprise. Discretion is our specialty 😉",
  },
  {
    question: "How much do packages cost?",
    answer:
      "Our surprise tiers range from ₦10,000 to ₦300,000 — and you can also request a custom budget to fit your vibe and needs!",
  },
  {
    question: "What occasions do you cover?",
    answer:
      "Birthdays, anniversaries, apologies, graduation, just-because surprises, homecomings, proposals, and more!",
  },
  {
    question: "Is payment made before or after delivery?",
    answer:
      "Payment is made before the delivery. Once we confirm your payment, we get to work immediately!",
  },
  {
    question: "Do you offer refunds or cancellations?",
    answer:
      "Due to the customized nature of our surprises, we do not offer refunds. But if you need to reschedule, let us know at least 24 hours ahead.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#cfb2b1] py-16 px-4 text-[#5C5470]">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <PartyPopper className="inline w-8 h-8 text-pink-500 mr-2" />
            Secret Senders FAQs
          </motion.h1>
          <p className="text-lg md:text-xl text-[#fff]">
            Got questions? We've got sparkly answers ✨ Scroll through the fun!
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white border border-[#cfb2b1] shadow-lg rounded-xl p-5"
              whileHover={{ scale: 1.01 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                className="flex items-center justify-between w-full text-left text-lg font-semibold"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-3 text-sm text-[#7B6C94]">{faq.answer}</p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.a
            href="https://tally.so/r/w2oQyg"
            whileHover={{ scale: 1.1 }}
            className="inline-flex items-center px-6 py-3 bg-[#d6b5ff] text-black font-bold text-lg rounded-full shadow-lg hover:bg-pink-600 transition"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Us to Know More
          </motion.a>
        </div>
      </div>
    </>
  );
};

export default Faqs;
