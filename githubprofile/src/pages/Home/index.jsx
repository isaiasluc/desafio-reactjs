import React, { useState } from "react";
import api from "../../services/api";
import styled from "styled-components";
import "./styles.css";
import { Link } from "react-router-dom";
import Lupa from "../../assets/search-icon.png";

const SearchText = styled.h1`
  color: #3b4252;
  font-family: Lato;
  font-size: 40px;
  font-style: italic;
  line-height: 50px;
  width: 500px;
  text-align: center;
  font-weight: 400;
`;

const SearchBar = styled.input`
  height: 50px;
  width: 400px;
  border: 1px solid #3b4252;
  border-radius: 5px;
  background-color: #ffffff;
  padding-left: 20px;

  ::placeholder {
    color: #8190A5;
    font-family: Lato;
    font-size: 18px;
    font-style: italic;
    line-height: 62px;
    width: 290px;
    text-align: left;
  }
`;

const SearchButton = styled.button`
  background-color: #47525e;
  border-radius: 5px;
  width: 118px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;

  span {
    color: #eceff4;
    font-family: Lato;
    font-size: 22px;
    font-style: italic;
    line-height: 62px;
    width: 118px;
    text-align: center;
  }
`;

const SearchIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  const [value, setValue] = useState("");
  const [disableButton, setDisableButton] = useState(true);

  const handleChangeUser = (e) => {
    setValue(e.target.value);
    setDisableButton(!disableButton);
  };

  const handleSearchUser = (e) => {
    setValue(e.target.value);
    api
      .get(`${value}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="homepage">
      <SearchText>Search Devs</SearchText>

      <div className="search-bar">
        <SearchBar
          type="text"
          placeholder="Type the username here"
          value={value}
          onChange={handleChangeUser}
        />
        <StyledLink to="/perfil">
          <SearchButton disabled={disableButton} onClick={handleSearchUser} value={value}>
            <SearchIcon src={Lupa} />
            <span>Buscar</span>
          </SearchButton>
        </StyledLink>
      </div>
    </div>
  );
}
