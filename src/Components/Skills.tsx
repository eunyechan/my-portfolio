import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import htmllogo from "../images/imagesLogo/html_logo.png";
import csslogo from "../images/imagesLogo/css_logo.png";
import jslogo from "../images/imagesLogo/js_logo.png";
import tslogo from "../images/imagesLogo/ts_logo.png";
import reactlogo from "../images/imagesLogo/react_logo.png";

const BodySkillsContainerInlineBox = styled(motion.div)`
  width: 100%;
  height: 100%;
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
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

const BodySkillsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  @media screen and (max-width: 600px) {
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
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
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
  @media screen and (max-width: 768px) {
    padding: 1rem 1.5rem;
    font-size: 12px;
  }
`;

const BodySkillsCircleCloseBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 1vh;
  position: relative;
  z-index: 4;
`;

const BodySkillsCircleCloseBtn = styled.div`
  display: block;
  width: 40px;
  height: 40px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  div {
    position: relative;
  }
  .close-button-block {
    width: 40px;
    height: 20px;
    position: relative;
    overflow: hidden;
    &:before,
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: calc(55% - 4px);
      display: block;
      width: 4px;
      height: 25px;
      transform-origin: bottom center;
      background: white;
      transition: all ease-out 280ms;
    }
    &:last-of-type {
      transform: rotate(180deg);
    }
  }
  .in {
    .close-button-block {
      &:before {
        transition-delay: 280ms;
        transform: translateX(20px) translateY(-20px) rotate(45deg);
      }
      &:after {
        transition-delay: 280ms;
        transform: translateX(-22px) translateY(-22px) rotate(-45deg);
      }
    }
  }
  .out {
    position: absolute;
    top: 0;
    left: 0;
    .close-button-block {
      &:before {
        transform: translateX(-5px) translateY(5px) rotate(45deg);
      }
      &:after {
        transform: translateX(5px) translateY(5px) rotate(-45deg);
      }
    }
  }
  &:hover {
    .in {
      .close-button-block {
        &:before {
          transform: translateX(-5px) translateY(5px) rotate(45deg);
        }
        &:after {
          transform: translateX(5px) translateY(5px) rotate(-45deg);
        }
      }
    }
    .out {
      .close-button-block {
        &:before {
          transform: translateX(-20px) translateY(20px) rotate(45deg);
        }
        &:after {
          transform: translateX(20px) translateY(20px) rotate(-45deg);
        }
      }
    }
  }
`;

const BodySkillsCircle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  color: white;
  /* margin-top: 1rem; */
`;

const BodySkillsCircleWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  /* height: 100%; */
`;

const animatetop = keyframes`
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
const animateright = keyframes`
  0% {
  transform:scaleX(0);
  transform-origin: right;
  }
  50%
  {
    transform:scaleX(1);
  transform-origin: right;
  }
  50.1%
  {
    transform:scaleX(1);
  transform-origin: left;
    
  }
  100%
  {
    transform:scaleX(0);
  transform-origin: left;
    
  }
`;
const animatebottom = keyframes`
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
const animateleft = keyframes`
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
  position: relative;
  width: 100%;
  height: 100%;
  background: #1a1b22a6;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0 20px 50px rgb(60, 63, 83);
  color: white;
  padding: 20px;
  border: 2px solid #0f3535;
  border-radius: 5px;
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

  p {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
  }
  p:nth-child(1) {
    transform: rotate(0deg);
  }
  p:nth-child(2) {
    transform-origin: right top;
    transform: rotate(-90deg);
    margin-left: -2px;
  }
  p:nth-child(3) {
    transform: rotate(180deg);
  }
  p:nth-child(4) {
    transform-origin: left bottom;
    transform: rotate(-270deg) translateY(100%) scaleX(-1);
    margin-left: 2px;
  }
  p::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: #50dfdb;
  }
  p:nth-child(1)::before {
    animation: ${animatetop} 4s normal;
  }
  p:nth-child(2)::before {
    animation: ${animateright} 4.5s normal;
  }
  p:nth-child(3)::before {
    animation: ${animatebottom} 4s normal;
  }
  p:nth-child(4)::before {
    animation: ${animateleft} 4.5s normal;
  }
`;

const BodySkillsNameContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 20px;
`;

const SkillName = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  font-size: 1.8em;
  font-weight: bold;
  padding-top: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin-top: 50px;
  }
`;

const BodySkillsInlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  padding: 20px 30px;
`;

const BodySkillsInlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BodySkillsInlinePercentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

const BodySkillsInlinePercent = styled.span`
  font-size: 0.7em;
`;

const BodySkillsInlineTitle = styled.span`
  color: white;
  font-size: 0.9em;
  font-weight: bold;
`;

const fillHtml = keyframes`
  0% { width:0%; }
  100% { width:90%; }
`;

const fillCss = keyframes`
  0% { width:0%; }
  100% { width:85%; }
`;

const fillJs = keyframes`
  0% { width:0%; }
  100% { width:45%; }
`;

