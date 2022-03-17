import { InputChangeFunc } from "../menuFunc/types";
import { Setting } from "../settingReducer/types";

export interface Props {
  settingState: Setting;
  handleChangeWidth: InputChangeFunc;
  handleChangeHeight: InputChangeFunc;
}
