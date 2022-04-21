import styled, { keyframes } from "styled-components";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import {
  vanillajsImages,
  youtubeImages,
  selectorImages,
  coinImages,
  netfilxImages,
} from "../data/imageData";
import { useEffect } from "react";

const BodyProjectsOverlay = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px;
  z-index: 4;
  padding: 0 2rem 0 0;
`;

const BodyProjectsOverlayInlineBox = styled(motion.div)`
  font-weight: bold;
  width: 100%;
  top: 0%;
  z-index: 6;
  background-color: transparent;
  position: sticky;
  position: -webkit-sticky;
`;

const wiggleWiggle = keyframes`
  20%,
  100% {
    transform: translate(0, 5px);
  }

  0% {
    transform: translate(0, 0px);
  }
  10% {
    transform: translate(0, 5px);
  }
`;

const BodyProjectsTextWrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  color: white;
  font-size: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6em 2em;
  text-align: center;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  p {
    margin: 4px;
    animation-name: ${wiggleWiggle};
    animation-duration: 1.9s;
    animation-direction: alternate;
    animation-timing-function: steps(2, end);
    animation-iteration-count: infinite;
  }
  .project-P {
    animation-delay: 0s;
  }
  .project-r {
    animation-delay: 0.1s;
  }
  .project-o {
    animation-delay: 0.15s;
  }
  .project-j {
    animation-delay: 0.2s;
  }
  .project-e {
    animation-delay: 0.25s;
  }
  .project-c {
    animation-delay: 0.3s;
  }
  .project-t {
    animation-delay: 0.35s;
  }
  .list-l {
    animation-delay: 0.4s;
  }
  .list-i {
    animation-delay: 0.45s;
  }
  .list-s {
    animation-delay: 0.5s;
  }
  .list-t {
    animation-delay: 0.55s;
  }
`;

const ProjectsTitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ProjectsOrderTitle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);
  font-size: 6em;
  font-weight: bold;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  padding-bottom: 3em;
`;

const ProjectListInline = styled.div`
  height: 160vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000000;
  width: 100%;
  z-index: 4;
  background-color: transparent;
  margin-top: 9em;
`;

const ProjectTitleImageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 8rem;
`;

const ProjectsTitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  letter-spacing: 0.3rem;
`;

const ProjectsTitle = styled.span`
  width: 90%;
  height: 100%;
  font-size: 3em;
  font-weight: bold;
  margin-left: 0.7em;
  color: white;
  text-align: center;
  border: 1px solid white;
  border-radius: 9999px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  span {
    padding: 20px;
  }
`;

const SiteBtnBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  margin-top: 9em;
  margin-bottom: 12em;
`;

const SiteBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  letter-spacing: 1px;
  background: none;
  position: relative;
  outline: none;
  border: none;
  height: 50px;
  width: 190px;
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

const ProjectListInlineStickyImage = styled.div`
  width: 100%;
`;

const ProjectListInlineImage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

