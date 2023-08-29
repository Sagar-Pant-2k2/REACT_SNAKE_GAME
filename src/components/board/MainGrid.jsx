import Cell from './Cell';
import Container from './Container';
import {SnakeGameContext} from '../../context/GameContext';
import { useContext ,useEffect, useRef, useState} from 'react';
import Food from '../food/Food';
import Snake from '../snake/Snake';

export default ()=>{
    const {gameState,dispatch} = useContext(SnakeGameContext);

    const [time, setTime] = useState(0);
    // console.log("dead",gameState.dead);

    //why ain't dead working


  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, (100>(500 - 5*gameState.score)?100:(500 - 5*gameState.score)));
   
    dispatch({type:"MOVE"});
    return () => {
      clearInterval(interval);
    };
  }, [time]);
    

    const Cells = Array(100).fill('').map((_,index)=>{
    return (
    <Cell key={index} index={index}>
        {gameState.snake.includes(index) && <Snake/>}
        {gameState.snake[0]!=gameState.foodPosition && gameState.foodPosition==index && <Food/>}
    </Cell>);
    });

    //for PC
    
    const handleKeyDown = (event) => {
      event.preventDefault();
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

    let initialTouchX = null;
    let initialTouchY = null;

    const handleTouchStart = (event) => {
        initialTouchX = event.touches[0].clientX;
        initialTouchY = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
      event.preventDefault();
        if (initialTouchX === null || initialTouchY === null) {
            return;
        }
        const currentTouchX = event.touches[0].clientX;
    const currentTouchY = event.touches[0].clientY;

    const diffX = currentTouchX - initialTouchX;
    const diffY = currentTouchY - initialTouchY;

    const threshold = 2;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // Horizontal swipe
      if (diffX > threshold) {
        dispatch({ type: 'CHANGE_DIRECTION', payload: { direction: 'Right' } });
      } else if (diffX < -threshold) {
        dispatch({ type: 'CHANGE_DIRECTION', payload: { direction: 'Left' } });
      }
    } else {
      // Vertical swipe
      if (diffY > threshold) {
        dispatch({ type: 'CHANGE_DIRECTION', payload: { direction: 'Down' } });
      } else if (diffY < -threshold) {
        dispatch({ type: 'CHANGE_DIRECTION', payload: { direction: 'Up' } });
      }
    }
        initialTouchX = null;
        initialTouchY = null;
    };

      //for touch devices
    useEffect(()=>{
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);

        return ()=>{
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    },[]);

    // console.log("
    return (
    <Container>
        {Cells}
    </Container>
    );
}