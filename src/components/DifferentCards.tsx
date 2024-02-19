import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
 
export function DifferentCards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "GUARANTEED",
    description:
      "We only win if you win. That's the basis for a good partnership. You won't carry all the risk, we'll share it. ",
    link: "https://stripe.com",
  },
  {
    title: "RESULTS",
    description:
      "Our first priority is to get you results. Less talk, more walk.",
    link: "https://netflix.com",
  },
  {
    title: "LOCAL",
    description:
      "We're not tucked away in some anonymous call center. We're a local company, so you'll be able to reach us when you need us.",
    link: "https://google.com",
  },
  {
    title: "SPECIALIZED",
    description:
      "Jack of all trades... master of none. Specialization works that's why we work with industries we know, so we can guarantee results.",
    link: "https://meta.com",
  },
];