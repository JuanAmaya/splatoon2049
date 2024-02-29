type timeStringtype = {
  hour: string;
  minute: string;
  day?: string;
  month?: string;
};

export default function setGetTime(
  startTime: string,
  endTime: string,
  showDay?: boolean
) {
  const formattedStartTime = new Date(startTime)
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      day: showDay ? "numeric" : undefined,
      month: showDay ? "numeric" : undefined,
    })
    .toString();
  const formattedEndTime = new Date(endTime)
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      day: showDay ? "numeric" : undefined,
      month: showDay ? "numeric" : undefined,
    })
    .toString();
  const formattedTime = `${formattedStartTime} - ${formattedEndTime}`;

  return formattedTime;
}
