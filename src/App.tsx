import styled from "styled-components";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";

const Containder = styled.div`
  width: 100%;
  height: 1000vh;
`;

const HeaderNav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
  z-index: 3;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
`;

const HeaderTitle = styled(motion.span)`
  color: black;
  font-size: 24px;
  font-weight: bolder;
`;

const HeaderUl = styled.ul`
  display: flex;
  background-color: blue;
`;

const HeaderList = styled.li`
  margin: 15px;
`;

const HeaderNavVariants = {
  top: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  scroll: {
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
};

const HeaderNavTitleVariants = {
  top: {
    color: "rgba(0, 0, 0, 1)",
  },
  scroll: {
    color: "rgba(255, 255, 255, 1)",
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
        <Header>
          <HeaderUl>
            <HeaderList>Home</HeaderList>
            <HeaderList>About Me</HeaderList>
            <HeaderList>Skil</HeaderList>
          </HeaderUl>
          <HeaderTitle variants={HeaderNavTitleVariants} animate={navAnimation}>
            YeChan's portfolio
          </HeaderTitle>
        </Header>
      </HeaderNav>
    </Containder>
  );
}

export default Home;
