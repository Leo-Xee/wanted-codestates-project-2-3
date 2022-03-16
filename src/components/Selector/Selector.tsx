import React from "react";
import * as S from "./style";

function Selector() {
  return (
    <S.SelectorContainer>
      <S.Title>Title</S.Title>
      <S.ItemContainer>{/* <S.Item>sdf</S.Item> */}</S.ItemContainer>
      <S.Footer>
        <div>0/4</div>
      </S.Footer>
    </S.SelectorContainer>
  );
}

export default Selector;
