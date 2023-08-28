import Cell from './Cell';
import Container from './Container';
import {SnakeGameContext} from '../../context/GameContext';
import { useContext ,useEffect, useRef, useState} from 'react';
import Food from '../food/Food';
import Snake from '../snake/Snake';

export default ()=>{
    const {gameState,dispatch} = useContext(SnakeGameContext);

    const [time, setTime] = useState(0);
{!gameState.dead && 
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 500);
    console.log(time);
    dispatch({type:"MOVE"});
    return () => {
      clearInterval(interval);
    };
  }, [time]);}
    
    const ChangeDirection = (e)=>{
        dispatch({type:'CHANGE_DIRECTION',payload:{direction:`${e.key}`}});
    }

    const Cells = Array(100).fill('').map((_,index)=>{
    return (
    <Cell key={index} index={index}>
        
        {gameState.snake.includes(index) && <Snake/>}
        {gameState.snake[0]!=gameState.foodPosition && gameState.foodPosition==index && <Food/>}
    </Cell>);
    });

    
    // console.log("
    return (
    <Container>
        {Cells}
    </Container>
    );
}