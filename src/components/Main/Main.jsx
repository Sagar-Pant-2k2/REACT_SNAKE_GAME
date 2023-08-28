import styled from 'styled-components'
import MainGrid from '../board/MainGrid'
const Main = styled.div`
    width: 100vw;
    min-height:100vh;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default ()=>{
    return  (
        <Main>
            <h1>Score :  10</h1>
            <MainGrid/>
        </Main>
    )
};