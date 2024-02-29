type saleEndTimeProps = {
  saleEndTime: string;
  className: string;
};

export default function SaleEndTime(props: saleEndTimeProps) {
  const formattedEndTime = new Date(props.saleEndTime)
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      day: "numeric",
      month: "numeric",
    })
    .toString();

  return (
    <div className={props.className}>
      <span className="text-xl text-graySide">Until {formattedEndTime}</span>
    </div>
  );
}
