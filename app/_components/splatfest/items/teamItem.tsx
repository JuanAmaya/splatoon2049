"use client";

import { useEffect, useState } from "react";

type teamItemProps = {
  color: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
  teamName: string;
  className: string;
};

export default function TeamItem(props: teamItemProps) {
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    setBgColor(
      `rgb(${props.color.r * 100} ${props.color.g * 100} ${
        props.color.b * 100
      })`
    );
  }, [props]);

  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className={`p-2 rounded-md flex justify-center items-center ${props.className}`}
    >
      <span className="text-xl text-primaryBG">{props.teamName}</span>
    </div>
  );
}
