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
  TEST: "TEST",
};

export const settingReducer = (state: Setting, { type, payload }: Action): Setting => {
  switch (type) {
    case SettingType.TOGGLE_SHOW_TITLE: {
      return { ...state };
    }
    default:
      throw new Error("Unhandled action");
  }
};
