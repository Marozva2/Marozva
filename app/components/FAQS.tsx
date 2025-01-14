"use client";

import React, { useState } from "react";

const FAQ: React.FC = () => {
  const faqs = [
    {
      id: 1,
      question: "What services do you offer?",
      answer:
        "I specialize in software solutions, risk assessment, and design.",
    },
    {
      id: 2,
      question: "How can I contact you?",
      answer: "You can use the contact form or email me directly.",
    },
    {
      id: 3,
      question: "Do you provide consulting services?",
      answer: "Yes, I offer tailored consulting for your business needs.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="text-left">
          {faqs.map(({ id, question, answer }, index) => (
            <div key={id} className="border-b border-gray-700 pb-4 mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="text-lg font-bold dark:text-white flex justify-between w-full"
              >
                {question}
                <span>{openIndex === index ? "–" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="dark:text-gray-300 text-gray-700 mt-2">
                  {answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
