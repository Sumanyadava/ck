"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

const FAQs = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Adjusts when the animation should start (0.1 means 10% of the component is visible)
  });

  const faqData = [
    {
      question: "Why wouldn’t I just hire a full-time HubSpot specialist?",
      answer:
        "The annual cost of a full-time senior specialist exceeds $100,000, plus benefits (and hard luck in finding an expert). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilise. Apart from all these, if the specialist exits the company you will end up paying more to get a new hire and the transition of task or work wouldn’t go smoothly.<br/> That’s why we are here. No more hiring trouble, no more headaches to business owners, no more extra payout, no more inexperienced employees, no more employee exit issues. With the monthly plan, our pricing is minimum while you compare the payouts.",
    },
    {
      question: "Why shouldn’t I get a freelancer to manage HubSpot?",
      answer:
        "The annual cost of a full-time senior specialist exceeds $100,000, plus benefits (and hard luck in finding an expert). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilise. Apart from all these, if the specialist exits the company you will end up paying more to get a new hire and the transition of task or work wouldn’t go smoothly.",
    },
    {
      question: "Is there a limit to how many requests I can have?",
      answer:
        "Once subscribed, you’re able to add as many requests to your queue as you’d like and we will deliver them one by one. Not just this, we will suggest to you what best is required for your business to drive sales with optimising CRM.",
    },
    {
      question: "How soon will my changes be made?",
      answer:
        "On average most requests are implemented and optimised within 24-48 hours. However, more complex requests can take a bit longer.",
    },
    {
      question: "Who are the HubSpot Experts?",
      answer: "Our squad comprises a team of HubSpot experts specialized in HubSpot Administration. We are small in headcount yet larger in skillset. Each subscriber is assigned with a point of contact.",
    },
    {
      question: "How do I request HubSpot updates/changes?",
      answer: "Requests are submitted through a shared Trello board. You can add any additional context on the Trello card for that request (videos, text, screenshots, etc.). If additional details are required, we will comment directly on the card to ensure we're completely aligned before making any updates or changes. We are on Slack too, and you can speak with us on a call for any urgent or complex setup. However, all requests must be added to Trello to ensure smooth deliverability.",
    },
    {
      question: "Is just the subscriber asking for requests? Do hubCentral provide recommendations?",
      answer: "hubCentral does provide valuable suggestions to the client. Once we understand your business needs, we would suggest the processes and what best is required to optimize the CRM. We believe in Together we grow!",
    },
    {
      question: "How does the cancel feature work?",
      answer: "You can cancel your subscription if you decide our services are no longer required. Billing is done on a 31-day cycle and is prepayment. If you decide to cancel your account on day 20, your payment will cover those 20 days, and the remaining 11 days of service can be used at any time in the future since you have paid for the entire month.",
    },
    {
      question: "How to sign up with us?",
      answer: "Simple! Click on Login and register as a new user. Add your business email and other details, enter your Credit card, and accept the Subscription terms and conditions. Once done, we will connect with you over the call. Alternatively, you can book a call to get the details.",
    },
    {
      question: "What if I only have a single request?",
      answer: "You can cancel your subscription after fulfilling your request and return when you need more updates. HubSpot CRM typically requires multiple requests since all the processes are interconnected to drive your business.",
    },
    {
      question: "What is the billing cycle?",
      answer: "Billing is done on a 31-day cycle. Once you start your subscription with payment, our work with you will begin on either the 1st or 15th.",
    },
    {
      question: "Are there any refunds if I don’t like the service?",
      answer: "Due to the high-quality nature of the work, there will be no refunds issued.",
    },
    {
      question: "How does referral work?",
      answer: "For every referral who signs up with us, you will receive a 5% commission. This is a recurring commission for monthly and yearly plans. Visit our referral program page for more details.",
    },
  ];

  return (
    <div
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      ref={ref}
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
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
              whileHover={{ scale: 1.02 }}
            >
              <div className="px-6 py-4 flex items-center justify-between cursor-pointer">
                <h3 className="text-lg font-bold text-gray-900">
                  {faq.question}
                </h3>
                {expanded === index ? (
                  <FiChevronUp className="text-gray-900" />
                ) : (
                  <FiChevronDown className="text-gray-900" />
                )}
              </div>
              <AnimatePresence>
                {expanded === index && (
                  <motion.div
                    className="px-6 py-4 bg-white max-w-3xl "
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p
                      className="text-gray-700 w-full"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FAQs;