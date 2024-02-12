import Link from "next/link";
import { challenges } from "./challenges";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 min-h-screen p-12 
    bg-gradient-to-b from-slate-900 to-slate-700">
      <h1 className="text-5xl font-extrabold leading-[4rem]  bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-amber-500">BigDevSoon 100 Challenges</h1>
      <div className="flex flex-wrap gap-8">
        {challenges.map(({ id, title }) => <ChallengeCard key={id} id={id} title={title} />)}
      </div>
    </main>
  );
}

const ChallengeCard = ({ id, title }) => {
  return (
    <Link
      className="max-w-xs bg-gray-100 p-4 rounded-lg shadow-lg transition-all hover:scale-110 focus-visible:scale-110 focus-visible:ring-4 ring-amber-500 outline-none"
      href={`/challenges/${id}`}>
      <h2 className="text-xl font-medium">
        <span className="text-sky-700 font-semibold">{`#${id} `}</span>
        <span className="text-gray-900 font-medium">{title}</span>
      </h2>
    </Link>
  )
}
