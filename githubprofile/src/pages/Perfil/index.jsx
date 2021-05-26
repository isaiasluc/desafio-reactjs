import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import GithubIcons from "../../components/GithubIcons";
import UserInfo from "../../components/UserInfo";
import Repo from "../../components/Repo";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  width: 100%;
  height: 100%;
`;

const LeftColumn = styled.div`
  background-color: #3b4252;
  padding: 30px 20px;
`;

const RightColumn = styled.div``;

const AvatarContainer = styled.div`
  padding: 40px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Avatar = styled.img`
  height: 298px;
  width: 298px;
  border: 2px solid #c0ccda;
`;

const Name = styled.span`
  color: #eceff4;
  font-family: Lato;
  font-size: 40px;
  font-style: italic;
  line-height: 50px;
  width: 400px;
  text-align: left;
`;

const Nickname = styled.span`
  color: #eceff4;
  font-family: Lato;
  font-size: 28px;
  font-style: italic;
  line-height: 34px;
  width: 400px;
  text-align: left;
`;

const Bio = styled.p`
  color: #8190a5;
  font-family: Lato;
  font-size: 18px;
  text-align: left;
`;

const Socials = styled.div``;

const Repos = styled.div``;

const Back = styled.button`
  background-color: #eceff4;
  border-radius: 5px;
  border: solid 1px;
  width: 192px;
  height: 50px;
  cursor: pointer;

  span {
    color: #3b4252;
    font-family: Lato;
    font-size: 18px;
    font-style: italic;
    width: 192px;
    text-align: center;
  }
`;

export default function Perfil(state) {
  const [repos, setRepos] = useState([]);
  const data = state.location.state;

  let history = useHistory();

  function handleBack() {
    history.push("/");
  }

  useEffect(() => {
    const userName = data.login;

    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((response) => response.json())
      .then((response) => {
        setRepos(response);
      });
  }, [data.login]);

  return (
    <Container>
      <LeftColumn>
        <AvatarContainer>
          <Avatar src={data.avatar_url} />
        </AvatarContainer>
        <Name>{data.name}</Name>
        <br />
        <Nickname>@{data.login}</Nickname>
        <br />
        <br />
        <Bio>{data.bio}</Bio>
        <br />
        <Socials>
          <GithubIcons
            followers={data.followers}
            following={data.following}
            repos={data.public_repos}
          />
        </Socials>
        <br />
        <UserInfo
          org={data.company}
          location={data.location}
          email={data.email}
          website={data.website}
          twitter={data.twitter_username}
        />
        <br />
        <br />
        <Back onClick={handleBack}>
          <span>Voltar</span>
        </Back>
      </LeftColumn>
      <RightColumn>
        <Repos>
          <Repo repositorios={repos} />
        </Repos>
      </RightColumn>
    </Container>
  );
}
