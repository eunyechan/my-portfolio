import styled, { keyframes } from "styled-components";
import {
  motion,
  useAnimation,
  useViewportScroll,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
// import {
// vanillajsImages,
// youtubeImages,
// selectorImages,
// coinImages,
// netfilxImages,
// } from "./data/imageData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { wrap } from "popmotion";
import profile from "./images/imagesLogo/profileimg.png";
import csslogo from "./images/imagesLogo/css_logo.png";
import jslogo from "./images/imagesLogo/js_logo.png";
import htmllogo from "./images/imagesLogo/html_logo.png";
import sasslogo from "./images/imagesLogo/sass_logo.png";
import reactlogo from "./images/imagesLogo/react_logo.png";
import typescriptlogo from "./images/imagesLogo/ts_logo.png";
import gitlogo from "./images/imagesLogo/git_logo.png";
import githublogo from "./images/imagesLogo/github_logo.png";
import githubimage from "./images/imagesLogo/githubImage.png";
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faBars,
  faCalendarWeek,
  faClose,
  faEnvelope,
  faMapLocation,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.9);
`;

const ContainerInline = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    overflow: hidden;
  }
`;

const ContainerInlineBox = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 140px;
`;

const HeaderNav = styled(motion.nav)`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 14px;
  border: 1px solid white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  backdrop-filter: blur(5px);
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 600px) {
    display: flex;
    overflow: hidden;
    justify-content: start;
    align-items: flex-start;
    padding: 1rem;
    ckdrop-filter: blur(5px);
  }
`;

const HeaderMenubar = styled(motion.div)`
  display: none;
  @media screen and (max-width: 600px) {
    display: flex;
    background-color: transparent;
    align-items: center;
    justify-content: space-between;
  }
`;

const HeaderMenubarTitle = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: flex;
    background-color: transparent;
    color: white;
    font-size: 20px;
    font-weight: bold;
  }
`;

const HeaderUl = styled.ul<IInerScreen>`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    display: ${(props) => (props.isMenu ? "flex" : "none")};
    opacity: ${(props) => (props.isMenu ? 1 : 0)};
    justify-content: center;
    align-items: center;
    font-size: 14px;
    width: 100%;
  }
`;

const HeaderList = styled(motion.li)`
  margin: 20px 50px 40px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 600px) {
    margin: 5px 30px;
  }
`;

const HeaderListNumber = styled.span`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1em;
  margin-bottom: 0.5em;
`;

const HomeButtonBox = styled.div`
  height: 100%;
  margin: 20px 50px;
`;

const HomeButton = styled.button`
  background-color: transparent;
  font-size: 20px;
  font-weight: bold;
  padding: 20px 15px;
  cursor: pointer;
  color: white;
  border: 4px solid white;
  border-radius: 9999px;
`;

const HeaderListButton = styled(motion.button)`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  padding: 0.7em 1.2em;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid white;
  border-radius: 0.75em;
  transform-style: preserve-3d;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1);
  background: 150ms cubic-bezier(0, 0, 0.58, 1);
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    border-radius: inherit;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8),
      0 0.625em 0 0 rgba(255, 255, 255, 0.8);
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1);
    box-shadow: 150ms cubic-bezier(0, 0, 0.58, 1);
  }
  &:hover {
    background: transparent;
    transform: translate(0, 0.25em);
    &::before {
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1),
        0 0.5em 0 0 rgba(255, 255, 255, 0.8);
      transform: translate3d(0, 0.5em, -1em);
    }
  }
  &:active {
    background: transparent;
    transform: translate(0em, 0.75em);
    &::before {
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8),
        0 0 rgba(255, 255, 255, 0.8);
      transform: translate3d(0, 0, -1em);
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 100px 70px 0px 70px;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const MainContainerInline = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 600px) {
    display: flex;
    width: 100%;
    padding-right: 0;
  }
`;

const MainTitleBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 0 70px;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-right: 0;
    padding-top: 2rem;
  }
`;

const MainTitleSpanTopBox = styled.div`
  width: 100%;
  height: 100%;
`;

const MainTitleSpanTop = styled.div`
  width: 100%;
  font-size: 5em;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  color: #ffd800;
  letter-spacing: 0px;
  transition: 0.5s;
  -webkit-transition: 1s;
  -ms-transition: 1s;
  position: relative;
  margin: 10px 0 150px 180px;
  padding: 10px;
  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 5px;
    width: 0px;
    background: #ffd800;
    transition: 200ms;
    -webkit-transition: 1s;
    -ms-transition: 1s;
    opacity: 0.3;
    left: 50%;
  }
  &::before {
    bottom: 0;
  }
  &::after {
    top: 0;
  }
  &:hover {
    letter-spacing: 15px;
  }
  &:hover::before,
  &:hover::after {
    width: 95%;
    opacity: 1;
    left: 0;
  }
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const MainTiTleSpan = styled(motion.span)`
  margin: 10px;
  &:hover {
    span {
      opacity: 0;
    }
  }
`;

const MainTitleSpanBottom = styled.div`
  color: #fff;
  font-family: "Times New Roman", Times, serif;
  text-align: center;
  font-size: 1em;
  bottom: 60px;
  position: absolute;
  transition: 0.5s;
  -webkit-transition: 1s;
  -ms-transition: 1s;
  opacity: 0.1;
  width: 100%;
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const MainIntroTitleBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    font-size: 20px;
    display: block;
    padding-top: 2rem;
    padding-left: 0;
  }
`;

const MainIntroTitle = styled.h2`
  color: rgba(255, 255, 255, 1);
  font-size: 1.3em;
  margin-top: 5px;
  font-weight: bolder;
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

const TopscrollButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  z-index: 2;
  position: fixed;
  right: 1.5rem;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  border: none;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    width: 35px;
    height: 35px;
    right: 0.5rem;
    bottom: 1rem;
  }
`;

const AboutMeScrollButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  color: rgba(255, 255, 255, 0.7);
  border: none;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.7);
  left: 40%;
  top: 80%;
  width: 15vw;
  height: 80px;
  z-index: 2;
  border-radius: 25px;
  &:hover {
    background-color: rgba(0, 0, 0, 1);
    color: rgba(255, 255, 255, 1);
  }
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    font-size: 15px;
    width: 50vw;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 2rem;
  }
`;

// body 부분
const BodyContainerBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const BodyContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  margin-bottom: 100px;
`;

const BodyContainerArrow = styled(motion.div)`
  position: absolute;
  align-items: center;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 100px;
  font-weight: bold;
  @media screen and (max-width: 600px) {
    font-size: 50px;
  }
`;

const BodyContainerAboutMeBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 9rem 6rem 0 6rem;
  @media screen and (max-width: 600px) {
    padding: 1rem 4rem;
  }
`;

const BodyContainerAboutMeTitleBox = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 60px;
  font-weight: bolder;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  margin-top: 4rem;
  margin-bottom: 2rem;
  letter-spacing: 5px;
  z-index: 1;
`;

const animate = keyframes`
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
`;

const BodyContainerAboutMeTitle = styled.h2`
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
`;

const BodyContainerAboutMe = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
  padding-top: 40px;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const BodyContainerAboutMeImgBox = styled(motion.div)`
  width: 280px;
  height: 350px;
  perspective: 800px;
  position: relative;
`;

const BodyContainerAboutMeImgWrapper = styled.div`
  width: 280px;
  height: 350px;
  perspective: 800px;
  position: relative;
`;

const BodyContainerAboutMeImgCard = styled(motion.div)`
  width: 320px;
  height: 350px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-140px);
  transition: transform 350ms cubic-bezier(0.39, 0.575, 0.565, 1);
  cursor: pointer;
  margin-top: -50px;
  .card_front,
  .card_right {
    position: absolute;
    width: 320px;
    height: 400px;
    padding: 34px 21px;
    transition: all 350ms cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  &:hover {
    transform: translateZ(-160px) rotateY(-90deg);
    .card_front {
      opacity: 0;
    }

    .card_right {
      opacity: 1;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 20vh;
    margin-bottom: 4rem;
  }
`;

const BodyContainerAboutMeImgFront = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
    180deg,
    rgba(53, 53, 53, 1) 0%,
    rgba(92, 91, 94, 0) 100%
  );
  transform: rotateY(0deg) translateZ(160px);
  border-radius: 34px 3px 0 0;
