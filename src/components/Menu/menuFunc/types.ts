import { ChangeEvent, MouseEvent } from "react";

type ToggleFunc = () => void;
type InputChangeFunc = (e: ChangeEvent<HTMLInputElement>) => void;
type ClickUlEventFunc = (e: MouseEvent<HTMLUListElement>) => void;

export type UseToggleBtns = [
  ToggleFunc,
  ToggleFunc,
  ToggleFunc,
  ToggleFunc,
  InputChangeFunc,
  InputChangeFunc,
  ClickUlEventFunc,
  InputChangeFunc,
  InputChangeFunc,
];
