// RankList.js
import { userData } from "../../userData";
import React from "react";
import styled from "styled-components";

const RankListContainer = styled.div`
width: 300px;
  text-align: center;
  margin: 2rem auto;
`;

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
  );
};

export default RankList;
