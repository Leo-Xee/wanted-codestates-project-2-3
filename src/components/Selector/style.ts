import styled from "styled-components";

export const SelectorContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 600px;
  overflow: hidden;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 20px rgb(0 0 0 / 20%);
`;

export const Title = styled.div`
  width: 100%;
  padding: 20px;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid rgb(0 0 0 / 20%);
`;

export const ItemContainer = styled.div`
  flex: 1;
  padding-bottom: 60px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.div<{ active: boolean; index: number }>`
  overflow: hidden;
  padding: 15px;
  padding-left: 20px;
  overflow: hidden;
  font-size: 1.6rem;
  user-select: none;

  & + & {
    border-top: 1px solid rgb(0 0 0 / 10%);
  }

  background: ${({ active }) => active && "blue"};
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  padding: 15px;
  font-size: 1.4rem;
  color: grey;
  background: white;
  border-top: 1px solid rgb(0 0 0 / 10%);
`;
