import UpcomingTime from "../upcoming/upcomingTime";
import classes from "./salmonrunCard.module.css";
import cohozuna from "@/public/images/SalmonBosses/cohozuna.png";
import horrorboros from "@/public/images/SalmonBosses/horrorboros.png";
import megalodontia from "@/public/images/SalmonBosses/megalodontia.png";
import random from "@/public/images/SalmonBosses/random.png";
import Image from "next/image";
import RemainingTime from "./remainingTIme";

type cardProps = {
  index: number;
  startTime: string;
  endTime: string;
  boss: {
    name: string;
    id: string;
  };
  coopStage: {
    id: string;
    name: string;
    thumbnailImage: {
      url: string;
    };
  };
  weapons: Array<{
    __splatoon3ink_id: string;
    name: string;
    image: {
      url: string;
    };
  }>;
};

export default function SalmonrunCard(props: cardProps) {
  return (
    <div className={classes.cardOrder}>
      <div
        className={`bg-yellowSide text-graySide rounded-md p-2 ${classes.opt1}`}
      >
        <span className="text-xl">
          {props.index === 0 ? "Now" : props.index === 1 ? "Next" : "Future"}
        </span>
      </div>
      <div
        className={`bg-orangeSide text-graySide rounded-md flex justify-center items-center ${classes.opt2}`}
      >
        <h2 className="text-4xl">Salmon Run</h2>
      </div>
      <UpcomingTime
        className={`bg-graySide text-primaryBG rounded-md flex justify-center items-center text-xl p-2 ${classes.opt4}`}
        startTime={props.startTime}
        endTime={props.endTime}
        showDay={true}
      />
      <div className={classes.opt5}>
        <img
          src={props.coopStage.thumbnailImage.url}
          alt={props.coopStage.name}
          className="h-full object-cover rounded-md"
        />
      </div>
      <div
        className={`bg-graySide text-primaryBG rounded-md flex justify-center items-center p-2 ${classes.opt10}`}
      >
        <span className="text-xl">{props.coopStage.name}</span>
      </div>
      <div
        className={`bg-purpleSide rounded-md flex justify-center items-center p-2 ${classes.opt3}`}
      >
        <Image
          src={
            props.boss.name === "Cohozuna"
              ? cohozuna
              : props.boss.name === "Horrorboros"
              ? horrorboros
              : props.boss.name === "Megalodontia"
              ? megalodontia
              : random
          }
          alt={props.boss.name}
          className="w-28"
        />
      </div>
      {props.weapons.map((weapon, index: number) => (
        <div
          key={index}
          className={`
           bg-greenSide 
           rounded-md
           flex justify-center items-center
          ${
            index === 0
              ? classes.opt6
              : index === 1
              ? classes.opt7
              : index === 2
              ? classes.opt8
              : classes.opt9
          }
          `}
        >
          <img src={weapon.image.url} alt={weapon.name} className="w-20" />
        </div>
      ))}
      <RemainingTime
        className={`bg-blueSide text-graySide rounded-md p-2 flex justify-center items-center ${classes.opt11}`}
        endTime={props.endTime}
      />
    </div>
  );
}
