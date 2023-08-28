const initialState = {
    snake: [0],
    foodPosition:1,
    direction : 'Right'
}

const moveSnake = ()=>{

}

const eatFood = ()=>{

}


const GameReducer = (state,action)=>{
    switch(action.type) {
        case 'MOVE':
            let newSnakePosition = state.snake[0];
            newSnakePosition += state.direction==='Right'?1:0; 
            newSnakePosition +=  state.direction==='Left'?-1:0;
            newSnakePosition +=  10*(state.direction==='Down'?1:0);
            newSnakePosition += 10*(state.direction==='Up'?-1:0);
            return { ...state, snake: [newSnakePosition,...state.snake.slice(0,-1)] }; 
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

            console.log(newDirection);
            return { ...state, direction: newDirection };


        case 'EAT_FOOD':

        default:
            return state;
    }
}

export  {GameReducer,initialState};