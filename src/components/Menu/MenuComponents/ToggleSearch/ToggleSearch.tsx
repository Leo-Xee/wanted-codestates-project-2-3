import React from "react";
import { Props } from "./types";
import { ToggleDiv } from "../../style";

const ToggleSearch = ({ settingState, handleToggleShowSearch }: Props) => {
  const { showSearch } = settingState;
  return (
    <ToggleDiv>
      <span>검색</span>
      <span onClick={handleToggleShowSearch}>{showSearch ? "🟢 " : "🔴"} </span>
    </ToggleDiv>
  );
};
export default ToggleSearch;
