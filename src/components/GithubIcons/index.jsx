import styled from "styled-components";
import Heart from "../../assets/heart.png";
import Star from "../../assets/star.png";
import Followers from "../../assets/following.png";

const StyledIcon = styled.img`
  background-color: transparent;
  width: 30px;
  height: 30px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  color: #eceff4;
  font-family: Lato;
  font-size: 20px;
  font-style: italic;
  line-height: 26px;
  width: 120px;
  text-align: left;
`;

const GithubInfo = ({ following, followers, repos }) => {
  return (
    <div>
      <IconContainer>
      <StyledIcon src={Followers} />
        <Span>{followers} followers</Span>
        <StyledIcon src={Heart} />
        <Span>{following} following</Span>
        <StyledIcon src={Star} />
        <Span>{repos} stars</Span>
      </IconContainer>
    </div>
  );
};

export default GithubInfo;
