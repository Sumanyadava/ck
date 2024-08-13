"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Preloader from "@/components/Preloader";
import LandingPage from "@/components/LandingPage";
import { MarqueeDemo } from "@/components/magicmarquee";
import { DockDemo } from "@/components/nav";
import { AnimatedPinDemo } from "@/components/pin";
import Benifits from "@/components/Benifits";
import Footer from "@/components/Footer";
import FAQs from "@/components/FAQs";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import Works from "@/components/Works";
import { FollowingPointerDemo } from "@/components/CardAccer";
import { CardHoverEffectDemo } from "@/components/hovercard";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div className="bg-[#f2f4f5] ">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="preloader"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
            className="fixed inset-0 z-50"
          >
            <Preloader />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <LandingPage />
            <div className="overflow-hidden">
              <MarqueeDemo />
            </div>
            <CardHoverEffectDemo />

            <WhyUs />
            {/* <Works /> */}
            <Benifits />
            {/* <FollowingPointerDemo /> */}
            {/* <AnimatedPinDemo /> */}


            <Pricing />
            <div className="flex justify-around items-center w-full bg-white flex-wrap ">
              <FAQs />
              <div className="h-[60vh] bg-purple-600 rounded-lg w-[44vh] flex flex-col justify-around items-center">
                <img
                  src="acs"
                  alt="asc"
                  className="rounded-full h-60 w-60 bg-pink-200"
                />
                <h1 className="text-5xl text-center font-bold">
                  Book a 15-minute intro call
                </h1>
                <button className="p-2 bg-black rounded-sm ">
                  Schedule now
                </button>
                <p>
                  Prefer to email?
                  <a href="#" className="text-green-400">
                    {" "}
                    hello@hubcentral.co
                  </a>
                </p>
              </div>
            </div>

            <DockDemo />
            <Footer />
            {/* //commits nav scratch */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
