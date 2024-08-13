import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const Benifits = () => {
  const reviews = [
    { body: "● No more headache to business owner", textCol: "text-black" },
    { body: "● No hiring trouble", textCol: "text-gray-400" },
    { body: "● No extra payouts", textCol: "text-black" },

    { body: "● No more salary disbursement", textCol: "text-gray-400" },
    { body: "● No more inexperienced employee", textCol: "text-black" },
    { body: "● No more stress on employee exit", textCol: "text-gray-400" },
  ];

  const firstRow = reviews.slice(0, 6);
  const secondRow = reviews.slice(3, 6);

  const ReviewCard = ({ body, textCol }: { body: string; textCol: string }) => (
    <figure className={cn("")}>
      <blockquote className={`mt-2 text-6xl ${textCol}`}>{body}</blockquote>
    </figure>
  );

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="h-[60vh] mt-10">
      <div className="flex  h-full w-full  justify-around">
        <div className=" h-[80%] w-1/2 bg-pink-200 rounded-xl p-5">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/c3L0fbtftRY?si=Z0_d98vGNbnYIaBK"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="h-[80%] w-1/3 bg-pink-200 ">
          <Image
            src=""
            alt=""
            className="h-full w-full bg-pink-500  rounded-xl"
          />
        </div>
      </div>

      {/* //////////////herre  */}
      <motion.div
        ref={ref}
        initial={{ scale: 1.5 }} // Start slightly bigger
        animate={inView ? { scale: 1 } : {}} // Animate to normal size when in view
        transition={{ duration: 1.5, delay: 0.5 }} // Animation duration
        className="relative flex w-full flex-col items-center justify-center rounded-lg  overflow-hidden "
      >
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 dark:from-background"></div>
      </motion.div>
    </div>
  );
};

export default Benifits;
