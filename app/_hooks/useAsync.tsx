import { useCallback, useEffect, useState } from "react";

type useAsyncProps = {
  callback: Function;
  dependencies: [];
};

type dataProvider = {
  data: {
    regularSchedules: {
      nodes: Array<{
        startTime: string;
        endTime: string;
        regularMatchSetting?: {
          __typeName: string;
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
      }>;
    };

    bankaraSchedules: {
      nodes: Array<{
        startTime: string;
        endTime: string;
        bankaraMatchSettings?: {
          __typeName: string;
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
      }>;
    };

    xSchedules: {
      nodes: Array<{
        startTime: string;
        endTime: string;
        xMatchSetting?: {
          __typeName: string;
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
      }>;
    };

    coopGroupingSchedule: {
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

    gesotown: {
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
  };
};

type splatfestProvider = {
  US: {
    data: {
      festRecords: {
        nodes: Array<{
          state: string;
          startTime: string;
          endTime: string;
          title: string;
          image: {
            url: string;
          };
          teams: Array<{
            result: {
              isWinner: boolean;
              horagaiRatio: number;
              isHoragaiRatioTop: boolean;
              voteRatio: number;
              isVoteRatioTop: boolean;
              regularContributionRatio: number;
              isRegularContributionRatioTop: boolean;
              challengeContributionRatio: number;
              isChallengeContributionRatioTop: boolean;
              tricolorContributionRatio: number;
              isTricolorContributionRatioTop: boolean;
            };
            teamName: string;
            color: {
              a: number;
              b: number;
              g: number;
              r: number;
            };
            image: {
              url: string;
            };
          }>;
        }>;
      };
    };
  };
};

export default function useAsync({
  callback,
  dependencies = [],
}: useAsyncProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [value, setValue] = useState<any>();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);

    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, value };
}
