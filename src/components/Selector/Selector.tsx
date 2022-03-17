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

function Selector({ active }: { active: boolean }) {
  const [selectedItems, setSelectedItems] = useState<{ id: number; name: string }[]>([]);

  const [shift, setShift] = useState(false);
  const [ctrl, setCtrl] = useState(false);

  useEffect(() => {
    if (!active) setSelectedItems([]);

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
    if (shift) {
      console.log("shift!");
    } else if (ctrl) {
      const clickedItem = data.find((item) => item.id === id);
      if (clickedItem) {
        if (!selectedItems.includes(clickedItem)) setSelectedItems([...selectedItems, clickedItem]);
      }
      return false;
    } else {
      const clickedItem = data.find((item) => item.id === id);
      if (clickedItem) setSelectedItems([clickedItem]);
    }
  };

  return (
    <S.SelectorContainer>
      <S.Title>Title</S.Title>
      <S.ItemContainer>
        {data.map((item, idx) => (
          <S.Item
            key={item.id}
            idx={idx}
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
