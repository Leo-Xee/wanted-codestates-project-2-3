import React, { useEffect, useReducer, useState } from "react";
import * as S from "./style";

import { BiMenu } from "react-icons/bi";
import { settingReducer, initialSetting, SettingType } from "./settingReducer";
import { useToggleBtns } from "./menuFunc/useToggleBtns";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingState, dispatch] = useReducer(settingReducer, initialSetting);
  const { showTitle, showSearch, multiSelect, showSelectedItem } = settingState;

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const [
    handleToggleShowTitle,
    handleToggleShowSearch,
    handleToggleMultiSelect,
    handleToggleShowSelectedItem,
  ] = useToggleBtns(settingState, dispatch);
  return (
    <>
      <S.MenuButton onClick={handleToggleMenu}>
        <BiMenu />
      </S.MenuButton>
      {menuOpen && (
        <S.MenuContainer>
          <S.ToggleInput>
            <span>타이틀</span>{" "}
            <span onClick={handleToggleShowTitle}>{showTitle ? "🟢 " : "🔴"} </span>
          </S.ToggleInput>
          <S.ToggleInput>
            <span>검색</span>
            <span onClick={handleToggleShowSearch}>{showSearch ? "🟢 " : "🔴"} </span>
          </S.ToggleInput>
          <S.ToggleInput>
            {" "}
            <span>하나씩만 옮기기</span>
            <span onClick={handleToggleMultiSelect}>{multiSelect ? "🟢 " : "🔴"} </span>
          </S.ToggleInput>
          <S.ToggleInput>
            <span>선택된 아이템 갯수 표시</span>
            <span onClick={handleToggleShowSelectedItem}>{showSelectedItem ? "🟢 " : "🔴"} </span>
          </S.ToggleInput>
        </S.MenuContainer>
      )}
    </>
  );
}

export default Menu;
