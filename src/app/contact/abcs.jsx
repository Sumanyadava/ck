'use client'
import React from 'react';
import { motion } from 'framer-motion';

const InputField = ({ label, placeholder, type = 'text' }) => (
  <motion.div
    whileFocus={{ scale: 1.05 }}
    className="mb-4"
  >
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </motion.div>
);

const page = () => {
  return (
    <div className=" mx-auto px-4 py-8 bg-gray-500">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Let's Create Experiences!</h1>
          <p className="mb-8">Let's talk.</p>
          
          <InputField label="Hi! I am" placeholder="eg. Andy" />
          <InputField label="Reach me at" placeholder="eg.hello@gmail.com" type="email" />
          <InputField label="Country" placeholder="eg. India" />
          <InputField label="Mobile No." placeholder="+91 98765 43210" type="tel" />
          <InputField label="Company Name" placeholder="leo9studio" />
          
          <div className="mb-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">UX-UI</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Mobile Apps</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Web Tech</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">SEO</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">SMM</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Branding</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Other</span>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Comments</label>
            <textarea className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
          </div>
          
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Send
          </button>
        </div>
        
        <div className="md:w-1/3 mt-8 md:mt-0">
          {/* Add your logo or icon here */}
          <div className="mb-4">
            <p>info@leo9studio.com</p>
            <p>IND: +91 72081 49788</p>
            <p>USA: +1 (802) 347-3690</p>
            <p>Join The Team: +91 99302 56369</p>
          </div>
          
          <div>
            <p>REVIEWED ON</p>
            <p>Clutch</p>
            <p>★★★★★ 28 REVIEWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;