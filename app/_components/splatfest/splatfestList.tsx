"use client";

import useFetch from "@/app/_hooks/useFetch";
import { useEffect, useState } from "react";
import SplatfestCard from "./splatfestCard";
import DeepCutScore from "./items/deepCutScore";

type splatfestListType = {
  nodes: Array<{
    state: string;
    startTime: string;
    endTime: string;
    title: string;
    image: {
      url: string;
    };
    teams: Array<{
      result: {
        isWinner: boolean;
        horagaiRatio: number;
        isHoragaiRatioTop: boolean;
        voteRatio: number;
        isVoteRatioTop: boolean;
        regularContributionRatio: number;
        isRegularContributionRatioTop: boolean;
        challengeContributionRatio: number;
        isChallengeContributionRatioTop: boolean;
        tricolorContributionRatio: number;
        isTricolorContributionRatioTop: boolean;
      };
      teamName: string;
      color: {
        a: number;
        b: number;
        g: number;
        r: number;
      };
      image: {
        url: string;
      };
    }>;
  }>;
};

export default function SplatfestList() {
  const [splatfestListArr, setSplatfestListArr] = useState<splatfestListType>();

  const { loading, error, value } = useFetch({
    url: `https://splatoon3.ink/data/festivals.json`,
    dependencies: [],
  });

  useEffect(() => {
    if (!loading) {
      setSplatfestListArr(value?.US.data.festRecords);
      console.log(splatfestListArr);
    }
  }, [loading, splatfestListArr]);

  return (
    <div className="mt-8 mx-auto max-w-screen-md">
      {splatfestListArr !== undefined && (
        <DeepCutScore nodes={splatfestListArr.nodes} />
      )}
      <ul className="flex flex-col gap-16 mx-4 mb-8">
        {splatfestListArr !== undefined &&
          splatfestListArr.nodes.map((fest, index) => (
            <SplatfestCard
              key={index}
              startTime={fest.startTime}
              endTime={fest.endTime}
              image={fest.image}
              title={fest.title}
              state={fest.state}
              teams={fest.teams}
            />
          ))}
      </ul>
    </div>
  );
}
