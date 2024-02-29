import UpcomingTime from "../upcoming/upcomingTime";
import FestResults from "./items/festResults";
import TeamItem from "./items/teamItem";
import WinnerItem from "./items/winnerItem";

import classes from "./splatfestCard.module.css";
import splatfestLogo from "@/public/images/splatfest_logo.png";

type splatfestCardProps = {
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
};

export default function SplatfestCard(props: splatfestCardProps) {
  return (
    <li className={classes.splatfestCardOrder}>
      <div
        className={`bg-blueSide p-2 rounded-md flex justify-center items-center ${classes.opt1}`}
      >
        <img src={splatfestLogo.src} alt="Splatfest Logo" className="w-24" />
      </div>
      <div
        className={`bg-graySide p-2 rounded-md flex justify-center items-center ${classes.opt2}`}
      >
        <span className="text-xl text-primaryBG">{props.title}</span>
      </div>
      <UpcomingTime
        className={`bg-purpleSide p-2 rounded-md text-graySide flex justify-center items-center ${classes.opt3}`}
        startTime={props.startTime}
        endTime={props.endTime}
        showDay={true}
      />
      {props.teams.map((team, index) => (
        <TeamItem
          key={index}
          teamName={team.teamName}
          color={team.color}
          className={
            index === 0
              ? classes.opt4
              : index === 1
              ? classes.opt5
              : classes.opt6
          }
        />
      ))}
      <div className={classes.opt7}>
        <img src={props.image.url} alt={props.title} className="rounded-md" />
      </div>
      <FestResults
        category="Conch Shells"
        teams={props.teams}
        className={classes.opt8}
      />
      <FestResults
        category="Votes"
        teams={props.teams}
        className={classes.opt9}
      />
      <FestResults
        category="Open"
        teams={props.teams}
        className={classes.opt10}
      />
      <FestResults
        category="Tricolor Battle"
        teams={props.teams}
        className={classes.opt11}
      />
      <FestResults
        category="Pro"
        teams={props.teams}
        className={classes.opt12}
      />
      <WinnerItem teams={props.teams} className={classes.opt13} />
    </li>
  );
}
