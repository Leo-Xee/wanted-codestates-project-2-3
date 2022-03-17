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
  box-sizing: border-box;
  width: 250px;
  overflow: hidden;
  font-size: 1.6rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);

  & > * {
    padding: 15px 20px;
  }

  & > *:not(:last-child) {
    border-bottom: 1px solid rgb(0 0 0 / 10%);
  }
`;

export const ToggleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
`;
export const InpDiv = styled.div`
  justify-content: space-between;
  background: white;
`;
export const Input = styled.input`
  width: 100%;
  height: 4rem;
  padding: 1rem;
  border: 1px solid lightgray;
  border-radius: 5px;
  outline: none;
`;
export const Ul = styled.ul`
  display: flex;
  gap: 1rem;
  align-items: center;
  list-style: none;
`;
export const Li = styled.li`
  display: flex;
  align-items: flex-end;
  width: 1.6rem;
  margin-right: 2rem;
`;
