import { useEffect } from "react";

const initialState = {
    snake: [0],
    foodPosition:5,
    direction : 'Right',
    score:0
}

const handleChangeDirection = (state, action) => {
    const newDirection = action.payload.direction;

    if ( state.snake.len===1 || 
      (newDirection === 'Right' && state.direction !== 'Left') ||
      (newDirection === 'Left' && state.direction !== 'Right') ||
      (newDirection === 'Up' && state.direction !== 'Down') ||
      (newDirection === 'Down' && state.direction !== 'Up')
    ) {
      return { ...state, direction: newDirection };
    }
  
    return state; // Return the same state if the direction change is invalid
  };
  

const handleMoveSnake = (state,action)=>{
    let newSnakePosition = state.snake[0];

            if(state.direction==='Right') {
                newSnakePosition = Math.floor(newSnakePosition/10) + (newSnakePosition+1)%10;
            }
            if(state.direction==='Left') {
                let temp = Math.floor(newSnakePosition/10)+10;
                newSnakePosition-=1;
                if(newSnakePosition<0) {
                    newSnakePosition += temp;
                }
            }
            if(state.direction==='Down') { 
                newSnakePosition+=10;
                newSnakePosition%=100;  
            }
            if(state.direction==='Up') { 
                newSnakePosition-=10;
                if(newSnakePosition<0) newSnakePosition+=100; 
            }        
        
            if(newSnakePosition===state.foodPosition) {
                const max_val = 99;

                let randomNumber;
                
                do {
                    randomNumber = Math.floor(Math.random()*(max_val+1));
                }
                while(state.snake.includes(randomNumber));
                
                return {...state,foodPosition:randomNumber,score:state.score+5,snake:[newSnakePosition,...state.snake]};
            }
            return { ...state, snake: [newSnakePosition,...state.snake.slice(0,-1)] };

}



const GameReducer = (state,action)=>{
    switch(action.type) {
        case 'MOVE':
            return handleMoveSnake(state,action);          
        case 'CHANGE_DIRECTION':
            return handleChangeDirection(state,action);



        default:
            return state;
    }
}

export  {GameReducer,initialState};