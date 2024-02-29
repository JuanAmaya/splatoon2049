import { Challenges } from "@/public/svgs";
import Image from "next/image";

export default function ChallengesPage() {
  return (
    <main className="mt-8 max-w-screen-md mx-auto">
      <div className="flex gap-2 justify-center mx-4">
        <div className="bg-graySide rounded-md p-2 flex justify-center items-center text-6xl">
          <Challenges />
        </div>
        <div className="bg-purpleSide rounded-md p-2 flex justify-center items-center text-center">
          <p className="text-graySide text-4xl">
            No Challenges currently scheduled.
          </p>
        </div>
      </div>
    </main>
  );
}
