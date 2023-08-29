import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
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
    return (
        <Main>
            <Container>
                <h2>Enter your name</h2>
                <form>
                    <div style={{margin:"10px"}}>
                    <TextField label="UserName" required/>
                    </div>
                    
                    
                    <Button>Play</Button>
                </form>
                
            </Container>
        </Main>
    )
}
