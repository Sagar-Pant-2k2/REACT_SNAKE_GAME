import styled from 'styled-components'
import MainGrid from '../board/MainGrid'
import { useContext } from 'react';
import { SnakeGameContext } from '../../context/GameContext';
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
    const {gameState} = useContext(SnakeGameContext);
    return  (
        <Main>
            <h1>Score :  {gameState.score}</h1>
            <MainGrid/>
        </Main>
    )
};