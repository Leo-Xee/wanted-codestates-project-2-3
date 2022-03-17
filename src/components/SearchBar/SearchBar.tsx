import React, { Dispatch, SetStateAction } from "react";
import * as S from "./style";
import { Setting } from "../Menu/settingReducer/types";

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  disabled: boolean;
  settingState: Setting;
};

function SearchBar({ value, setValue, disabled, settingState }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const { width } = settingState;
  return (
    <S.SearchBarBlock
      type="search"
      placeholder="검색어 입력..."
      value={value}
      onChange={handleChange}
      disabled={disabled}
      width={width}
    />
  );
}

export default SearchBar;
