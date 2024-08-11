'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

const FAQs = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };
  
  const faqData = [
    {
      question: "What are AI fashion models?",
      answer:
        "AI fashion models are digitally crafted representations, designed through artificial intelligence, capable of showcasing clothing and accessories akin to human models. These AI models are customizable, allowing for the display of diverse body types, ages, sizes, and skin tones, offering a wide range of looks for the fashion items they model. This technology enables a versatile and inclusive approach to presenting fashion products.",
    },
    {
      question: "Can I use AI-generated art commercially?",
      answer:
        "Yes, you can use AI-generated art commercially. The AI models provided are royalty-free, meaning you can use them without any licensing restrictions in your e-commerce fashion experience, product showcases, or other commercial applications.",
    },
    {
      question: "Is virtual model real?",
      answer:
        "Yes, the virtual models are very much real. They are digitally created representations that can be used to showcase fashion items in a realistic and immersive way, without the need for traditional photoshoots or live models.",
    },
    {
      question:
        "Can I change the clothes in a photo but keep the fashion model?",
      answer:
        "Absolutely! One of the key benefits of using AI-generated fashion models is the ability to easily swap out the clothing on the models, while maintaining the same pose, expression, and overall look and feel. This allows you to showcase your products in a variety of ways without the need for additional photoshoots.",
    },
  ];

  return (
    <div>
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
                Your Questions, Answered.
              </h2>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
                    onClick={() => toggleExpand(index)}
                    initial={{ height: "auto" }}
                    animate={{ height: expanded === index ? "auto" : "72px" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 py-4 cursor-pointer">
                      <h3 className="text-lg font-bold text-gray-900">
                        {faq.question}
                      </h3>
                    </div>
                    <AnimatePresence>
                      {expanded === index && (
                        <motion.div
                          className="px-6 py-4 bg-white"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-gray-700">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
    </div>
  )
}

export default FAQs
