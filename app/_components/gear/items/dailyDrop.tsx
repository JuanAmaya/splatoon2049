import GearCard from "../gearCard";
import classes from "./dailyDrop.module.css";
import SaleEndTime from "./saleEndTime";

type dailyDropProps = {
  image: {
    url: string;
  };
  brand: {
    name: string;
  };
  saleEndTime: string;
  brandGears: Array<{
    saleEndTime: string;
    price: number;
    gear: {
      name: string;
      brand: {
        name: string;
        image: {
          url: string;
        };
      };
      primaryGearPower: {
        name: string;
        image: {
          url: string;
        };
      };
      additionalGearPowers: Array<{
        name: string;
        image: {
          url: string;
        };
      }>;
      image: {
        url: string;
      };
    };
  }>;
};

export default function DailyDrop(props: dailyDropProps) {
  return (
    <div>
      <div className={`mx-4 ${classes.dailyDropOrder}`}>
        <div
          className={`bg-yellowSide rounded-md flex justify-center items-center p-2 ${classes.opt1}`}
        >
          <h2 className="text-4xl text-graySide">The Daily Drop</h2>
        </div>
        <SaleEndTime
          saleEndTime={props.saleEndTime}
          className={`bg-blueSide rounded-md flex justify-center items-center p-2 ${classes.opt3}`}
        />

        <div className={classes.opt2}>
          <img
            src={props.image.url}
            alt={props.brand.name}
            className="rounded-md w-full h-48 object-cover"
          />
        </div>
      </div>
      <ul className="flex gap-8 flex-wrap justify-center mt-8">
        {props.brandGears.map((gear, index) => (
          <GearCard
            key={index}
            index={index}
            brandImg={gear.gear.brand.image.url}
            brandName={gear.gear.brand.name}
            primayPowerImg={gear.gear.primaryGearPower.image.url}
            primaryPowerName={gear.gear.primaryGearPower.name}
            gearImg={gear.gear.image.url}
            gearName={gear.gear.name}
            additionalGearPowers={gear.gear.additionalGearPowers}
            price={gear.price}
            endTime={gear.saleEndTime}
          />
        ))}
      </ul>
    </div>
  );
}
