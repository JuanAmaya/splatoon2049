"use client";

import Link from "next/link";
import pagesLinks from "../data/pagesLinks.json";
import classes from "./Navbar.module.css";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const params = usePathname();

  return (
    <nav className={`mt-4 w-fit mx-auto ${classes.barOrder}`}>
      {pagesLinks.map((page, index) => (
        <Link
          key={page.id}
          href={page.url}
          className={`capitalize text-xl w-fit p-2 rounded-md transition-colors hover:bg-brownBar hover:text-primaryBG
         ${
           index === 0
             ? classes.opt1
             : index === 1
             ? classes.opt2
             : index === 2
             ? classes.opt3
             : index === 3
             ? classes.opt4
             : index === 4
             ? classes.opt5
             : classes.opt6
         }
         ${
           params === "/" && page.name === "schedule"
             ? "bg-greenSide text-primaryBG border-greenSide"
             : params === "/salmonrun" && page.name === "salmon run"
             ? "bg-orangeSide text-primaryBG border-orangeSide"
             : params === "/challenges" && page.name === "challenges"
             ? "bg-purpleSide text-primaryBG border-purpleSide"
             : params === "/gear" && page.name === "gear"
             ? "bg-yellowSide text-primaryBG border-yellowSide"
             : params === "/splatfest" && page.name === "splatfest"
             ? "bg-blueSide text-primaryBG border-blueSide"
             : ""
         }
         `}
        >
          {page.name}
        </Link>
      ))}
    </nav>
  );
}
