"use client";

import setGetTime from "@/app/_hooks/setGetTime";
import { useEffect, useState } from "react";

type timeProps = {
  className: String;
  startTime: string;
  endTime: string;
  showDay?: boolean;
};

export default function UpcomingTime(props: timeProps) {
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    let newTime = setGetTime(props.startTime, props.endTime, props.showDay);
    setFormattedTime(newTime);
  }, [formattedTime]);

  return (
    <div className={`${props.className}`}>
      <span className="text-xl">{formattedTime}</span>
    </div>
  );
}