const fillTs = keyframes`
  0% { width:0%; }
  100% { width:40%; }
`;

const fillReact = keyframes`
  0% { width:0%; }
  100% { width:50%; }
`;

const BodySkillsInlineProgressBarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BodySkillsInlineProgressBar = styled.div`
  height: 1vh;
  width: 100%;
  position: relative;
  z-index: 10;
  background-color: #3d5980;
  border-radius: 10px;
`;

const BodySkillsInlineHtmlProgress = styled.div`
  position: relative;
  height: 100%;
  background-color: #cfd6dd;
  transition: width 0.5s ease-out;
  border-radius: 10px 0px 0px 10px;
  animation: ${fillHtml} 1s ease-out 0s;
  animation-fill-mode: forwards;
  width: 0%;
`;

const BodySkillsInlineCssProgress = styled.div`
  position: relative;
  height: 100%;
  background-color: #cfd6dd;
  transition: width 0.5s ease-out;
  border-radius: 10px 0px 0px 10px;
  animation: ${fillCss} 1s ease-out 0s;
  animation-fill-mode: forwards;
  width: 0%;
`;

const BodySkillsInlineJsProgress = styled.div`
  position: relative;
  height: 100%;
  background-color: #cfd6dd;
  transition: width 0.5s ease-out;
  border-radius: 10px 0px 0px 10px;
  animation: ${fillJs} 1s ease-out 0s;
  animation-fill-mode: forwards;
  width: 0%;
`;

const BodySkillsInlineTsProgress = styled.div`
  position: relative;
  height: 100%;
  background-color: #cfd6dd;
  transition: width 0.5s ease-out;
  border-radius: 10px 0px 0px 10px;
  animation: ${fillTs} 1s ease-out 0s;
  animation-fill-mode: forwards;
  width: 0%;
`;

const BodySkillsInlineReactProgress = styled.div`
  position: relative;
  height: 100%;
  background-color: #cfd6dd;
  transition: width 0.5s ease-out;
  border-radius: 10px 0px 0px 10px;
  animation: ${fillReact} 1s ease-out 0s;
  animation-fill-mode: forwards;
  width: 0%;
`;

const BodySkillsInlineProgressGlow = styled.div`
  width: 60px;
  max-width: 100%;
  height: 100%;
  float: right;
  &::before,
  &::after {
    content: "";
    display: block;
    position: relative;
    border-radius: 0px 2px 2px 0px;
  }
  &::before {
    background: transparent;
    height: 100%;
    box-shadow: 0px 0px 10px #cfd6dd, 0px 0px 10px #04bfff;
    z-index: -5;
  }
  &::after {
    background: linear-gradient(to right, transition 0%, transparent 100%);
    height: calc(100% + 10px + 10px);
    width: calc(100% + 10px);
    top: (-10px);
    left: (-10px);
    z-index: -3;
  }
`;

const BodySkillsInlineHtmlImg = styled.div`
  background: url(${htmllogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 15vw;
  height: 22vh;
  @media screen and (max-width: 768px) {
    width: 12vw;
    height: 14vh;
  }
`;

const BodySkillsInlineCssImg = styled.div`
  background: url(${csslogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 15vw;
  height: 22vh;
  @media screen and (max-width: 768px) {
    width: 12vw;
    height: 14vh;
  }
`;

const BodySkillsInlineJsImg = styled.div`
  background: url(${jslogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 15vw;
  height: 22vh;
  @media screen and (max-width: 768px) {
    width: 12vw;
    height: 14vh;
  }
`;

const BodySkillsInlineTsImg = styled.div`
  background: url(${tslogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 15vw;
  height: 22vh;
  @media screen and (max-width: 768px) {
    width: 12vw;
    height: 14vh;
  }
`;