`;

const BodyContainerAboutMeImg = styled.div`
  display: flex;
  width: 320px;
  height: 400px;
  background-repeat: no-repeat;
  background-image: url(${profile});
  background-position: center center;
  transform-origin: top right;
  transition-delay: 100ms;
  pointer-events: none;
`;

const BodyContainerAboutMeImgFrontTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 18px;
  font-weight: bold;
  color: white;
  padding: 15px;
`;

const BodyContainerAboutMeImgRight = styled.div`
  background-image: linear-gradient(
    180deg,
    rgba(53, 53, 53, 1) 0%,
    rgba(92, 91, 94, 0) 100%
  );
  opacity: 0.08;
  transform: rotateY(90deg) translateZ(160px);
  border-radius: 34px 3px 0 0;
`;

const BodyContainerAboutMeImgRightUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: -10px;
  margin-left: 21px;
  padding: 0;
  font-size: 24px;
  font-weight: bold;
  font-weight: 300;
  list-style: none;
`;

const BodyContainerAboutMeImgRightUlTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  border: 2px solid white;
  border-radius: 9999px;
  padding: 5px;
  margin-bottom: 18px;
`;

const BodyContainerAboutMeImgRightLi = styled.li`
  padding: 12px 2px;
  position: relative;
  font-size: 17px;
`;

const BodyContainerAboutMeUlBox = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const BodyContainerAboutMeUlTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 3rem;
  font-weight: bold;
`;

const BodyContainerAboutMeUl = styled.ul`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 400;
`;

const BodyContainerAboutMeList = styled.li`
  padding: 30px 30px 0 0;
  letter-spacing: 1px;
  line-height: 30px;
  font-size: 17px;
  font-weight: bold;
  margin-right: 50px;
`;

// Body Project 부분

const BodyprojectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 4rem 4rem;
  background-color: rgba(62, 73, 122, 0.6);
  @media screen and (max-width: 600px) {
    padding: 1rem 2rem;
  }
`;

const BodyProjectsTitleBox = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 60px;
  font-weight: bolder;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  margin: 2rem 3rem;
  letter-spacing: 5px;
  z-index: 1;
`;

const BodyProjectsTitle = styled(motion.span)`
  position: relative;
  z-index: 0;
  display: flex;
  width: 100%;
  &::before {
    position: absolute;
    display: flex;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: -1;
    left: -10px;
    content: "";
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #e3f7fa;
  }
`;

const BodyTotalProjectsBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
`;

const BodyTotalProjectsBoxInlineContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  margin-bottom: 4rem;
  background-color: white;
  border-radius: 10px;
  @media screen and (max-width: 600px) {
    padding: 2rem;
    display: block;
  }
`;

const BodyProjectsImageDetailTitleBox = styled.div`
  border: 5px solid black;
  width: 100%;
  display: flex;
  padding: 8px;
  margin-top: 1rem;
  margin-bottom: 3rem;
  text-align: center;
  border-radius: 99px;
  background-color: #f1eaea;
  letter-spacing: 0.3rem;
`;

const BodyProjectsImageDetailTitle = styled.span`
  width: 100%;
  height: 100%;
  font-size: 25px;
  font-weight: bold;
  color: black;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;

const BodyTotalProjectsBoxInline = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: white;
  grid-gap: 2rem;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const BodyProjectsImageDetailExplainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const BodyProjectsDetailExplainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const BodyProjectsDetailExplainTitle = styled.span`
  font-size: 16px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  display: flex;
  line-height: 1.8rem;
  word-break: break-all;
  a {
    color: #3f3fec;
  }
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }
`;

const BodyProjectsImageContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #eee;
  border-radius: 10px;
  max-height: 60vh;
  @media screen and (max-width: 600px) {
    display: flex;
    height: 40vh;
    max-height: 40vh;
    flex-direction: column;
  }
`;

const BodyProjectsImage = styled(motion.img)`
  max-width: 100vw;
  /* max-height: 90vh; */
  width: 100%;
  height: 100%;
  position: absolute;
`;

const BodyProjectsImageTotalNumberBox = styled.div`
  width: 100%;
  height: 2rem;
  z-index: 1;
  display: flex;
  position: absolute;
  justify-content: center;
  bottom: 4rem;
`;

const BodyProjectsImageTotalNumber = styled.span`
  font-size: 16px;
  display: flex;
  color: white;
  @media screen and (max-width: 600px) {
    margin-top: 2rem;
  }
`;

const BodyProjectImageNextSlideButton = styled(motion.button)`
  top: calc(50% - 20px);
  position: absolute;
  background: transparent;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
  right: 10px;
  border: 1px solid white;
  color: white;
  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
    color: black;
  }
`;

const BodyProjectImagePrevSlideButton = styled(motion.button)`
  top: calc(50% - 20px);
  position: absolute;
  background: transparent;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 22px;
  z-index: 2;
  left: 10px;
  transform: scale(-1);
  border: 1px solid white;
  color: white;
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    color: black;
  }
`;

// BodyContactSkilContainer

const BodyContactSkilsContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

// Body Skil

const BodySkilsContainerInlineBox = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  background-color: transparent;
`;

const BodySkilsContainerInlineIconBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 50px;
  @media screen and (max-width: 600px) {
    padding-top: 10px;
  }
`;

const BodySkilsContainerInlineTitle = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  margin-bottom: 4rem;
  margin-top: 2rem;
  letter-spacing: 0.4em;
  -webkit-box-reflect: below -15px -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0.4)
    );
  line-height: normal;
  background-color: white;
  border-radius: 99px;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const BodySkilsContainerRightLeftIconBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  grid-gap: 20px;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const BodySkilsContainerInlineLeftIconBox = styled.div`
  width: 100%;
  height: 65vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  @media screen and (max-width: 600px) {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const BodySkilsContainerInlineSubTitle = styled.span`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(107, 102, 102, 0.3);
  font-size: 26px;
  font-weight: bold;
  height: 15vh;
  color: #d9534f;
  @media screen and (max-width: 600px) {
    height: 100%;
  }
`;

const BodySkilsContainerInlineLeftIconBoxTopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
  border-radius: 10px;
  width: 100%;
  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const BodySkilsContainerInlineLeftIconBoxBottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const BodySkilsContainerInlineRightIconBox = styled.div`
  width: 100%;
  height: 65vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  @media screen and (max-width: 600px) {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const BodySkilsContainerInlineRightIconBoxTopDiv = styled.div`
  display: flex;
  width: 100%;
  flex: 2;
  justify-content: space-around;
  align-items: center;
  margin: 30px 0;
  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const BodySkilsContainerInlineTopHtmlIcon = styled(motion.img)`
  background-image: url(${htmllogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 3px solid black;
  border-radius: 10px;
  padding: 4rem;
  background-color: #f5f5f5;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 1.3rem;
  }
`;

const BodySkilsContainerInlineTopCssIcon = styled(motion.img)`
  background-image: url(${csslogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 3px solid black;
  border-radius: 10px;
  padding: 4rem;
  background-color: #f5f5f5;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 1.3rem;
  }
`;

const BodySkilsContainerInlineTopJsIcon = styled(motion.img)`
  background-image: url(${jslogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 3px solid black;
  border-radius: 10px;
  padding: 4rem;
  background-color: #f5f5f5;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 1.3rem;
  }
`;

const BodySkilsContainerSmallInlineBox = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  letter-spacing: 0.3rem;
  @media screen and (max-width: 600px) {
    letter-spacing: 0rem;
  }
`;

const BodySkilsContainerSmallInlineBoxTitle = styled.span`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  font-size: 22px;
  margin-bottom: 5rem;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 5px;
    font-size: 15px;
    margin-bottom: 10rem;
  }
