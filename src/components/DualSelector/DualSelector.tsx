import React, { useState, useMemo, useRef } from "react";
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
  const [avaliableData, setAvaliableData] = useState<EmojiMenu[]>(emojiMenus); // 왼쪽 셀렉터 데이터 ( Available )
  const [selectedData, setSelectedData] = useState<EmojiMenu[]>([]); // 오른쪽 셀렉터 데이터 ( Selected )
  const [nowSelected, setNowSelected] = useState<EmojiMenu[]>([]); // 현재 선택되어있는 아이템
  const [activeSelector, setActiveSelector] = useState(1);
  const [availableSearch, setAvailableSearch] = useState(""); // input값 가져오는 state
  const [selectedSearch, setSelectedSearch] = useState(""); // input값 가져오는 state
  const { showSearch } = settingState;
  return (
    <S.DualSelectorContainer>
      <S.InputWithSelectorContainer onClick={() => setActiveSelector(1)}>
        <SearchBar
          value={availableSearch}
          setValue={setAvailableSearch}
          disabled={!showSearch}
          settingState={settingState}
        />
        <Selector
          keyWord={availableSearch}
          data={avaliableData}
          setData={setAvaliableData}
          nowSelected={nowSelected}
          setNowSelected={setNowSelected}
          active={activeSelector === 1}
          settingState={settingState}
          isAvailableSelector
        />
      </S.InputWithSelectorContainer>
      <ControlButtons
        nowSelected={nowSelected}
        setNowSelected={setNowSelected}
        selectedData={selectedData}
        setSelectedData={setSelectedData}
        avaliableData={avaliableData}
        setAvaliableData={setAvaliableData}
        activeSelector={activeSelector}
      />
      <S.InputWithSelectorContainer onClick={() => setActiveSelector(2)}>
        <SearchBar
          value={selectedSearch}
          setValue={setSelectedSearch}
          disabled={!showSearch}
          settingState={settingState}
        />
        <Selector
          keyWord={selectedSearch}
          data={selectedData}
          setData={setSelectedData}
          nowSelected={nowSelected}
          setNowSelected={setNowSelected}
          active={activeSelector === 2}
          settingState={settingState}
        />
      </S.InputWithSelectorContainer>
    </S.DualSelectorContainer>
  );
}

export default DualSelector;
