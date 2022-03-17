import React from "react";
import * as S from "./style";

import { EmojiMenu } from "../../data/emojiMenus";

interface SelectorProps {
  data: EmojiMenu[];
  setData: React.Dispatch<React.SetStateAction<EmojiMenu[]>>;
  nowSelected: EmojiMenu[];
  setNowSelected: React.Dispatch<React.SetStateAction<EmojiMenu[]>>;
}

function Selector({ data, setData }: SelectorProps) {
  return (
    <S.SelectorContainer>
      <S.Title>Title</S.Title>
      <S.Footer></S.Footer>
    </S.SelectorContainer>
  );
}

export default Selector;
