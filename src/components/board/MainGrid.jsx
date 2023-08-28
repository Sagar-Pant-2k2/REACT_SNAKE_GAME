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
    }, 500 - 5*gameState.score);
   
    dispatch({type:"MOVE"});
    return () => {
      clearInterval(interval);
    };
  }, [time]);}
    

    const Cells = Array(100).fill('').map((_,index)=>{
    return (
    <Cell key={index} index={index}>
        {gameState.snake.includes(index) && <Snake/>}
        {gameState.snake[0]!=gameState.foodPosition && gameState.foodPosition==index && <Food/>}
    </Cell>);
    });

    
    const handleKeyDown = (event) => {
        switch (event.key) {
          case 'ArrowRight':
            console.log("moved right");
            dispatch({ type: 'CHANGE_DIRECTION', payload: { direction: 'Right' } });
            break;
            case 'ArrowLeft':
              console.log("moved left");
              dispatch({ type: 'CHANGE_DIRECTION', payload: { direction: 'Left' } });
              break;
              case 'ArrowDown':
              console.log("moved down");
              dispatch({ type: 'CHANGE_DIRECTION', payload: { direction: 'Down' } });
              break;
              case 'ArrowUp':
                  console.log("moved up");
            dispatch({ type: 'CHANGE_DIRECTION', payload: { direction: 'Up' } });
            break;
          default:
            break;
        }
      };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
    
        // Remove the event listener when the component unmounts
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, []);

    // console.log("
    return (
    <Container>
        {Cells}
    </Container>
    );
}