import styled from 'styled-components'
import MainGrid from '../board/MainGrid'
import { useContext, useEffect } from 'react';
import { SnakeGameContext } from '../../context/GameContext';
import { Button } from '@mui/material';

const Main = styled.div`
    width: 100vw;
    
    min-height:100vh;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default ()=>{
    const {gameState,dispatch} = useContext(SnakeGameContext);

    return  (
        <Main>
            {gameState.dead && <h1>Dead</h1>}
            <h1>Score :  {gameState.score}</h1>
            <MainGrid/>
            {gameState.dead && <Button onClick={()=>dispatch({type:'REPLAY'})} sx={{bgcolor:"blue",margin:"10px",color:"White"}}>Play Again</Button>}
        </Main>
    )
};