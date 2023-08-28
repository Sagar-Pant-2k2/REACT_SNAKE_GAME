import { useContext } from "react";
import Main from "./components/Main/Main";
import {SnakeGameContextProvider} from './context/GameContext';
const App = ()=>{
  return (
    <SnakeGameContextProvider>
      <Main></Main>
    </SnakeGameContextProvider>
  );
}

export default App;