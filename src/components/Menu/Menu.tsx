import React from "react";
import * as S from "./style";

import { BiMenu } from "react-icons/bi";

function Menu() {
  return (
    <>
      <S.MenuButton>
        <BiMenu />
      </S.MenuButton>
      <S.MenuContainer>
        <S.MenuItem>타이틀</S.MenuItem>
        <S.MenuItem>검색</S.MenuItem>
        <S.MenuItem>하나씩만 옮기기</S.MenuItem>
        <S.MenuItem>아이템 크기</S.MenuItem>
      </S.MenuContainer>
    </>
  );
}

export default Menu;
