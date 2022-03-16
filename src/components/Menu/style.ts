import styled from "styled-components";

export const MenuButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  font-size: 2rem;
  padding: 20px;
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 95px;
  right: 20px;
  width: 200px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const MenuItem = styled.div`
  background: white;
  padding: 15px 20px;
  font-size: 1.6rem;

  & + & {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
