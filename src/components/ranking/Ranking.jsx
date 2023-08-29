// RankList.js
import { userData } from "../../userData";
import React from "react";
import styled from "styled-components";

const RankListContainer = styled.div`
width: 300px;
  text-align: center;
  margin: 2rem auto;
`;

const Main = styled.div`
    width: 100vw;
    
    min-height:100vh;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const UserList = styled.ul`
  list-style: none;
  padding: 0;
`;

const UserItem = styled.li`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const RankList = () => {
    const users = userData;
  return (
    <Main>

    <RankListContainer>
      <Title>Ranklist</Title>
      <UserList>
        {users.map((user, index) => (
          <UserItem key={index}>
            <div className="Li" style={{display:"flex",width:"100%"}}>
                <div style={{flex:1}}>{user.username} </div>-
                <div style={{flex:1}}>{user.score} </div>
            </div>
           
          </UserItem>
        ))}
      </UserList>
    </RankListContainer>
    </Main>
  );
};

export default RankList;
