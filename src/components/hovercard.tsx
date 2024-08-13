import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "1",
    description: "Subscribe to a plan & request as many services as youd like.",
  },
  {
    title: "2",
    description: "Our experts get to work with a turnaround time of 1-2 days on average (Mon-Fri).",
  },
  {
    title: "3",
    description: "We will make changes until youre 100% satisfied.",
  },
  {
    title: "4",
    description: "Manage requests with Trello, and were in Slack too.",
  },
  {
    title: "5",
    description: "Easy monthly subscription with affordable pricing.",
  },
  {
    title: "6",
    description: "You can cancel the services anytime.",
  },
];
