import React from "react";

import { EmojiMenu } from "../../data/emojiMenus";
import useDnD from "../../hooks/useDnD";
import * as S from "./style";

type SelectorProps = {
  data: EmojiMenu[];
  setData: React.Dispatch<React.SetStateAction<EmojiMenu[] | []>>;
  nowSelected: EmojiMenu[];
  setNowSelected: React.Dispatch<React.SetStateAction<EmojiMenu[] | []>>;
};

function Selector({ data, setData }: SelectorProps) {
  const [handleDragStart, handleDragEnter, handleDragLeave, handleDrop] = useDnD(data, setData);

  return (
    <S.SelectorContainer>
      <S.Title>Title</S.Title>
      <S.ItemContainer>
        {data.map((item) => (
          <S.Item
            key={item.id}
            id={String(item.id)}
            onDragStart={handleDragStart}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            draggable
          >
            {`${item.emoji} ${item.name}`}
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
