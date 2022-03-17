import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
`;

export const IconButton = styled.button`
  padding: 10px;
  font-size: 25px;
  background: white;

  & + & {
    border-top: 1px solid rgb(0 0 0 / 10%);
  }

  &:active {
    background: #f7f7f7;
  }
`;
