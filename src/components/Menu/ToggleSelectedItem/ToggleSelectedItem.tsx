import React from "react";
import { ToggleDiv } from "../style";
import { Props } from "./types";

const ToggleSelectedItem = ({ settingState, handleToggleShowSelectedItem }: Props) => {
  const { showSelectedItem } = settingState;
  return (
    <ToggleDiv>
      <span>선택된 아이템 갯수 표시</span>
      <span onClick={handleToggleShowSelectedItem}>{showSelectedItem ? "🟢 " : "🔴"} </span>
    </ToggleDiv>
  );
};
export default ToggleSelectedItem;
