import React from "react";
import { Props } from "./types";
import { ToggleDiv } from "../../style";

const ToggleTitle = ({ settingState, handleToggleShowTitle }: Props) => {
  const { showTitle } = settingState;
  return (
    <ToggleDiv>
      <span>타이틀</span>
      <span onClick={handleToggleShowTitle}>{showTitle ? "🟢 " : "🔴"} </span>
    </ToggleDiv>
  );
};
export default ToggleTitle;
