import React from "react";
import styled from "styled-components";

import DualSelector from "./components/DualSelector";
import Menu from "./components/Menu";

const GlobalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;
`;

function App() {
  return (
    <GlobalContainer>
      <DualSelector />
      <Menu />
    </GlobalContainer>
  );
}

export default App;
