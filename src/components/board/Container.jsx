import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(10,1fr);
    grid-template-rows: repeat(10,1fr);
    border: 2px solid black;
    height: 500px;
    width: 500px;
`
export default Container;