import React from "react";
import { Input, Li, Ul } from "../../style";
import { Props } from "./types";

const SetItemSize = ({ settingState, handleUlClick }: Props) => {
  const { itemSize } = settingState;

  return (
    <Ul onClick={handleUlClick}>
      <li>아이템 크기</li>
      <Li>
        <Input
          type="radio"
          id="item-size-xs"
          name="item-size"
          value="xs"
          checked={itemSize === "xs"}
          readOnly
        />
        <label htmlFor="item-size-xs">xs</label>
      </Li>
      <Li>
        <Input
          type="radio"
          id="item-size-s"
          name="item-size"
          value="s"
          checked={itemSize === "s"}
          readOnly
        />
        <label htmlFor="item-size-s">s</label>
      </Li>
      <Li>
        <Input
          type="radio"
          id="item-size-m"
          name="item-size"
          value="m"
          checked={itemSize === "m"}
          readOnly
        />
        <label htmlFor="item-size-m">m</label>
      </Li>
    </Ul>
  );
};
export default SetItemSize;
