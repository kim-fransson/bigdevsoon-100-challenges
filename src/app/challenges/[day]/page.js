import { challenges } from "@/app/challenges";

export async function generateMetadata({ params }) {
  return {
    title: `Day ${params.day} of 100`,
    description: `My solution for ${challenges[Number.parseInt(params.day) - 1].title} challenge`,
  };
}

export default function Challenge({ params }) {
  const Solution = challenges[Number.parseInt(params.day) - 1].solution
  return <Solution />;
}
