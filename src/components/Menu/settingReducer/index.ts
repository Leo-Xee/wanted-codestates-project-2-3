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
} as const;

export const settingReducer = (state: Setting, action: Action): Setting => {
  switch (action.type) {
    case SettingType.TOGGLE_SHOW_TITLE: {
      console.log(action.showTitle, "reducer");
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
    default:
      throw new Error("Unhandled action");
  }
};
