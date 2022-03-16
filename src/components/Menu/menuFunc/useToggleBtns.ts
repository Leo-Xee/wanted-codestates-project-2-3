import { ChangeEvent, MouseEvent } from "react";
import { SettingType } from "../settingReducer";
import { Action, ItemSize, Setting } from "../settingReducer/types";
import { UseToggleBtns } from "./types";
import { canChangeNumber } from "./canChangeNumber";

export const useToggleBtns = (
  settingState: Setting,
  dispatch: React.Dispatch<Action>,
): UseToggleBtns => {
  const { showTitle, showSearch, multiSelect, showSelectedItem } = settingState;

  const handleToggleShowTitle = () => {
    dispatch({ type: SettingType.TOGGLE_SHOW_TITLE, showTitle: !showTitle });
  };
  const handleToggleShowSearch = () => {
    dispatch({ type: SettingType.TOGGLE_SHOW_SEARCH, showSearch: !showSearch });
  };
  const handleToggleMultiSelect = () => {
    dispatch({ type: SettingType.TOGGLE_MULTI_SELECT, multiSelect: !multiSelect });
  };
  const handleToggleShowSelectedItem = () => {
    dispatch({
      type: SettingType.TOGGLE_SHOW_SELECTED_ITEM,
      showSelectedItem: !showSelectedItem,
    });
  };
  const handleChangeAvailableTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    dispatch({
      type: SettingType.SET_AVAILABLE_TITLE,
      availableTitle: title,
    });
  };
  const handleChangeSelectedTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    dispatch({
      type: SettingType.SET_SELECTED_TITLE,
      selectedTitle: title,
    });
  };
  const handleUlClick = (e: MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName !== "INPUT") return;
    const size = (target as HTMLInputElement).value as ItemSize;
    dispatch({ type: "SET_ITEM_SIZE", itemSize: size });
  };
  const handleChangeWidth = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!canChangeNumber(value)) return;
    const width = +value;
    dispatch({ type: "SET_WIDTH", width });
  };
  const handleChangeHeight = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!canChangeNumber(value)) return;
    const height = +value;
    dispatch({ type: "SET_HEIGHT", height });
  };
  return [
    handleToggleShowTitle,
    handleToggleShowSearch,
    handleToggleMultiSelect,
    handleToggleShowSelectedItem,
    handleChangeAvailableTitle,
    handleChangeSelectedTitle,
    handleUlClick,
    handleChangeWidth,
    handleChangeHeight,
  ];
};
