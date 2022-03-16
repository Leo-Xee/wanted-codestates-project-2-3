import React, { useReducer, useState } from "react";
import * as S from "./style";

import { BiMenu } from "react-icons/bi";
import { settingReducer, initialSetting } from "./settingReducer";
import { useToggleBtns } from "./menuFunc/useToggleBtns";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingState, dispatch] = useReducer(settingReducer, initialSetting);
  const {
    showTitle,
    showSearch,
    multiSelect,
    showSelectedItem,
    availableTitle,
    selectedTitle,
    itemSize,
    width,
    height,
  } = settingState;

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const [
    handleToggleShowTitle,
    handleToggleShowSearch,
    handleToggleMultiSelect,
    handleToggleShowSelectedItem,
    handleChangeAvailableTitle,
    handleChangeSelectedTitle,
    handleUlClick,
    handleChangeWidth,
    handleChangeHeight,
  ] = useToggleBtns(settingState, dispatch);

  return (
    <>
      <S.MenuButton onClick={handleToggleMenu}>
        <BiMenu />
      </S.MenuButton>
      {menuOpen && (
        <S.MenuContainer>
          <S.ToggleDiv>
            <span>타이틀</span>
            <span onClick={handleToggleShowTitle}>{showTitle ? "🟢 " : "🔴"} </span>
          </S.ToggleDiv>
          <S.InpDiv>
            <S.Input placeholder={availableTitle} onChange={handleChangeAvailableTitle} />
            <S.Input placeholder={selectedTitle} onChange={handleChangeSelectedTitle} />
          </S.InpDiv>
          <S.ToggleDiv>
            <span>검색</span>
            <span onClick={handleToggleShowSearch}>{showSearch ? "🟢 " : "🔴"} </span>
          </S.ToggleDiv>
          <S.ToggleDiv>
            <span>하나씩만 옮기기</span>
            <span onClick={handleToggleMultiSelect}>{multiSelect ? "🟢 " : "🔴"} </span>
          </S.ToggleDiv>
          <S.ToggleDiv>
            <span>선택된 아이템 갯수 표시</span>
            <span onClick={handleToggleShowSelectedItem}>{showSelectedItem ? "🟢 " : "🔴"} </span>
          </S.ToggleDiv>
          <S.Ul onClick={handleUlClick}>
            <li>아이템 크기</li>
            <S.Li>
              <S.Input
                type="radio"
                id="item-size-xs"
                name="item-size"
                value="xs"
                checked={itemSize === "xs"}
              />
              <label htmlFor="item-size-xs">xs</label>
            </S.Li>
            <S.Li>
              <S.Input
                type="radio"
                id="item-size-s"
                name="item-size"
                value="s"
                checked={itemSize === "s"}
              />
              <label htmlFor="item-size-s">s</label>
            </S.Li>
            <S.Li>
              <S.Input
                type="radio"
                id="item-size-m"
                name="item-size"
                value="m"
                checked={itemSize === "m"}
              />
              <label htmlFor="item-size-m">m</label>
            </S.Li>
          </S.Ul>
          <S.InpDiv>
            <S.Input placeholder={`가로 (현재: ${width} px)`} onChange={handleChangeWidth} />
            <S.Input placeholder={`가로 (현재: ${height} px)`} onChange={handleChangeHeight} />
          </S.InpDiv>
        </S.MenuContainer>
      )}
    </>
  );
}

export default Menu;
