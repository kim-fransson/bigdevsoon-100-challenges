import { challenges } from "@/app/challenges";

export async function generateMetadata({ params }) {
  return {
    title: `Day ${params.day} of 100`,
    description: `My solution for ${challenges[params.day - 1].title} challenge`,
  };
}

export default function Challenge({ params }) {
  return challenges[params.day - 1].solution;
}
