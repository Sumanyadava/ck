import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('standard');

  const plans = {
    power: {
      title: "Power Plan",
      price: "$3,999/m",
      description: "Double the services. Cancel anytime.",
      yearlyPrice: "Power Yearly: $3,599/m x 12 months",
      yearlyDiscount: "Save 10% with yearly Power plan",
      features: [
        "Double services at a time",
        "More dedicated hours & services",
        "Average 48 hour delivery",
        "Unlimited users",
        "Easy payments",
        "Cancel anytime",
      ],
    },
    standard: {
      title: "Standard Plan",
      price: "$2,999/m",
      description: "One service at a time. Cancel anytime.",
      yearlyPrice: "Standard Yearly: $2,699/m x 12 months",
      yearlyDiscount: "Save 10% with yearly Standard plan",
      features: [
        "One service at a time",
        "Average 48 hour delivery",
        "Unlimited users",
        "Easy payments",
        "Cancel anytime",
      ],
    },
  };

  const plan = plans[selectedPlan];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-8 bg-gray-100 h-screen w-[100%]">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black text-white p-8 rounded-lg shadow-lg mb-8 md:mb-0 md:mr-8 h-[70%] max-w-md "
      >
        <div className="mb-6">
          <span className="bg-pink-500 text-xs font-semibold px-3 py-1 rounded-full">● Slots Availability: 6 as on 08/2024</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">Join <br />hubCentral</h1>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-4 rounded-lg mb-4 cursor-pointer"
        >
          <h3 className="font-semibold mb-2">Book a 15-min intro call</h3>
          <p className="text-sm text-gray-400">Learn more about how hubCentral works and how it can help you.</p>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-4 rounded-lg cursor-pointer"
        >
          <h3 className="font-semibold mb-2">Refer a company & earn</h3>
          <p className="text-sm text-gray-400">
            Earn 5% commission on monthly or yearly plans for each referral. Read referral program information.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md text-black h-[70%] w-full"
      >
        <div className="flex mb-4 bg-gray-100 w-max p-1 rounded-full">
          <span 
            className={`px-4 py-1 rounded-full mr-2 cursor-pointer ${
              selectedPlan === 'standard' ? 'bg-yellow-300 text-black' : 'bg-gray-200 text-black'
            }`}
            onClick={() => setSelectedPlan('standard')}
          >
            Standard
          </span>
          <span 
            className={`px-4 py-1 rounded-full cursor-pointer ${
              selectedPlan === 'power' ? 'bg-black text-white' : 'bg-gray-200 text-black'
            }`}
            onClick={() => setSelectedPlan('power')}
          >
            Power
          </span>
        </div>
        
        <h2 className="text-3xl font-bold mb-4">{plan.title}</h2>

        <h3 className="text-4xl font-bold mb-2">
          {plan.price}
          <span className="text-lg font-normal">/m</span>
        </h3>
        <p className="text-gray-600 mb-6">{plan.description}</p>
        <h4 className="font-semibold mb-2">What's included:</h4>
        <ul className="list-disc list-inside mb-6 text-sm">
          {plan.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <h4 className="font-semibold mb-2">{plan.yearlyPrice}</h4>
        <p className="text-gray-600 mb-6">{plan.yearlyDiscount}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold mb-2"
        >
          Get started
        </motion.button>
        <a href="#" className="text-center block text-sm text-gray-600 hover:underline">or book a call</a>
      </motion.div>
    </div>
  );
};

export default Pricing;
