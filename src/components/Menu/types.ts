import { Dispatch } from "react";
import { Action, Setting } from "./settingReducer/types";

export interface Props {
  settingState: Setting;
  dispatch: Dispatch<Action>;
}
