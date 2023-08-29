import styled from 'styled-components'
import { Link } from 'react-router-dom'
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
        <Left style={{cursor:"pointer"}}><Link to="/game">SNAKE_GAME</Link></Left>
        <Right><span style={{cursor:"pointer"}}><Link to={"/ranklist"}>RANKING</Link></span></Right>
    </Nav>)
}