type teamScoreProps = {
  icon: string;
  name: string;
  score: number;
};

export default function TeamScore(props: teamScoreProps) {
  return (
    <div className="flex gap-2">
      <div
        className={`
        rounded-md p-2
          ${
            props.name === "Shiver"
              ? "bg-blueShiver"
              : props.name === "Frye"
              ? "bg-yellowFrye"
              : "bg-redBigman"
          }
        `}
      >
        <img src={props.icon} alt={props.name} className="w-14" />
      </div>
      <span className="text-4xl w-14 text-primaryBG p-2 rounded-md bg-graySide flex justify-center items-center">
        {props.score}
      </span>
    </div>
  );
}
