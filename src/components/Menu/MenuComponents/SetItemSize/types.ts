import { ClickUlEventFunc } from "../../menuFunc/types";
import { Setting } from "../../settingReducer/types";

export interface Props {
  settingState: Setting;
  handleUlClick: ClickUlEventFunc;
}
