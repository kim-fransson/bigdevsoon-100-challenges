import Link from "next/link";
import { challenges } from "./challenges";

export default function Home() {
  return (
    <main
      className="flex flex-col md:gap-12 gap-4 min-h-screen p-4 md:p-12 
    bg-gradient-to-b from-slate-900 to-slate-700"
    >
      <h1 className="md:text-5xl text-3xl font-extrabold md:leading-[4rem]  bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-amber-500">
        BigDevSoon 100 Challenges
      </h1>
      <div className="flex flex-wrap md:gap-8 gap-4">
        {challenges.map(({ day, title }) => (
          <ChallengeCard key={day} day={day} title={title} />
        ))}
      </div>
    </main>
  );
}

const ChallengeCard = ({ day, title }) => {
  return (
    <Link
      className="max-w-xs bg-gray-100 md:p-4 p-2 rounded-lg shadow-lg transition-all hover:scale-110 
      focus-visible:scale-110 focus-visible:ring-4 ring-amber-500 outline-none"
      href={`/challenges/${day}`}
    >
      <h2 className="md:text-xl text-lg font-medium">
        <span className="text-sky-700 font-semibold">{`#${day} `}</span>
        <span className="text-gray-900 font-medium">{title}</span>
      </h2>
    </Link>
  );
};
