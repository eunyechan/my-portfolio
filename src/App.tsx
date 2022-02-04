import styled, { keyframes } from "styled-components";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import backimg from "./images/backgroundimg.png";
import profile from "./images/profileimg.jpg";
import csslogo from "./images/csslogo.png";
import jslogo from "./images/jslogo.png";
import htmllogo from "./images/htmllogo.png";
import reactlogo from "./images/reactlogo.png";
import typescriptlogo from "./images/typescriptlogo.png";

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
  background-color: rgba(0, 0, 0, 0.6);
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
  padding: 10px 60px;
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
  background: #72cbf8;
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
  background: #40b3c2;
`;

const MainWaveBottom = styled.div`
  opacity: 0.4;
  position: absolute;
  top: 3%;
  left: 20%;
  background: #0af;
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
  background-color: rgba(100, 99, 99, 0.4);
  position: relative;
  /* padding-top: 8rem; */
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
`;

const BodyContainerAboutMeTitleBox = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 40px;
  font-weight: bolder;
  font-family: "Playfair Display", serif;
  margin-top: 8rem;
`;

const BodyContainerAboutMe = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
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

// bodySkills 부분

const BodySkilsprojectContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #9cc0e0;
`;

const BodyProjectsMenuContainer = styled(motion.div)`
  display: flex;
  flex: 1;
  font-weight: bold;
  overflow: hidden;
`;

const BodyProjectsMenuSmallInlineContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
`;

const BodyProjectsMenuSmallInlineTitle = styled(motion.span)`
  font-size: 25px;
  font-weight: bold;
  font-family: "Playfair Display", serif;
  border: 2px solid white;
`;

const BodyProjectsMenuBigInlineContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
`;

const BodyProjectsMenuBigInlineTitle = styled(motion.span)`
  font-size: 25px;
  font-weight: bold;
  font-family: "Playfair Display", serif;
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
  margin-top: 8rem;
`;

const BodySkilsMenuContainerButton = styled(motion.button)`
  border-radius: 99px;
  position: absolute;
  width: 50px;
  height: 50px;
  margin-top: 8rem;
`;

const BodySkilsContainerInlineBox = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const BodySkilsContainerBigInlineBox = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 6;
  margin-top: 8rem;
`;

const BodySkilsContainerInlineTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 40px;
`;

const BodySkilsContainerInlineIconBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const BodySkilsContainerInlineTopIconBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  flex: 1;
`;

const BodySkilsContainerInlineTopHtmlIcon = styled.img`
  background-image: url(${htmllogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 130px;
  height: 130px;
`;

const BodySkilsContainerInlineTopJsIcon = styled.img`
  background-image: url(${jslogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 130px;
  height: 130px;
`;

const BodySkilsContainerInlineTopCssIcon = styled.img`
  background-image: url(${csslogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 130px;
  height: 130px;
`;

const BodySkilsContainerSmallInlineBox = styled(motion.div)`
  display: flex;
`;

const BodySkilsContainerInlineBottomIconBox = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const BodySkilsContainerInlineBottomReactIcon = styled.img`
  background-image: url(${reactlogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 130px;
  height: 130px;
`;

const BodySkilsContainerInlineBottomTypeScriptIcon = styled.img`
  background-image: url(${typescriptlogo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 130px;
  height: 130px;
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
    backgroundColor: "rgba(115, 117, 216, 0.4)",
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
    flex: 6,
    opcity: 1,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
  projectclosemenu: {
    flex: 1,
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
    },
  },
  projectmenuclosebox: {
    opacity: 0,
    display: "none",
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};

// skils variants
const BodySkilsContainerVariants = {
  skilsopenmenu: {
    flex: 1,
    opcity: 1,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
  skilsclosemenu: {
    flex: 6,
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
      duration: 0.5,
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
    },
  },
};

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const navAnimation = useAnimation();
  const { scrollY } = useViewportScroll();
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
              <h2>AboutMe</h2>
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
            initial="projectclosemenu"
          >
            <BodyProjectsMenuSmallInlineContainer
              variants={BodyProjectsMenuInlineBoxVariants}
              animate={isOpen ? "projectmenuclosebox" : "projectmenuopenbox"}
            >
              <BodyProjectsMenuSmallInlineTitle>
                Projects
              </BodyProjectsMenuSmallInlineTitle>
            </BodyProjectsMenuSmallInlineContainer>

            <BodyProjectsMenuBigInlineContainer
              variants={BodyProjectsMenuInlineBoxVariants}
              animate={isOpen ? "projectmenuopenbox" : "projectmenuclosebox"}
            >
              <BodyProjectsMenuBigInlineTitle>
                asffff
              </BodyProjectsMenuBigInlineTitle>
            </BodyProjectsMenuBigInlineContainer>
          </BodyProjectsMenuContainer>

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
          >
            <BodySkilsContainerBigInlineBox>
              <BodySkilsContainerInlineIconBox
                variants={BodySkilsMenuInlineBoxVariants}
                animate={isOpen ? "skilmenuclosebox" : "skilmenuopenbox"}
              >
                <BodySkilsContainerInlineTitle>
                  Skils
                </BodySkilsContainerInlineTitle>
                <BodySkilsContainerInlineTopIconBox>
                  <BodySkilsContainerInlineTopHtmlIcon />
                  <BodySkilsContainerInlineTopJsIcon />
                  <BodySkilsContainerInlineTopCssIcon />
                </BodySkilsContainerInlineTopIconBox>
                <BodySkilsContainerInlineBottomIconBox>
                  {/* <BodySkilsContainerInlineBottomReactIcon />
                <BodySkilsContainerInlineBottomTypeScriptIcon /> */}
                </BodySkilsContainerInlineBottomIconBox>
              </BodySkilsContainerInlineIconBox>
            </BodySkilsContainerBigInlineBox>

            {/* 줄어들었을 때 */}
            <BodySkilsContainerSmallInlineBox
              variants={BodySkilsMenuInlineBoxVariants}
              animate={isOpen ? "skilmenuopenbox" : "skilmenuclosebox"}
            ></BodySkilsContainerSmallInlineBox>
          </BodySkilsContainerInlineBox>
        </BodySkilsprojectContainer>
      </BodyContainerBox>
    </Container>
  );
}

export default Home;
