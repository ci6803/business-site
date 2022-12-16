import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div></div>
    </div>
  );
}

export default GetStarted;
