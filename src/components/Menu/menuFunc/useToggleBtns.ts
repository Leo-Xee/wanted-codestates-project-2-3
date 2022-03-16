import { useReducer } from "react";
import { initialSetting, settingReducer, SettingType } from "../settingReducer";
import { Action, Setting } from "../settingReducer/types";

export const useToggleBtns = (settingState: Setting, dispatch: React.Dispatch<Action>) => {
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
  return [
    handleToggleShowTitle,
    handleToggleShowSearch,
    handleToggleMultiSelect,
    handleToggleShowSelectedItem,
  ];
};
