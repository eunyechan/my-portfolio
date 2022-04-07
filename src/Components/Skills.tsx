import styled, { keyframes } from "styled-components";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useState } from "react";
import htmllogo from "../images/imagesLogo/html_logo.png";

const BodySkillsContainerInlineBox = styled(motion.div)`
  width: 100%;
  height: 100%;
  margin-top: 8rem;
  display: flex;
  background-color: transparent;
`;

const BodySkillsContainerInlineIconBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 50px;
  @media screen and (max-width: 600px) {
    padding-top: 10px;
  }
`;

const BodySkillsContainerTitleBox = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 60px;
  font-weight: bolder;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  margin-bottom: 2rem;
  letter-spacing: 5px;
  z-index: 1;
`;

const BodySkillsContainerInlineTitle = styled.span`
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
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const BodySkillsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  grid-gap: 20px;
  position: relative;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const BodySkillsContainerInlineLeftIconBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: 10px;

  @media screen and (max-width: 600px) {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const BodySkillsCircleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  z-index: 0;
`;

const BodySkillsCircleOpenBtnContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  z-index: 3;
  padding: 20px;
`;

const BodySkillsCircleOpenBtn = styled.div`
  display: flex;
  padding: 1.3rem 3rem;
  color: #fff;
  transition: all 0.3s;
  position: relative;
  cursor: pointer;
  letter-spacing: 0.25rem;
  z-index: 3;
  span {
    transition: all 0.3s;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-color: rgba(157, 238, 234, 0.5);
    border-bottom-color: rgba(157, 238, 234, 0.5);
    transform: scale(0.1, 1);
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.3s;
    background-color: rgba(128, 128, 128, 0.5);
  }
  &:hover {
    span {
      letter-spacing: 2px;
    }
    &::before {
      opacity: 1;
      transform: scale(1, 1);
    }
    &::after {
      opacity: 0;
      transform: scale(0.1, 1);
    }
  }
`;

const backglow1 = keyframes`
   0%
  {
    transform: translate(10%, 10%) scale(1);
    opacity:0.5;
  }
  
   25%
  {
    transform: translate(-10%, 10%) scale(0.8);
    opacity:0.5;
  }
  
   50%
  {
    transform: translate(-10%, -10%) scale(1.2);
    opacity:0.8;
  }
  
   75%
  {
    transform: translate(10%, -10%) scale(1.1);
    opacity:0.2;
  }
  
   100%
  {
    transform: translate(10%, 10%) scale(1);
    opacity:0.5;
  }
`;
const backglow2 = keyframes`

 0%
  {
    transform: translate(-10%, -10%) scale(1);
    opacity:0.5;
  }
  
   25%
  {
    transform: translate(10%, -10%) scale(0.8);
    opacity:0.5;
  }
  
   50%
  {
    transform: translate(10%, 10%) scale(1.2);
    opacity:0.8;
  }
  
   75%
  {
    transform: translate(-10%, 10%) scale(1.1);
    opacity:0.2;
  }
  
   100%
  {
    transform: translate(-10%, -10%) scale(1);
    opacity:0.5;
  }
`;

const BodySkillsCircle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  color: white;
  margin-top: 1rem;
`;

const BodySkillsCircleWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const animate = keyframes`
  0% {
  transform:scaleX(0);
  transform-origin: left;
  }
  50%
  {
    transform:scaleX(1);
  transform-origin: left;
  }
  50.1%
  {
    transform:scaleX(1);
  transform-origin: right;
    
  }
  
  100%
  {
    transform:scaleX(0);
  transform-origin: right;
    
  }
`;

const BodySkillsCircleGlow = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #1a1b22a6;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0 20px 50px rgb(60, 63, 83);
  color: white;
  padding: 20px;
  border: 2px solid #0f3535;
  border-radius: 10px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transition: 0.5s;
    pointer-events: none;
  }
  &:hover::before {
    left: -50%;
    transform: skewX(-5deg);
  }
  .content {
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border: 1px solid #a08078;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 5px 10px rgba(9, 0, 0, 0.5);
  }

  /* span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
  }
  span:nth-child(1) {
    transform: rotate(0deg);
  }
  span:nth-child(2) {
    transform: rotate(90deg);
  }
  span:nth-child(3) {
    transform: rotate(180deg);
  }
  span:nth-child(4) {
    transform: rotate(270deg);
  }
  span::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: #50dfdb;
    animation: ${animate} 4s linear;
  } */
`;

const SkillName = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid white;
`;

const BodySkillsInlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 1;
  font-size: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(34, 33, 33, 1);
  z-index: 1;
