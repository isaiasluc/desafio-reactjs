import styled from "styled-components";
import Address from "../../assets/address.png";
import Pin from "../../assets/pin.png";
import Mail from "../../assets/mail.png";
import Url from "../../assets/url.png";
import TwitterIcon from "../../assets/twitter.png";

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled.img`
  background-color: transparent;
  width: 30px;
  height: 30px;
`;

const Span = styled.span`
  color: #eceff4;
  font-family: Lato;
  font-size: 20px;
  font-style: italic;
  line-height: 26px;
  width: 120px;
  text-align: left;
  margin-left: 10px;
`;

const UserInfo = ({ org, location, email, website, twitter }) => {
  return (
    <div>
      <ItemContainer>
        <StyledIcon src={Address} />
        <Span>{org}</Span>
        <br />
      </ItemContainer>
      <ItemContainer>
        <StyledIcon src={Pin} />
        <Span>{location}</Span>
        <br />
      </ItemContainer>
      <ItemContainer>
        <StyledIcon src={Mail} />
        <Span>{email}</Span>
        <br />
      </ItemContainer>
      <ItemContainer>
        <StyledIcon src={Url} />
        <Span>{website}</Span>
        <br />
      </ItemContainer>
      <ItemContainer>
        <StyledIcon src={TwitterIcon} />
        <Span>@{twitter}</Span>
        <br />
      </ItemContainer>
    </div>
  );
};

export default UserInfo;
