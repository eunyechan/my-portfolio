// import styled from "styled-components";
// import {
//   motion,
// } from "framer-motion";
// import csslogo from "./images/imagesLogo/css_logo.png";
// import jslogo from "./images/imagesLogo/js_logo.png";
// import htmllogo from "./images/imagesLogo/html_logo.png";
// import sasslogo from "./images/imagesLogo/sass_logo.png";
// import reactlogo from "./images/imagesLogo/react_logo.png";
// import typescriptlogo from "./images/imagesLogo/ts_logo.png";
// import gitlogo from "./images/imagesLogo/git_logo.png";
// import githublogo from "./images/imagesLogo/github_logo.png";

import { render } from "@testing-library/react";

// const BodySkilsContainerInlineSubTitle = styled.span`
//   display: flex;
//   text-align: center;
//   align-items: center;
//   justify-content: center;
//   border-bottom: 1px solid rgba(107, 102, 102, 0.3);
//   font-size: 26px;
//   font-weight: bold;
//   height: 15vh;
//   color: #d9534f;
//   @media screen and (max-width: 600px) {
//     height: 100%;
//   }
// `;

// const BodySkilsContainerInlineLeftIconBoxTopDiv = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 30px 0;
//   border-radius: 10px;
//   width: 100%;
//   @media screen and (max-width: 600px) {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }
// `;

// const BodySkilsContainerInlineLeftIconBoxBottomDiv = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
// `;

// const BodySkilsContainerInlineRightIconBox = styled.div`
//   width: 100%;
//   height: 65vh;
//   padding: 10px;
//   display: flex;
//   flex-direction: column;
//   background-color: white;
//   border-radius: 10px;
//   @media screen and (max-width: 600px) {
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//   }
// `;

// const BodySkilsContainerInlineRightIconBoxTopDiv = styled.div`
//   display: flex;
//   width: 100%;
//   flex: 2;
//   justify-content: space-around;
//   align-items: center;
//   margin: 30px 0;
//   @media screen and (max-width: 600px) {
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//   }
// `;

// const BodySkilsContainerInlineTopHtmlIcon = styled(motion.img)`
//   background-image: url(${htmllogo});
//   background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;
//   border: 3px solid black;
//   border-radius: 10px;
//   padding: 4rem;
//   background-color: #f5f5f5;
//   @media screen and (max-width: 600px) {
//     display: flex;
//     flex-direction: column;
//     padding: 1.3rem;
//   }
// `;

// const BodySkilsContainerInlineTopCssIcon = styled(motion.img)`
//   background-image: url(${csslogo});
//   background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;
//   border: 3px solid black;
//   border-radius: 10px;
//   padding: 4rem;
//   background-color: #f5f5f5;
//   @media screen and (max-width: 600px) {
//     display: flex;
//     flex-direction: column;
//     padding: 1.3rem;
//   }
// `;

// const BodySkilsContainerInlineTopJsIcon = styled(motion.img)`
//   background-image: url(${jslogo});
//   background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;
//   border: 3px solid black;
//   border-radius: 10px;
//   padding: 4rem;
//   background-color: #f5f5f5;
//   @media screen and (max-width: 600px) {
//     display: flex;
//     flex-direction: column;
//     padding: 1.3rem;
//   }
// `;

// const BodySkilsContainerSmallInlineBox = styled(motion.div)`
//   display: flex;
//   width: 100%;
//   height: 100%;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: transparent;
//   letter-spacing: 0.3rem;
//   @media screen and (max-width: 600px) {
//     letter-spacing: 0rem;
//   }
// `;

// const BodySkilsContainerSmallInlineBoxTitle = styled.span`
//   font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
//   background-color: white;
//   border-radius: 10px;
//   padding: 10px;
//   font-size: 22px;
//   margin-bottom: 5rem;
//   @media screen and (max-width: 600px) {
//     display: flex;
//     flex-direction: column;
//     text-align: center;
//     padding: 5px;
//     font-size: 15px;
//     margin-bottom: 10rem;
//   }
// `;

// const BodySkilsContainerInlineBottomSassIcon = styled(motion.img)`
//   background-image: url(${sasslogo});
//   background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;
//   border: 3px solid black;
//   border-radius: 10px;
//   padding: 4rem;
//   background-color: #f5f5f5;
//   @media screen and (max-width: 600px) {
//     display: flex;
//     flex-direction: column;
//     padding: 1.3rem;
//   }
// `;

// const BodySkilsContainerInlineBottomReactIcon = styled(motion.img)`
//   background-image: url(${reactlogo});
//   background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;
//   border: 3px solid black;
//   border-radius: 10px;
//   padding: 4rem;
//   background-color: #f5f5f5;
//   @media screen and (max-width: 600px) {
//     display: flex;
//     flex-direction: column;
//     padding: 1.3rem;
//   }
// `;

// const BodySkilsContainerInlineBottomTypeScriptIcon = styled(motion.img)`
//   background: url(${typescriptlogo});
//   background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;
//   border: 3px solid black;
//   border-radius: 10px;
//   padding: 4rem;
//   background-color: #f5f5f5;
//   @media screen and (max-width: 600px) {
//     display: flex;
//     flex-direction: column;
//     padding: 1.3rem;
//   }
// `;

// const BodySkilsContainerInlineGitIcon = styled(motion.img)`
//   background: url(${gitlogo});
//   background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;
//   border: 3px solid black;
//   border-radius: 10px;
//   padding: 4rem;
//   background-color: #f5f5f5;
//   @media screen and (max-width: 600px) {
//     display: flex;
//     flex-direction: column;
//     padding: 1.3rem;
//   }
// `;

