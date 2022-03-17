import React, { useEffect, useState } from "react";
import * as S from "./style";

const data = [
  { id: 1, name: "sdfe" },
  { id: 2, name: "sdsfe" },
  { id: 3, name: "sdcfe" },
  { id: 4, name: "sfdfe" },
  { id: 5, name: "sdxfe" },
  { id: 6, name: "sqdfe" },
  { id: 7, name: "sdzfe" },
  { id: 8, name: "sbdfe" },
  { id: 9, name: "csdfe" },
  { id: 10, name: "x sdfe" },
  { id: 11, name: "sfaddfe" },
  { id: 12, name: "asdfe" },
  { id: 13, name: "asdfe" },
];

function Selector() {
  const [selectedItems, setSelectedItems] = useState<{ id: number; name: string }[]>([]);
  const [lastIndex, setLastIndex] = useState<number>(0);

  const [shift, setShift] = useState(false);
  const [ctrl, setCtrl] = useState(false);

  useEffect(() => {
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
  }, []);

  const handleClick = (id: number) => {
    const clickedItem = data.find((item) => item.id === id);
    if (!clickedItem) return;
    const clickedIndex = data.indexOf(clickedItem);

    if (shift) {
      if (lastIndex === 0) {
        setLastIndex(clickedIndex);
      }

      if (clickedIndex > lastIndex) {
        const newSelectedItems = data.slice(lastIndex, clickedIndex + 1);
        setSelectedItems(Array.from(new Set([...selectedItems, ...newSelectedItems])));
      } else {
        const newSelectedItems = data.slice(clickedIndex, lastIndex + 1);
        setSelectedItems(Array.from(new Set([...selectedItems, ...newSelectedItems])));
      }
    } else if (ctrl) {
      setLastIndex(clickedIndex);
      if (!selectedItems.includes(clickedItem)) setSelectedItems([...selectedItems, clickedItem]);
    } else {
      setLastIndex(clickedIndex);
      setSelectedItems([clickedItem]);
    }
  };

  return (
    <S.SelectorContainer>
      <S.Title>Title</S.Title>
      <S.ItemContainer>
        {data.map((item, index) => (
          <S.Item
            key={item.id}
            index={index}
            active={selectedItems.some((sItem) => sItem.id === item.id)}
            onClick={() => handleClick(item.id)}
          >
            {item.name}
          </S.Item>
        ))}
      </S.ItemContainer>
      <S.Footer>
        <div>0/4</div>
      </S.Footer>
    </S.SelectorContainer>
  );
}

export default Selector;
