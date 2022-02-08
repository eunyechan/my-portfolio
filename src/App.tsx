import styled, { keyframes } from "styled-components";
import {
  motion,
  useAnimation,
  useViewportScroll,
  AnimatePresence,
} from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { images } from "./data/imageData";
import { wrap } from "popmotion";
import backimg from "./images/imagesLogo/backgroundimg.png";
import profile from "./images/imagesLogo/profileimg.jpg";
import csslogo from "./images/imagesLogo/css_logo.png";
import jslogo from "./images/imagesLogo/js_logo.png";
import htmllogo from "./images/imagesLogo/html_logo.png";
import reactlogo from "./images/imagesLogo/react_logo.png";
import typescriptlogo from "./images/imagesLogo/ts_logo.png";
import gitlogo from "./images/imagesLogo/git_logo.png";
import githublogo from "./images/imagesLogo/github_logo.png";

const Container = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
`;

const ContainerInline = styled.div`
  width: 100%;
  height: 100%;
`;

const ContainerBackImg = styled.div`
  position: relative;
  background-image: url(${backimg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`;

const ContainerImgOverlay = styled.div`
  padding: 0;
  margin: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
`;

const HeaderNav = styled(motion.nav)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 14px;
  color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  z-index: 99;
  background-color: transparent;
`;

const HeaderUl = styled(motion.ul)`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const HeaderList = styled.li`
  margin: 20px 50px;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
`;

const MainContainer = styled.div`
  padding-top: 9rem;
`;

const wavaAnimation = keyframes`
  from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
`;

const MainWaveBox = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 400px;
  border-radius: 5px;
  box-shadow: 0 2px 30px rgba(black, 0.2);
  background: lighten(#f0f4c3, 10%);
  position: relative;
  transform: translate3d(0, 0, 0);
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(#e8a, 1),
      rgba(#def, 0) 80%,
      rgba(white, 0.5)
    );
    transform: translate3d(0, 0, 0);
  }
`;

const MainWaveTop = styled.div`
  opacity: 0.4;
  position: absolute;
  top: 3%;
  left: 20%;
  background: #7882a4;
  width: 450px;
  height: 450px;
  margin-left: -250px;
  margin-bottom: -250px;
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: ${wavaAnimation} 3000ms infinite linear;
`;

const MainWaveMiddle = styled.div`
  opacity: 0.4;
  position: absolute;
  top: 3%;
  left: 20%;
  width: 450px;
  height: 450px;
  margin-left: -250px;
  margin-bottom: -250px;
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: ${wavaAnimation} 3000ms infinite linear;
  animation: ${wavaAnimation} 7000ms infinite linear;
  opacity: 0.1;
  background: #c0a080;
`;

const MainWaveBottom = styled.div`
  opacity: 0.4;
  position: absolute;
  top: 3%;
  left: 20%;
  background: #d1d1d1;
  width: 450px;
  height: 450px;
  margin-left: -250px;
  margin-bottom: -250px;
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: ${wavaAnimation} 3000ms infinite linear;
  animation: ${wavaAnimation} 5000ms infinite linear;
`;

const MainTitleBox = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MainTitleSpanTop = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  z-index: 1;
  text-transform: uppercase;
  color: black;
  font-size: 24px;
  font-weight: bolder;
  font-family: "Playfair Display", serif;
  letter-spacing: 0.4em;
  font-size: 24px;
  text-shadow: 0 1px 0 rgba(black, 0.1);
  text-indent: 0.3em;
`;

const MainTiTleSpan = styled(motion.span)`
  position: relative;
`;

const MainTitleSpanBottom = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  z-index: 1;
  text-transform: uppercase;
  color: black;
  font-size: 24px;
  font-weight: bolder;
  font-family: "Playfair Display", serif;
  letter-spacing: 0.4em;
  font-size: 24px;
  text-shadow: 0 1px 0 rgba(black, 0.1);
  text-indent: 0.3em;
`;

const MainIntroTitleBox = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MainIntroTitle = styled.h2`
  color: rgba(255, 255, 255, 0.7);
  font-size: 50px;
  font-weight: bolder;
  text-align: center;
  margin: 10px;
`;

const MainIntroSubTitle = styled.h3`
  color: rgba(255, 255, 255, 0.7);
  font-size: 40px;
  text-align: center;
  font-weight: bolder;
  margin-bottom: 20px;
`;

const MainIntroDetailTitle = styled.h4`
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
`;

// bodyHome 부분
const BodyContainerBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(33, 50, 94, 1);
  position: relative;
`;

const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const BodyContainerArrow = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 100px;
  font-weight: bold;
`;

const BodyContainerAboutMeBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 4rem;
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
  margin-top: 2rem;
  margin-bottom: 2rem;
  letter-spacing: 5px;
  z-index: 1;
`;

const BodyContainerAboutMeTitle = styled.h2`
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

const BodyContainerAboutMe = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: white;
`;

const BodyContainerAboutMeImgBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100%;
`;

const BodyContainerAboutMeImg = styled(motion.div)`
  width: 20vw;
  height: 40vh;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${profile});
  cursor: pointer;
`;

const BodyContainerAboutMeUlBox = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BodyContainerAboutMeUlTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 30px;
`;

const BodyContainerAboutMeUl = styled.ul`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 600;
  list-style-type: circle;
`;

const BodyContainerAboutMeList = styled.li`
  padding: 10px;
`;

// Body Project 부분

const BodySkilsprojectContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const BodyProjectsMenuContainer = styled(motion.div)`
  display: flex;
  overflow: hidden;
  background-color: rgba(62, 73, 122, 0.6);
`;

const BodyProjectsMenuBigInlineTitle = styled(motion.span)`
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
  -webkit-box-reflect: below -7px -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0.4)
    );
  line-height: normal;
  background-color: white;
  /* border-radius: 99px; */