const BodySkillsInlineReactImg = styled.div`
  background: url(${reactlogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 15vw;
  height: 24vh;
  @media screen and (max-width: 768px) {
    width: 12vw;
    height: 14vh;
  }
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
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <BodySkillsCircleOpenBtnContainer>
                      <BodySkillsCircleOpenBtn
                        onClick={() => {
                          setIsOpen(!IsOpen);
                        }}
                      >
                        <h4>Skills Chart</h4>
                      </BodySkillsCircleOpenBtn>
                    </BodySkillsCircleOpenBtnContainer>
                    <div className="content">
                      <SkillName>
                        <h4>Html</h4>
                        <BodySkillsNameContainer>
                          <BodySkillsInlineHtmlImg />
                        </BodySkillsNameContainer>
                      </SkillName>
                      <SkillName>
                        <h4>Css</h4>
                        <BodySkillsNameContainer>
                          <BodySkillsInlineCssImg />
                        </BodySkillsNameContainer>
                      </SkillName>
                      <SkillName>
                        <h4>JavaScript</h4>
                        <BodySkillsNameContainer>
                          <BodySkillsInlineJsImg />
                        </BodySkillsNameContainer>
                      </SkillName>
                      <SkillName>
                        <h4>TypeScript</h4>
                        <BodySkillsNameContainer>
                          <BodySkillsInlineTsImg />
                        </BodySkillsNameContainer>
                      </SkillName>
                      <SkillName>
                        <h4>React</h4>
                        <BodySkillsNameContainer>
                          <BodySkillsInlineReactImg />
                        </BodySkillsNameContainer>
                      </SkillName>
                    </div>
                  </BodySkillsCircleGlow>
                </BodySkillsCircleWrapper>
              ) : (
                <BodySkillsInlineWrapper>
                  <BodySkillsCircleCloseBtnContainer>
                    <BodySkillsCircleCloseBtn
                      className="close-button"
                      onClick={() => {
                        setIsOpen(!IsOpen);
                      }}
                    >
                      <div className="in">
                        <div className="close-button-block"></div>
                        <div className="close-button-block"></div>
                      </div>
                      <div className="out">
                        <div className="close-button-block"></div>
                        <div className="close-button-block"></div>
                      </div>
                    </BodySkillsCircleCloseBtn>
                  </BodySkillsCircleCloseBtnContainer>
                  <BodySkillsInlineContainer>
                    <BodySkillsInlinePercentContainer>
                      <BodySkillsInlineTitle>Html</BodySkillsInlineTitle>
                      <BodySkillsInlinePercent>95%</BodySkillsInlinePercent>
                    </BodySkillsInlinePercentContainer>
                    <BodySkillsInlineProgressBarContainer>
                      <BodySkillsInlineProgressBar>
                        <BodySkillsInlineHtmlProgress>
                          <BodySkillsInlineProgressGlow />
                        </BodySkillsInlineHtmlProgress>
                      </BodySkillsInlineProgressBar>
                    </BodySkillsInlineProgressBarContainer>
                  </BodySkillsInlineContainer>

                  {/* Css */}
                  <BodySkillsInlineContainer>
                    <BodySkillsInlinePercentContainer>
                      <BodySkillsInlineTitle>Css</BodySkillsInlineTitle>
                      <BodySkillsInlinePercent>90%</BodySkillsInlinePercent>
                    </BodySkillsInlinePercentContainer>
                    <BodySkillsInlineProgressBarContainer>
                      <BodySkillsInlineProgressBar>
                        <BodySkillsInlineCssProgress>
                          <BodySkillsInlineProgressGlow />
                        </BodySkillsInlineCssProgress>
                      </BodySkillsInlineProgressBar>
                    </BodySkillsInlineProgressBarContainer>
                  </BodySkillsInlineContainer>

                  {/* Js */}
                  <BodySkillsInlineContainer>
                    <BodySkillsInlinePercentContainer>
                      <BodySkillsInlineTitle>JavaScript</BodySkillsInlineTitle>
                      <BodySkillsInlinePercent>45%</BodySkillsInlinePercent>
                    </BodySkillsInlinePercentContainer>
                    <BodySkillsInlineProgressBarContainer>
                      <BodySkillsInlineProgressBar>
                        <BodySkillsInlineJsProgress>
                          <BodySkillsInlineProgressGlow />
                        </BodySkillsInlineJsProgress>
                      </BodySkillsInlineProgressBar>
                    </BodySkillsInlineProgressBarContainer>
                  </BodySkillsInlineContainer>

                  {/* Ts */}
                  <BodySkillsInlineContainer>
                    <BodySkillsInlinePercentContainer>
                      <BodySkillsInlineTitle>TypeScript</BodySkillsInlineTitle>
                      <BodySkillsInlinePercent>40%</BodySkillsInlinePercent>
                    </BodySkillsInlinePercentContainer>
                    <BodySkillsInlineProgressBarContainer>
                      <BodySkillsInlineProgressBar>
                        <BodySkillsInlineTsProgress>
                          <BodySkillsInlineProgressGlow />
                        </BodySkillsInlineTsProgress>
                      </BodySkillsInlineProgressBar>
                    </BodySkillsInlineProgressBarContainer>
                  </BodySkillsInlineContainer>

                  {/* React */}
                  <BodySkillsInlineContainer>
                    <BodySkillsInlinePercentContainer>
                      <BodySkillsInlineTitle>React</BodySkillsInlineTitle>
                      <BodySkillsInlinePercent>50%</BodySkillsInlinePercent>
                    </BodySkillsInlinePercentContainer>
                    <BodySkillsInlineProgressBarContainer>
                      <BodySkillsInlineProgressBar>
                        <BodySkillsInlineReactProgress>
                          <BodySkillsInlineProgressGlow />
                        </BodySkillsInlineReactProgress>
                      </BodySkillsInlineProgressBar>
                    </BodySkillsInlineProgressBarContainer>
                  </BodySkillsInlineContainer>
                </BodySkillsInlineWrapper>
              )}
            </BodySkillsCircle>
          </BodySkillsCircleContainer>
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
