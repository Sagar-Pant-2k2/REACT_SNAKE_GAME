import { useEffect } from "react";

const initialState = {
    snake: [0],
    foodPosition:5,
    direction : 'Right',
    score:0
}

const handleChangeDirection = (state,action) =>{
    let direction = action.payload.direction;
            let newDirection = state.direction;

            switch (direction) {
                case 'ArrowRight':
                    newDirection = 'Right';
                break;
                case 'ArrowLeft':
                    newDirection = 'Left';
                    break;
                case 'ArrowDown':
                    newDirection = 'Down';
                break;
                case 'ArrowUp':
                    newDirection = 'Up';
                    break;
                default:
                    break;
            }

            // console.log(newDirection);
            return { ...state, direction: newDirection };

}

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
                
                return {...state,foodPosition:-1,score:state.score+5,snake:[newSnakePosition,...state.snake]};
            }
            return { ...state, snake: [newSnakePosition,...state.snake.slice(0,-1)] };

}

const eatFood = (state)=>{
    let newScore = 5;
    // console.log("states score",state.score);
    return {...state,score:newScore};
}


const GameReducer = (state,action)=>{
    switch(action.type) {
        case 'MOVE':
            return handleMoveSnake(state,action);
             
        case 'CHANGE_DIRECTION':
            return handleChangeDirection(state,action);
        case 'EAT_FOOD':
            return eatFood(state);


        default:
            return state;
    }
}

export  {GameReducer,initialState};