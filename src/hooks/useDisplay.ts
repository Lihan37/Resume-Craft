import { useLayoutEffect, useState } from "react";

const useDisplay = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollY, setScroll] = useState(window.scrollY);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [windowWidth, scrollY];
};

export default useDisplay;
