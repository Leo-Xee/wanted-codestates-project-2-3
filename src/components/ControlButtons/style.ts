import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const IconButton = styled.button`
  font-size: 25px;
  background: white;
  padding: 10px;

  & + & {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
