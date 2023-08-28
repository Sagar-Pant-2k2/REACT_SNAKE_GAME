import styled from 'styled-components'
import {SnakeGameContext} from '../../context/GameContext'
import { useContext } from 'react';

const Snake = styled.div`
    width: 100%;
    height: 100%;
    
    background-color: ${props=>props.val?"black":"green"};
`
export default ()=>{
    const {gameState} = useContext(SnakeGameContext);
    return <Snake val={gameState.dead}/>
};