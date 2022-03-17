import { Setting } from "../settingReducer/types";
import { ClickUlEventFunc } from "../menuFunc/types";

export interface Props {
  settingState: Setting;
  handleUlClick: ClickUlEventFunc;
}
