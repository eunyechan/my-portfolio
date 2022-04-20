import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Project from "../Components/Projects";
import styled, { keyframes } from "styled-components";

import {
  motion,
  useAnimation,
  useViewportScroll,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import githubimage from "../images/imagesLogo/githubImage.png";
import { faArrowUp, faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  /* background-color: rgba(0, 0, 0, 0.9); */
`;

const ContainerInline = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
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
  display: none;
  opacity: 0;
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
  overflow: hidden;
  @media screen and (max-width: 600px) {
    display: flex;
    overflow: hidden;
    justify-content: start;
    align-items: flex-start;
    padding: 1rem;
    ckdrop-filter: blur(5px);
  }
`;

const ColumnHeaderNav = styled(motion.div)`
  position: fixed;
  display: none;
  /* width: 40vw; */
  padding: 20px 0 20px 20px;
  opacity: 0;
  align-items: center;
  border: 2px solid white;
  align-items: center;
  font-size: 14px;
  border: 1px solid white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  backdrop-filter: blur(5px);
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.4);
  transform: rotate(90deg) translateX(40%) translateY(190%);
  @media screen and (max-width: 600px) {
    display: flex;
    overflow: hidden;
    justify-content: start;
    align-items: flex-start;
    padding: 1rem;
    ckdrop-filter: blur(5px);
  }
`;

const ColumnHomeButtonBox = styled.div`
  height: 100%;
  margin-right: 10px;
`;

const ColumnHomeButton = styled.div`
  background-color: transparent;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: white;
  padding: 10px;
  border: 2px solid white;
  border-radius: 20px;
  transform: rotate(-90deg);
`;

const ColumnHeaderUl = styled.ul<IInerScreen>`
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

const ColumnHeaderListInputButton = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transform: rotate(-90deg);
  padding: 1em;

  span {
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    padding-right: 2px;
    text-align: center;
  }

  .hexagon-wrapper {
    display: flex;
    margin: auto;
    text-align: initial;
    width: 70px;
    height: 70px;
    cursor: pointer;
  }

  .hexagon {
    position: relative;
    width: 46%;
    height: 80%;
    margin: auto;
    color: white;
    background: linear-gradient(-180deg, white, #f3c2cb);
    display: flex;
    align-content: center;
    justify-content: center;
    transition: 0.5s;
  }

  .hexagon:before,
  .hexagon:after {
    position: absolute;
    content: "";
    background: inherit;
    height: 100%;
    width: 100%;
    border-radius: 0;
    transition: 0.5s;
    transform-origin: center;
  }
  .hexagon:before {
    transform: rotateZ(60deg);
  }
  .hexagon:after {
    transform: rotateZ(-60deg);
  }
  .hexagon:hover {
    border-radius: 50px;
    transition: 0.5s;
  }
  .hexagon:hover:before {
    border-radius: 50px;
    transition: 0.5s;
  }
  .hexagon:hover:after {
    border-radius: 50px;
    transition: 0.5s;
  }

  @media screen and (max-width: 600px) {
    font-size: 15px;
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

const typewriter = keyframes`
    from{width: 0}
  to{width: 28em}
`;

const blinkTextCursor = keyframes`
0%{border-right-color: rgba(0, 0, 0, 0)}
50%{border-right-color: rgba(255, 255, 255, 75)}
100%{border-right-color: transparent}
`;

const MainIntroTitle = styled.p`
  .line-1 {
    position: relative;
    top: 50%;
    padding: 5px 0 5px 7px;
    font-size: 1.5em;
    white-space: nowrap;
    /* border-right: 1px solid rgba(255, 255, 255, 0.75); */
    overflow: hidden;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.8);
    font-weight: bold;
  }

  #anim-typewriter {
    animation: ${typewriter} 3s steps(44) 1s 1 normal both,
      ${blinkTextCursor} 200ms;
  }
  #anim-typewriter2 {
    animation: ${typewriter} 3s steps(44) 2.5s 1 normal both,
      ${blinkTextCursor} 500ms;
  }
  #anim-typewriter3 {
    animation: ${typewriter} 3s steps(44) 4.5s 1 normal both,
      ${blinkTextCursor} 500ms;
  }
  #anim-typewriter4 {
    animation: ${typewriter} 3s steps(44) 7.5s 1 normal both,
      ${blinkTextCursor} 500ms;
  }
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

// body 부분
const BodyContainerBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

// Body Project 부분

const BodyprojectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8em 0 8rem 9.5rem;
  background-color: rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 600px) {
    padding: 1rem 2rem;
  }
`;

// BodyContactSkilContainer

const BodyContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
`;

const BodyContactSkilsWrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  padding-top: 4em;
  display: flex;
  background-color: rgba(0, 0, 0, 0.9);
