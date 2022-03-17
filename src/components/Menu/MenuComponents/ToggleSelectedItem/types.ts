import { ToggleFunc } from "../../menuFunc/types";
import { Setting } from "../../settingReducer/types";

export interface Props {
  settingState: Setting;
  handleToggleShowSelectedItem: ToggleFunc;
}
