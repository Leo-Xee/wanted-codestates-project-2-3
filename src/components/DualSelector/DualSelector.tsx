import React, { useState } from "react";
import * as S from "./style";

import SearchBar from "../SearchBar";
import Selector from "../Selector";
import ControlButtons from "../ControlButtons";

function DualSelector() {
  const [selector, setSelector] = useState(1);

  return (
    <S.DualSelectorContainer>
      <S.InputWithSelectorContainer onClick={() => setSelector(1)}>
        <SearchBar />
        <Selector active={selector === 1} />
      </S.InputWithSelectorContainer>
      <ControlButtons />
      <S.InputWithSelectorContainer onClick={() => setSelector(2)}>
        <SearchBar />
        <Selector active={selector === 2} />
      </S.InputWithSelectorContainer>
    </S.DualSelectorContainer>
  );
}

export default DualSelector;