// const BodySkilsContainerInlineGithubIcon = styled(motion.img)`
//   background: url(${githublogo});
//   background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;
//   border: 3px solid black;
//   border-radius: 10px;
//   padding: 4rem;
//   background-color: #f5f5f5;
//   @media screen and (max-width: 600px) {
//     display: flex;
//     flex-direction: column;
//     padding: 1.3rem;
//   }
// `;

// const BodySkilsMenuContainerButtonBox = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
// `;

// const BodySkilsMenuContainerButtonInlineBox = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
// `;

// const BodySkilsMenuContainerButton = styled(motion.button)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 99px;
//   position: absolute;
//   width: 50px;
//   height: 50px;
//   z-index: 1;
//   background-color: black;
//   color: white;
//   border: none;
//   cursor: pointer;
//   font-size: 25px;
//   &:hover {
//     transform: scale(1.2);
//     transition-duration: 0.3s;
//   }
//   @media screen and (max-width: 600px) {
//     width: 35px;
//     height: 35px;
//     &:first-child {
//       font-size: 15px;
//     }
//   }
// `;

// const BodyContactContainerInlineBox = styled(motion.div)`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   overflow: hidden;
//   background-color: transparent;
// `;

// const BodyContactBigContainer = styled(motion.div)`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 100%;
//   padding: 50px;
//   background-color: transparent;
//   @media screen and (max-width: 600px) {
//     padding-top: 10px;
//     overflow: hidden;
//     scroll-behavior: none;
//   }
// `;

// const BodyContactInlineTitle = styled.span`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   font-size: 40px;
//   font-weight: bold;
//   font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
//   margin-bottom: 4rem;
//   margin-top: 2rem;
//   letter-spacing: 0.4em;
//   -webkit-box-reflect: below -15px -webkit-linear-gradient(
//       top,
//       rgba(0, 0, 0, 0),
//       rgba(0, 0, 0, 0) 10%,
//       rgba(0, 0, 0, 0.4)
//     );
//   line-height: normal;
//   background-color: white;
//   border-radius: 99px;
//   @media screen and (max-width: 600px) {
//     letter-spacing: 0.2em;
//   }
// `;

// const BodyContactBigInlineContainerBox = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   background-color: white;
//   border-radius: 10px;
//   align-items: center;
//   justify-content: space-around;
//   padding: 4rem 0;
//   @media screen and (max-width: 600px) {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     padding: 2rem 0;
//     margin-top: auto;
//     margin-bottom: auto;
//   }
// `;

// const BodyContactBigInlineTopDiv = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: space-evenly;
//   align-items: center;
//   font-weight: bold;
//   padding: 15px 0;
//   font-size: 45px;
//   div {
//     display: flex;
//     justify-content: center;
//     div {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       font-size: 18px;
//     }
//   }
//   @media screen and (max-width: 600px) {
//     padding: 0;
//     display: flex;
//     flex-direction: column;
//     div {
//       display: flex;
//       align-items: center;
//       width: 100%;
//       justify-content: space-between;
//       font-size: 20px;
//       div {
//         font-size: 15px;
//         display: flex;
//         flex-direction: column;
//       }
//     }
//   }
// `;

// const BodyContactBigInlineBottomDiv = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: space-evenly;
//   align-items: center;
//   font-weight: bold;
//   padding: 15px 0;
//   font-size: 45px;
//   div {
//     display: flex;
//     justify-content: center;
//     div {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       font-size: 18px;
//     }
//   }
//   @media screen and (max-width: 600px) {
//     padding: 0;
//     display: flex;
//     flex-direction: column;
//     div {
//       display: flex;
//       align-items: center;
//       width: 100%;
//       justify-content: space-between;
//       font-size: 20px;
//       div {
//         font-size: 15px;
//         display: flex;
//         flex-direction: column;
//       }
//     }
//   }
// `;

// const BodyContactSmallContainer = styled(motion.div)`
//   display: flex;
//   width: 100%;
//   height: 100%;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: transparent;
//   letter-spacing: 0.3rem;
//   @media screen and (max-width: 600px) {
//     letter-spacing: 0rem;
//   }
// `;

// const BodyContactSmallContainerInlineTitle = styled(motion.span)`
//   font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
//   background-color: white;
//   border-radius: 10px;
//   padding: 10px;
//   font-size: 22px;
//   margin-bottom: 5rem;
//   @media screen and (max-width: 600px) {
//     display: flex;
//     flex-direction: column;
//     text-align: center;
//     padding: 5px;
//     font-size: 15px;
//     margin-bottom: 10rem;
//   }
// `;

// const BodyContactContainerVariants = {
//   projectopenmenu: {
//     flex: 1,
//     opcity: 1,
//     transition: {
//       duration: 0.5,
//       type: "tween",
//     },
//   },
//   projectclosemenu: {
//     flex: 6,
//     opcity: 0,
//     transition: {
//       duration: 0.5,
//       type: "tween",
//     },
//   },
// };

// const BodyContactInlineContainerVariants = {
//   contactmenuopenbox: {
//     opacity: 1,
//     display: "flex",
//     transition: {
//       duration: 0.5,
//       type: "tween",
//       delay: 0.3,
//     },
//   },
//   contactmenuclosebox: {
//     opacity: 0,
//     display: "none",
//     transition: {
//       duration: 0.5,
//       type: "tween",
//       delay: 0.3,
//     },
//   },
// };

function Body() {
  return <>null</>;
}

export default Body;
