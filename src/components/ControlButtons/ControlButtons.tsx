import React from "react";
import * as S from "./style";
import { emojiMenus, EmojiMenu } from "../../data/emojiMenus";
import {
  BiChevronsLeft,
  BiChevronsRight,
  BiChevronLeft,
  BiChevronRight,
  BiRefresh,
} from "react-icons/bi";

interface Props {
  nowSelected: EmojiMenu[];
  setNowSelected: React.Dispatch<React.SetStateAction<EmojiMenu[]>>;
  selectedData: EmojiMenu[];
  setSelectedData: React.Dispatch<React.SetStateAction<EmojiMenu[]>>;
  avaliableData: EmojiMenu[];
  setAvaliableData: React.Dispatch<React.SetStateAction<EmojiMenu[]>>;
  activeSelector: number;
}

function ControlButtons({
  nowSelected,
  setNowSelected,
  selectedData,
  setSelectedData,
  avaliableData,
  setAvaliableData,
}: Props) {
  const filteredItems = (arr: EmojiMenu[]) => {
    const nowSelectedIndex = nowSelected.map((item) => item.id);
    const filtered = arr.filter((item) => !nowSelectedIndex.includes(item.id));
    return filtered;
  };

  const moveMoment = (type: string) => {
    switch (type) {
      case "reset":
        setAvaliableData(emojiMenus);
        setSelectedData([]);
        return;
      case "SToA_all":
        setAvaliableData(emojiMenus);
        setSelectedData([]);
        return;
      case "AToS_all":
        setAvaliableData([]);
        setSelectedData(emojiMenus);
        return;
      case "SToA_selected":
        setAvaliableData([...avaliableData, ...nowSelected]);
        setSelectedData(filteredItems(selectedData));
        return;
      case "AToS_selected":
        setAvaliableData(filteredItems(avaliableData));
        setSelectedData([...selectedData, ...nowSelected]);
        return;
      default:
        alert("유효하지 않은 작업입니다.");
    }
  };

  const buttons = [
    { component: <BiRefresh />, moveKey: "reset", active: false },
    { component: <BiChevronLeft />, moveKey: "SToA_selected", active: selectedData.length === 0 },
    { component: <BiChevronRight />, moveKey: "AToS_selected", active: avaliableData.length === 0 },
    { component: <BiChevronsLeft />, moveKey: "SToA_all", active: false },
    { component: <BiChevronsRight />, moveKey: "AToS_all", active: false },
  ];
  return (
    <S.ButtonsContainer>
      {buttons.map((btn, index) => {
        return (
          <S.IconButton
            key={index}
            onClick={() => {
              moveMoment(btn.moveKey);
              setNowSelected([]);
            }}
            disabled={btn.active}
          >
            {btn.component}
          </S.IconButton>
        );
      })}
    </S.ButtonsContainer>
  );
}

export default ControlButtons;
