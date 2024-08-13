import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  { body: "● More Leads Flow",textCol:"text-black" },
  { body: "● More Efficient Lead Journey",textCol:"text-gray-400" },
  { body: "● More Deal Closures",textCol:"text-black" },

  { body: "● XY Retail - UpRISE",textCol:"text-gray-400"  },
  { body: "● AVANA Aviation",textCol:"text-black" },
  { body: "● Tatva Networks",textCol:"text-gray-400"  },
];

const firstRow = reviews.slice(0, 3);
const secondRow = reviews.slice(3, 6);

const ReviewCard = ({ body, textCol }: { body: string, textCol:string  }) => (
  <figure className={cn("")}>
    <blockquote className={`mt-2 text-6xl ${textCol}`} >{body}</blockquote>
  </figure>
);

export function MarqueeDemo() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 1.5 }} // Start slightly bigger
      animate={inView ? { scale: 1 } : {}} // Animate to normal size when in view
      transition={{ duration: 1.5 , delay:0.5 }} // Animation duration
      className="relative flex h-[500px] w-full flex-col items-center justify-center rounded-lg md:shadow-xl overflow-hidden"
    >
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 dark:from-background"></div>
    </motion.div>
  );
}
