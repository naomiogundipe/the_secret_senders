import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
const About = () => {
  return (
    <>
      <Header />
      <div className="text-[#5C5470]">
        {/* About Us Section */}
        <section className="bg-white py-16 px-6 text-center border-b-4 border-[#fbe4e3]">
          <h2 className="text-4xl font-bold mb-4">About Secret Senders</h2>
          <p className="max-w-3xl mx-auto mb-6">
            Secret Senders is a student-led initiative dedicated to crafting
            unforgettable surprise experiences on campus. From birthdays and
            anniversaries to apology gestures and spontaneous moments of love,
            our goal is to turn ordinary days into magical memories.
          </p>
          <p className="max-w-3xl mx-auto mb-6">
            Our passionate team of five combines creativity and thoughtfulness
            to provide personalized room setups, curated gift boxes, thematic
            decorations, and more. Every surprise is crafted with a deep
            understanding of emotional expression, student budgets, and
            convenience.
          </p>
          <p className="max-w-3xl mx-auto">
            With flexible package options, easy booking, and a wide range of
            customizable items (both rental and for purchase), Secret Senders is
            your go-to for spreading joy and heartfelt moments.
          </p>
        </section>

        

        {/* FAQs */}
        <section className="bg-white py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 text-left">
            <div>
              <h4 className="font-bold">How do I book a service?</h4>
              <p>
                Fill our form via our website or contact us directly on
                Instagram or Telegram.
              </p>
            </div>
            <div>
              <h4 className="font-bold">Can I request specific items?</h4>
              <p>
                Absolutely! Customization is a key part of our services. Just
                let us know your preferences.
              </p>
            </div>
            <div>
              <h4 className="font-bold">Do you do surprise deliveries?</h4>
              <p>
                Yes. We can deliver gifts, snacks, and more directly to your
                recipient with total secrecy.
              </p>
            </div>
            <div>
              <h4 className="font-bold">
                What if I need to cancel or reschedule?
              </h4>
              <p>
                Kindly notify us 48 hours in advance for a reschedule or partial
                refund (see policies below).
              </p>
            </div>
          </div>
        </section>

        {/* Policies */}
        <section className="bg-[#fbe4e3] py-16 px-6 text-left">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Policies & Legal
            </h2>

            <div className="mb-6">
              <h4 className="font-semibold">Return Policy</h4>
              <p>
                Most of our items are custom-made and non-returnable. Rental
                decor must be returned within 24 hours. Damaged or lost items
                will incur additional charges.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold">Privacy Policy</h4>
              <p>
                Your information is secure with us. We do not share customer
                details with third parties. All communications are private and
                used solely for service purposes.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold">Terms & Conditions</h4>
              <p>
                You must book with us minimum 5 days before the due date.
                Impromptu services incur additional charges and impromtu
                services.
              </p>
              <p>
                By booking with Secret Senders, you agree to our process,
                payment terms, and service schedule. Cancellations within 24
                hours are non-refundable. We reserve the right to refuse
                unreasonable requests.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
