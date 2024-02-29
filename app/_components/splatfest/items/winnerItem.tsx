type WinnerItemProps = {
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
  className: string;
};

export default function WinnerItem(props: WinnerItemProps) {
  return (
    <div className={props.className}>
      {props.teams.map(
        (team, index) =>
          team.result.isWinner && (
            <div className="flex flex-col gap-2 mt-2 mx-2" key={index}>
              <div
                style={{
                  backgroundColor: `rgb(${team.color.r * 100} ${
                    team.color.g * 100
                  } ${team.color.b * 100})`,
                }}
                className="p-2 rounded-md"
              >
                <span className="text-xl text-center flex justify-center items-center text-primaryBG">
                  Winner {team.teamName}
                </span>
              </div>
              <div
                className="flex justify-center items-center h-24 rounded-md p-2 overflow-hidden"
                style={{
                  backgroundColor: `rgb(${team.color.r * 100} ${
                    team.color.g * 100
                  } ${team.color.b * 100})`,
                }}
              >
                <img
                  src={team.image.url}
                  alt={team.teamName}
                  className="w-32"
                />
              </div>
            </div>
          )
      )}
    </div>
  );
}