`;

const BodyProjectsMenuBiglineContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 50px;
`;

const BodyProjectsMenuBigInlineContainerBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* grid-gap: 5px; */
`;

const BodyProjectsMenuBigInlineContainerImageDetailTitleBox = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  padding: 30px;
`;

const BodyProjectsMenuBigInlineContainerImageDetailBigTitleBox = styled.div`
  border: 5px solid black;
  width: 100%;
  display: flex;
  padding: 8px;
  margin-top: 1rem;
  text-align: center;
  border-radius: 99px;
  background-color: #f1eaea;
`;

const BodyProjectsMenuBigInlineContainerImageDetailBigTitle = styled.span`
  width: 100%;
  height: 100%;
  font-size: 25px;
  font-weight: bold;
  color: black;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;

const BodyProjectsMenuBigInlineContainerImageDetailiSmallTitleBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const BodyProjectsMenuBigInlineContainerImageDetailiSmallTitle = styled.span`
  font-size: 16px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  display: flex;

  a {
    &:hover {
      color: #3f3fec;
    }
  }
`;

const BodyProjectsMenuBigInlineContainerImageBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #eee;
`;

const BodyProjectsMenuBigInlineContainerImage = styled(motion.img)`
  max-width: 100vw;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const BodyProjectsMenuBigInlineContainerImageTotalNumberBox = styled.div`
  width: 100%;
  height: 2rem;
  z-index: 1;
  display: flex;
  position: absolute;
  justify-content: center;
  bottom: 4rem;
`;

const BodyProjectsMenuBigInlineContainerImageTotalNumber = styled.span`
  font-size: 16px;
  display: flex;
  color: white;
`;

const BodySkilsProjectImageSliderRightButton = styled(motion.button)`
  top: calc(50% - 20px);
  position: absolute;
  background: white;
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
`;

const BodySkilsProjectImageSliderLeftButton = styled(motion.button)`
  top: calc(50% - 20px);
  position: absolute;
  background: white;
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
  left: 10px;
  transform: scale(-1);
`;

const BodyProjectsMenuSmallInlineTitle = styled(motion.span)`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  font-size: 22px;
  margin-bottom: 5rem;
`;

const BodyProjectsMenuSmallInlineContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #313552;
  letter-spacing: 0.3rem;
`;

const BodySkilsMenuContainerButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid black;
`;

const BodySkilsMenuContainerButtonInlineBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BodySkilsMenuContainerButton = styled(motion.button)`
  border-radius: 99px;
  position: absolute;
  width: 50px;
  height: 50px;
  z-index: 1;
`;

// Body Skil 부분

const BodySkilsContainerInlineBox = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  background-color: rgba(241, 208, 10, 0.6);
`;

const BodySkilsContainerInlineIconBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 50px;
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
`;

const BodySkilsContainerRightLeftIconBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  grid-gap: 20px;
`;

