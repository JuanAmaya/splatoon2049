type festResultsProps = {
  category: string;
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

export default function FestResults(props: festResultsProps) {
  let resultCategory: any;
  let bgColor = "53, 53, 53";

  switch (props.category) {
    case "Conch Shells":
      resultCategory = props.teams.map((team, index) => (
        <li key={index}>
          <span>
            {team.teamName} - {(team.result.horagaiRatio * 100).toFixed(2)}
          </span>
        </li>
      ));
      props.teams.map((team) => {
        if (team.result.isHoragaiRatioTop) {
          bgColor = `${team.color.r * 100} ${team.color.g * 100} ${
            team.color.b * 100
          }`;
        }
      });
      break;

    case "Votes":
      resultCategory = props.teams.map((team, index) => (
        <li key={index}>
          <span>
            {team.teamName} - {(team.result.voteRatio * 100).toFixed(2)}
          </span>
        </li>
      ));
      props.teams.map((team) => {
        if (team.result.isVoteRatioTop) {
          bgColor = `${team.color.r * 100} ${team.color.g * 100} ${
            team.color.b * 100
          }`;
        }
      });
      break;

    case "Open":
      resultCategory = props.teams.map((team, index) => (
        <li key={index}>
          <span>
            {team.teamName} -{" "}
            {(team.result.regularContributionRatio * 100).toFixed(2)}
          </span>
        </li>
      ));
      props.teams.map((team) => {
        if (team.result.isRegularContributionRatioTop) {
          bgColor = `${team.color.r * 100} ${team.color.g * 100} ${
            team.color.b * 100
          }`;
        }
      });
      break;

    case "Pro":
      resultCategory = props.teams.map((team, index) => (
        <li key={index}>
          <span>
            {team.teamName} -{" "}
            {(team.result.challengeContributionRatio * 100).toFixed(2)}
          </span>
        </li>
      ));
      props.teams.map((team) => {
        if (team.result.isChallengeContributionRatioTop) {
          bgColor = `${team.color.r * 100} ${team.color.g * 100} ${
            team.color.b * 100
          }`;
        }
      });
      break;

    case "Tricolor Battle":
      resultCategory = props.teams.map((team, index) => (
        <li key={index}>
          {team.result.tricolorContributionRatio !== null ? (
            <span>
              {team.teamName} -{" "}
              {(team.result.tricolorContributionRatio * 100).toFixed(2)}
            </span>
          ) : (
            <span>No Results</span>
          )}
        </li>
      ));
      props.teams.map((team) => {
        if (team.result.isTricolorContributionRatioTop) {
          bgColor = `${team.color.r * 100} ${team.color.g * 100} ${
            team.color.b * 100
          }`;
        }
      });
      break;
  }

  return (
    <div
      className={`rounded-md p-2 flex flex-col justify-center items-center gap-2 ${props.className}`}
    >
      <div className="bg-graySide rounded-md p-2 w-full flex justify-center items-center">
        <span className="text-lg text-primaryBG">{props.category}</span>
      </div>
      <div
        style={{ backgroundColor: `rgba(${bgColor})` }}
        className="w-full flex justify-center rounded-md p-2"
      >
        <ul className="text-xl text-primaryBG">{resultCategory}</ul>
      </div>
    </div>
  );
}
