import React, { useReducer, useState } from "react";
import * as S from "./style";

import { BiMenu } from "react-icons/bi";
import { settingReducer, initialSetting } from "./settingReducer";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingState, dispatch] = useReducer(settingReducer, initialSetting);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <S.MenuButton onClick={handleToggleMenu}>
        <BiMenu />
      </S.MenuButton>
      {menuOpen && (
        <S.MenuContainer>
          <S.MenuItem>타이틀</S.MenuItem>
          <S.MenuItem>검색</S.MenuItem>
          <S.MenuItem>하나씩만 옮기기</S.MenuItem>
          <S.MenuItem>아이템 크기</S.MenuItem>
        </S.MenuContainer>
      )}
    </>
  );
}

export default Menu;