const BodySkilsContainerInlineLeftIconBox = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
`;

const BodySkilsContainerInlineRightIconBox = styled.div`
  display: grid;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
`;

const BodySkilsContainerInlineLeftIconBoxTopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BodySkilsContainerInlineLeftIconBoxBottomDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const BodySkilsContainerInlineRightIconBoxTopDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

const BodySkilsContainerInlineTopHtmlIcon = styled(motion.img)`
  background-image: url(${htmllogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 130px;
  height: 130px;
  border: 3px solid black;
  border-radius: 10px;
  padding: 4rem;
  background-color: #f5f5f5;
`;

const BodySkilsContainerInlineTopCssIcon = styled(motion.img)`
  background-image: url(${csslogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 130px;
  height: 130px;
  border: 3px solid black;
  border-radius: 10px;
  padding: 4rem;
  background-color: #f5f5f5;
`;

const BodySkilsContainerInlineTopJsIcon = styled(motion.img)`
  background-image: url(${jslogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 130px;
  height: 130px;
  border: 3px solid black;
  border-radius: 10px;
  padding: 4rem;
  background-color: #f5f5f5;
`;

const BodySkilsContainerSmallInlineBox = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #313552;
  letter-spacing: 0.3rem;
`;

const BodySkilsContainerSmallInlineBoxTitle = styled.span`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  font-size: 22px;
  margin-bottom: 5rem;
`;

const BodySkilsContainerInlineBottomReactIcon = styled(motion.img)`
  background-image: url(${reactlogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 130px;
  height: 130px;
  border: 3px solid black;
  border-radius: 10px;
  padding: 4rem;
  background-color: #f5f5f5;
`;

const BodySkilsContainerInlineBottomTypeScriptIcon = styled(motion.img)`
  background: url(${typescriptlogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 130px;
  height: 130px;
  border: 3px solid black;
  border-radius: 10px;
  padding: 4rem;
  background-color: #f5f5f5;
`;

const BodySkilsContainerInlineGittIcon = styled(motion.img)`
  background: url(${gitlogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 130px;
  height: 130px;
  border: 3px solid black;
  border-radius: 10px;
  padding: 4rem;
  background-color: #f5f5f5;
`;

const BodySkilsContainerInlineGithubIcon = styled(motion.img)`
  background: url(${githublogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 130px;
  height: 130px;
  border: 3px solid black;
  border-radius: 10px;
  padding: 4rem;
  background-color: #f5f5f5;
`;

const HeaderNavVariants = {
  top: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  scroll: {
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
};

const HeaderNavUlVariants = {
  top: {
    color: "rgba(255, 255, 255, 1)",
    transition: { duration: 0.5 },
  },
  scroll: {
    color: "rgba(255, 255, 255, 1)",
    transition: { duration: 0.5 },
  },
};

const WaveTitleVariants = {
  offscreen: {
    x: "10vw",
    opacity: 0,
    transition: { duration: 0.5 },
  },
  onscreen: {
    x: "-39vw",
    y: "3vh",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const IntroTitleVariants = {
  endscreen: {
    x: "30vw",
    y: "-10vh",
    opacity: 0,
    transition: { duration: 0.5 },
  },
  startscreen: {
    x: "5vw",
    y: "-10vh",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const BodyContainerAboutMeVariants = {
  aboutmeboxanimationvisible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  aboutmeboxanimationinvisible: {
    x: 800,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const BodyContainerAboutMeImgVariants = {
  aboutmeimganimationvisible: {
    scale: 1,
    transition: { duration: 0.5 },
    delay: 1,
    opacity: 1,
  },
  aboutmeimganimationinvisible: {
    scale: 0,
    transition: { duration: 0.5 },
    opacity: 0,
  },
};

const BodyContainerAboutmeArrowVariants = {
  aboutmearrowvisible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  aboutmearrowinvisible: {
    x: -800,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// project Variants
const BodyProjectsMenuContainerVariants = {
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

const BodyProjectsMenuInlineBoxVariants = {
  projectmenuopenbox: {
    opacity: 1,
    display: "flex",
    transition: {
      duration: 0.5,
      type: "tween",
      delay: 0.3,
    },
  },
  projectmenuclosebox: {
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
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction: number) => {
    return {
      // zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
    };
  },
};

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [[page, direction], setPage] = useState([0, 0]);

  const navAnimation = useAnimation();
  const { scrollY } = useViewportScroll();

  const swipeConfidenceValue = 10000;

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
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
      if (scrollY.get() > 400) {
        navAnimation.start("offscreen");
        navAnimation.start("endscreen");
      } else {
        navAnimation.start("onscreen");
        navAnimation.start("startscreen");
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

  // {
  //   console.log(images[0][1]);
  // }
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <Container>
      <ContainerInline>
        <ContainerBackImg>
          <ContainerImgOverlay />
          <HeaderNav
            variants={HeaderNavVariants}
            animate={navAnimation}
            initial={"top"}
          >
            <HeaderUl variants={HeaderNavUlVariants}>
              <HeaderList>Home</HeaderList>
              <HeaderList>About Me</HeaderList>
              <HeaderList>Skils</HeaderList>
              <HeaderList>Project</HeaderList>
              <HeaderList>contact</HeaderList>
            </HeaderUl>
          </HeaderNav>
          <MainContainer>
            <MainWaveBox>
              <MainWaveTop></MainWaveTop>
              <MainWaveMiddle></MainWaveMiddle>
              <MainWaveBottom></MainWaveBottom>
              <MainTitleBox
                variants={WaveTitleVariants}
                animate={navAnimation}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
              >
                <MainTitleSpanTop>
                  <MainTiTleSpan>YECHAN'S</MainTiTleSpan>
                </MainTitleSpanTop>
                <MainTitleSpanBottom>
                  <MainTiTleSpan>PORTFOLIO</MainTiTleSpan>
                </MainTitleSpanBottom>
              </MainTitleBox>
            </MainWaveBox>
            <MainIntroTitleBox
              variants={IntroTitleVariants}
              animate={navAnimation}
              initial="endscreen"
              whileInView="startscreen"
              viewport={{ once: true, amount: 0 }}
            >
              <MainIntroTitle> - 은예찬 - </MainIntroTitle>
              <MainIntroSubTitle>웹 프론트엔드 개발자</MainIntroSubTitle>
              <br />
              <hr style={{ opacity: 0.4 }} />
              <MainIntroDetailTitle>
                좋은 개발자가 되기위해 열심히 공부를 합니다.
              </MainIntroDetailTitle>
              <MainIntroDetailTitle>
                끈기를 가지고 안되는것에 대해 의문을 가지고 파고드는 성격이
                장점입니다.
              </MainIntroDetailTitle>
            </MainIntroTitleBox>
          </MainContainer>
        </ContainerBackImg>
      </ContainerInline>

      {/* **********************body AboutMe 부분********************* */}

      <BodyContainerBox>
        <BodyContainer>
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
              <BodyContainerAboutMeImgBox
                variants={BodyContainerAboutMeImgVariants}
                animate={navAnimation}
                initial="aboutmeimganimationinvisible"
                whileInView="aboutmeimganimationvisible"
                viewport={{ once: true, amount: 0 }}
              >
                <BodyContainerAboutMeImg whileHover={{ scale: 1.2 }} />
              </BodyContainerAboutMeImgBox>

              <BodyContainerAboutMeUlBox>
                <BodyContainerAboutMeUlTitle>
                  😀프론트엔드 개발자가 되고싶습니다!
                </BodyContainerAboutMeUlTitle>
                <BodyContainerAboutMeUl>
                  <BodyContainerAboutMeList>
                    군대에서 우연히 책으로 접하게 된 코딩 해보고싶다는 생각이
                    들었습니다. <br />
                    제대 후 맨땅에 해딩으로 학원에 가서 공부를 배웠습니다.
                  </BodyContainerAboutMeList>
                  <BodyContainerAboutMeList>
                    학원을 다니고 나서도 많이 부족하다고 느껴 1년동안 인강으로
                    공부를 하며 <br /> 프론트개발자를 준비했습니다
                  </BodyContainerAboutMeList>
                  <BodyContainerAboutMeList>
                    프론트를 열심히 배우고 많은 것들이 익숙해지고 이해가 되면
                    나중에는
                    <br />
                    백엔드도 도전 해보고 싶습니다.
                  </BodyContainerAboutMeList>
                  <BodyContainerAboutMeList>
                    끊임없이 무언가를 배우고 공부하는 개발자가 되고싶습니다.
                  </BodyContainerAboutMeList>
                </BodyContainerAboutMeUl>
              </BodyContainerAboutMeUlBox>
            </BodyContainerAboutMe>
          </BodyContainerAboutMeBox>
        </BodyContainer>

        {/* **********************body Skils 부분********************* */}

        <BodySkilsprojectContainer>
          {/* project부분 */}
          <BodyProjectsMenuContainer
            variants={BodyProjectsMenuContainerVariants}
            animate={isOpen ? "projectopenmenu" : "projectclosemenu"}
            initial="projectopenmenu"
          >
            <BodyProjectsMenuBiglineContainer
              variants={BodyProjectsMenuInlineBoxVariants}
              animate={isOpen ? "projectmenuclosebox" : "projectmenuopenbox"}
            >
              <BodyProjectsMenuBigInlineTitle>
                Project
              </BodyProjectsMenuBigInlineTitle>
              <BodyProjectsMenuBigInlineContainerBox>
                {/* 프로젝트 상세설명 부분 */}
                <BodyProjectsMenuBigInlineContainerImageDetailTitleBox>
                  <BodyProjectsMenuBigInlineContainerImageDetailBigTitleBox>
                    <BodyProjectsMenuBigInlineContainerImageDetailBigTitle>
                      ToDoList
                    </BodyProjectsMenuBigInlineContainerImageDetailBigTitle>
                  </BodyProjectsMenuBigInlineContainerImageDetailBigTitleBox>

                  <BodyProjectsMenuBigInlineContainerImageDetailiSmallTitleBox>
                    <BodyProjectsMenuBigInlineContainerImageDetailiSmallTitle
                      style={{
                        flexDirection: "column",

                        flex: "1",
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}>
                        오늘 할 일을 적어서 기록해두는 홈페이지
                      </span>
                      <br />
                      <br />
                      오늘 할 일을 다했으면 체크표시 버튼을 눌러 완료 가능
                      삭제버튼을 눌러서 삭제가 가능하도록 만들었습니다.
                      <br />
                      <span
                        style={{
                          borderBottom: "1px solid rgba(226, 222, 222, 0.6)",
                          paddingBottom: "2.5rem",
                        }}
                      >
                        또한 오늘의 날짜표시 시간표시 그 지역의 날씨를 나오게
                        했습니다.
                      </span>
                    </BodyProjectsMenuBigInlineContainerImageDetailiSmallTitle>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        flex: "2",
                      }}
                    >
                      <BodyProjectsMenuBigInlineContainerImageDetailiSmallTitle
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
                          Github Pages
                        </span>
                      </BodyProjectsMenuBigInlineContainerImageDetailiSmallTitle>
                      <BodyProjectsMenuBigInlineContainerImageDetailiSmallTitle
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

                        <span style={{ display: "flex", flex: "3" }}>
                          <a href="https://github.com/eunyechan/vanillaJS_app">
                            github.com/eunyechan/vanillaJS_app
                          </a>
                        </span>
                      </BodyProjectsMenuBigInlineContainerImageDetailiSmallTitle>

                      <BodyProjectsMenuBigInlineContainerImageDetailiSmallTitle
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

                        <span style={{ display: "flex", flex: "3" }}>
                          <a href="https://eunyechan.github.io/vaillajs_app.github.io/">
                            eunyechan.github.io/vaillajs_app.github.io/
                          </a>
                        </span>
                      </BodyProjectsMenuBigInlineContainerImageDetailiSmallTitle>

                      <BodyProjectsMenuBigInlineContainerImageDetailiSmallTitle
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
                      </BodyProjectsMenuBigInlineContainerImageDetailiSmallTitle>
                    </div>
                  </BodyProjectsMenuBigInlineContainerImageDetailiSmallTitleBox>
                </BodyProjectsMenuBigInlineContainerImageDetailTitleBox>

                {/* 프로젝트 이미지 부분 */}
                <BodyProjectsMenuBigInlineContainerImageBox>
                  <>
                    <AnimatePresence initial={false} custom={direction}>
                      <BodyProjectsMenuBigInlineContainerImage
                        key={page}
                        src={images[imageIndex]}
                        custom={direction}
                        variants={ImageSliderVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
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
                      <BodyProjectsMenuBigInlineContainerImageTotalNumberBox>
                        <BodyProjectsMenuBigInlineContainerImageTotalNumber>
                          {imageIndex + 1} / {images.length}
                        </BodyProjectsMenuBigInlineContainerImageTotalNumber>
                      </BodyProjectsMenuBigInlineContainerImageTotalNumberBox>
                    </AnimatePresence>
                    <BodySkilsProjectImageSliderRightButton
                      onClick={() => paginate(1)}
                    >
                      {"‣"}
                    </BodySkilsProjectImageSliderRightButton>
                    <BodySkilsProjectImageSliderLeftButton
                      onClick={() => paginate(-1)}
                    >
                      {"‣"}
                    </BodySkilsProjectImageSliderLeftButton>
                  </>
                </BodyProjectsMenuBigInlineContainerImageBox>
              </BodyProjectsMenuBigInlineContainerBox>
            </BodyProjectsMenuBiglineContainer>

            {/* Project 줄어들었을 때  */}
            <BodyProjectsMenuSmallInlineContainer
              variants={BodyProjectsMenuInlineBoxVariants}
              animate={isOpen ? "projectmenuopenbox" : "projectmenuclosebox"}
            >
              <BodyProjectsMenuSmallInlineTitle>
                Projects List
              </BodyProjectsMenuSmallInlineTitle>
            </BodyProjectsMenuSmallInlineContainer>
          </BodyProjectsMenuContainer>

          {/* 버튼 부분 */}
          <BodySkilsMenuContainerButtonBox>
            <BodySkilsMenuContainerButtonInlineBox>
              <BodySkilsMenuContainerButton
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              ></BodySkilsMenuContainerButton>
            </BodySkilsMenuContainerButtonInlineBox>
          </BodySkilsMenuContainerButtonBox>

          {/* skils부분 늘어났을 때 */}
          <BodySkilsContainerInlineBox
            variants={BodySkilsContainerVariants}
            animate={isOpen ? "skilsopenmenu" : "skilsclosemenu"}
            initial="skilsclosemenu"
          >
            <BodySkilsContainerInlineIconBox
              variants={BodySkilsMenuInlineBoxVariants}
              animate={isOpen ? "skilmenuopenbox" : "skilmenuclosebox"}
            >
              <BodySkilsContainerInlineTitle>
                Skils
              </BodySkilsContainerInlineTitle>
              <BodySkilsContainerRightLeftIconBox>
                <BodySkilsContainerInlineLeftIconBox>
                  <span
                    style={{
                      display: "flex",
                      textAlign: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid rgba(107, 102, 102, 0.3)",
                      fontSize: "26px",
                      fontWeight: "bold",
                      height: "15vh",
                      color: "#D9534F",
                    }}
                  >
                    Front-end
                  </span>
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
                    <BodySkilsContainerInlineBottomReactIcon
                      whileHover={{ y: "-20px" }}
                    />
                    <BodySkilsContainerInlineBottomTypeScriptIcon
                      whileHover={{ y: "-20px" }}
                    />
                  </BodySkilsContainerInlineLeftIconBoxBottomDiv>
                </BodySkilsContainerInlineLeftIconBox>

                <BodySkilsContainerInlineRightIconBox>
                  <span
                    style={{
                      display: "flex",
                      textAlign: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid rgba(107, 102, 102, 0.3)",
                      fontSize: "26px",
                      fontWeight: "bold",
                      height: "15vh",
                      color: "#D9534F",
                    }}
                  >
                    Version Control
                  </span>

                  <BodySkilsContainerInlineRightIconBoxTopDiv>
                    <BodySkilsContainerInlineGittIcon
                      whileHover={{ y: "-20px" }}
                    />
                    <BodySkilsContainerInlineGithubIcon
                      whileHover={{ y: "-20px" }}
                    />
                  </BodySkilsContainerInlineRightIconBoxTopDiv>
                </BodySkilsContainerInlineRightIconBox>
              </BodySkilsContainerRightLeftIconBox>
            </BodySkilsContainerInlineIconBox>

            {/* 줄어들었을 때 */}
            <BodySkilsContainerSmallInlineBox
              variants={BodySkilsMenuInlineBoxVariants}
              animate={isOpen ? "skilmenuclosebox" : "skilmenuopenbox"}
            >
              <BodySkilsContainerSmallInlineBoxTitle>
                Skil List
              </BodySkilsContainerSmallInlineBoxTitle>
            </BodySkilsContainerSmallInlineBox>
          </BodySkilsContainerInlineBox>
        </BodySkilsprojectContainer>
      </BodyContainerBox>
    </Container>
  );
}

export default Home;
