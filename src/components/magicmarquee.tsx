import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    body: "● More Leads Flow",
  },
  {
    body: "● More Efficient Lead Journey",
  },
  {
    body: " ● More Deal Closures",
  },
  {
    body: " ● XY Retail - UpRISE ",
  },
  {
    body: " ● AVANA Aviation ",
  },
  {
    body: " ● Tatva Networks ",
  },
];

const firstRow = reviews.slice(0, 3);
const secondRow = reviews.slice(3, 6);

const ReviewCard = ({ body }: { body: string }) => {
  return (
    <figure className={cn("")}>
      <blockquote className="mt-2 text-6xl">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border  md:shadow-xl">
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
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3  dark:from-background"></div>
    </div>
  );
}