`;

const BodySkillsInlineTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BodySkillsInlineTitle = styled.span`
  color: white;
  font-size: 3rem;
  font-weight: bold;
  padding: 20px;
`;

const BodySkillsInlineContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const BodySkillsInlineImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
  height: 100%;
`;

const BodySkillsInlineHtmlImg = styled.div`
  background: url(${htmllogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 15vw;
  height: 22vh;
  /* padding: 11rem; */
`;

const BodySkillsInlineChartContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

function Skills() {
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <BodySkillsContainerInlineBox>
      <BodySkillsContainerInlineIconBox>
        <BodySkillsContainerTitleBox>
          <BodySkillsContainerInlineTitle>
            Skills
          </BodySkillsContainerInlineTitle>
        </BodySkillsContainerTitleBox>

        <BodySkillsContainer>
          <BodySkillsCircleContainer>
            <BodySkillsCircle>
              {!IsOpen ? (
                <BodySkillsCircleWrapper>
                  <BodySkillsCircleGlow>
                    <BodySkillsCircleOpenBtnContainer>
                      <BodySkillsCircleOpenBtn
                        onClick={() => {
                          setIsOpen(!IsOpen);
                        }}
                      >
                        <span>Skills Chart</span>
                      </BodySkillsCircleOpenBtn>
                    </BodySkillsCircleOpenBtnContainer>
                    <div className="content">
                      <SkillName>
                        <span>Html</span>
                      </SkillName>
                      <SkillName>
                        <span>Css</span>
                      </SkillName>
                      <SkillName>
                        <span>JavaScript</span>
                      </SkillName>
                      <SkillName>
                        <span>TypeScript</span>
                      </SkillName>
                      <SkillName>
                        <span>React</span>
                      </SkillName>
                    </div>
                  </BodySkillsCircleGlow>
                </BodySkillsCircleWrapper>
              ) : (
                <BodySkillsInlineWrapper>
                  <BodySkillsInlineTitleContainer>
                    <BodySkillsInlineTitle>Html</BodySkillsInlineTitle>
                  </BodySkillsInlineTitleContainer>
                  <BodySkillsInlineTitleContainer>
                    <BodySkillsInlineTitle>Css</BodySkillsInlineTitle>
                  </BodySkillsInlineTitleContainer>
                </BodySkillsInlineWrapper>
              )}
            </BodySkillsCircle>
          </BodySkillsCircleContainer>
          {/* <BodySkillsContainerInlineLeftIconBoxTopDiv>
                    <BodySkillsContainerInlineTopHtmlIcon
                      whileHover={{ y: "-20px" }}
                    />
                    <BodySkillsContainerInlineTopCssIcon
                      whileHover={{ y: "-20px" }}
                    />
                    <BodySkillsContainerInlineTopJsIcon
                      whileHover={{ y: "-20px" }}
                    />
                  </BodySkillsContainerInlineLeftIconBoxTopDiv>
                  <BodySkillsContainerInlineLeftIconBoxBottomDiv>
                    <BodySkillsContainerInlineBottomSassIcon
                      whileHover={{ y: "-20px" }}
                    />
                    <BodySkillsContainerInlineBottomReactIcon
                      whileHover={{ y: "-20px" }}
                    />
                    <BodySkillsContainerInlineBottomTypeScriptIcon
                      whileHover={{ y: "-20px" }}
                    />
                  </BodySkillsContainerInlineLeftIconBoxBottomDiv> */}

          {/* <BodySkillsContainerInlineRightIconBox>
                  <BodySkillsContainerInlineSubTitle>
                    Version Control
                  </BodySkillsContainerInlineSubTitle>

                  <BodySkillsContainerInlineRightIconBoxTopDiv>
                    <BodySkillsContainerInlineGitIcon
                      whileHover={{ y: "-20px" }}
                    />
                    <BodySkillsContainerInlineGithubIcon
                      whileHover={{ y: "-20px" }}
                    />
                  </BodySkillsContainerInlineRightIconBoxTopDiv>
                </BodySkillsContainerInlineRightIconBox> */}
        </BodySkillsContainer>
      </BodySkillsContainerInlineIconBox>

      {/* <BodySkillsContainerSmallInlineBox
              variants={BodySkillsMenuInlineBoxVariants}
              animate={isOpen ? "skilmenuopenbox" : "skilmenuclosebox"}
            >
              <BodySkillsContainerSmallInlineBoxTitle>
                Skil List
              </BodySkillsContainerSmallInlineBoxTitle>
            </BodySkillsContainerSmallInlineBox> */}
    </BodySkillsContainerInlineBox>
  );
}

export default Skills;
