import { useContext, useEffect } from "react";
import Main from "./components/Main/Main";
import {SnakeGameContextProvider,SnakeGameContext} from './context/GameContext';
import Nav from "./components/Nav/Nav";
import Register from "./components/Register/Register"; 
import RankList from "./components/ranking/Ranking";
import { BrowserRouter,Routes,Route, redirect, useNavigate} from 'react-router-dom';


const App = ()=>{
  const navigate = useNavigate();
  const {gameState} = useContext(SnakeGameContext);
  useEffect(()=>{
    if(gameState.userName==="") navigate("/");
  },[]);
  
  return (
    
      <>
      <Nav/>
        <Routes>
          <Route path="/" element={<Register/>}></Route>

          <Route path="/game" element={<Main/>}></Route>
          
          <Route path="/ranklist" element={<RankList/>}></Route>
        </Routes>
      </>
   
  );
}

export default ()=>{
  return (
    <SnakeGameContextProvider>
      <BrowserRouter>
    <App></App>
      </BrowserRouter>
  </SnakeGameContextProvider>
  );
  
};