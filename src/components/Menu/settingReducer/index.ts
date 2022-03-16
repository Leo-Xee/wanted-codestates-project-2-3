import { Action, Setting } from "./types";

export const initialSetting: Setting = {
  showTitle: true,
  availableTitle: "available options",
  selectedTitle: "selected options",
  showSearch: true,
  multiSelect: false,
  showSelectedItem: true,
  itemSize: "s",
  width: 170,
  height: 300,
};

export const SettingType = {
  TOGGLE_SHOW_TITLE: "TOGGLE_SHOW_TITLE",
  TOGGLE_SHOW_SEARCH: "TOGGLE_SHOW_SEARCH",
  TOGGLE_MULTI_SELECT: "TOGGLE_MULTI_SELECT",
  TOGGLE_SHOW_SELECTED_ITEM: "TOGGLE_SHOW_SELECTED_ITEM",
  SET_AVAILABLE_TITLE: "SET_AVAILABLE_TITLE",
  SET_SELECTED_TITLE: "SET_SELECTED_TITLE",
  SET_ITEM_SIZE: "SET_ITEM_SIZE",
  SET_WIDTH: "SET_WIDTH",
  SET_HEIGHT: "SET_HEIGHT",
} as const;

export const settingReducer = (state: Setting, action: Action): Setting => {
  switch (action.type) {
    case SettingType.TOGGLE_SHOW_TITLE: {
      return { ...state, showTitle: action.showTitle };
    }
    case SettingType.TOGGLE_SHOW_SEARCH: {
      return { ...state, showSearch: action.showSearch };
    }
    case SettingType.TOGGLE_MULTI_SELECT: {
      return { ...state, multiSelect: action.multiSelect };
    }
    case SettingType.TOGGLE_SHOW_SELECTED_ITEM: {
      return { ...state, showSelectedItem: action.showSelectedItem };
    }
    case SettingType.SET_AVAILABLE_TITLE: {
      return { ...state, availableTitle: action.availableTitle };
    }
    case SettingType.SET_SELECTED_TITLE: {
      return { ...state, selectedTitle: action.selectedTitle };
    }
    case SettingType.SET_ITEM_SIZE: {
      return { ...state, itemSize: action.itemSize };
    }
    case SettingType.SET_WIDTH: {
      return { ...state, width: action.width };
    }
    case SettingType.SET_HEIGHT: {
      return { ...state, height: action.height };
    }

    default:
      throw new Error("Unhandled action");
  }
};
