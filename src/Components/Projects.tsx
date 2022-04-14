import styled, { keyframes } from "styled-components";
import {
  motion,
  useAnimation,
  useViewportScroll,
  AnimatePresence,
} from "framer-motion";
import {
  vanillajsImages,
  youtubeImages,
  selectorImages,
  coinImages,
  netfilxImages,
} from "../data/imageData";
import csslogo from "../images/imagesLogo/backgroundimg.jpg";
import { useEffect, useRef, useState } from "react";
import { wrap } from "popmotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const HeaderMenubar = styled(motion.div)`
  display: none;
  @media screen and (max-width: 600px) {
    display: flex;
    background-color: transparent;
    align-items: center;
    justify-content: space-between;
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

const BodyProjectsTitleBox = styled.div`
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

const BodyProjectsOverlay = styled.div`
  width: 100%;
  height: 400vh;
  margin: 10px;
  z-index: 4;
  padding: 0 2rem 0 2rem;
`;

const BodyProjectsOverlayInlineBox = styled(motion.div)`
  font-weight: bold;
  width: 100%;
  /* height: 10vh; */
  top: 0%;
  z-index: 6;
  background-color: transparent;
  position: sticky;
  position: -webkit-sticky;
`;

const BodyProjectsTextWrapper = styled(motion.div)`
  position: relative;
  text-align: center;
  font-weight: bold;
  font-family: "Yanone Kaffeesatz", "Lucida Grande", Lucida, Verdana, sans-serif;
  margin: 0 auto;
  width: 100%;
  padding: 2em 0;
  border-radius: 4px;
  box-shadow: inset 0 -1px 0 hsla(0, 0%, 0%, 0.2),
    0 21px 8px -12px rgba(0, 0, 0, 0.2);
  perspective: 350;

  .first-title {
    /* -webkit-text-stroke: 1px white; */
    font-size: 5em;
    margin: 0;
    /* color: #f1efef; */
    text-transform: uppercase;
    letter-spacing: 0.03em;
    /* text-shadow: rgba(0, 0, 0, 0.1) 0 20px 80px; */
    -webkit-transition: -webkit-transform 0.1s ease-in; /* only WebKit because of performance */
    &:hover {
      /* color: hsla(0, 0%, 0%, 1); */
      transform: rotate(6.5deg) rotateX(28deg) skewX(-3deg);
      -webkit-transition: -webkit-transform 0.3s ease-out; /* only WebKit because of performance */
    }
  }
  &:hover {
    p {
      transform: rotate(6.5deg) rotateX(28deg) skewX(-3deg);
      -webkit-transition: -webkit-transform 0.3s ease-out;
    }
    p:nth-child(1) {
      font-size: 5em;
      text-shadow: #ffffff 0 0 10px, #ffffff 0 4px 3px, #dad7d7 0 9px 3px,
        #ffffff 0 12px 1px, rgba(238, 238, 238, 0.2) 0 14px 5px,
        rgba(243, 239, 239, 0.1) 0 20px 10px, rgba(0, 0, 100, 0.2) 0 15px 80px;
      text-indent: 0.3em;
    }
    p:nth-child(2) {
      font-size: 5em;
      text-shadow: #ffffff 0 0 10px, #ffffff 0 4px 3px, #dad7d7 0 9px 3px,
        #ffffff 0 12px 1px, rgba(238, 238, 238, 0.2) 0 14px 5px,
        rgba(243, 239, 239, 0.1) 0 20px 10px, rgba(0, 0, 100, 0.2) 0 15px 80px;
      text-indent: 0.3em;
    }
  }
`;

const ProjectListInline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000000;
  width: 100%;
  z-index: 4;
  background-color: transparent;
  margin-top: 6em;
`;

const ProjectListInlineNumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-template-areas: "overlap";
  place-content: center;
  text-transform: uppercase;
  padding-top: 8rem;
`;

const ProjectListInlineNumber = styled.div`
  display: flex;
  color: #fffbf1;
  font-size: 5em;
  font-weight: bold;
`;

const ProjectListInlineStickyImage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid white;
`;

const ProjectListInlineImage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const BodyProjectsTitle = styled(motion.span)`
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
  border-radius: 10px;
  @media screen and (max-width: 600px) {
    padding: 2rem;
    display: block;
  }
`;

const BodyProjectsImageDetailTitleBox = styled.div`
  border: 2px solid white;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  border-radius: 99px;
  letter-spacing: 0.3rem;
`;

const BodyProjectsImageDetailTitle = styled.span`
  width: 100%;
  height: 100%;
  font-size: 4em;
  font-weight: bold;
  color: white;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  span {
    padding: 20px;
  }
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
  width: 50vw;
  height: 50vh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #eee;
  border-radius: 10px;
  max-height: 60vh;
  border: 2px solid white;
  z-index: 4;
  @media screen and (max-width: 600px) {
    display: flex;
    height: 40vh;
    max-height: 40vh;
    flex-direction: column;
  }
`;

const BodyProjectsImage = styled(motion.img)`
  max-width: 100vw;
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

const TextBoxShadowVariants = {
  scrollbox: {
    boxShadow:
      "inset 0 -1px 0 hsla(0, 0%, 0%, 1) 0 21px 8px -12px rgba(0, 0, 0, 1)",
    background: "transparent",
  },

  topbox: {
    boxShadow:
      "inset 0 -1px 0 hsla(0, 0%, 0%, 1) 0 21px 8px -12px rgba(255, 255, 255, 1)",
    border: "2px solid black",
    background: "rgba(0, 0, 0, 1)",
  },
};

const TextBorderVariants = {
  scroll: {
    textShadow:
      "-1px -1px 0 #000 1px -1px 0 #000 -1px 1px 0 #000 1px 1px 0 #000",
    color: "black",
  },

  top: {
    textShadow:
      "-1px -1px 0 #fff 1px -1px 0 #fff -1px 1px 0 #fff 1px 1px 0 #fff",
    color: "white",
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

function Projects() {
  const [[vanilajspage, vanillajsdirection], setVanillaJsPage] = useState([
    0, 0,
  ]);
  const [[youtubepage, youtubedirection], setYoutubePage] = useState([0, 0]);
  const [[selectorpage, selectordirection], setSelectorPage] = useState([0, 0]);
  const [[coinpage, coindirection], setCoinPage] = useState([0, 0]);
  const [[netfilxpage, netfilxdirection], setNetfilxPage] = useState([0, 0]);

  const swipeConfidenceValue = 10000;

  const textAnimation = useAnimation();
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    scrollY.onChange(() => {
      if (2050 < scrollY.get() && scrollY.get() < 2350) {
        textAnimation.start("scroll");
        textAnimation.start("scrollbox");
      } else if (2360 < scrollY.get() && scrollY.get() < 5000) {
        textAnimation.start("top");
        textAnimation.start("topbox");
      }
    });
  }, [scrollY, textAnimation]);

  const vanillajsImageIndex = wrap(0, vanillajsImages.length, vanilajspage);
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

  return (
    <>
      <BodyProjectsOverlay>
        <BodyProjectsOverlayInlineBox
          variants={TextBorderVariants}
          animate={textAnimation}
          initial="scroll"
        >
          <BodyProjectsTextWrapper
            variants={TextBoxShadowVariants}
            animate={textAnimation}
            initial="scrollbox"
          >
            <p className="first-title">PROJECT</p>
          </BodyProjectsTextWrapper>
        </BodyProjectsOverlayInlineBox>
        <ProjectListInline>
          <ProjectListInlineNumberContainer>
            <BodyProjectsImageDetailTitleBox>
              <BodyProjectsImageDetailTitle>
                <span>01.</span>
                <span>ToDoList</span>
              </BodyProjectsImageDetailTitle>
            </BodyProjectsImageDetailTitleBox>
            <ProjectListInlineStickyImage>
              <ProjectListInlineImage>
                {/* 이미지 부분 */}
                <BodyProjectsImageContainer>
                  <>
                    <AnimatePresence
                      initial={false}
                      custom={vanillajsdirection}
                    >
                      <BodyProjectsImage
                        key={vanilajspage}
                        src={vanillajsImages[vanillajsImageIndex]}
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
                          {vanillajsImageIndex + 1} / {vanillajsImages.length}
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
              </ProjectListInlineImage>
            </ProjectListInlineStickyImage>
          </ProjectListInlineNumberContainer>
        </ProjectListInline>
      </BodyProjectsOverlay>

      {/* <BodyProjectsFixedTitleWrapper></BodyProjectsFixedTitleWrapper> */}

      <BodyProjectsTitleBox>
        <BodyProjectsTitle>Project</BodyProjectsTitle>
      </BodyProjectsTitleBox>
      <BodyTotalProjectsBox>
        {/* vanillaJs Project */}
        <BodyTotalProjectsBoxInlineContainer>
          <BodyTotalProjectsBoxInline>
            {/* 프로젝트 이미지 부분 */}

            {/* 프로젝트 상세설명 부분 */}
            <BodyProjectsImageDetailExplainContainer>
              <BodyProjectsDetailExplainContainer>
                <BodyProjectsDetailExplainTitle
                  style={{
                    flexDirection: "column",
                    flex: "1",
                  }}
                ></BodyProjectsDetailExplainTitle>
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
                      JS Clock, &nbsp; JS To Do List, &nbsp; Get Geolocation,
                      &nbsp;
                      <br /> Get Weather Information, &nbsp; Deploy to Github
                      Pages...
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
                  동영상에 댓글도 남길 수 있으며 댓글을 삭제하는것도 가능합니다.
                  <br />
                  프로필 이미지 설정도 가능하고 검색을 통하여 동영상을 찾을 수도
                  있습니다.
                  <br />
                  처음으로 백엔드까지 해본 프로젝트라 정말 의미 있고 많은 것을
                  배운 프로젝트였습니다.
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
                      Video Upload, &nbsp; Video Recording, &nbsp; Search Video,
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
                  javascript에서 만든 ToDoList를 React Typescript를 사용하여 또
                  한 번 만들었습니다.
                  <br />
                  평번한 todolist보단 애니메이션을 이용하여 드로그 앤 드롭으로
                  위치를 바꾸거나 삭제를 할 수 있도록 만들었습니다.
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
                  코인에 대한 정보를 보여주는 홈페이지를 만들었습니다. 코인에
                  관한 api를 가져와서 이름이랑 가격을 보여줍니다. 차트로도 볼 수
                  있도록 만들었습니다. 토글 버튼을 이용하여 다크 모드를 설정할
                  수 있습니다.
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
                      Route States, &nbsp; Apex Charts, &nbsp; react-router-dom,
                      &nbsp; StyledComponents, &nbsp; React Helmet, &nbsp;
                      react-query, &nbsp; recoil{" "}
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
                  영화 또는 tv 목록을 보여주는 홈페이지 입니다. 인기 있는 영화나
                  tv를 보여주고 이미지를 클릭하면 그 영화에 대한 상세한 정보도
                  보이도록 만들었습니다 또한 검색 기능을 이용하여 영화 또는 tv
                  정보를 볼 수 있습니다.
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
                      Route States, &nbsp; react-dom, &nbsp; react-router-dom,
                      &nbsp; StyledComponents, &nbsp; React Helmet, &nbsp;
                      react-query, &nbsp; Animations, &nbsp; Sliders, &nbsp;
                      Modals...
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
    </>
  );
}

export default Projects;
