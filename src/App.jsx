import { useContext } from "react";
import Main from "./components/Main/Main";
import {SnakeGameContextProvider,SnakeGameContext} from './context/GameContext';
import Nav from "./components/Nav/Nav";
import Register from "./components/Register/Register"; 
import RankList from "./components/ranking/Ranking";
import { BrowserRouter,Routes,Route} from 'react-router-dom';


const App = ()=>{
  
  return (
    <SnakeGameContextProvider>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="register" element={<Register/>}></Route>
          <Route path="/game" element={<Main></Main>}></Route>
          <Route path="/ranklist" element={<RankList/>}></Route>
        </Routes>
      
      
      
     
      </BrowserRouter>
    </SnakeGameContextProvider>
  );
}

export default App;