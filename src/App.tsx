import React, { useReducer } from "react";
import styled from "styled-components";

import DualSelector from "./components/DualSelector";
import Menu from "./components/Menu";
import { initialSetting, settingReducer } from "./components/Menu/settingReducer";

const GlobalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;

  user-select: none;
  -webkit-user-select: none;
`;

function App() {
  const [settingState, dispatch] = useReducer(settingReducer, initialSetting);
  return (
    <GlobalContainer>
      <DualSelector settingState={settingState} />
      <Menu settingState={settingState} dispatch={dispatch} />
    </GlobalContainer>
  );
}

export default App;
