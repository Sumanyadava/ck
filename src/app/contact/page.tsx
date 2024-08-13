"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    mobile: "",
    companyName: "",
    companyWebsite: "",
    queryType: "",
    preferredPlan: "",
    additionalInfo: "",
  });

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="w-full mx-auto p-6 bg-white shadow-lg text-gray-800"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-6xl font-bold mb-6 text-gray-800"
      >
        Connect with Us <br />
        and transform in no time
      </motion.h1>
      <p className="mb-6">
        Book a time with us to learn how we can add value back to your business
        with our capabilities.
      </p>
      <form onSubmit={handleSubmit}>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Hi, I am
            <input
              type="text"
              name="name"
              aria-label="Name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mb-4 border-b-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Reach me at
            <input
              type="email"
              name="email"
              aria-label="Email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mb-4 border-b-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Country
            <select
              name="country"
              aria-label="Country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 mb-4 border-b-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select your country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              {/* Add more options as needed */}
            </select>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Mobile number
            <input
              type="text"
              name="mobile"
              aria-label="Mobile number"
              placeholder="Mobile number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-2 mb-4 border-b-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Company name
            <input
              type="text"
              name="companyName"
              aria-label="Company name"
              placeholder="Company name"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-2 mb-4 border-b-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Company website
            <input
              type="text"
              name="companyWebsite"
              aria-label="Company website"
              placeholder="Company website"
              value={formData.companyWebsite}
              onChange={handleChange}
              className="w-full p-2 mb-4 border-b-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Type of query:
            <select
              name="queryType"
              aria-label="Type of query"
              value={formData.queryType}
              onChange={handleChange}
              className="w-full p-2 mb-4 border-b-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select query type</option>
              <option value="Book a call">Book a call</option>
              <option value="General enquiry">General enquiry</option>
            </select>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            Preferred Plan:
            <select
              name="preferredPlan"
              aria-label="Preferred Plan"
              value={formData.preferredPlan}
              onChange={handleChange}
              className="w-full p-2 mb-4 border-b-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select plan</option>
              <option value="Power">Power</option>
              <option value="Standard">Standard</option>
            </select>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            Any further information for us:
            <textarea
              name="additionalInfo"
              aria-label="Additional information"
              placeholder="Additional information"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="w-full p-2 mb-4 border-b-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            ></textarea>
          </motion.div>
        </AnimatePresence>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          type="submit"
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Page;
