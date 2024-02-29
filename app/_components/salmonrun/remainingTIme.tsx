"use client";

import setRemainingTime from "@/app/_hooks/setRemainingTime";
import { useEffect, useState } from "react";

type remainingTimeProps = {
  className: string;
  endTime: string;
};

export default function RemainingTime(props: remainingTimeProps) {
  const [theRemainingTime, setTheRemainingTime] = useState("");

  useEffect(() => {
    let formattedTime = setRemainingTime(props.endTime);
    setTheRemainingTime(formattedTime);
    const timeInterval = setInterval(() => {
      formattedTime = setRemainingTime(props.endTime);
      setTheRemainingTime(formattedTime);
    }, 1000);
  }, [setRemainingTime, theRemainingTime]);

  return (
    <div className={`flex flex-col text-graySide ${props.className}`}>
      <span className="text-md">Time Left</span>
      <span className="text-xl">{theRemainingTime}</span>
    </div>
  );
}
