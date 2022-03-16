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

export type Action =
  | { type: "TOGGLE_SHOW_TITLE"; showTitle: boolean }
  | { type: "TOGGLE_SHOW_SEARCH"; showSearch: boolean }
  | { type: "TOGGLE_MULTI_SELECT"; multiSelect: boolean }
  | { type: "TOGGLE_SHOW_SELECTED_ITEM"; showSelectedItem: boolean };
