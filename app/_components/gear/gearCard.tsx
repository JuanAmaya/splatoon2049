import { Coin } from "@/public/svgs";
import classes from "./gearCard.module.css";
import RemainingTime from "../salmonrun/remainingTIme";

type GearCard = {
  index: number;
  brandImg: string;
  brandName: string;
  endTime: string;
  primayPowerImg: string;
  primaryPowerName: string;
  gearImg: string;
  gearName: string;
  additionalGearPowers: Array<{
    name: string;
    image: {
      url: string;
    };
  }>;
  price: number;
};

export default function GearCard(props: GearCard) {
  return (
    <li key={props.index} className={classes.gearCardOrder}>
      <div className={`bg-greenSide rounded-md p-2 ${classes.opt1}`}>
        <img src={props.brandImg} alt={props.brandName} className="w-12" />
      </div>
      <RemainingTime
        className={`bg-blueSide rounded-md flex justify-center items-center ${classes.opt2}`}
        endTime={props.endTime}
      />
      <div className={`bg-graySide rounded-md ${classes.opt3}`}>
        <img
          src={props.primayPowerImg}
          alt={props.primaryPowerName}
          className="w-12"
        />
      </div>
      <div className={`bg-purpleSide rounded-md p-2 ${classes.opt4}`}>
        <img src={props.gearImg} alt={props.gearName} className="w-40" />
      </div>
      {props.additionalGearPowers.map((power, index) => (
        <div
          key={index}
          className={`
          bg-graySide rounded-md h-fit
          ${
            index === 0
              ? classes.opt5
              : index === 1
              ? classes.opt6
              : classes.opt7
          }
          `}
        >
          <img
            key={index}
            src={power.image.url}
            alt={power.name}
            className="w-12"
          />
        </div>
      ))}
      <div
        className={`bg-orangeSide p-2 rounded-md flex justify-center items-center ${classes.opt8}`}
      >
        <span className="text-xl text-graySide flex justify-center items-center gap-2">
          <Coin /> {props.price}
        </span>
      </div>
    </li>
  );
}
