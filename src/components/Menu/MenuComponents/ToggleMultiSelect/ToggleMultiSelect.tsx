import React from "react";
import { ToggleDiv } from "../../style";
import { Props } from "./types";

const ToggleMultiSelect = ({ settingState, handleToggleMultiSelect }: Props) => {
  const { multiSelect } = settingState;

  return (
    <ToggleDiv>
      <span>하나씩만 옮기기</span>
      <span onClick={handleToggleMultiSelect}>{multiSelect ? "🔴" : "🟢"} </span>
    </ToggleDiv>
  );
};
export default ToggleMultiSelect;
