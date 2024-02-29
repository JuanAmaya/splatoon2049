"use client";

import useFetch from "@/app/_hooks/useFetch";
import { useEffect, useState } from "react";
import DailyDrop from "./items/dailyDrop";
import GearOnSale from "./items/gearOnSale";

type gearList = {
  pickupBrand: {
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

export default function GearList() {
  const [gearList, setGearList] = useState<gearList>();

  const { loading, error, value } = useFetch({
    url: `https://splatoon3.ink/data/gear.json`,
    dependencies: [],
  });

  useEffect(() => {
    if (!loading) {
      setGearList(value?.data.gesotown);
    }
  }, [loading, gearList, value?.data.gesotown]);

  return (
    <div className="max-w-screen-lg mx-auto my-8">
      {gearList !== undefined && (
        <DailyDrop
          brand={gearList?.pickupBrand.brand!}
          image={gearList?.pickupBrand.image!}
          brandGears={gearList?.pickupBrand.brandGears!}
          saleEndTime={gearList?.pickupBrand.saleEndTime!}
        />
      )}

      {gearList !== undefined && (
        <GearOnSale limitedGears={gearList?.limitedGears!} />
      )}
    </div>
  );
}
