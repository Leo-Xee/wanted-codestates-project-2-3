import React, { useState } from "react";
import * as S from "./style";

import SearchBar from "../SearchBar";
import Selector from "../Selector";
import ControlButtons from "../ControlButtons";
import { Setting } from "../Menu/settingReducer/types";
import { emojiMenus, EmojiMenu } from "../../data/emojiMenus";

interface Props {
  settingState: Setting;
}

function DualSelector({ settingState }: Props) {
  const [avaliable, setAvaliable] = useState<EmojiMenu[]>(emojiMenus); // 왼쪽 셀렉터 데이터 ( Available )
  const [selected, setSelected] = useState<EmojiMenu[]>([]); // 오른쪽 셀렉터 데이터 ( Selected )
  const [nowSelected, setNowSelected] = useState<EmojiMenu[]>([]); // 현재 선택되어있는 아이템

  return (
    <S.DualSelectorContainer>
      <S.InputWithSelectorContainer>
        <SearchBar />
        <Selector />
      </S.InputWithSelectorContainer>
      <ControlButtons
        nowSelected={nowSelected}
        setNowSelected={setNowSelected}
        selected={selected}
        setSelected={setSelected}
        avaliable={avaliable}
        setAvaliable={setAvaliable}
      />
      <S.InputWithSelectorContainer>
        <SearchBar />
        <Selector />
      </S.InputWithSelectorContainer>
    </S.DualSelectorContainer>
  );
}

export default DualSelector;
