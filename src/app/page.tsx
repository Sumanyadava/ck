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
import ContactUS from "@/components/Contactus";
import WhyUs from "@/components/WhyUs";
import Works from "@/components/Works";
import { FollowingPointerDemo } from "@/components/CardAccer";
import { CardHoverEffectDemo } from "@/components/hovercard";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div className="bg-[#fffefe] dark:bg-gray-300">
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
            <MarqueeDemo />
            <WhyUs />
            <Works />
            <Benifits />
            <FollowingPointerDemo />
            <AnimatedPinDemo />
            <CardHoverEffectDemo />
            <DockDemo />
            <FAQs />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
