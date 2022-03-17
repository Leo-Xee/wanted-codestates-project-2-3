import styled from "styled-components";

export const SelectorContainer = styled.div`
  position: relative;
  width: 300px;
  height: 600px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: white;
  overflow: hidden;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.div`
  width: 100%;
  padding: 20px;
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const ItemContainer = styled.div`
  flex: 1;
  overflow: auto;
  padding-bottom: 60px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.div<{ active: boolean; idx: number }>`
  overflow: hidden;
  padding: 15px;
  padding-left: 20px;
  font-size: 1.6rem;
  user-select: none;

  & + & {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
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
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background: white;
`;
