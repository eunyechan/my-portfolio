import styled, { keyframes } from "styled-components";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import profile from "../images/imagesLogo/profileimg.png";
import { useEffect, useRef, useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BodyContainerArrow = styled(motion.div)`
  position: absolute;
  align-items: center;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 100px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  @media screen and (max-width: 600px) {
    font-size: 50px;
  }
`;

const BodyContainerAboutMeBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 8rem 50px 0 50px;
  overflow: hidden;
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
  letter-spacing: 5px;
  z-index: 1;
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
  /* height: 100%; */
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

const BodyContainerAboutMeVariants = {
  aboutmeboxanimationvisible: {
    x: 0,
    display: "flex",
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
  aboutmeboxanimationinvisible: {
    x: 1000,
    display: "none",
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};

function AboutMe() {
  const { scrollY } = useViewportScroll();
  const navAnimation = useAnimation();

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

  return (
    <>
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
        initial="aboutmeboxanimationinvisible"
        whileInView="aboutmeboxanimationvisible"
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
                군 복무 중 우연히 접하게 된 코딩 서적에 흥미를 느끼게 되어 전역
                후 미래 능력 개발 교육원에 들어가 안드로이드에 대해서
                배웠습니다. 그러던 와중 기초만 배운 웹에 흥미를 느껴 수료 후
                웹에 대해서 좀 더 공부하고자 하여 인터넷 강의를 보면서
                JavaScript, React, TypeScript 등 다양한 것들을 공부했습니다.
                공부를 하면서 무언가에 막혔을 때 그것에 대해 해결을 하려고
                끝없이 고민하고 노력합니다. 물론 아직 많이 모자라고 부족하지만
                빠르게 변화하는 기술에 뒤처지지 않으려고 노력하고 발전하는 제
                모습을 보여드리겠습니다. 감사합니다
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
    </>
  );
}

export default AboutMe;
