"use client";
import { useEffect, useState } from "react";
import useFetch from "@/app/_hooks/useFetch";
import setFormatSchedules from "@/app/_hooks/setFormatSchedules";
import BattleCard from "./BattleCard";
import ErrorFetch from "../ErrorFetch";

type battleSchedule = {
  battleTitle: string;
  modeTitle: string;
  currentTime: string;
  nextModeTitle: string;
  nextTime: string;
  stages: Array<{
    name: string;
    image: {
      url: string;
    };
    id: string;
  }>;
};

export default function BattleList() {
  const [regularSchedule, setRegularSchedule] = useState<battleSchedule>();
  const [anarchySeriesSchedule, setAnarchySeriesSchedule] =
    useState<battleSchedule>();
  const [anarchyOpenSchedule, setAnarchyOpenSchedule] =
    useState<battleSchedule>();
  const [xSchedule, setXSchedule] = useState<battleSchedule>();

  const { loading, error, value } = useFetch({
    url: `https://splatoon3.ink/data/schedules.json`,
    dependencies: [],
  });

  useEffect(() => {
    const newRegularData = setFormatSchedules({
      battleSchedule: value?.data.regularSchedules!,
      battleType: "RegularMatchSetting",
    });

    const newAnarchySeriesData = setFormatSchedules({
      battleSchedule: value?.data.bankaraSchedules!,
      battleType: "BankaraMatchSettingSeries",
    });

    const newAnarchyOpenData = setFormatSchedules({
      battleSchedule: value?.data.bankaraSchedules!,
      battleType: "BankaraMatchSettingOpen",
    });

    const newXData = setFormatSchedules({
      battleSchedule: value?.data.xSchedules!,
      battleType: "xMatchSetting",
    });

    setRegularSchedule(newRegularData);
    setAnarchySeriesSchedule(newAnarchySeriesData);
    setAnarchyOpenSchedule(newAnarchyOpenData);
    setXSchedule(newXData);
  }, [value, loading]);

  return (
    <>
      <div className="flex justify-center my-8 mx-4">
        {error && <ErrorFetch />}
        {!loading && (
          <div className="flex flex-col gap-16">
            <BattleCard
              battleTitle={regularSchedule?.battleTitle!}
              modeTitle={regularSchedule?.modeTitle!}
              currentTime={regularSchedule?.currentTime!}
              nextModeTitle={regularSchedule?.nextModeTitle!}
              nextTime={regularSchedule?.nextTime!}
              stages={regularSchedule?.stages!}
              modeName="regular"
            />

            <BattleCard
              battleTitle={anarchySeriesSchedule?.battleTitle!}
              modeTitle={anarchySeriesSchedule?.modeTitle!}
              currentTime={anarchySeriesSchedule?.currentTime!}
              nextModeTitle={anarchySeriesSchedule?.nextModeTitle!}
              nextTime={anarchySeriesSchedule?.nextTime!}
              stages={anarchySeriesSchedule?.stages!}
              modeName="anarchySeries"
            />

            <BattleCard
              battleTitle={anarchyOpenSchedule?.battleTitle!}
              modeTitle={anarchyOpenSchedule?.modeTitle!}
              currentTime={anarchyOpenSchedule?.currentTime!}
              nextModeTitle={anarchyOpenSchedule?.nextModeTitle!}
              nextTime={anarchyOpenSchedule?.nextTime!}
              stages={anarchyOpenSchedule?.stages!}
              modeName="anarchyOpen"
            />

            <BattleCard
              battleTitle={xSchedule?.battleTitle!}
              modeTitle={xSchedule?.modeTitle!}
              currentTime={xSchedule?.currentTime!}
              nextModeTitle={xSchedule?.nextModeTitle!}
              nextTime={xSchedule?.nextTime!}
              stages={xSchedule?.stages!}
              modeName="x"
            />
          </div>
        )}
      </div>
    </>
  );
}
