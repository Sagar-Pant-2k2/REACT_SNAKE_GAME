import { useContext } from "react";
import Main from "./components/Main/Main";
import {SnakeGameContextProvider,SnakeGameContext} from './context/GameContext';
import Nav from "./components/Nav/Nav";
import Register from "./components/Register/Register"; 
import RankList from "./components/ranking/Ranking";
import { BrowserRouter,Routes,Route, redirect} from 'react-router-dom';


const App = ()=>{
  const {gameState} = useContext(SnakeGameContext);
  return (
    
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Register/>}></Route>

          <Route path="/game" element={<Main/>}></Route>
          
          <Route path="/ranklist" element={<RankList/>}></Route>
        </Routes>
     
      </BrowserRouter>
   
  );
}

export default ()=>{
  return (
    <SnakeGameContextProvider>
    <App></App>
  </SnakeGameContextProvider>
  );
  
};