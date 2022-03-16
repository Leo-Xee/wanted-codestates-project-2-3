import React from "react";
import * as S from "./style";

import SearchBar from "../SearchBar";
import Selector from "../Selector";
import ControlButtons from "../ControlButtons";

function DualSelector() {
  return (
    <S.DualSelectorContainer>
      <S.InputWithSelectorContainer>
        <SearchBar />
        <Selector />
      </S.InputWithSelectorContainer>
      <ControlButtons />
      <S.InputWithSelectorContainer>
        <SearchBar />
        <Selector />
      </S.InputWithSelectorContainer>
    </S.DualSelectorContainer>
  );
}

export default DualSelector;
