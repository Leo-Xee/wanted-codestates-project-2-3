import React from "react";
import { Props } from "./types";
import { ToggleDiv } from "../style";

const TItle = ({ settingState, handleToggleShowTitle }: Props) => {
  return (
    <ToggleDiv>
      <span>타이틀</span>
      <span onClick={handleToggleShowTitle}>{settingState.showTitle ? "🟢 " : "🔴"} </span>
    </ToggleDiv>
  );
};
export default TItle;
