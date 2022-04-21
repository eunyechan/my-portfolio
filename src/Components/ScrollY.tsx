import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  memo,
  MouseEvent,
} from "react";
import styled from "styled-components";

const ScrollProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background-color: rgba(177, 172, 172, 1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

const Progress = styled.div`
  height: 100%;
  background-color: rgba(204, 248, 241, 0.849);
`;

const ScrollProgress = memo((): JSX.Element => {
  const [width, setWidth] = useState<number>(0);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const handleProgressMove = useCallback(
    (e: MouseEvent<HTMLDivElement>): void => {
      if (progressRef.current !== null) {
        const { scrollWidth } = progressRef.current;
        const { clientX } = e;

        const selectedPercent: number = (clientX / scrollWidth) * 100;
        setWidth(selectedPercent);

        const { scrollHeight, clientHeight } = document.body;
        const windowHeight: number = scrollHeight - clientHeight;

        const moveScrollPercent: number =
          (windowHeight * selectedPercent) / 100;

        window.scrollTo({
          top: moveScrollPercent,
          behavior: "smooth",
        });
      }
    },
    []
  );

  const handleScroll = useCallback((): void => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop === 0) {
      setWidth(0);
      return;
    }

    const windowHeight: number = scrollHeight - clientHeight;
    const currentPercent: number = scrollTop / windowHeight;

    setWidth(currentPercent * 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [handleScroll]);

  return (
    <ScrollProgressBar
      className="ScrollProgress"
      ref={progressRef}
      onClick={handleProgressMove}
    >
      <Progress
        className="ScrollProgress-Progress"
        style={{ width: width + "%" }}
      ></Progress>
    </ScrollProgressBar>
  );
});

export default ScrollProgress;
