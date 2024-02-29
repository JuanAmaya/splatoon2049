"use client";

import useFetch from "@/app/_hooks/useFetch";
import { useEffect, useState } from "react";
import SalmonrunCard from "./salmonrunCard";

type salmonrunSchedule = {
  regularSchedules: {
    nodes: Array<{
      startTime: string;
      endTime: string;
      setting: {
        __typename: string;
        boss: {
          name: string;
          id: string;
        };
        coopStage: {
          name: string;
          thumbnailImage: {
            url: string;
          };
          id: string;
        };
        weapons: Array<{
          __splatoon3ink_id: string;
          name: string;
          image: {
            url: string;
          };
        }>;
      };
    }>;
  };
};

export default function SalmonrunList() {
  const [salmonrunBattle, setSalmonrunBattle] = useState<salmonrunSchedule>();
  const { loading, error, value } = useFetch({
    url: `https://splatoon3.ink/data/schedules.json`,
    dependencies: [],
  });

  useEffect(() => {
    if (!loading) {
      setSalmonrunBattle(value?.data.coopGroupingSchedule);
      console.log(value?.data.coopGroupingSchedule);
    }
  }, [loading]);

  return (
    <div className="max-w-screen-lg mx-auto">
      <ul className="flex flex-col items-center gap-12 my-8">
        {salmonrunBattle?.regularSchedules.nodes.map((node, index) => (
          <li key={index} className="mx-4">
            <SalmonrunCard
              index={index}
              startTime={node.startTime}
              endTime={node.endTime}
              boss={node.setting.boss}
              coopStage={node.setting.coopStage}
              weapons={node.setting.weapons}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
