import GearCard from "../gearCard";

type gearOnSaleProps = {
  limitedGears: Array<{
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

export default function GearOnSale(props: gearOnSaleProps) {
  return (
    <div className="mt-16">
      <div className="bg-yellowSide w-fit p-2 rounded-md mx-4">
        <h2 className="text-4xl text-graySide">Gear On Sale Now</h2>
      </div>
      <ul className="flex gap-8 flex-wrap justify-center mt-8">
        {props.limitedGears.map((gear, index) => (
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
