import styled from "styled-components";
import githubimage from "../images/imagesLogo/githubImage.png";

const GitTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 60px;
  font-weight: bolder;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 5px;
  z-index: 1;
`;

const GitTitle = styled.h2`
  position: relative;
  display: flex;
  align-items: center;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 1.5em;
  color: rgba(255, 255, 255, 0);
  letter-spacing: 4px;
  background: linear-gradient(90deg, #fff, #000, #fff);
  background-repeat: no-repeat;
  background-size: 80%;
  -webkit-background-clip: text;
`;

const GitBodyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 2em;
`;

const GitLeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .cta__button {
    position: relative;
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: #f3f2f2;
    border: 3px solid #f3f2f2;
    border-radius: 50%;
    &:after {
      content: "";
      position: absolute;
      top: 7%;
      left: 7%;
      border-radius: 50%;
      border-top: 1px solid transparent;
      border-right: 1px solid #f3f2f2;
      border-bottom: 1px solid transparent;
      border-left: 1px solid #f3f2f2;
      width: 85%;
      height: 85%;
      transition: border 600ms cubic-bezier(0.785, 0.135, 0.15, 0.86),
        transform 600ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
      transform: rotate(45deg);
      backface-visibility: hidden;
    }
    &:hover {
      &:after {
        border: 1px solid #f3f2f2;
        transform: rotate(135deg);
      }
    }
  }
`;

const GitRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const GitRightSpanContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  font-size: 1.4em;
  font-weight: bold;
`;

const FooterContainerImg = styled.img`
  background: url(${githubimage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  @media screen and (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

const SiteBtnBox = styled.div`
  display: flex;
  color: white;
  position: relative;
  height: 100%;
`;

const SiteBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  letter-spacing: 1px;
  background: none;
  position: absolute;
  right: 10%;
  bottom: 40%;
  outline: none;
  border: none;
  width: 200px;
  height: 100px;
  color: white;
  font-size: 25px;
  font-weight: bold;
  z-index: 2;
  transition: 0.01s 0.23s ease-out all;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 55%;
    background: #202020;
    z-index: -1;
    transition: 0.3s ease-in all;
  }
  &:after {
    content: "";
    position: absolute;
    left: -5%;
    top: 5%;
    height: 90%;
    width: 5%;
    background: white;
    z-index: -1;
    transition: 0.4s 0.02s ease-in all;
  }
  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.3);
    &:before {
      left: 100%;
      width: 25%;
    }
    &:after {
      left: 100%;
      width: 70%;
    }
  }
`;

function Git() {
  return (
    <>
      <GitTitleContainer>
        <GitTitle>Git</GitTitle>
      </GitTitleContainer>
      <GitBodyContainer>
        <div id="nc-main" className="nc-main bg-cover bg-cc">
          <div className="full-wh">
            <div className="bg-animation">
              <div id="stars"></div>
              <div id="stars2"></div>
              <div id="stars3"></div>
              <div id="stars4"></div>
            </div>
          </div>
        </div>
        <GitLeftContainer>
          <div className="cta__button">
            <FooterContainerImg />
          </div>
        </GitLeftContainer>
        <GitRightContainer>
          <GitRightSpanContainer>
            <span>지금까지 했던 프로젝트를 정리해둔 깃사이트 입니다.</span>
          </GitRightSpanContainer>
          <SiteBtnBox>
            <SiteBtn
              href="https://github.com/eunyechan/vanillaJS_app"
              target={"blank"}
            >
              <span>Go Git Site</span>
            </SiteBtn>
          </SiteBtnBox>
        </GitRightContainer>
      </GitBodyContainer>
    </>
  );
}

export default Git;
