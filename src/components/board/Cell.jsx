
import styled from 'styled-components'

const Cell = styled.div`
    flex: 1;
    display: flex;
    border: 2px solid black;
`

export default ({children})=>{
    return <Cell>{children}</Cell>
};