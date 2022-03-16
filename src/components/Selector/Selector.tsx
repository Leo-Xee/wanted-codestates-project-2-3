import React from "react";

import { EmojiMenu } from "../../data/emojiMenus";
import * as S from "./style";

type SelectorProps = {
  data: EmojiMenu[];
  setData: React.Dispatch<React.SetStateAction<EmojiMenu[] | []>>;
};

function Selector({ data, setData }: SelectorProps) {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", String(target.id));
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const draggedId = Number(e.dataTransfer.getData("text/plain"));
    const targetId = Number(target.id);

    changeOrder(draggedId, targetId);
  };

  const changeOrder = (draggedId: number, targetId: number) => {
    const newData = [...data];
    const draggedOption = newData.find((v) => v.id === draggedId);
    const draggedOptionIdx = newData.findIndex((v) => v.id === draggedId);
    const targetOptionIdx = newData.findIndex((v) => v.id === targetId);

    if (draggedOption) {
      newData.splice(draggedOptionIdx, 1);
      newData.splice(targetOptionIdx, 0, draggedOption);
    }
    setData([...newData]);
  };

  return (
    <S.SelectorContainer>
      <S.Title>Title</S.Title>
      <S.ItemContainer>
        {data.map((item) => (
          <S.Item
            key={item.id}
            id={String(item.id)}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            draggable
          >{`${item.emoji} ${item.name}`}</S.Item>
        ))}
      </S.ItemContainer>
      <S.Footer>
        <div>0/4</div>
      </S.Footer>
    </S.SelectorContainer>
  );
}

export default Selector;
