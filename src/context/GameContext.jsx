import { createContext, useReducer } from "react"
import {GameReducer,initialState} from "./GameReducer"

const SnakeGameContext = createContext();

const SnakeGameContextProvider =  ({children})=>{
    const [gameState,dispatch] = useReducer(GameReducer,initialState);
    return (
        <SnakeGameContext.Provider value={{gameState,dispatch}}>
            {children}
        </SnakeGameContext.Provider>
    )
}

export {SnakeGameContextProvider,SnakeGameContext};