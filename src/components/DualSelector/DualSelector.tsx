import React, { useState } from "react";
import * as S from "./style";

import SearchBar from "../SearchBar";
import Selector from "../Selector";
import ControlButtons from "../ControlButtons";
import { emojiMenus, EmojiMenu } from "../../data/emojiMenus";

function DualSelector() {
  const [menus, setMenus] = useState<EmojiMenu[] | []>(emojiMenus);
  const [selectedMenus, setSelectedMenus] = useState<EmojiMenu[] | []>([]);

  return (
    <S.DualSelectorContainer>
      <S.InputWithSelectorContainer>
        <SearchBar />
        <Selector data={menus} setData={setMenus} />
      </S.InputWithSelectorContainer>
      <ControlButtons />
      <S.InputWithSelectorContainer>
        <SearchBar />
        <Selector data={selectedMenus} setData={setSelectedMenus} />
      </S.InputWithSelectorContainer>
    </S.DualSelectorContainer>
  );
}

export default DualSelector;