`;

// Body Contact Big

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

// project Variants

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

const BodySkilsCircleGlowVariants = {
  circleglowopen: {
    width: "100%",
    height: "100%",
    display: "flex",
    opacity: 1,
    transition: {
      duration: 1,
      type: "tween",
    },
  },

  circleglowclose: {
    width: "0%",
    height: "0%",
    display: "none",
    opacity: 0,
    transition: {
      duration: 1,
      type: "tween",
    },
  },
};

const NavAnimationVariants = {
  scroll: {
    display: "flex",
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },

  top: {
    display: "none",
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};

const NavAnimationColumnsVariants = {
  columnscroll: {
    display: "flex",
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "tween",
    },
    rotate: 90,
    translate: "-37%, 148%",
  },

  columntop: {
    display: "none",
    x: -10,
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "tween",
    },
    rotate: 90,
    translate: "-50%, 148%",
  },
};

const BodySkilsCircleInlineVariants = {
  circleinlineopen: {
    width: "100%",
    height: "100%",
    display: "flex",
    opacity: 1,
    transition: {
      duration: 1,
      type: "tween",
    },
  },

  circleinlineclose: {
    width: "0%",
    height: "0%",
    display: "none",
    opacity: 0,
    transition: {
      duration: 1,
      type: "tween",
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
  const [isMenu, setIsMenu] = useState(false);
  const navAnimation = useAnimation();
  const { scrollY } = useViewportScroll();

  const handleScrollTop = () => {
    if (!window.scrollY) return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollY.onChange(() => {
      if (80 < scrollY.get() && scrollY.get() < 2350) {
        navAnimation.start("scroll");
        navAnimation.start("columntop");
      } else if (2350 < scrollY.get() && scrollY.get() < 8500) {
        navAnimation.start("top");
        navAnimation.start("columnscroll");
      } else {
        navAnimation.start("scroll");
        navAnimation.start("columntop");
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

  const HomeRef = useRef<HTMLObjectElement>(null);
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
      <HeaderNav
        variants={NavAnimationVariants}
        animate={navAnimation}
        initial="top"
        whileInView="scroll"
      >
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
            <HeaderListButton onClick={onSkilsClick}>
              <span>Skils</span>
            </HeaderListButton>
          </HeaderList>
          <HeaderList>
            <HeaderListNumber>03</HeaderListNumber>
            <HeaderListButton onClick={onProjectClick}>
              <span>Projects</span>
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

      {/* 세로해더 */}
      <ColumnHeaderNav
        variants={NavAnimationColumnsVariants}
        animate={navAnimation}
        initial="columntop"
        whileInView="columnscroll"
      >
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
        <ColumnHomeButtonBox>
          <ColumnHomeButton>Header</ColumnHomeButton>
        </ColumnHomeButtonBox>
        <ColumnHeaderUl isMenu={isMenu}>
          <ColumnHeaderListInputButton onClick={onHomeClick}>
            <span>Home</span>
            <div className="hexagon-wrapper">
              <div className="hexagon"></div>
            </div>
          </ColumnHeaderListInputButton>

          <ColumnHeaderListInputButton onClick={onAboutMeClick}>
            <span>AboutMe</span>
            <div className="hexagon-wrapper">
              <div className="hexagon"></div>
            </div>
          </ColumnHeaderListInputButton>

          <ColumnHeaderListInputButton onClick={onSkilsClick}>
            <span>Skils</span>
            <div className="hexagon-wrapper">
              <div className="hexagon"></div>
            </div>
          </ColumnHeaderListInputButton>

          <ColumnHeaderListInputButton onClick={onProjectClick}>
            <span>Projects</span>
            <div className="hexagon-wrapper">
              <div className="hexagon"></div>
            </div>
          </ColumnHeaderListInputButton>

          <ColumnHeaderListInputButton>
            <span>Git</span>
            <div className="hexagon-wrapper">
              <div className="hexagon"></div>
            </div>
          </ColumnHeaderListInputButton>
        </ColumnHeaderUl>
      </ColumnHeaderNav>

      <ContainerInline>
        <ContainerInlineBox ref={HomeRef}>
          <MainContainer>
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
                  <MainIntroTitle>
                    <p className="line-1" id="anim-typewriter">
                      안녕하세요 은예찬입니다.
                    </p>
                    <p className="line-1" id="anim-typewriter2">
                      제 포트폴리오를 봐주셔서 감사합니다.
                    </p>
                    <p className="line-1" id="anim-typewriter3">
                      지금까지 개발자를 준비하면서 만든 프로젝트들 입니다.
                    </p>
                    <p className="line-1" id="anim-typewriter4">
                      부족한 부분이 있으시면 피드백 남겨주세요 감사합니다.
                    </p>
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
          <AboutMe />
        </BodyContainer>

        {/****************************  skill 부분 ******************** */}
        <BodyContactSkilsWrapper ref={SkilsRef}>
          <Skills />
        </BodyContactSkilsWrapper>

        {/*************************** project 부분 *******************  */}
        <BodyprojectsContainer ref={ProjectsRef}>
          <Project />
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
