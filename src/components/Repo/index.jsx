import styled from "styled-components";
import Star from "../../assets/star.png";
import { useEffect, useState } from 'react';

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eceff4;
  padding-bottom: 20px;
`;

const StyledIcon = styled.img`
  background-color: transparent;
  width: 30px;
  height: 30px;
`;

const RepoName = styled.p`
  color: #3b4252;
  font-family: Lato;
  font-size: 24px;
  font-style: italic;
  line-height: 34px;
  width: 400px;
  text-align: left;
`;

const RepoDescription = styled.p`
  color: #3b4252;
  font-family: Lato;
  font-size: 18px;
  line-height: 28px;
  width: 800px;
  text-align: left;
`;

const Span = styled.span`
  color: #8190a5;
  font-family: Lato;
  font-size: 20px;
  font-style: italic;
  text-align: left;
  width: 100px;
`;

const Updated = styled.span`
  color: #8190a5;
  font-family: Lato;
  font-size: 20px;
  font-style: italic;
  line-height: 26px;
  width: 300px;
  text-align: center;
`;

const Element = styled.span`
  color: #8190a5;
  font-family: Lato;
  font-size: 26px;
  line-height: 33px;
  text-align: left;
`;

const Container = styled.div`
  padding: 20px 50px;
`;

const Card = styled.div`
  padding: 10px 0px;
  width: 800px;
`;

const Link = styled.a`
  text-decoration: none;
`;

const Repo = ({ repositorios }) => {
  console.log(repositorios)
  
  const handleUpdate = (day) => {
    const now = new Date();
    const past = new Date(day);
    const diff = Math.abs(now.getTime() - past.getTime());
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
  };

  return (
    <Container>
      {repositorios.sort((a,b) => b.stargazers_count - a.stargazers_count).map(repo => {
        return (
          <Card key={repo.id}>
            <Link href={repo.svn_url} target="_blank">
              <RepoName>{repo.name}</RepoName>
            </Link>
            <RepoDescription>{repo.description}</RepoDescription>
            <ItemContainer>
              <StyledIcon src={Star} />
              <Span>{repo.stargazers_count} stars</Span>
              <Element>•</Element>
              <Updated>
                Updated {handleUpdate(repo.updated_at)} days ago
              </Updated>
            </ItemContainer>
          </Card>
        );
      })}
    </Container>
  );
};

export default Repo;
