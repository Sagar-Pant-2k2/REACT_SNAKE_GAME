const initialState = {
    snake: [0],
    foodPosition:1,
    direction : 'Right'
}

const moveSnake = (state,action)=>{
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
            // console.log(newSnakePosition);
            return { ...state, snake: [newSnakePosition,...state.snake.slice(0,-1)] };

}

const eatFood = ()=>{

}


const GameReducer = (state,action)=>{
    switch(action.type) {
        case 'MOVE':
            return moveSnake(state,action);
             
        case 'CHANGE_DIRECTION':
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


        case 'EAT_FOOD':

        default:
            return state;
    }
}

export  {GameReducer,initialState};