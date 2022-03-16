import { SettingType } from ".";

export interface Setting {
  showTitle: boolean;
  availableTitle: string;
  selectedTitle: string;
  showSearch: boolean;
  multiSelect: boolean;
  showSelectedItem: boolean;
  itemSize: ItemSize;
  width: number;
  height: number;
}

export type ItemSize = "xs" | "s" | "m";

export type ActionType = keyof typeof SettingType;

export type Action = { type: ActionType; payload: Setting };
