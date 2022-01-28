import styled, { keyframes } from "styled-components";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";

const Containder = styled.div`
  width: 100%;
  height: 1000vh;
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
  /* background: linear-gradient(blue, pink); */
`;

const HeaderUl = styled(motion.ul)`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const HeaderList = styled.li`
  margin: 20px 50px;
  font-size: 20px;
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
`;

const MainContainer = styled.div`
  padding-top: 12rem;
`;

const wavaAnimation = keyframes`
  from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
`;

const MainWaveBox = styled.div`
  margin-top: 5rem;
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
    left: 0;
    top: 0;
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
  left: 50%;
  background: #0af;
  width: 500px;
  height: 500px;
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
  left: 50%;
  background: #0af;
  width: 500px;
  height: 500px;
  margin-left: -250px;
  margin-bottom: -250px;
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: ${wavaAnimation} 3000ms infinite linear;
  animation: ${wavaAnimation} 7000ms infinite linear;
  opacity: 0.1;
  background: yellow;
`;

const MainWaveBottom = styled.div`
  opacity: 0.4;
  position: absolute;
  top: 3%;
  left: 50%;
  background: #0af;
  width: 500px;
  height: 500px;
  margin-left: -250px;
  margin-bottom: -250px;
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: ${wavaAnimation} 3000ms infinite linear;
  animation: ${wavaAnimation} 5000ms infinite linear;
`;

const MainTitleAnimation = keyframes`
  0% { top: 0; } 
  20% { top: -0.5rem; } 
  40% { top: 0 } 
  60% { top: 0 } 
  80% { top: 0 }
  100% { top: 0 } 
`;

const MainTitleBox = styled(motion.div)`
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MainTitleSpanTop = styled(motion.div)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
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
  animation: ${MainTitleAnimation} 1s infinite;
`;

// const asdf = {
//   good: {
//     transition: {
//       delay: 1,
//     },
//   },
// };

const MainTiTleSpan1 = styled(motion.span)`
  position: relative;
`;

const MainTitleSpanBottom = styled(motion.div)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
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
  animation: ${MainTitleAnimation} 1s infinite;
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
    color: "rgba(0, 0, 0, 1)",
    // x: -300,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  scroll: {
    color: "rgba(255, 255, 255, 1)",
    // x: 50,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const WaveTitle = {
  offscreen: {
    x: 400,
  },
  onscreen: {
    x: -140,
    transition: {
      type: "tween",
      bounce: 0.4,
      duration: 1,
    },
  },
};

function Home() {
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
  return (
    <Containder>
      <HeaderNav
        variants={HeaderNavVariants}
        animate={navAnimation}
        initial={"top"}
      >
        <HeaderUl variants={HeaderNavUlVariants}>
          <HeaderList>Home</HeaderList>
          <HeaderList>About Me</HeaderList>
          <HeaderList>Skil</HeaderList>
          <HeaderList>contact</HeaderList>
        </HeaderUl>
      </HeaderNav>
      <MainContainer>
        <MainWaveBox>
          <MainWaveTop></MainWaveTop>
          <MainWaveMiddle></MainWaveMiddle>
          <MainWaveBottom></MainWaveBottom>
          <MainTitleBox
            variants={WaveTitle}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <MainTitleSpanTop>
              <MainTiTleSpan1>Y</MainTiTleSpan1>
              <span>E</span>
              <span>C</span>
              <span>H</span>
              <span>A</span>
              <span>N</span>
              <span>'S</span>
            </MainTitleSpanTop>
            <MainTitleSpanBottom>
              <span>P</span>
              <span>O</span>
              <span>R</span>
              <span>T</span>
              <span>F</span>
              <span>O</span>
              <span>L</span>
              <span>I</span>
              <span>O</span>
            </MainTitleSpanBottom>
          </MainTitleBox>
        </MainWaveBox>
      </MainContainer>
    </Containder>
  );
}

export default Home;
