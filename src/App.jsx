import { useContext } from "react";
import Main from "./components/Main/Main";
import {SnakeGameContextProvider} from './context/GameContext';

import Nav from "./components/Nav/Nav";
import Register from "./components/Register/Register"; 
import RankList from "./components/ranking/Ranking";

const App = ()=>{
  return (
    <SnakeGameContextProvider>
      <Nav/>
      {/* <Register></Register> */}
      <Main></Main>
      {/* <RankList/> */}
    </SnakeGameContextProvider>
  );
}

export default App;