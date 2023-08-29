import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {Link,useNavigate} from 'react-router-dom';
import { useContext, useState } from 'react';
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
const Container = styled.div`
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    background-color: #f0dfc9;
`
export default () =>{
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const {gameState,dispatch} = useContext(SnakeGameContext);
    const handleRegister = ()=>{
        if(name==="") { alert("username can't be empty"); return;}
        dispatch({type:"register",payload:{uName:name}});
        navigate('/game');
    }
    return (
        // <h1>What the fuck</h1>
        <Main>
            <Container>
                <h2>Enter your name</h2>
                <form>
                    <div style={{margin:"10px"}}>
                    <TextField label="UserName" value={name} required onChange={(e)=>{
                        setName(()=>e.target.value);
                        console.log(name);
                    }}/>
                    </div>
                    <Button onClick={handleRegister}>Play</Button> 
                    
                </form>
                
            </Container>
        </Main>
        
    )
}
