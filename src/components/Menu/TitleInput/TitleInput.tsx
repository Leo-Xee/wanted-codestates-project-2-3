import React from "react";
import { InpDiv, Input } from "../style";
import { Props } from "./types";

const TitleInput = ({
  settingState,
  handleChangeAvailableTitle,
  handleChangeSelectedTitle,
}: Props) => {
  const { availableTitle, selectedTitle, showTitle } = settingState;
  return (
    <InpDiv>
      <Input
        placeholder={availableTitle}
        onChange={handleChangeAvailableTitle}
        disabled={!showTitle}
      />
      <Input
        placeholder={selectedTitle}
        onChange={handleChangeSelectedTitle}
        disabled={!showTitle}
      />
    </InpDiv>
  );
};
export default TitleInput;
