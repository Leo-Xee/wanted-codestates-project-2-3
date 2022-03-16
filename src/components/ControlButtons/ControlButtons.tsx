import React from "react";
import * as S from "./style";
import {
  BiChevronsLeft,
  BiChevronsRight,
  BiChevronLeft,
  BiChevronRight,
  BiRefresh,
} from "react-icons/bi";
// BiChevronsLeft, BiChevronsRight, BiChevronLeft, BiChevronRight, BiRefresh

function ControlButtons() {
  return (
    <S.ButtonsContainer>
      <S.IconButton>
        <BiRefresh />
      </S.IconButton>
      <S.IconButton>
        <BiChevronLeft />
      </S.IconButton>
      <S.IconButton>
        <BiChevronRight />
      </S.IconButton>
      <S.IconButton>
        <BiChevronsLeft />
      </S.IconButton>
      <S.IconButton>
        <BiChevronsRight />
      </S.IconButton>
    </S.ButtonsContainer>
  );
}

export default ControlButtons;
