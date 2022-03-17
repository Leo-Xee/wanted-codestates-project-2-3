import React, { useState, useEffect } from "react";

import { EmojiMenu } from "../../data/emojiMenus";
import useDnD from "../../hooks/useDnD";
import * as S from "./style";
import { Setting } from "../../components/Menu/settingReducer/types";

type SelectorProps = {
  data: EmojiMenu[];
  setData: React.Dispatch<React.SetStateAction<EmojiMenu[] | []>>;
  nowSelected: EmojiMenu[];
  setNowSelected: React.Dispatch<React.SetStateAction<EmojiMenu[] | []>>;
  active: boolean;
  keyWord: string;
  settingState: Setting;
  isAvailableSelector?: boolean;
};

function Selector({
  data,
  setData,
  nowSelected,
  setNowSelected,
  active,
  keyWord,
  settingState,
  isAvailableSelector,
}: SelectorProps) {
  const [handleDragStart, handleDragEnter, handleDragLeave, handleDrop] = useDnD(data, setData);
  const [lastIndex, setLastIndex] = useState<number>(0);

  const [shift, setShift] = useState(false);
  const [ctrl, setCtrl] = useState(false);
  const {
    showTitle,
    availableTitle,
    selectedTitle,
    showSelectedItem,
    itemSize,
    width,
    height,
    multiSelect,
  } = settingState;

  const filter = () => {
    return data.filter((item) => item.name.includes(keyWord));
  };

  useEffect(() => {
    if (!active) setNowSelected([]);

    document.addEventListener("keydown", (e) => {
      if (e.shiftKey) {
        setShift(true);
      } else if (e.metaKey || e.ctrlKey) {
        setCtrl(true);
      }
    });

    document.addEventListener("keyup", (e) => {
      if (e.key === "Shift") {
        setShift(false);
      } else if (e.key === "Meta" || e.key === "Control") {
        setCtrl(false);
      }
    });
  }, [active]);

  const handleClick = (id: number) => {
    const clickedItem = data.find((item) => item.id === id);
    if (!clickedItem) return;
    const clickedIndex = data.indexOf(clickedItem);

    if (shift) {
      if (!multiSelect) return;
      if (lastIndex === 0) {
        setLastIndex(clickedIndex);
      }

      if (clickedIndex > lastIndex) {
        const newSelectedItems = data.slice(lastIndex, clickedIndex + 1);
        setNowSelected(Array.from(new Set([...nowSelected, ...newSelectedItems])));
      } else {
        const newSelectedItems = data.slice(clickedIndex, lastIndex + 1);
        setNowSelected(Array.from(new Set([...nowSelected, ...newSelectedItems])));
      }
    } else if (ctrl) {
      if (!multiSelect) return;
      setLastIndex(clickedIndex);
      if (!nowSelected.includes(clickedItem)) setNowSelected([...nowSelected, clickedItem]);
    } else {
      setLastIndex(clickedIndex);
      setNowSelected([clickedItem]);
    }
  };

  return (
    <S.SelectorContainer width={width} height={height}>
      {showTitle && <S.Title>{isAvailableSelector ? availableTitle : selectedTitle}</S.Title>}
      <S.ItemContainer>
        {(keyWord ? filter() : data).map((item) => (
          <S.Item
            key={item.id}
            id={String(item.id)}
            onDragStart={handleDragStart}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            active={nowSelected.some((sItem) => sItem.id === item.id)}
            onClick={() => handleClick(item.id)}
            draggable
            itemSize={itemSize}
          >
            {`${item.emoji} ${item.name}`}
          </S.Item>
        ))}
      </S.ItemContainer>
      {showSelectedItem && (
        <S.Footer>
          <div>
            {active ? nowSelected.length : 0}/{data.length}
          </div>
        </S.Footer>
      )}
    </S.SelectorContainer>
  );
}

export default Selector;
