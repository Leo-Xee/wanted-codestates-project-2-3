import React from "react";
import * as S from "./style";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { EmojiMenu } from "../../data/emojiMenus";

interface SelectorProps {
  data: EmojiMenu[];
  setData: React.Dispatch<React.SetStateAction<EmojiMenu[]>>;
}

function Selector({ data, setData }: SelectorProps) {
  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = [...data];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setData(items);
  };

  return (
    <S.SelectorContainer>
      <S.Title>Title</S.Title>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="data">
          {(provided) => (
            <S.ItemContainer {...provided.droppableProps} ref={provided.innerRef}>
              {data.map(({ id, emoji, name }, index) => {
                return (
                  <Draggable key={id} draggableId={String(id)} index={index}>
                    {(provided) => (
                      <S.Item
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >{`${emoji} ${name}`}</S.Item>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </S.ItemContainer>
          )}
        </Droppable>
      </DragDropContext>
      <S.Footer></S.Footer>
    </S.SelectorContainer>
  );
}

export default Selector;
