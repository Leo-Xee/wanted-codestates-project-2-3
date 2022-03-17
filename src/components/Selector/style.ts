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

  & .move_up {
    border-top: 2px solid #fd7e14;
  }

  & .move_down {
    border-bottom: 2px solid #fd7e14;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.div`
  overflow: hidden;
  padding: 15px 0 15px 20px;
  font-size: 1.6rem;
  user-select: none;
  background-color: white;
  border-bottom: 1px solid rgb(0 0 0 / 10%);

  &:last-child {
    border: none;
  }
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
