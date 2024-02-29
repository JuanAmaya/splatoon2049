"use client";

import UpcomingCard from "@/app/_components/upcoming/upcomingCard";
import useFetch from "@/app/_hooks/useFetch";
import { useEffect, useState } from "react";

type upcomingBattles = {
  regularMatchSetting?: {
    vsStages: Array<{
      name: string;
      image: {
        url: string;
      };
      id: string;
    }>;
    vsRule: {
      name: string;
      id: string;
    };
  };
};

type upcomingAnarchyBattles = {
  bankaraMatchSettings: Array<{
    vsStages: Array<{
      name: string;
      image: {
        url: string;
      };
      id: string;
    }>;
    vsRule: {
      name: string;
      id: string;
    };
  }>;
};

type upcomingXBattles = {
  xMatchSetting?: {
    vsStages: Array<{
      name: string;
      image: {
        url: string;
      };
      id: string;
    }>;
    vsRule: {
      name: string;
      id: string;
    };
  };
};

type upcomingSchedules = {
  nodes: Array<{
    startTime: string;
    endTime: string;
    matchSetting: upcomingBattles | upcomingAnarchyBattles | upcomingXBattles;
  }>;
};

type upcomingProps = {
  params: {
    mode: string;
  };
};

function isRegularSchedule(object: unknown): object is upcomingBattles {
  if (object !== null && typeof object === "object") {
    return "regularMatchSetting" in object;
  }

  return false;
}

function isBankaraSchedule(object: unknown): object is upcomingAnarchyBattles {
  if (object !== null && typeof object === "object") {
    return "bankaraMatchSettings" in object;
  }

  return false;
}

function isXSchedule(object: unknown): object is upcomingXBattles {
  if (object !== null && typeof object === "object") {
    return "xMatchSetting" in object;
  }

  return false;
}

export default function UpcomingBattlesPage(props: upcomingProps) {
  const [upcomingBattles, setUpcomingBattles] = useState<upcomingSchedules>();
  const [title, setTitle] = useState("");

  const { loading, error, value } = useFetch({
    url: `https://splatoon3.ink/data/schedules.json`,
    dependencies: [],
  });

  useEffect(() => {
    if (!loading) {
      if (props.params.mode === "regular") {
        setUpcomingBattles(value?.data.regularSchedules);
        setTitle("Regular");
      } else if (props.params.mode === "anarchySeries") {
        setUpcomingBattles(value?.data.bankaraSchedules);
        setTitle("Anarchy Series");
      } else if (props.params.mode === "anarchyOpen") {
        setUpcomingBattles(value?.data.bankaraSchedules);
        setTitle("Anarchy Open");
      } else if (props.params.mode === "x") {
        setUpcomingBattles(value?.data.xSchedules);
        setTitle("X");
        console.log("x", value?.data.xSchedules);
      }
    }
  }, [upcomingBattles, loading]);

  return (
    <div className="mb-8">
      {!loading && (
        <div className="mt-8 mx-4">
          <h2
            className={`text-center font-medium text-4xl mb-4 ${
              title === "Regular"
                ? "text-greenSide"
                : title === "X"
                ? "text-aquaSide"
                : "text-orangeSide"
            }`}
          >
            {title} Battle <span className="text-graySide">/ Upcoming</span>
          </h2>
          <div className="flex flex-col items-center mx-auto gap-16">
            {upcomingBattles !== undefined &&
              props.params.mode === "regular" &&
              upcomingBattles.nodes.map(
                (battle, index) =>
                  isRegularSchedule(battle) && (
                    <UpcomingCard
                      key={index}
                      upcomingTitle={title}
                      gameMode={battle.regularMatchSetting?.vsRule.name!}
                      index={index}
                      startTime={battle.startTime!}
                      endTime={battle.endTime!}
                      stages={battle.regularMatchSetting?.vsStages!}
                    />
                  )
              )}

            {upcomingBattles !== undefined &&
              props.params.mode === "anarchySeries" &&
              upcomingBattles.nodes.map(
                (battle, index) =>
                  isBankaraSchedule(battle) && (
                    <UpcomingCard
                      key={index}
                      upcomingTitle={title}
                      gameMode={battle.bankaraMatchSettings[0]?.vsRule.name!}
                      index={index}
                      startTime={battle.startTime!}
                      endTime={battle.endTime!}
                      stages={battle.bankaraMatchSettings[0]?.vsStages!}
                    />
                  )
              )}

            {upcomingBattles !== undefined &&
              props.params.mode === "anarchyOpen" &&
              upcomingBattles.nodes.map(
                (battle, index) =>
                  isBankaraSchedule(battle) && (
                    <UpcomingCard
                      key={index}
                      upcomingTitle={title}
                      gameMode={battle.bankaraMatchSettings[1]?.vsRule.name!}
                      index={index}
                      startTime={battle.startTime!}
                      endTime={battle.endTime!}
                      stages={battle.bankaraMatchSettings[1]?.vsStages!}
                    />
                  )
              )}

            {upcomingBattles !== undefined &&
              props.params.mode === "x" &&
              upcomingBattles.nodes.map(
                (battle, index) =>
                  isXSchedule(battle) && (
                    <UpcomingCard
                      key={index}
                      upcomingTitle={title}
                      gameMode={battle.xMatchSetting?.vsRule.name!}
                      index={index}
                      startTime={battle.startTime!}
                      endTime={battle.endTime!}
                      stages={battle.xMatchSetting?.vsStages!}
                    />
                  )
              )}
          </div>
        </div>
      )}
    </div>
  );
}
