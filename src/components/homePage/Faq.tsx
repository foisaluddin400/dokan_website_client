"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "How do I create my own store?",
    answer:
      "You can easily create your store by signing up as a seller and completing your profile setup.",
  },
  {
    question: "Can I buy products in wholesale?",
    answer:
      "Yes, sellers can purchase wholesale products directly from our platform with special pricing.",
  },
  {
    question: "How do I contact a seller?",
    answer:
      "You can use the built-in chat system to directly message any store or seller.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "We ensure 100% secure payment through trusted payment gateways including bKash and card.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-text">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary mt-2">
            Everything you need to know about our marketplace
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-surface border border-border rounded-2xl shadow-soft overflow-hidden"
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-text">
                    {item.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : "text-gray-400"
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`px-5 text-sm text-text-secondary transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Faq;