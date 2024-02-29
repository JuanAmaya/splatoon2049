import {
  ClamBlitz,
  RainMaker,
  RegularBattle,
  SplatZones,
  TowerControl,
} from "@/public/svgs";
import classes from "./upcomingCard.module.css";
import UpcomingTime from "./upcomingTime";

type upcomingCardProps = {
  upcomingTitle: string;
  gameMode: string;
  index: number;
  startTime: string;
  endTime: string;
  stages: Array<{
    name: string;
    image: {
      url: string;
    };
    id: string;
  }>;
};

export default function UpcomingCard(props: upcomingCardProps) {
  return (
    <div className={classes.cardOrder}>
      <div
        className={`bg-graySide rounded-md text-6xl flex justify-center items-center ${classes.opt1}`}
      >
        {props.gameMode === "Turf War" && <RegularBattle />}
        {props.gameMode === "Splat Zones" && <SplatZones />}
        {props.gameMode === "Tower Control" && <TowerControl />}
        {props.gameMode === "Rainmaker" && <RainMaker />}
        {props.gameMode === "Clam Blitz" && <ClamBlitz />}
      </div>
      <div
        className={`bg-brownSide text-graySide rounded-md text-xl p-2 flex justify-center items-center ${classes.opt2}`}
      >
        {props.index === 0 ? "Now" : props.index === 1 ? "Next" : "Future"}
      </div>
      <UpcomingTime
        className={`bg-purpleSide text-graySide rounded-md text-xl p-2 text-center ${classes.opt3}`}
        startTime={props.startTime}
        endTime={props.endTime}
      />
      <div
        className={`${
          props.upcomingTitle === "Regular"
            ? "bg-greenSide"
            : props.upcomingTitle === "Anarchy Series"
            ? "bg-orangeSide"
            : props.upcomingTitle === "Anarchy Open"
            ? "bg-orangeSide"
            : "bg-aquaSide"
        } text-graySide rounded-md text-4xl p-2 text-center ${classes.opt4}`}
      >
        {props.gameMode}
      </div>
      {props.stages.map((stage, index) => (
        <div
          key={stage.id}
          className={index === 0 ? classes.opt5 : classes.opt6}
        >
          <img src={stage.image.url} alt={stage.name} className="rounded-md" />
        </div>
      ))}

      {props.stages.map((stage, index) => (
        <div
          key={stage.id}
          className={`bg-graySide text-primaryBG rounded-md text-xl p-2 flex justify-center items-center text-center ${
            index === 0 ? classes.opt7 : classes.opt8
          }`}
        >
          <span>{stage.name}</span>
        </div>
      ))}
    </div>
  );
}
