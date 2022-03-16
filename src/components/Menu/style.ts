import styled from "styled-components";

export const MenuButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 20px;
  font-size: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 95px;
  right: 20px;
  width: 200px;
  overflow: hidden;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
`;

export const ToggleInput = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  font-size: 1.6rem;
  background: white;

  & + & {
    border-top: 1px solid rgb(0 0 0 / 10%);
  }
`;
