import { ChangeEvent, MouseEvent } from "react";

export type ToggleFunc = () => void;
export type InputChangeFunc = (e: ChangeEvent<HTMLInputElement>) => void;
export type ClickUlEventFunc = (e: MouseEvent<HTMLUListElement>) => void;

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
