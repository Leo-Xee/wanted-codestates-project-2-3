import styled from "styled-components";

export const SearchBarBlock = styled.input<{ width: number }>`
  width: 300px;
  width: ${({ width }) => `${width}px`};
  padding: 15px 20px;
  font-size: 1.8rem;
  color: gray;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 20px rgb(0 0 0 / 20%);
`;