const BodyProjectsImageContainer = styled.div`
  width: 45vw;
  height: 60vh;
  max-height: 60vh;
  z-index: 4;
  top: 25%;
  position: sticky;
  position: -webkit-sticky;
  @media screen and (max-width: 600px) {
    display: flex;
    height: 40vh;
    max-height: 40vh;
    flex-direction: column;
  }
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

  background-repeat: no-repeat;
  background-size: 80%;
  -webkit-background-clip: text;
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
    background: "transparent",
  },

  topbox: {
    background: "rgba(0, 0, 0, 0.5)",
  },
};

const TextBorderVariants = {
  scroll: {
    color: "black",
  },

  top: {
    color: "white",
  },
};

function Projects() {
  const textAnimation = useAnimation();
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    scrollY.onChange(() => {
      if (2050 < scrollY.get() && scrollY.get() < 2150) {
        textAnimation.start("scroll");
        textAnimation.start("scrollbox");
      } else if (2160 < scrollY.get() && scrollY.get() < 5000) {
        textAnimation.start("top");
        textAnimation.start("topbox");
      }
    });
  }, [scrollY, textAnimation]);

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
            <p className="project-p">P</p>
            <p className="project-r">R</p>
            <p className="project-o">O</p>
            <p className="project-j">J</p>
            <p className="project-e">E</p>
            <p className="project-c">C</p>
            <p className="project-t">T</p>
            <p className="list-l">L</p>
            <p className="list-i">I</p>
            <p className="list-s">S</p>
            <p className="list-t">T</p>
          </BodyProjectsTextWrapper>
        </BodyProjectsOverlayInlineBox>
        {/* todo */}
        <ProjectListInline>
          <ProjectTitleImageContainer>
            <ProjectsTitleContainer>
              <ProjectsOrderTitle>
                <span>First</span>
                <span>Project</span>
              </ProjectsOrderTitle>
              <ProjectsTitleBox>
                <ProjectsTitle>
                  <span>ToDoList</span>
                </ProjectsTitle>
                <SiteBtnBox>
                  <SiteBtn
                    href="https://github.com/eunyechan/vanillaJS_app"
                    target={"blank"}
                  >
                    <span>Git Site</span>
                  </SiteBtn>

                  <SiteBtn
                    href="https://eunyechan.github.io/vaillajs_app.github.io"
                    target={"blank"}
                  >
                    <span>View Site</span>
                  </SiteBtn>
                </SiteBtnBox>
              </ProjectsTitleBox>
            </ProjectsTitleContainer>
            <ProjectListInlineStickyImage>
              <ProjectListInlineImage>
                {/* 이미지 부분 */}
                <BodyProjectsImageContainer>
                  <BodyProjectsImage src={vanillajsImages[0]} />
                </BodyProjectsImageContainer>
              </ProjectListInlineImage>
            </ProjectListInlineStickyImage>
          </ProjectTitleImageContainer>
        </ProjectListInline>

        {/* youtube */}
        <ProjectListInline>
          <ProjectTitleImageContainer>
            <ProjectListInlineStickyImage>
              <ProjectListInlineImage>
                {/* 이미지 부분 */}
                <BodyProjectsImageContainer>
                  <BodyProjectsImage src={youtubeImages[1]} />
                </BodyProjectsImageContainer>
              </ProjectListInlineImage>
            </ProjectListInlineStickyImage>

            <ProjectsTitleContainer>
              <ProjectsOrderTitle>
                <span>Second</span>
                <span>Project</span>
              </ProjectsOrderTitle>
              <ProjectsTitleBox>
                <ProjectsTitle>
                  <span>Youtube</span>
                </ProjectsTitle>
                <SiteBtnBox>
                  <SiteBtn
                    href="https://github.com/eunyechan/wetube-reloaded"
                    target={"blank"}
                  >
                    <span>Git Site</span>
                  </SiteBtn>

                  <SiteBtn
                    href="https://wetubecloneapp.herokuapp.com"
                    target={"blank"}
                  >
                    <span>View Site</span>
                  </SiteBtn>
                </SiteBtnBox>
              </ProjectsTitleBox>
            </ProjectsTitleContainer>
          </ProjectTitleImageContainer>
        </ProjectListInline>

        {/* selector */}
        <ProjectListInline>
          <ProjectTitleImageContainer>
            <ProjectsTitleContainer>
              <ProjectsOrderTitle>
                <span>Third</span>
                <span>Project</span>
              </ProjectsOrderTitle>
              <ProjectsTitleBox>
                <ProjectsTitle>
                  <span>Selector</span>
                </ProjectsTitle>
                <SiteBtnBox>
                  <SiteBtn
                    href="https://github.com/eunyechan/masterclass-react-selector-app"
                    target={"blank"}
                  >
                    <span>Git Site</span>
                  </SiteBtn>

                  <SiteBtn
                    href="https://eunyechan.github.io/masterclass-react-selector-app"
                    target={"blank"}
                  >
                    <span>View Site</span>
                  </SiteBtn>
                </SiteBtnBox>
              </ProjectsTitleBox>
            </ProjectsTitleContainer>
            <ProjectListInlineStickyImage>
              <ProjectListInlineImage>
                {/* 이미지 부분 */}
                <BodyProjectsImageContainer>
                  <BodyProjectsImage
                    src={selectorImages[1]}
                    // custom={vanillajsdirection}
                    // variants={ImageSliderVariants}
                  />
                </BodyProjectsImageContainer>
              </ProjectListInlineImage>
            </ProjectListInlineStickyImage>
          </ProjectTitleImageContainer>
        </ProjectListInline>

        {/* coin */}
        <ProjectListInline>
          <ProjectTitleImageContainer>
            <ProjectListInlineStickyImage>
              <ProjectListInlineImage>
                {/* 이미지 부분 */}
                <BodyProjectsImageContainer>
                  <BodyProjectsImage src={coinImages[0]} />
                </BodyProjectsImageContainer>
              </ProjectListInlineImage>
            </ProjectListInlineStickyImage>

            <ProjectsTitleContainer>
              <ProjectsOrderTitle>
                <span>Fourth</span>
                <span>Project</span>
              </ProjectsOrderTitle>
              <ProjectsTitleBox>
                <ProjectsTitle>
                  <span>Coin</span>
                </ProjectsTitle>
                <SiteBtnBox>
                  <SiteBtn
                    href="https://github.com/eunyechan/masterclass-react-coin-app"
                    target={"blank"}
                  >
                    <span>Git Site</span>
                  </SiteBtn>

                  <SiteBtn
                    href="https://eunyechan.github.io/masterclass-react-coin-app"
                    target={"blank"}
                  >
                    <span>View Site</span>
                  </SiteBtn>
                </SiteBtnBox>
              </ProjectsTitleBox>
            </ProjectsTitleContainer>
          </ProjectTitleImageContainer>
        </ProjectListInline>

        {/* NetFilx */}
        <ProjectListInline>
          <ProjectTitleImageContainer>
            <ProjectsTitleContainer>
              <ProjectsOrderTitle>
                <span>Fifth</span>
                <span>Project</span>
              </ProjectsOrderTitle>
              <ProjectsTitleBox>
                <ProjectsTitle>
                  <span>NetFilx</span>
                </ProjectsTitle>
                <SiteBtnBox>
                  <SiteBtn
                    href="https://github.com/eunyechan/masterclass-react-notflix"
                    target={"blank"}
                  >
                    <span>Git Site</span>
                  </SiteBtn>

                  <SiteBtn
                    href="https://eunyechan.github.io/masterclass-react-notflix"
                    target={"blank"}
                  >
                    <span>View Site</span>
                  </SiteBtn>
                </SiteBtnBox>
              </ProjectsTitleBox>
            </ProjectsTitleContainer>
            <ProjectListInlineStickyImage>
              <ProjectListInlineImage>
                {/* 이미지 부분 */}
                <BodyProjectsImageContainer>
                  <BodyProjectsImage
                    src={netfilxImages[1]}
                    // custom={vanillajsdirection}
                    // variants={ImageSliderVariants}
                  />
                </BodyProjectsImageContainer>
              </ProjectListInlineImage>
            </ProjectListInlineStickyImage>
          </ProjectTitleImageContainer>
        </ProjectListInline>
      </BodyProjectsOverlay>

      {/* <BodyProjectsFixedTitleWrapper></BodyProjectsFixedTitleWrapper> */}
    </>
  );
}

export default Projects;
