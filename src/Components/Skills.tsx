import styled, { keyframes } from "styled-components";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useState } from "react";
import htmllogo from "../images/imagesLogo/html_logo.png";

const animate = keyframes`
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
`;

const BodySkillsContainerInlineBox = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
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
  animation: ${animate} 7s linear infinite;
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
  overflow: hidden;
  z-index: 0;
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

const BodySkillsCssCircle = styled(motion.div)`
  display: flex;
  color: white;
  cursor: pointer;
`;

const BodySkillsHtmlCircle = styled.div`
  display: flex;
  color: white;
  cursor: pointer;
`;

const boxFade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const BodySkillsCircleGlow = styled(motion.div)`
  display: flex;
  width: 150px;
  height: 150px;
  background-color: rgba(34, 33, 33, 0.9);
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  position: relative;
  animation: ${boxFade} 0.5s;
  border-radius: 15px;
  &::before,
  &::after {
    position: absolute;
    display: flex;
    align-items: center;
    content: "";
    /* top: -5%; */
    /* left: -5%; */
    height: 50%;
    width: 50%;
    border-radius: 50%;
    /* transform: translate(-50%, -50%); */
    opacity: 0.5;
    filter: blur(60px);
  }
  &::before {
    background-color: #e91071;
    z-index: -2;
    animation: ${backglow1} 15s ease infinite;
  }
  &::after {
    background-color: #00ffff;
    z-index: -1;
    animation: ${backglow2} 15s ease infinite;
  }
`;

const BodySkillsInlineWrapper = styled(motion.div)`
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
  animation: ${boxFade} 0.5s;
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

const BodySkillsInlineHtmlImg = styled.img`
  background: url(${htmllogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 11rem;
  color: white;
`;

const BodySkillsInlineChartContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

function Skills() {
  const [CssIsOpen, CssSetIsOpen] = useState(false);
  const [HtmlIsOpen, HtmlSetIsOpen] = useState(false);

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
            <BodySkillsHtmlCircle
              onClick={() => {
                HtmlSetIsOpen(!HtmlIsOpen);
              }}
            >
              {!HtmlIsOpen ? (
                <BodySkillsCircleGlow whileHover={{ scale: 1.3 }}>
                  <span>HTML</span>
                </BodySkillsCircleGlow>
              ) : (
                <BodySkillsInlineWrapper>
                  <BodySkillsInlineTitleContainer>
                    <BodySkillsInlineTitle>Html</BodySkillsInlineTitle>
                  </BodySkillsInlineTitleContainer>

                  <BodySkillsInlineContainer>
                    <BodySkillsInlineImgContainer>
                      <BodySkillsInlineHtmlImg></BodySkillsInlineHtmlImg>
                    </BodySkillsInlineImgContainer>
                    <BodySkillsInlineChartContainer></BodySkillsInlineChartContainer>
                  </BodySkillsInlineContainer>
                </BodySkillsInlineWrapper>
              )}
            </BodySkillsHtmlCircle>
            {/* Css */}

            <BodySkillsCssCircle
              onClick={() => {
                CssSetIsOpen(!CssIsOpen);
              }}
            >
              {!CssIsOpen ? (
                <BodySkillsCircleGlow whileHover={{ scale: 1.3 }}>
                  <span>CSS</span>
                </BodySkillsCircleGlow>
              ) : (
                <BodySkillsInlineWrapper>
                  <BodySkillsInlineTitle>Css</BodySkillsInlineTitle>
                </BodySkillsInlineWrapper>
              )}
            </BodySkillsCssCircle>
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
