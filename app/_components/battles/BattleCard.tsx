import Link from "next/link";

import classes from "./BattleCard.module.css";
import Summary from "./battleCardItems/Summary";

type battleCardProps = {
  modeName: string;
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

export default function BattleCard(cardProps: battleCardProps) {
  return (
    <div className={classes.battleCard}>
      <h2
        className={`text-4xl mb-4 font-medium ${
          cardProps.battleTitle === "Regular Battle"
            ? classes.regularText
            : cardProps.battleTitle === "Anarchy Battle Series"
            ? classes.anarchyText
            : cardProps.battleTitle === "Anarchy Battle Open"
            ? classes.anarchyText
            : classes.xText
        }`}
      >
        {cardProps.battleTitle}
      </h2>
      <div className={classes.cardOrder}>
        <div
          className={`${classes.mode} ${
            cardProps.battleTitle === "Regular Battle"
              ? classes.regularBG
              : cardProps.battleTitle === "Anarchy Battle Series"
              ? classes.anarchyBG
              : cardProps.battleTitle === "Anarchy Battle Open"
              ? classes.anarchyBG
              : classes.xBG
          } rounded-md flex items-center justify-center p-2`}
        >
          <p className="text-4xl">{cardProps.modeTitle}</p>
        </div>
        <Summary title="Next" className={`bg-yellowSide ${classes.nextMode}`}>
          {cardProps.nextModeTitle}
        </Summary>
        <Summary title="Time" className={`bg-purpleSide ${classes.time}`}>
          {cardProps.currentTime}
        </Summary>
        <Summary
          title="Next Time"
          className={`bg-blueSide ${classes.nextTime}`}
        >
          {cardProps.nextTime}
        </Summary>
        <Link
          href={`/upcoming/${cardProps.modeName}`}
          className={`${
            classes.upcomingBtn
          } rounded-md flex justify-center items-center transition-colors ${
            cardProps.battleTitle === "Regular Battle"
              ? classes.regularBtn
              : cardProps.battleTitle === "Anarchy Battle Series"
              ? classes.anarchyBtn
              : cardProps.battleTitle === "Anarchy Battle Open"
              ? classes.anarchyBtn
              : classes.xBtn
          }`}
        >
          <span className="text-xl">Upcoming</span>
        </Link>
        {cardProps.stages?.map((stage, index) => (
          <div
            key={stage.id}
            className={index === 0 ? classes.stage1 : classes.stage2}
          >
            <img
              src={stage.image.url}
              alt={stage.name}
              className="rounded-md"
            />
          </div>
        ))}
        {cardProps.stages?.map((stage, index) => (
          <div
            key={stage.id}
            className={`rounded-md p-2 flex justify-center items-center text-center ${
              index === 0 ? classes.stageName1 : classes.stageName2
            }`}
          >
            <p className="text-xl">{stage.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