`;

const BodySkilsContainerInlineBottomSassIcon = styled(motion.img)`
  background-image: url(${sasslogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 3px solid black;
  border-radius: 10px;
  padding: 4rem;
  background-color: #f5f5f5;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 1.3rem;
  }
`;

const BodySkilsContainerInlineBottomReactIcon = styled(motion.img)`
  background-image: url(${reactlogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 3px solid black;
  border-radius: 10px;
  padding: 4rem;
  background-color: #f5f5f5;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 1.3rem;
  }
`;

const BodySkilsContainerInlineBottomTypeScriptIcon = styled(motion.img)`
  background: url(${typescriptlogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 3px solid black;
  border-radius: 10px;
  padding: 4rem;
  background-color: #f5f5f5;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 1.3rem;
  }
`;

const BodySkilsContainerInlineGitIcon = styled(motion.img)`
  background: url(${gitlogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 3px solid black;
  border-radius: 10px;
  padding: 4rem;
  background-color: #f5f5f5;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 1.3rem;
  }
`;

const BodySkilsContainerInlineGithubIcon = styled(motion.img)`
  background: url(${githublogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 3px solid black;
  border-radius: 10px;
  padding: 4rem;
  background-color: #f5f5f5;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 1.3rem;
  }
`;

const BodySkilsMenuContainerButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BodySkilsMenuContainerButtonInlineBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BodySkilsMenuContainerButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 99px;
  position: absolute;
  width: 50px;
  height: 50px;
  z-index: 1;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 25px;
  &:hover {
    transform: scale(1.2);
    transition-duration: 0.3s;
  }
  @media screen and (max-width: 600px) {
    width: 35px;
    height: 35px;
    &:first-child {
      font-size: 15px;
    }
  }
`;

// Body Contact Big
const BodyContactContainerInlineBox = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  background-color: transparent;
`;

const BodyContactBigContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 50px;
  background-color: transparent;
  @media screen and (max-width: 600px) {
    padding-top: 10px;
    overflow: hidden;
    scroll-behavior: none;
  }
`;

const BodyContactInlineTitle = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  margin-bottom: 4rem;
  margin-top: 2rem;
  letter-spacing: 0.4em;
  -webkit-box-reflect: below -15px -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0.4)
    );
  line-height: normal;
  background-color: white;
  border-radius: 99px;
  @media screen and (max-width: 600px) {
    letter-spacing: 0.2em;
  }
`;

const BodyContactBigInlineContainerBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  align-items: center;
  justify-content: space-around;
  padding: 4rem 0;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

const BodyContactBigInlineTopDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  font-weight: bold;
  padding: 15px 0;
  font-size: 45px;
  div {
    display: flex;
    justify-content: center;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 18px;
    }
  }
  @media screen and (max-width: 600px) {
    padding: 0;
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      font-size: 20px;
      div {
        font-size: 15px;
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

const BodyContactBigInlineBottomDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  font-weight: bold;
  padding: 15px 0;
  font-size: 45px;
  div {
    display: flex;
    justify-content: center;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 18px;
    }
  }
  @media screen and (max-width: 600px) {
    padding: 0;
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      font-size: 20px;
      div {
        font-size: 15px;
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

const BodyContactSmallContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  letter-spacing: 0.3rem;
  @media screen and (max-width: 600px) {
    letter-spacing: 0rem;
  }
`;

const BodyContactSmallContainerInlineTitle = styled(motion.span)`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  font-size: 22px;
  margin-bottom: 5rem;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 5px;
    font-size: 15px;
    margin-bottom: 10rem;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 18vh;
  background-color: #302727;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 3rem;
  color: white;
  a {
    width: 80px;
    height: 80px;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    &:hover {
      z-index: 1;
      transform: translateY(-10px);
    }
  }
  @media screen and (max-width: 600px) {
    height: 8vh;
    padding: 2rem 0;
    a {
      width: 30px;
      height: 30px;
    }
  }
`;

const FooterContainerImg = styled.img`
  background: url(${githubimage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  @media screen and (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

const FooterTitle = styled.span`
  display: flex;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

const HeaderNavVariants = {
  top: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    transition: { duration: 0.5 },
  },
  scroll: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    transition: { duration: 0.5 },
  },
};

const HeaderMenuVariants = {
  menuvisible: {
    display: "flex",
    opacity: 1,
  },
  menuinvisible: {
    display: "none",
    opacity: 0,
  },
};

const HeaderNavUlVariants = {
  top: {
    display: "none",
    transition: { duration: 0.5, delay: 0.2, type: "tween" },
    opacity: 0,
  },
  scroll: {
    display: "flex",
    transition: { duration: 0.5, type: "tween" },
    opacity: 1,
  },
};

const WaveTitleVariants = {
  onscreen: {
    y: "15vh",
    opacity: 0,
    transition: { duration: 0.5, type: "tween" },
  },
  offscreen: {
    y: "0vh",
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};

const IntroButton = {
  startbutton: {
    opacity: 0,
    transition: { duration: 0.5, type: "tween" },
  },
  endbutton: {
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};

const IntroTitleVariants = {
  startscreen: {
    y: "15vh",
    opacity: 0,
    transition: { duration: 0.5, type: "tween" },
  },
  endscreen: {
    y: "0vh",
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};

const BodyContainerAboutMeVariants = {
  aboutmeboxanimationvisible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
  aboutmeboxanimationinvisible: {
    x: 800,
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};

const ScrollTopButtonVariants = {
  scrollbottom: {
    display: "flex",
    transition: {
      duration: 0.5,
      type: "tween",
    },
    opacity: 1,
  },
  scrolltop: {
    display: "none",
    transition: {
      duration: 0.5,
      type: "tween",
    },
    opacity: 0,
  },
};

const BodyContainerAboutMeImgVariants = {
  aboutmeimganimationvisible: {
    scale: 1,
    transition: { duration: 0.5, type: "tween" },
    delay: 1,
    opacity: 1,
  },
  aboutmeimganimationinvisible: {
    scale: 0,
    transition: { duration: 0.5, type: "tween" },
    opacity: 0,
  },
};

const BodyContainerAboutmeArrowVariants = {
  aboutmearrowvisible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
  aboutmearrowinvisible: {
    x: -window.innerWidth / 2,
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};

// project Variants
const BodyContactContainerVariants = {
  projectopenmenu: {
    flex: 1,
    opcity: 1,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
  projectclosemenu: {
    flex: 6,
    opcity: 0,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};

const BodyContactInlineContainerVariants = {
  contactmenuopenbox: {
    opacity: 1,
    display: "flex",
    transition: {
      duration: 0.5,
      type: "tween",
      delay: 0.3,
    },
  },
  contactmenuclosebox: {
    opacity: 0,
    display: "none",
    transition: {
      duration: 0.5,
      type: "tween",
      delay: 0.3,
    },
  },
};

// skils variants
const BodySkilsContainerVariants = {
  skilsopenmenu: {
    flex: 6,
    opcity: 1,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
  skilsclosemenu: {
    flex: 1,
    opcity: 0,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};

const BodySkilsMenuInlineBoxVariants = {
  skilmenuopenbox: {
    opacity: 1,
    display: "flex",
    transition: {
      duration: 0.2,
      type: "tween",
      delay: 0.3,
    },
  },

  skilmenuclosebox: {
    opacity: 0,
    display: "none",
    transition: {
      duration: 0.5,
      type: "tween",
      delay: 0.3,
    },
  },
};

const ImageSliderVariants = {
  next: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
  },
  prev: (direction: number) => {
    return {
      // zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
    };
  },
};

interface IInerScreen {
  isMenu: boolean;
}

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [[vanilajspage, vanillajsdirection], setVanillaJsPage] = useState([
    0, 0,
  ]);
  const [[youtubepage, youtubedirection], setYoutubePage] = useState([0, 0]);
  const [[selectorpage, selectordirection], setSelectorPage] = useState([0, 0]);
  const [[coinpage, coindirection], setCoinPage] = useState([0, 0]);
  const [[netfilxpage, netfilxdirection], setNetfilxPage] = useState([0, 0]);

  const navAnimation = useAnimation();
  const { scrollY } = useViewportScroll();

  const swipeConfidenceValue = 10000;

  // const vanillajsImageIndex = wrap(0, vanillajsImages.length, vanilajspage);
  // const youtubeImageIndex = wrap(0, youtubeImages.length, youtubepage);
  // const selectorImageIndex = wrap(0, selectorImages.length, selectorpage);
  // const coinImageIndex = wrap(0, coinImages.length, coinpage);
  // const netfilxImageIndex = wrap(0, netfilxImages.length, netfilxpage);

  const paginate = (newDirection: number) => {
    setVanillaJsPage([vanilajspage + newDirection, newDirection]);
  };

  const youtubepagenate = (newDirection: number) => {
    setYoutubePage([youtubepage + newDirection, newDirection]);
  };

  const selectorpagenate = (newDirection: number) => {
    setSelectorPage([selectorpage + newDirection, newDirection]);
  };

  const coinpagenate = (newDirection: number) => {
    setCoinPage([coinpage + newDirection, newDirection]);
  };

  const netfilxpagenate = (newDirection: number) => {
    setNetfilxPage([netfilxpage + newDirection, newDirection]);
  };

  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const handleScrollTop = () => {
    if (!window.scrollY) return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    });
  }, [scrollY, navAnimation]);

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80 && window.innerWidth <= 600) {
        navAnimation.start("menuvisible");
      } else {
        navAnimation.start("menuinvisible");
      }
    });
  }, [scrollY, navAnimation]);

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 400) {
        navAnimation.start("onscreen");
        navAnimation.start("startscreen");
        navAnimation.start("startbutton");
        navAnimation.start("scrollbottom");
      } else {
        navAnimation.start("offscreen");
        navAnimation.start("endscreen");
        navAnimation.start("endbutton");
        navAnimation.start("scrolltop");
      }
    });
  }, [scrollY, navAnimation]);

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 300) {
        navAnimation.start("aboutmeboxanimationvisible");
        navAnimation.start("aboutmeimganimationvisible");
        navAnimation.start("aboutmearrowinvisible");
      } else {
        navAnimation.start("aboutmeboxanimationinvisible");
        navAnimation.start("aboutmeimganimationinvisible");
        navAnimation.start("aboutmearrowvisible");
      }
    });
  }, [scrollY, navAnimation]);

  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  const HomeRef = useRef<HTMLDivElement>(null);
  const AboutRef = useRef<HTMLDivElement>(null);
  const ProjectsRef = useRef<HTMLDivElement>(null);
  const SkilsRef = useRef<HTMLDivElement>(null);
  const ContactRef = useRef<HTMLDivElement>(null);
  const onHomeClick = () => {
    HomeRef.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenu(false);
  };
  const onAboutMeClick = () => {
    AboutRef.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenu(false);
  };

  const onProjectClick = () => {
    ProjectsRef.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenu(false);
  };

  const onSkilsClick = () => {
    SkilsRef.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenu(false);
  };

  const onContactClick = () => {
    ContactRef.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenu(false);
  };

  return (
    <Container>
      <HeaderNav>
        <HeaderMenubar
          onClick={() => setIsMenu(!isMenu)}
          style={
            isMenu
              ? { width: "", animationDuration: "5s" }
              : { width: "100%", animationDuration: "45000ms" }
          }
        >
          <FontAwesomeIcon
            style={{ fontSize: "25px", color: "white" }}
            icon={isMenu ? faClose : faBars}
          />
          <HeaderMenubarTitle>
            <span>{isMenu ? "" : "Y.C Portfolio"}</span>
          </HeaderMenubarTitle>
        </HeaderMenubar>
        <HomeButtonBox>
          <HomeButton onClick={onHomeClick}>Y.C</HomeButton>
        </HomeButtonBox>
        <HeaderUl isMenu={isMenu}>
          <HeaderList>
            <HeaderListNumber>01</HeaderListNumber>
            <HeaderListButton onClick={onAboutMeClick}>
              <span>AboutMe</span>
            </HeaderListButton>
          </HeaderList>
          <HeaderList>
            <HeaderListNumber>02</HeaderListNumber>
            <HeaderListButton onClick={onProjectClick}>
              <span>Projects</span>
            </HeaderListButton>
          </HeaderList>
          <HeaderList>
            <HeaderListNumber>03</HeaderListNumber>
            <HeaderListButton onClick={onSkilsClick}>
              <span>Skils</span>
            </HeaderListButton>
          </HeaderList>
          <HeaderList>
            <HeaderListNumber>04</HeaderListNumber>
            <HeaderListButton onClick={onContactClick}>
              <span>Contact</span>
            </HeaderListButton>
          </HeaderList>
        </HeaderUl>
      </HeaderNav>
      <ContainerInline>
        <ContainerInlineBox>
          <MainContainer ref={HomeRef}>
            <MainContainerInline>
              <MainTitleBox
                variants={WaveTitleVariants}
                animate={navAnimation}
                initial="onscreen"
                whileInView="offscreen"
                viewport={{ once: true, amount: 0 }}
              >
                <MainTitleSpanTopBox>
                  <MainTitleSpanTop>
                    <MainTiTleSpan>
                      YECHAN'S PORTFOLIO
                      <MainTitleSpanBottom>
                        <span>WELCOME TO</span>
                      </MainTitleSpanBottom>
                    </MainTiTleSpan>
                  </MainTitleSpanTop>
                </MainTitleSpanTopBox>

                <MainIntroTitleBox>
                  <MainIntroTitle>안녕하세요 은예찬입니다.</MainIntroTitle>
                  <MainIntroTitle>
                    제 포트폴리오를 봐주셔서 감사합니다.
                  </MainIntroTitle>
                  <MainIntroTitle>
                    지금까지 개발자를 준비하면서 만든 프로젝트들 입니다.
                  </MainIntroTitle>
                  <MainIntroTitle>
                    부족한 부분이 있으시면 피드백 남겨주세요 감사합니다.
                  </MainIntroTitle>
                </MainIntroTitleBox>
              </MainTitleBox>
            </MainContainerInline>
            <TopscrollButton
              variants={ScrollTopButtonVariants}
              initial="scrolltop"
              animate={navAnimation}
              onClick={handleScrollTop}
            >
              <FontAwesomeIcon
                icon={faArrowUp}
                style={{ fontSize: "25px", padding: "20px", color: "white" }}
              />
            </TopscrollButton>
          </MainContainer>
        </ContainerInlineBox>
      </ContainerInline>

      {/* **********************body AboutMe 부분********************* */}

      <BodyContainerBox>
        <BodyContainer ref={AboutRef}>
          <BodyContainerArrow
            variants={BodyContainerAboutmeArrowVariants}
            animate={navAnimation}
            initial="aboutmearrowvisible"
            whileInView="aboutmearrowinvisible"
          >
            &lt;
          </BodyContainerArrow>

          <BodyContainerAboutMeBox
            variants={BodyContainerAboutMeVariants}
            animate={navAnimation}
            initial="aboutmeboxanimationvisible"
            whileInView="aboutmeboxanimationinvisible"
            viewport={{ once: true, amount: 0 }}
          >
            <BodyContainerAboutMeTitleBox>
              <BodyContainerAboutMeTitle>AboutMe</BodyContainerAboutMeTitle>
            </BodyContainerAboutMeTitleBox>

            <BodyContainerAboutMe>
              <BodyContainerAboutMeUlBox>
                <BodyContainerAboutMeUlTitle>
                  자기발전을 위해 끊임없이 공부하고 노력하는 은예찬입니다.
                </BodyContainerAboutMeUlTitle>
                <BodyContainerAboutMeUl>
                  <BodyContainerAboutMeList>
                    군 복무 중 우연히 접하게 된 코딩 서적에 흥미를 느끼게 되어
                    전역 후 미래 능력 개발 교육원에 들어가 안드로이드에 대해서
                    배웠습니다. 그러던 와중 기초만 배운 웹에 흥미를 느껴 수료 후
                    웹에 대해서 좀 더 공부하고자 하여 인터넷 강의를 보면서
                    JavaScript, React, TypeScript 등 다양한 것들을 공부했습니다.
                    공부를 하면서 무언가에 막혔을 때 그것에 대해 해결을 하려고
                    끝없이 고민하고 노력합니다. 물론 아직 많이 모자라고
                    부족하지만 빠르게 변화하는 기술에 뒤처지지 않으려고 노력하고
                    발전하는 제 모습을 보여드리겠습니다. 감사합니다
                  </BodyContainerAboutMeList>
                </BodyContainerAboutMeUl>
              </BodyContainerAboutMeUlBox>
              <BodyContainerAboutMeImgBox>
                <BodyContainerAboutMeImgWrapper>
                  <BodyContainerAboutMeImgCard>
                    <BodyContainerAboutMeImgFront className="card_front">
                      <BodyContainerAboutMeImg />
                      <BodyContainerAboutMeImgFrontTitle>
                        <span>information</span>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          style={{ marginLeft: "15px", fontSize: "20px" }}
                        />
                      </BodyContainerAboutMeImgFrontTitle>
                    </BodyContainerAboutMeImgFront>

                    {/* right */}
                    <BodyContainerAboutMeImgRight className="card_right">
                      <BodyContainerAboutMeImgRightUl>
                        <BodyContainerAboutMeImgRightUlTitle>
                          Information
                        </BodyContainerAboutMeImgRightUlTitle>
                        <BodyContainerAboutMeImgRightLi>
                          이름: 은예찬
                        </BodyContainerAboutMeImgRightLi>
                        <BodyContainerAboutMeImgRightLi>
                          생년월일: 981013
                        </BodyContainerAboutMeImgRightLi>
                        <BodyContainerAboutMeImgRightLi>
                          주소: 서울특별시 동대문구
                        </BodyContainerAboutMeImgRightLi>
                        <BodyContainerAboutMeImgRightLi>
                          이메일: ys101312@kakao.com
                        </BodyContainerAboutMeImgRightLi>
                        <BodyContainerAboutMeImgRightLi>
                          연락처: 010-2508-5919
                        </BodyContainerAboutMeImgRightLi>
                      </BodyContainerAboutMeImgRightUl>
                    </BodyContainerAboutMeImgRight>
                  </BodyContainerAboutMeImgCard>
                </BodyContainerAboutMeImgWrapper>
              </BodyContainerAboutMeImgBox>
            </BodyContainerAboutMe>
          </BodyContainerAboutMeBox>
        </BodyContainer>

        {/****************************  skill 부분 ***************************/}

        <BodyContactSkilsContainer>
          <BodySkilsContainerInlineBox
            ref={SkilsRef}
            variants={BodySkilsContainerVariants}
            animate={isOpen ? "skilsclosemenu" : "skilsopenmenu"}
            initial="skilsopenmenu"
          >
            <BodySkilsContainerInlineIconBox
              variants={BodySkilsMenuInlineBoxVariants}
              animate={isOpen ? "skilmenuclosebox" : "skilmenuopenbox"}
            >
              <BodySkilsContainerInlineTitle>
                Skils
              </BodySkilsContainerInlineTitle>
              <BodySkilsContainerRightLeftIconBox>
                <BodySkilsContainerInlineLeftIconBox>
                  <BodySkilsContainerInlineSubTitle>
                    Front-end
                  </BodySkilsContainerInlineSubTitle>
                  <BodySkilsContainerInlineLeftIconBoxTopDiv>
                    <BodySkilsContainerInlineTopHtmlIcon
                      whileHover={{ y: "-20px" }}
                    />
                    <BodySkilsContainerInlineTopCssIcon
                      whileHover={{ y: "-20px" }}
                    />
                    <BodySkilsContainerInlineTopJsIcon
                      whileHover={{ y: "-20px" }}
                    />
                  </BodySkilsContainerInlineLeftIconBoxTopDiv>
                  <BodySkilsContainerInlineLeftIconBoxBottomDiv>
                    <BodySkilsContainerInlineBottomSassIcon
                      whileHover={{ y: "-20px" }}
                    />
                    <BodySkilsContainerInlineBottomReactIcon
                      whileHover={{ y: "-20px" }}
                    />
                    <BodySkilsContainerInlineBottomTypeScriptIcon
                      whileHover={{ y: "-20px" }}
                    />
                  </BodySkilsContainerInlineLeftIconBoxBottomDiv>
                </BodySkilsContainerInlineLeftIconBox>

                <BodySkilsContainerInlineRightIconBox>
                  <BodySkilsContainerInlineSubTitle>
                    Version Control
                  </BodySkilsContainerInlineSubTitle>

                  <BodySkilsContainerInlineRightIconBoxTopDiv>
                    <BodySkilsContainerInlineGitIcon
                      whileHover={{ y: "-20px" }}
                    />
                    <BodySkilsContainerInlineGithubIcon
                      whileHover={{ y: "-20px" }}
                    />
                  </BodySkilsContainerInlineRightIconBoxTopDiv>
                </BodySkilsContainerInlineRightIconBox>
              </BodySkilsContainerRightLeftIconBox>
            </BodySkilsContainerInlineIconBox>

            <BodySkilsContainerSmallInlineBox
              variants={BodySkilsMenuInlineBoxVariants}
              animate={isOpen ? "skilmenuopenbox" : "skilmenuclosebox"}
            >
              <BodySkilsContainerSmallInlineBoxTitle>
                Skil List
              </BodySkilsContainerSmallInlineBoxTitle>
            </BodySkilsContainerSmallInlineBox>
          </BodySkilsContainerInlineBox>

          <BodySkilsMenuContainerButtonBox>
            <BodySkilsMenuContainerButtonInlineBox>
              <BodySkilsMenuContainerButton
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {isOpen ? (
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ padding: "20px" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ padding: "20px" }}
                  />
                )}
              </BodySkilsMenuContainerButton>
            </BodySkilsMenuContainerButtonInlineBox>
          </BodySkilsMenuContainerButtonBox>

          <BodyContactContainerInlineBox
            ref={ContactRef}
            variants={BodyContactContainerVariants}
            animate={isOpen ? "projectclosemenu" : "projectopenmenu"}
            initial="projectclosemenu"
          >
            <BodyContactBigContainer
              variants={BodyContactInlineContainerVariants}
              animate={isOpen ? "contactmenuopenbox" : "contactmenuclosebox"}
            >
              {/* contace 커졌을 때 부분 */}

              <BodyContactInlineTitle>Contact</BodyContactInlineTitle>
              <BodyContactBigInlineContainerBox>
                <BodyContactBigInlineTopDiv>
                  <div>
                    <FontAwesomeIcon
                      icon={faUser}
                      style={{ padding: "20px" }}
                    />
                    <div>
                      <span style={{ marginBottom: "5px", color: "#D9534F" }}>
                        이름
                      </span>
                      <span>은예찬</span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faCalendarWeek}
                      style={{ padding: "20px" }}
                    />
                    <div>
                      <span style={{ marginBottom: "5px", color: "#D9534F" }}>
                        생년월일
                      </span>
                      <span style={{ wordBreak: "break-all" }}>19981013</span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faPhone}
                      style={{ padding: "20px" }}
                    />
                    <div>
                      <span style={{ marginBottom: "5px", color: "#D9534F" }}>
                        전화번호
                      </span>
                      <span>010-2508-5919</span>
                    </div>
                  </div>
                </BodyContactBigInlineTopDiv>
                <BodyContactBigInlineBottomDiv>
                  <div>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ padding: "20px" }}
                    />
                    <div>
                      <span style={{ marginBottom: "5px", color: "#D9534F" }}>
                        이메일
                      </span>
                      <span style={{ wordBreak: "break-all" }}>
                        ys101312@kakao.com
                      </span>
                    </div>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faMapLocation}
                      style={{ padding: "20px" }}
                    />
                    <div>
                      <span style={{ marginBottom: "5px", color: "#D9534F" }}>
                        주소
                      </span>
                      <span>서울특별시 동대문구</span>
                    </div>
                  </div>
                </BodyContactBigInlineBottomDiv>
              </BodyContactBigInlineContainerBox>
            </BodyContactBigContainer>

            <BodyContactSmallContainer
              variants={BodyContactInlineContainerVariants}
              animate={isOpen ? "contactmenuclosebox" : "contactmenuopenbox"}
            >
              <BodyContactSmallContainerInlineTitle>
                Contact
              </BodyContactSmallContainerInlineTitle>
            </BodyContactSmallContainer>
          </BodyContactContainerInlineBox>
        </BodyContactSkilsContainer>

        {/* **********************body Skils 부분********************* */}

        <BodyprojectsContainer ref={ProjectsRef}>
          {/* project부분 */}

          <BodyProjectsTitleBox>
            <BodyProjectsTitle>Project</BodyProjectsTitle>
          </BodyProjectsTitleBox>

          {/* project 전체 div */}

          <BodyTotalProjectsBox>
            {/* vanillaJs Project */}
            <BodyTotalProjectsBoxInlineContainer>
              <BodyProjectsImageDetailTitleBox>
                <BodyProjectsImageDetailTitle>
                  ToDoList
                </BodyProjectsImageDetailTitle>
              </BodyProjectsImageDetailTitleBox>
              <BodyTotalProjectsBoxInline>
                {/* 프로젝트 이미지 부분 */}
                <BodyProjectsImageContainer>
                  <>
                    <AnimatePresence
                      initial={false}
                      custom={vanillajsdirection}
                    >
                      <BodyProjectsImage
                        key={vanilajspage}
                        // src={vanillajsImages[vanillajsImageIndex]}
                        custom={vanillajsdirection}
                        variants={ImageSliderVariants}
                        initial="next"
                        animate="center"
                        exit="prev"
                        transition={{
                          opacity: { duration: 0.2 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                          const swipe = swipePower(offset.x, velocity.x);

                          if (swipe < -swipeConfidenceValue) {
                            paginate(1);
                          } else if (swipe > swipeConfidenceValue) {
                            paginate(-1);
                          }
                        }}
                      />
                      <BodyProjectsImageTotalNumberBox>
                        <BodyProjectsImageTotalNumber>
                          {/* {vanillajsImageIndex + 1} / {vanillajsImages.length} */}
                        </BodyProjectsImageTotalNumber>
                      </BodyProjectsImageTotalNumberBox>
                    </AnimatePresence>
                    <BodyProjectImageNextSlideButton
                      onClick={() => paginate(1)}
                    >
                      {">"}
                    </BodyProjectImageNextSlideButton>
                    <BodyProjectImagePrevSlideButton
                      onClick={() => paginate(-1)}
                    >
                      {">"}
                    </BodyProjectImagePrevSlideButton>
                  </>
                </BodyProjectsImageContainer>

                {/* 프로젝트 상세설명 부분 */}
                <BodyProjectsImageDetailExplainContainer>
                  <BodyProjectsDetailExplainContainer>
                    <BodyProjectsDetailExplainTitle
                      style={{
                        flexDirection: "column",
                        flex: "1",
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}>
                        오늘 할 목록들을 기록하는 홈페이지
                      </span>
                      <br />
                      <br />
                      오늘 할 일들을 적어두고 일이 끝날 때마다 체크 표시를 통해
                      완료가 가능합니다 수정을 할 수도 있고 삭제 기능도
                      구현했습니다.
                      <br />
                      <span
                        style={{
                          borderBottom: "1px solid rgba(226, 222, 222, 0.6)",
                          paddingBottom: "2.5rem",
                        }}
                      >
                        <p>
                          또한 오늘의 날짜와 시간 해당 지역에 대한 날씨도
                          나오도록 했습니다.
                        </p>
                      </span>
                    </BodyProjectsDetailExplainTitle>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        flex: "2",
                      }}
                    >
                      <BodyProjectsDetailExplainTitle
                        style={{ display: "flex", marginTop: "2rem" }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "1",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          구현한 기능
                        </span>
                        <span style={{ display: "flex", flex: "3" }}>
                          JS Clock, &nbsp; JS To Do List, &nbsp; Get
                          Geolocation, &nbsp;
                          <br /> Get Weather Information, &nbsp; Deploy to
                          Github Pages...
                        </span>
                      </BodyProjectsDetailExplainTitle>
                      <BodyProjectsDetailExplainTitle
                        style={{ display: "flex", marginTop: "1rem" }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "1",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          GitHub Code
                        </span>

                        <div
                          style={{
                            display: "flex",
                            flex: "3",
                          }}
                        >
                          <div>
                            <a
                              href="https://github.com/eunyechan/vanillaJS_app"
                              target={"blank"}
                            >
                              github.com/eunyechan/vanillaJS_app
                            </a>
                            &nbsp;
                            <span style={{ fontWeight: "bold" }}>(보기)</span>
                          </div>
                        </div>
                      </BodyProjectsDetailExplainTitle>

                      <BodyProjectsDetailExplainTitle
                        style={{ display: "flex", marginTop: "1rem" }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "1",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          deploy
                        </span>

                        <div style={{ display: "flex", flex: "3" }}>
                          <div>
                            <a
                              href="https://eunyechan.github.io/vaillajs_app.github.io"
                              target={"blank"}
                            >
                              eunyechan.github.io/vaillajs_app.github.io
                            </a>
                            &nbsp;
                            <span style={{ fontWeight: "bold" }}>(보기)</span>
                          </div>
                        </div>
                      </BodyProjectsDetailExplainTitle>

                      <BodyProjectsDetailExplainTitle
                        style={{ display: "flex", marginTop: "1rem" }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "1",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          Front-end
                        </span>

                        <span style={{ display: "flex", flex: "3" }}>
                          JavaScript, Html, Css
                        </span>
                      </BodyProjectsDetailExplainTitle>
                    </div>
                  </BodyProjectsDetailExplainContainer>
                </BodyProjectsImageDetailExplainContainer>
              </BodyTotalProjectsBoxInline>
            </BodyTotalProjectsBoxInlineContainer>

            {/* youtubeProject */}
            <BodyTotalProjectsBoxInlineContainer>
              <BodyProjectsImageDetailTitleBox>
                <BodyProjectsImageDetailTitle>
                  Youtube Clone
                </BodyProjectsImageDetailTitle>
              </BodyProjectsImageDetailTitleBox>

              <BodyTotalProjectsBoxInline>
                {/* 프로젝트 이미지 부분 */}
                <BodyProjectsImageContainer>
                  <>
                    <AnimatePresence initial={false} custom={youtubedirection}>
                      <BodyProjectsImage
                        key={youtubepage}
                        // src={youtubeImages[youtubeImageIndex]}
                        custom={youtubedirection}
                        variants={ImageSliderVariants}
                        initial="next"
                        animate="center"
                        exit="prev"
                        transition={{
                          opacity: { duration: 0.2 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                          const swipe = swipePower(offset.x, velocity.x);
                          if (swipe < -swipeConfidenceValue) {
                            youtubepagenate(1);
                          } else if (swipe > swipeConfidenceValue) {
                            youtubepagenate(-1);
                          }
                        }}
                      />
                      <BodyProjectsImageTotalNumberBox>
                        <BodyProjectsImageTotalNumber>
                          {/* {youtubeImageIndex + 1} / {youtubeImages.length} */}
                        </BodyProjectsImageTotalNumber>
                      </BodyProjectsImageTotalNumberBox>
                    </AnimatePresence>
                    <BodyProjectImageNextSlideButton
                      onClick={() => youtubepagenate(1)}
                    >
                      {">"}
                    </BodyProjectImageNextSlideButton>
                    <BodyProjectImagePrevSlideButton
                      onClick={() => youtubepagenate(-1)}
                    >
                      {">"}
                    </BodyProjectImagePrevSlideButton>
                  </>
                </BodyProjectsImageContainer>

                {/* 프로젝트 상세설명 부분 */}
                <BodyProjectsImageDetailExplainContainer>
                  <BodyProjectsDetailExplainContainer>
                    <BodyProjectsDetailExplainTitle
                      style={{
                        flexDirection: "column",
                        flex: "1",
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}>
                        유튜브를 클론 한 홈페이지
                      </span>
                      <br />
                      <br />
                      비디오 녹화 업로드 수정 삭제 기능을 구현했습니다.
                      <br />
                      깃허브로 로그인이 가능하며 회원가입을 통한 로그인도
                      가능합니다.
                      <br />
                      동영상에 댓글도 남길 수 있으며 댓글을 삭제하는것도
                      가능합니다.
                      <br />
                      프로필 이미지 설정도 가능하고 검색을 통하여 동영상을 찾을
                      수도 있습니다.
                      <br />
                      처음으로 백엔드까지 해본 프로젝트라 정말 의미 있고 많은
                      것을 배운 프로젝트였습니다.
                      <br />
                      <span
                        style={{
                          borderBottom: "1px solid rgba(226, 222, 222, 0.6)",
                          paddingBottom: "2.5rem",
                        }}
                      ></span>
                    </BodyProjectsDetailExplainTitle>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        flex: "2",
                      }}
                    >
                      <BodyProjectsDetailExplainTitle
                        style={{ display: "flex", marginTop: "2rem" }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "1",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          구현한 기능
                        </span>
                        <span style={{ display: "flex", flex: "3" }}>
                          Github Login, &nbsp; User Authentication, &nbsp; User
                          Profile, <br /> Log In, &nbsp; Log Out, <br />
                          Video Upload, &nbsp; Video Recording, &nbsp; Search
                          Video,
                          <br /> AJAX Comments, &nbsp; View Count
                        </span>
                      </BodyProjectsDetailExplainTitle>
                      <BodyProjectsDetailExplainTitle
                        style={{ display: "flex", marginTop: "1rem" }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "1",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          GitHub Code
                        </span>

                        <div style={{ display: "flex", flex: "3" }}>
                          <div>
                            <a
                              href="https://github.com/eunyechan/wetube-reloaded"
                              target={"blank"}
                            >
                              github.com/eunyechan/wetube-reloaded
                            </a>
                            &nbsp;
                            <span style={{ fontWeight: "bold" }}>(보기)</span>
                          </div>
                        </div>
                      </BodyProjectsDetailExplainTitle>

                      <BodyProjectsDetailExplainTitle
                        style={{ display: "flex", marginTop: "1rem" }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "1",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          deploy
                        </span>
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "3",
                          }}
                        >
                          <div>
                            <a
                              href="https://wetubecloneapp.herokuapp.com"
                              target={"blank"}
                            >
                              wetubecloneapp.herokuapp.com
                            </a>
                            &nbsp;
                            <span style={{ fontWeight: "bold" }}>(보기)</span>
                          </div>
                          <span>
                            S3 Upload
                            <br />
                            Mongo Atlas
                          </span>
                        </span>
                      </BodyProjectsDetailExplainTitle>

                      <BodyProjectsDetailExplainTitle
                        style={{ display: "flex", marginTop: "1rem" }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "1",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          Front-end
                        </span>

                        <span style={{ display: "flex", flex: "3" }}>
                          Babel, ES6, Express, Pug, Webpack, SCSS ,ESLint ,AJAX
                        </span>
                      </BodyProjectsDetailExplainTitle>

                      <BodyProjectsDetailExplainTitle
                        style={{ display: "flex", marginTop: "1rem" }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "1",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          Back-end
                        </span>

                        <span style={{ display: "flex", flex: "3" }}>
                          NodsJs, MongoDB, Mongoose, Multer
                        </span>
                      </BodyProjectsDetailExplainTitle>
                    </div>
                  </BodyProjectsDetailExplainContainer>
                </BodyProjectsImageDetailExplainContainer>
              </BodyTotalProjectsBoxInline>
            </BodyTotalProjectsBoxInlineContainer>

            {/* selectorProject */}
            <BodyTotalProjectsBoxInlineContainer>
              <BodyProjectsImageDetailTitleBox>
                <BodyProjectsImageDetailTitle>
                  Drag and Drop ToDoList
                </BodyProjectsImageDetailTitle>
              </BodyProjectsImageDetailTitleBox>
              <BodyTotalProjectsBoxInline>
                {/* 프로젝트 이미지 부분 */}
                <BodyProjectsImageContainer>
                  <>
                    <AnimatePresence initial={false} custom={selectordirection}>
                      <BodyProjectsImage
                        key={selectorpage}
                        // src={selectorImages[selectorImageIndex]}
                        custom={selectordirection}
                        variants={ImageSliderVariants}
                        initial="next"
                        animate="center"
                        exit="prev"
                        transition={{
                          opacity: { duration: 0.2 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                          const swipe = swipePower(offset.x, velocity.x);
                          if (swipe < -swipeConfidenceValue) {
                            selectorpagenate(1);
                          } else if (swipe > swipeConfidenceValue) {
                            selectorpagenate(-1);
                          }
                        }}
                      />
                      <BodyProjectsImageTotalNumberBox>
                        <BodyProjectsImageTotalNumber>
                          {/* {selectorImageIndex + 1} / {selectorImages.length} */}
                        </BodyProjectsImageTotalNumber>
                      </BodyProjectsImageTotalNumberBox>
                    </AnimatePresence>
                    <BodyProjectImageNextSlideButton
                      onClick={() => selectorpagenate(1)}
                    >
                      {">"}
                    </BodyProjectImageNextSlideButton>
                    <BodyProjectImagePrevSlideButton
                      onClick={() => selectorpagenate(-1)}
                    >
                      {">"}
                    </BodyProjectImagePrevSlideButton>
                  </>
                </BodyProjectsImageContainer>

                {/* 프로젝트 상세설명 부분 */}
                <BodyProjectsImageDetailExplainContainer>
                  <BodyProjectsDetailExplainContainer>
                    <BodyProjectsDetailExplainTitle
                      style={{
                        flexDirection: "column",
                        flex: "1",
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}>
                        애니메이션을 사용하여 react ToDoList를 만든 홈페이지
                      </span>
                      <br />
                      <br />
                      javascript에서 만든 ToDoList를 React Typescript를 사용하여
                      또 한 번 만들었습니다.
                      <br />
                      평번한 todolist보단 애니메이션을 이용하여 드로그 앤
                      드롭으로 위치를 바꾸거나 삭제를 할 수 있도록 만들었습니다.
                      <span
                        style={{
                          borderBottom: "1px solid rgba(226, 222, 222, 0.6)",
                          paddingBottom: "2.5rem",
                        }}
                      ></span>
                    </BodyProjectsDetailExplainTitle>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        flex: "2",
                      }}
                    >
                      <BodyProjectsDetailExplainTitle
                        style={{ display: "flex", marginTop: "2rem" }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "1",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          구현한 기능
                        </span>
                        <span style={{ display: "flex", flex: "3" }}>
                          react-beautiful-dnd, &nbsp; StyledComponents, &nbsp;
                          Reordering, &nbsp; Multi Borards, &nbsp; react-helmet,
                          react-hook-form, &nbsp; Droppable Snapshot &nbsp;
                          recoil...
                          <br />
                        </span>
                      </BodyProjectsDetailExplainTitle>
                      <BodyProjectsDetailExplainTitle
                        style={{ display: "flex", marginTop: "1rem" }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "1",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          GitHub Code
                        </span>

                        <div style={{ display: "flex", flex: "3" }}>
                          <div>
                            <a
                              href="https://github.com/eunyechan/masterclass-react-selector-app/"
                              target={"blank"}
                            >
                              github.com/eunyechan/react-selector-app
                            </a>
                            <br />
                            <span style={{ fontWeight: "bold" }}>(보기)</span>
                          </div>
                        </div>
                      </BodyProjectsDetailExplainTitle>

                      <BodyProjectsDetailExplainTitle
                        style={{ display: "flex", marginTop: "1rem" }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "1",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          deploy
                        </span>
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "3",
                          }}
                        >
                          <div>
                            <a
                              href="https://eunyechan.github.io/masterclass-react-selector-app"
                              target={"blank"}
                            >
                              eunyechan.github.io/masterclass-react-selector-app
                            </a>
                            <span style={{ fontWeight: "bold" }}>
                              <br />
                              (보기)
                            </span>
                          </div>
                        </span>
                      </BodyProjectsDetailExplainTitle>

                      <BodyProjectsDetailExplainTitle
                        style={{ display: "flex", marginTop: "1rem" }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "1",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          Front-end
                        </span>

                        <span style={{ display: "flex", flex: "3" }}>
                          React, TypeScript, Localstorage
                        </span>
                      </BodyProjectsDetailExplainTitle>
                    </div>
                  </BodyProjectsDetailExplainContainer>
                </BodyProjectsImageDetailExplainContainer>
              </BodyTotalProjectsBoxInline>
            </BodyTotalProjectsBoxInlineContainer>

            {/* coinProject */}
            <BodyTotalProjectsBoxInlineContainer>
              <BodyProjectsImageDetailTitleBox>
                <BodyProjectsImageDetailTitle>
                  Coin List
                </BodyProjectsImageDetailTitle>
              </BodyProjectsImageDetailTitleBox>
              <BodyTotalProjectsBoxInline>
                {/* 프로젝트 이미지 부분 */}
                <BodyProjectsImageContainer>
                  <>
                    <AnimatePresence initial={false} custom={coindirection}>
                      <BodyProjectsImage
                        key={coinpage}
                        // src={coinImages[coinImageIndex]}
                        custom={coindirection}
                        variants={ImageSliderVariants}
                        initial="next"
                        animate="center"
                        exit="prev"
                        transition={{
                          opacity: { duration: 0.2 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                          const swipe = swipePower(offset.x, velocity.x);
                          if (swipe < -swipeConfidenceValue) {
                            coinpagenate(1);
                          } else if (swipe > swipeConfidenceValue) {
                            coinpagenate(-1);
                          }
                        }}
                      />
                      <BodyProjectsImageTotalNumberBox>
                        <BodyProjectsImageTotalNumber>
                          {/* {coinImageIndex + 1} / {coinImages.length} */}
                        </BodyProjectsImageTotalNumber>
                      </BodyProjectsImageTotalNumberBox>
                    </AnimatePresence>
                    <BodyProjectImageNextSlideButton
                      onClick={() => coinpagenate(1)}
                    >
                      {">"}
                    </BodyProjectImageNextSlideButton>
                    <BodyProjectImagePrevSlideButton
                      onClick={() => coinpagenate(-1)}
                    >
                      {">"}
                    </BodyProjectImagePrevSlideButton>
                  </>
                </BodyProjectsImageContainer>

                {/* 프로젝트 상세설명 부분 */}
                <BodyProjectsImageDetailExplainContainer>
                  <BodyProjectsDetailExplainContainer>
                    <BodyProjectsDetailExplainTitle
                      style={{
                        flexDirection: "column",
                        flex: "1",
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}>
                        Coin 리스트를 보여주는 홈페이지
                      </span>
                      <br />
                      <br />
                      코인에 대한 정보를 보여주는 홈페이지를 만들었습니다.
                      코인에 관한 api를 가져와서 이름이랑 가격을 보여줍니다.
                      차트로도 볼 수 있도록 만들었습니다. 토글 버튼을 이용하여
                      다크 모드를 설정할 수 있습니다.
                      <br />
                      <span
                        style={{
                          borderBottom: "1px solid rgba(226, 222, 222, 0.6)",
                          paddingBottom: "2.5rem",
                        }}
                      ></span>
                    </BodyProjectsDetailExplainTitle>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        flex: "2",
                      }}
                    >
                      <BodyProjectsDetailExplainTitle
                        style={{ display: "flex", marginTop: "2rem" }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "1",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          구현한 기능
                        </span>
                        <span style={{ display: "flex", flex: "3" }}>
                          Route States, &nbsp; Apex Charts, &nbsp;
                          react-router-dom, &nbsp; StyledComponents, &nbsp;
                          React Helmet, &nbsp; react-query, &nbsp; recoil{" "}
                        </span>
                      </BodyProjectsDetailExplainTitle>
                      <BodyProjectsDetailExplainTitle
                        style={{ display: "flex", marginTop: "1rem" }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "1",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          GitHub Code
                        </span>

                        <div style={{ display: "flex", flex: "3" }}>
                          <div>
                            <a
                              href="https://github.com/eunyechan/masterclass-react-coin-app"
                              target={"blank"}
                            >
                              github.com/eunyechan/masterclass-react-coin-app
                            </a>
                            &nbsp;
                            <span style={{ fontWeight: "bold" }}>(보기)</span>
                          </div>
                        </div>
                      </BodyProjectsDetailExplainTitle>

                      <BodyProjectsDetailExplainTitle
                        style={{ display: "flex", marginTop: "1rem" }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "1",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          deploy
                        </span>
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "3",
                          }}
                        >
                          <div>
                            <a
                              href="https://eunyechan.github.io/masterclass-react-coin-app"
                              target={"blank"}
                            >
                              eunyechan.github.io/masterclass-react-coin-app
                            </a>
                            &nbsp;
                            <span style={{ fontWeight: "bold" }}>(보기)</span>
                          </div>
                        </span>
                      </BodyProjectsDetailExplainTitle>

                      <BodyProjectsDetailExplainTitle
                        style={{ display: "flex", marginTop: "1rem" }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "1",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          Front-end
                        </span>

                        <span style={{ display: "flex", flex: "3" }}>
                          React, TypeScript
                        </span>
                      </BodyProjectsDetailExplainTitle>
                    </div>
                  </BodyProjectsDetailExplainContainer>
                </BodyProjectsImageDetailExplainContainer>
              </BodyTotalProjectsBoxInline>
            </BodyTotalProjectsBoxInlineContainer>

            {/* netfilxProject */}
            <BodyTotalProjectsBoxInlineContainer>
              <BodyProjectsImageDetailTitleBox>
                <BodyProjectsImageDetailTitle>
                  NetFilx Clone
                </BodyProjectsImageDetailTitle>
              </BodyProjectsImageDetailTitleBox>
              <BodyTotalProjectsBoxInline>
                {/* 프로젝트 이미지 부분 */}
                <BodyProjectsImageContainer>
                  <>
                    <AnimatePresence initial={false} custom={netfilxdirection}>
                      <BodyProjectsImage
                        key={netfilxpage}
                        // src={netfilxImages[netfilxImageIndex]}
                        custom={netfilxdirection}
                        variants={ImageSliderVariants}
                        initial="next"
                        animate="center"
                        exit="prev"
                        transition={{
                          opacity: { duration: 0.2 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                          const swipe = swipePower(offset.x, velocity.x);
                          if (swipe < -swipeConfidenceValue) {
                            netfilxpagenate(1);
                          } else if (swipe > swipeConfidenceValue) {
                            netfilxpagenate(-1);
                          }
                        }}
                      />
                      <BodyProjectsImageTotalNumberBox>
                        <BodyProjectsImageTotalNumber>
                          {/* {netfilxImageIndex + 1} / {netfilxImages.length} */}
                        </BodyProjectsImageTotalNumber>
                      </BodyProjectsImageTotalNumberBox>
                    </AnimatePresence>
                    <BodyProjectImageNextSlideButton
                      onClick={() => netfilxpagenate(1)}
                    >
                      {">"}
                    </BodyProjectImageNextSlideButton>
                    <BodyProjectImagePrevSlideButton
                      onClick={() => netfilxpagenate(-1)}
                    >
                      {">"}
                    </BodyProjectImagePrevSlideButton>
                  </>
                </BodyProjectsImageContainer>

                {/* 프로젝트 상세설명 부분 */}
                <BodyProjectsImageDetailExplainContainer>
                  <BodyProjectsDetailExplainContainer>
                    <BodyProjectsDetailExplainTitle
                      style={{
                        flexDirection: "column",
                        flex: "1",
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}>
                        넷플릭스를 클론 한 홈페이지
                      </span>
                      <br />
                      <br />
                      영화 또는 tv 목록을 보여주는 홈페이지 입니다. 인기 있는
                      영화나 tv를 보여주고 이미지를 클릭하면 그 영화에 대한
                      상세한 정보도 보이도록 만들었습니다 또한 검색 기능을
                      이용하여 영화 또는 tv 정보를 볼 수 있습니다.
                      <br />
                      <span
                        style={{
                          borderBottom: "1px solid rgba(226, 222, 222, 0.6)",
                          paddingBottom: "2.5rem",
                        }}
                      ></span>
                    </BodyProjectsDetailExplainTitle>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        flex: "2",
                      }}
                    >
                      <BodyProjectsDetailExplainTitle
                        style={{ display: "flex", marginTop: "2rem" }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "1",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          구현한 기능
                        </span>
                        <span style={{ display: "flex", flex: "3" }}>
                          Route States, &nbsp; react-dom, &nbsp;
                          react-router-dom, &nbsp; StyledComponents, &nbsp;
                          React Helmet, &nbsp; react-query, &nbsp; Animations,
                          &nbsp; Sliders, &nbsp; Modals...
                        </span>
                      </BodyProjectsDetailExplainTitle>
                      <BodyProjectsDetailExplainTitle
                        style={{ display: "flex", marginTop: "1rem" }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "1",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          GitHub Code
                        </span>

                        <div style={{ display: "flex", flex: "3" }}>
                          <div>
                            <a
                              // style={{ wordBreak: "break-all" }}
                              href="https://github.com/eunyechan/masterclass-react-notflix"
                              target={"blank"}
                            >
                              github.com/eunyechan/masterclass-react-notflix
                            </a>
                            &nbsp;
                            <span style={{ fontWeight: "bold" }}>(보기)</span>
                          </div>
                        </div>
                      </BodyProjectsDetailExplainTitle>

                      <BodyProjectsDetailExplainTitle
                        style={{ display: "flex", marginTop: "1rem" }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "1",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          deploy
                        </span>
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "3",
                          }}
                        >
                          <div>
                            <a
                              href="https://eunyechan.github.io/masterclass-react-notflix"
                              target={"blank"}
                            >
                              eunyechan.github.io/masterclass-react-notflix
                            </a>
                            <br />
                            <span style={{ fontWeight: "bold" }}>(보기)</span>
                          </div>
                        </span>
                      </BodyProjectsDetailExplainTitle>

                      <BodyProjectsDetailExplainTitle
                        style={{ display: "flex", marginTop: "1rem" }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "1",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          Front-end
                        </span>

                        <span style={{ display: "flex", flex: "3" }}>
                          React, TypeScript
                        </span>
                      </BodyProjectsDetailExplainTitle>
                    </div>
                  </BodyProjectsDetailExplainContainer>
                </BodyProjectsImageDetailExplainContainer>
              </BodyTotalProjectsBoxInline>
            </BodyTotalProjectsBoxInlineContainer>
          </BodyTotalProjectsBox>
        </BodyprojectsContainer>
      </BodyContainerBox>
      <FooterContainer>
        <a href="https://github.com/eunyechan" target={"blank"}>
          <FooterContainerImg />
        </a>
        <div>
          <FooterTitle>© 2022 Yechan's PortFolio</FooterTitle>
        </div>
      </FooterContainer>
    </Container>
  );
}

export default Home;
