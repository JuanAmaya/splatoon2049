"use client";
import { useEffect, useState } from "react";
import TeamScore from "./teamScore";

import shiver from "@/public/images/DeepCut/Shiver.png";
import frye from "@/public/images/DeepCut/Frye.png";
import bigman from "@/public/images/DeepCut/Bigman.png";

type deepCutScoreProps = {
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

export default function DeepCutScore(props: deepCutScoreProps) {
  const [scoreShiver, setScoreShiver] = useState(0);
  const [scoreFrye, setScoreFrye] = useState(0);
  const [scoreBigman, setScoreBigman] = useState(0);

  useEffect(() => {
    props.nodes.map((fest) => {
      fest.teams.map((team, index) => {
        if (team.result.isWinner && index === 0) {
          setScoreShiver((prev) => prev + 1);
        } else if (team.result.isWinner && index === 1) {
          setScoreFrye((prev) => prev + 1);
        } else if (team.result.isWinner && index === 2) {
          setScoreBigman((prev) => prev + 1);
          console.log("holaaaa", scoreBigman);
        }
      });
    });
  }, []);

  return (
    <div>
      <h2 className="text-4xl text-blueSide m-4 font-medium">
        Splatfest Victories
      </h2>
      <div className="flex gap-6 justify-center mb-8 mx-4">
        <TeamScore icon={shiver.src} name="Shiver" score={scoreShiver} />
        <TeamScore icon={frye.src} name="Frye" score={scoreFrye} />
        <TeamScore icon={bigman.src} name="Bigman" score={scoreBigman} />
      </div>
    </div>
  );
}
