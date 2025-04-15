import React from "react";
import Header from "../components/Header";
const Contact = () => {
  return (
    <>
      <Header />
      <section className="bg-[#fbe4e3] py-20 text-center px-6">
        <h2 className="text-3xl font-semibold text-[#5C5470] mb-4">
          Contact Us
        </h2>
        <p className="text-[#5C5470] mb-6">
          Fill out the form or DM us on social media to get started!
        </p>
        <a
          href="https://tally.so/r/w2oQyg"
          className="inline-block bg-white text-[#5C5470] px-6 py-3 rounded-full shadow hover:bg-[#f4e3e2] transition"
        >
          Fill Surprise Form
        </a>
        <div className="mt-6 space-x-4">
          <a href="https://www.instagram.com/invites/contact/?i=1kcbpggo8tryn&utm_content=xyuwdm3" className="text-[#5C5470] underline">
            Instagram
          </a>
          <a href="https://t.me/the_secret_senders" className="text-[#5C5470] underline">
            Telegram
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
