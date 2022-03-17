import { useRef } from "react";

import { EmojiMenu } from "../data/emojiMenus";

function useDnD(
  data: EmojiMenu[],
  setData: React.Dispatch<React.SetStateAction<EmojiMenu[] | []>>,
) {
  const lastLeaveTarget = useRef<HTMLElement>();
  const startClientY = useRef<number>();
  const enterClientY = useRef<number>();

  // move_up= start의 ClientY > enter의 ClientY
  // move_down = start의 ClientY < enter의 ClientY
  const checkMoveUpAndDown = (): string => {
    if (startClientY.current && enterClientY.current) {
      if (startClientY.current > enterClientY.current) {
        // console.log("Up");
        return "move_up";
      } else if (startClientY.current < enterClientY.current) {
        // console.log("Down");
        return "move_down";
      }
    }
    return "";
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", String(target.id));
    startClientY.current = e.clientY;
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    lastLeaveTarget.current = target;
    enterClientY.current = e.clientY;
    console.log("enter", target.textContent);
    target.classList.add(checkMoveUpAndDown());
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    target.classList.remove("move_up");
    target.classList.remove("move_down");
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const draggedId = Number(e.dataTransfer.getData("text/plain"));
    const targetId = Number(target.id);

    console.log("Drop", target.textContent);

    if (lastLeaveTarget.current) {
      lastLeaveTarget.current.classList.remove("move_up");
      lastLeaveTarget.current.classList.remove("move_down");
    }
    changeDataOrder(draggedId, targetId);
  };

  const changeDataOrder = (draggedId: number, targetId: number) => {
    const newData = [...data];
    const draggedOption = newData.find((v) => v.id === draggedId);
    const draggedOptionIdx = newData.findIndex((v) => v.id === draggedId);
    const targetOptionIdx = newData.findIndex((v) => v.id === targetId);

    if (draggedOption) {
      newData.splice(draggedOptionIdx, 1);
      newData.splice(targetOptionIdx, 0, draggedOption);
    }
    setData([...newData]);
  };
  return [handleDragStart, handleDragEnter, handleDragLeave, handleDrop];
}

export default useDnD;
