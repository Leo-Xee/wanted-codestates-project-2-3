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
  selected: EmojiMenu[];
  setSelected: React.Dispatch<React.SetStateAction<EmojiMenu[]>>;
  avaliable: EmojiMenu[];
  setAvaliable: React.Dispatch<React.SetStateAction<EmojiMenu[]>>;
}

function ControlButtons({
  nowSelected,
  setNowSelected,
  selected,
  setSelected,
  avaliable,
  setAvaliable,
}: Props) {
  const filteredItems = (arr: EmojiMenu[]) => {
    const nowSelectedIndex = nowSelected.map((item) => item.id);
    const filtered = arr.filter((item) => !nowSelectedIndex.includes(item.id));
    return filtered;
  };

  const moveMoment = (type: string) => {
    switch (type) {
      case "reset":
        setAvaliable(emojiMenus);
        setSelected([]);
        console.log("RESET");
        return;
      case "SToA_all":
        setAvaliable(emojiMenus);
        setSelected([]);
        console.log("SELECT TO AVAILABLE ALL");
        return;
      case "AToS_all":
        setAvaliable([]);
        setSelected(emojiMenus);
        console.log("AVAILABLE TO SELECT ALL");
        return;
      case "SToA_selected":
        setAvaliable([...avaliable, ...nowSelected]);
        setSelected(filteredItems(selected));
        console.log("AVAILABLE TO SELECT SELECTED ITEM");
        return;
      case "AToS_selected":
        setAvaliable(filteredItems(avaliable));
        setSelected([...selected, ...nowSelected]);
        console.log("AVAILABLE TO SELECT SELECTED ITEM");
        return;
      default:
        alert("유효하지 않은 작업입니다.");
    }
  };

  const buttons = [
    { component: <BiRefresh />, moveKey: "reset" },
    { component: <BiChevronLeft />, moveKey: "SToA_selected" },
    { component: <BiChevronRight />, moveKey: "AToS_selected" },
    { component: <BiChevronsLeft />, moveKey: "SToA_all" },
    { component: <BiChevronsRight />, moveKey: "AToS_all" },
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
          >
            {btn.component}
          </S.IconButton>
        );
      })}
    </S.ButtonsContainer>
  );
}

export default ControlButtons;
