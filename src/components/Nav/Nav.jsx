import styled from 'styled-components'

const Nav = styled.div`
width:100vw;
height:40px;
display:flex;
align-items: center;
justify-content: center;
background-color: #741ac8;
color: white;
font-weight: bold;
`
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default ()=>{
    return(
    <Nav>
        <Left style={{cursor:"pointer"}}>SNAKE_GAME</Left>
        <Right><span style={{cursor:"pointer"}}>RANKING</span></Right>
    </Nav>)
}